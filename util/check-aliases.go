// Copyright © 2024 The Things Industries B.V.

package main

import (
	"encoding/xml"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"time"
)

// URL is a sitemap URL.
type URL struct {
	Loc string `xml:"loc"`
}

// SiteMap is a sitemap in XML format.
type SiteMap struct {
	XMLName xml.Name `xml:"urlset"`
	URLs    []URL    `xml:"url"`
}

type pageCount struct {
	original  int
	unchanged int
	aliased   int
	missing   int
}

func main() {
	docsSite := os.Getenv("DOCS_SITE")
	if docsSite == "" {
		docsSite = "https://www.thethingsindustries.com/docs"
	}

	devSite := os.Getenv("DEV_HOST")
	if devSite == "" {
		devSite = "http://localhost:1313"
	}

	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	// Parse sitemap.
	req, err := http.NewRequest("GET", docsSite+"/sitemap.xml", nil)
	if err != nil {
		log.Fatalf("Could not create request: %s", err)
	}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Could not send request: %s", err)
	}
	defer resp.Body.Close()

	raw, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Could not read response body: %s", err)
	}

	sitemap := SiteMap{}
	err = xml.Unmarshal(raw, &sitemap)
	if err != nil {
		log.Fatalf("Could not unmarshal sitemap.xml: %s", err)
	}
	pc := pageCount{
		original: len(sitemap.URLs),
	}

	fmt.Printf("Check %d URLs for changes\n", len(sitemap.URLs))

	missing := []string{}
	for _, url := range sitemap.URLs {
		// Check if the URL exists.
		req, err := http.NewRequest("GET", strings.Replace(url.Loc, docsSite, devSite, 1), nil)
		if err != nil {
			log.Fatalf("Could not create request: %s", err)
		}
		resp, err := client.Do(req)
		if err != nil {
			log.Fatalf("Could not send request: %s", err)
		}
		defer resp.Body.Close()

		page := strings.TrimPrefix(url.Loc, docsSite)
		switch resp.StatusCode {
		case http.StatusOK:
			pc.unchanged++
		case http.StatusNotFound:
			pc.missing++
			missing = append(missing, page)
		case http.StatusMovedPermanently:
			pc.aliased++
			location := resp.Header.Get("Location")
			if location != "" {
				fmt.Printf("%s aliased to %s\n", page, location)
			} else {
				fmt.Printf("%s aliased to unknown location\n", page)
			}
		default:
			log.Fatalf("URL %s returned status code %d", url.Loc, resp.StatusCode)
		}
	}
	fmt.Printf("Original: %d, Unchanged: %d, Aliased: %d, Missing: %d\n", pc.original, pc.unchanged, pc.aliased, pc.missing)
	if len(missing) > 0 {
		fmt.Printf("Missing pages:\n")
		for _, page := range missing {
			fmt.Printf("- %s\n", page)
		}
		os.Exit(1)
	}
}
