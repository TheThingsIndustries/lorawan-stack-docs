# Lorawan Stack Documentation

The documentation site for The Things Stack is built with [Hugo](https://gohugo.io/documentation/).
All content is stored as Markdown files in `doc/content`.

Data for generated documentation like API and glossary is stored in `doc/data`.

## Development Environment Dependencies

The Things Stack Documentation development tooling uses [Go](https://golang.org/doc/install) and [Yarn](https://yarnpkg.com/en/docs/install).

- Follow [Go's installation guide](https://golang.org/doc/install) to install Go.
- Follow [Yarn's installation guide](https://yarnpkg.com/en/docs/install) to install Yarn.

In order to build the documentation site with the right theme, you need to run
`make deps` from time to time. This will install [Yarn](https://yarnpkg.com/) on Mac and Unix systems if it is not already installed.

## Running a Development Server

You can start a development server with live reloading by running
`make server`. This command will print the address of the server.

## Building the Documentation for Github Pages

The documentation site can be built for Github Pages by running `make build-public`. This will
output the site to `public`.

## Building the Documentation for Internal (Offline) Use

The documentation site can be built for internal (offline) use by running `make build` or `make build-internal`. This will
output the site to `internal`.

## Style Guidelines

Please respect the following guidelines for content in our documentation site. A copy and paste template for creating new documentation can be found [here](doc/content/example-template).

- Use the `{{< new-in-version "3.8.5" >}}` shortcode to tag documentation for features added in a particular version. For documentation that targets `master`, that's the next patch bump, e.g `3.8.x`. For documentation targeting `develop` that's the next minor bump, e.g `3.x.0`.
- The title of a doc page is already rendered by the build system as a h1, don't add an extra one.
- Use title case for headings.
- A documentation page starts with an introduction, and then the first heading. The first paragraph of the introduction is typically a summary of the page. Use a `<!--more-->` to indicate where the summary ends.
- Divide long documents into separate files, each with its own folder and `_index.md`.
- Use the `weight`tag in the [Front Matter](https://gohugo.io/content-management/front-matter/) to manually sort sections if necessary. If not, they will be sorted alphabetically.
- Since the title is a `h1`, everything in the content is at least `h2` (`##`).
- Paragraphs typically consist of at least two sentences.
- Use an empty line between all blocks (headings, paragraphs, lists, ...).
- Prefer text over bullet lists or enumerations. For bullets, use `-`, for enumerations `1.` etc.
- Explicitly call this product "The Things Stack". Not "the stack" etc. You can use the shortcode `{{% tts %}}` which will expand to "The Things Stack".
- Avoid shortening, i.e. write "it is" instead of "it's".
- Write guides as a goal-oriented journey.
- Unless already clear from context, use a clearer term than "user", especially if there are multiple kinds (network operator, gateway owner, application developer, ...).
- The user does not have a gender (so use they/them/their).
- Taking screenshots is done as follows:
  - In Chrome: activate the **Developer Tools** and toggle the **Device Toolbar**. In the **Device Toolbar**, select **Laptop with HiDPI screen** (add it if not already there), and click **Capture Screenshot** in the menu on the right.
  - In Firefox: enter **Responsive Design Mode**. In the **Device Toolbar**, select "Laptop with HiDPI screen" (add it if not already there) and **Take a screenshot of the viewport**.
- Use `**Strong**` when referring to buttons in the Console.
- Use `>Note:`to add a note.
- Use fenced code blocks with a language:
  - `bash` for lists of environment variables: `SOME_ENV="value"`.
  - `bash` for CLI examples. Prefix commands with `$ `. Wrap strings with double quotes `""` (except when working with JSON, which already uses double quotes).
  - Wrap large CLI output with `<details><summary>Show CLI output</summary> ... output here ... </details>`.
  - `yaml` (not `yml`) for YAML. Wrap strings with single quotes `''` (because of frequent Go templates that use double quotes).
