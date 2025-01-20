package main

import (
	"bufio"
	"encoding/csv"
	"os"
	"path/filepath"
	"strings"
)

func parseFrontMatter(filePath string) (map[string]string, error) {
	frontMatter := make(map[string]string)
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	readingFrontMatter := false

	for scanner.Scan() {
		line := scanner.Text()
		if line == "---" {
			if readingFrontMatter {
				break
			} else {
				readingFrontMatter = true
				continue
			}
		}
		if readingFrontMatter {
			parts := strings.SplitN(line, ":", 2)
			if len(parts) == 2 {
				key := strings.TrimSpace(parts[0])
				value := strings.Trim(strings.TrimSpace(parts[1]), "\"[]")
				frontMatter[key] = value
			}
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return frontMatter, nil
}

func hasRequiredFields(frontMatter map[string]string, requiredFields []string) bool {
	for _, field := range requiredFields {
		if _, ok := frontMatter[field]; !ok {
			return false
		}
	}
	return true
}

func frontMatterToCSV(rootDirectory, csvPath, repoBaseURL string) error {
	csvFile, err := os.Create(csvPath)
	if err != nil {
		return err
	}
	defer csvFile.Close()

	writer := csv.NewWriter(csvFile)
	defer writer.Flush()

	headers := []string{"title", "vendor", "vendor_page", "description", "ip_rating", "backhaul", "image_url"}
	if err := writer.Write(headers); err != nil {
		return err
	}

	requiredFields := []string{"title", "vendor", "description", "image"}

	err = filepath.Walk(rootDirectory, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() || filepath.Base(path) != "_index.md" {
			return nil
		}

		frontMatter, err := parseFrontMatter(path)
		if err != nil {
			return err
		}

		if hasRequiredFields(frontMatter, requiredFields) {
			imageRelativePath := frontMatter["image"]
			imagePath := filepath.Join(filepath.Dir(path), imageRelativePath)
			relPath, err := filepath.Rel(rootDirectory, imagePath)
			if err != nil {
				return err
			}
			imageURL := repoBaseURL + "/" + strings.ReplaceAll(relPath, "\\", "/")

			row := make([]string, len(headers))
			for i, header := range headers[:len(headers)-1] { // Exclude image_url from headers for mapping
				row[i] = frontMatter[header]
			}
			row[len(headers)-1] = imageURL // Add image_url at the end
			if err := writer.Write(row); err != nil {
				return err
			}
		}

		return nil
	})

	if err != nil {
		return err
	}

	return nil
}

func main() {
	rootDirectoryPath := "doc/content/hardware/gateways/models"
	csvPath := "gateways.csv"
	repoBaseURL := "https://raw.githubusercontent.com/TheThingsIndustries/lorawan-stack-docs/master/doc/content/gateways/models"
	if err := frontMatterToCSV(rootDirectoryPath, csvPath, repoBaseURL); err != nil {
		panic(err)
	}
}
