---
title: "{{ replace .Name "-" " " | title }}"
description: ""
weight: 
distributions: {{ jsonify (index site.Data "distributions") }}
---

Guidelines here are taken from [CONTRIBUTING.md](CONTRIBUTING.md) in this repository, which you should read. This template exists as a copy and paste starting point for new documentation. Remove the `draft`key in the Front Matter to generate the page (otherwise hugo will skip it).

A documentation page starts with an introduction, and then the first heading. The first paragraph of the introduction is typically a summary of the page. Use a <!--more--> to indicate where the summary ends.

<!--more-->

## Requirements

Use a requirements subheading to list requirements/prerequisites.

1. Requirement 1
2. Requirement 2

## Links Within Docs

Use the `ref` shortcode. For example, [this is a link to the component reference]({{< ref "reference/components" >}}).

## Distributions

To mark a document as applicable to only one or more distributions, there are three options:

1. Add an array of titles to a `distributions` front matter element. This will mark the page in the parent's table of contents, and will produce a notification on the page
2. Use the {{< distributions "Enterprise" "Cloud" >}} shortcode to produce a notification on the page
3. Use the {{< distributions-inline "Enterprise" >}} shortcode to produce an inline notification. This is especially useful for tables and lists

Available distributions are {{< distributions-list >}} and are stored in `data/distributions.yml`.

## New Features {{< new-in-version "3.8.5">}}

Use the `{{< new-in-version "3.8.5" >}}` shortcode to tag documentation for features added in a particular version. For documentation that targets `v3.n`, that's the next patch bump, e.g `3.8.x`. For documentation targeting `v3.n+1` that's the next minor bump, e.g `3.9.0`. Check `tools/bin/mage version:current` for the current version.

#### This Is A New Feature Heading {{< new-in-version "3.8.5">}}

This is new feature text {{< new-in-version "3.8.5">}}

- This is a new feature bullet {{< new-in-version "3.8.5">}}

## Sections

When possible, divide long documents into separate files, each with its own folder and `_index.md`. Use the `weight` tag in the [Front Matter](https://gohugo.io/content-management/front-matter/) to manually sort sections if necessary. If not, they will be sorted alphabetically.

## Subheadings

Subheadings use Title Casing. Since the title is a h1, everything in the content is at least h2 (##). Use subheadings to break up sections and provide a high level overview of steps the user should follow.

## Notes

Use the `>` markdown code, and include the word note to distinguish it from a code block.

>Note: if you need help with any CLI command, use the `--help` flag to get a list of subcommands, flags and their description and aliases.

## Images

Taking screenshots is done as follows:
- In Chrome: activate the Developer Tools and toggle the Device Toolbar. In the Device Toolbar, select Laptop with HiDPI screen (add it if not already there), and click Capture Screenshot in the menu on the right.
- In Firefox: enter Responsive Design Mode. In the Device Toolbar, select "Laptop with HiDPI screen" (add it if not already there) and Take a screenshot of the viewport.

Screenshots should be inserted using the figure shortcode:

{{< figure src="screenshot.png" alt="I am a screenshot" >}}

To render images without styling, use standard markdown syntax:

![I am a picture of Wienke](wienke.jpeg)

## Console and CLI Tabs

To separate instructions for the console and CLI, use the `tabs/container` shortcode, with nested `tabs/tab "Console"` and `tabs/tab "CLI"` shortcodes, to produce a tabbed view.

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}
## These are console instructions
{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}
These are **cli**
{{< /tabs/tab >}}

{{< /tabs/container >}}

## Shortcodes

Thou shalt always use the shortcode {{% tts %}} when referring to this product.

For documentation that requires the Command Line Interface, use the {{% cli-only %}} shortcode.

## Syntax Highlighting

See the following examples for types of syntax highlighting.

### Console Button

I am a **Button** in the console.

### Large Command Line Example

<details><summary>Show CLI output</summary>
```bash
command_line_output_line_1
command_line_output_line_2
```
</details>

### Normal Command Line Example

```bash
$ command_prefixed_by_dollar_sign
command_line_output
```

### Environment Variable

```bash
SOME_ENV="value"
```

### YAML

```yaml
# file: yaml-file.yml
services:
  stack:
    image: 'thethingsnetwork/lorawan-stack:<the tag>'
```

### Line Breaks

In long command line examples or other code snippets, use the following guidelines:

- If a line is longer than 80 columns, try to find a "natural" break
- If a line is longer than 120 columns, insert a line break
- In very special cases, longer lines are tolerated

For example:

```bash
$ curl --location --header 'Authorization: Bearer NNSXS.XXXXXXXXX' --header 'Accept: application/json' \
    --header 'Content-Type: application/json' --request POST 'https://thethings.example.com/api/v3/events' \
    --data-raw '{
    "identifiers":[{
        "device_ids":{
            "device_id":"dev1",
            "application_ids":{"application_id":"app1"}
        }
    }]
}'
```

### Referencing Files

It is also possible to host source code (or any text file) and display it using shortcodes. For example:

{{< highlight yaml "linenos=table,linenostart=5" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=5 to=14 >}}
{{< /highlight >}}
