# The Things Stack Documentation

The documentation site for The Things Stack is built with [Hugo](https://gohugo.io/documentation/).
All content is stored as Markdown files in `doc/content`.

Data for generated documentation like API and glossary is stored in `doc/data`.

## Development Environment Dependencies

The Things Stack Documentation development tooling uses [Go](https://golang.org/doc/install) and [Yarn](https://yarnpkg.com/en/docs/install).

- Follow [Go's installation guide](https://golang.org/doc/install) to install Go.
- Follow [Yarn's installation guide](https://yarnpkg.com/en/docs/install) to install Yarn.

In order to build the documentation site with the right theme, you need to run
`make deps` from time to time. This will install [Yarn](https://yarnpkg.com/) on Mac and Unix systems if it is not already installed.

## Getting Started

Install dependencies and tooling to help you comply with our git style guidelines by running

```
$ make init
```

## Running a Development Server

You can start a development server with live reloading by running
`make` or `make server`. This command will print the address of the server.

### Search

Search runs on [Pagefind](https://pagefind.app): the index is generated from the built site
(`make build.public` does this after Hugo) and is served as static files, so there is no
external search service. The development server doesn't build the index; run
`make search.dev` once (and again after larger content changes) to try search locally.
This needs the Node.js dependencies (`make js.deps`).

Search events are pushed to the Google Tag Manager `dataLayer` as `docs_search`,
`docs_search_no_results` and `docs_search_click`. The 404 page pushes `docs_404`
(with the broken path and referrer), and the "Copy page" menu pushes `docs_page_action`.

### Versions for AI tools

The build also writes versions of the docs for AI assistants and LLM tools
([llms.txt](https://llmstxt.org)):

- `/docs/llms.txt`: an index of the guides with short descriptions
- `/docs/llms-full.txt`: the full text of all guides (no CLI/API reference or release notes)
- `index.md` next to every page: that page as Markdown

Shortcodes that output HTML need a plain-text version for these formats
(`<name>.markdown.md` and `<name>.llmsfull.txt` in the theme's `shortcodes`
folder, both calling a partial in `partials/llms/plain`). Without one,
the HTML version is used.

## Configuration

Hugo accepts configuration parameters specified in [config](doc/config), most notably for baseURL, search, and feedback widget. Parameters can be specified as environment variables, e.g `params.search.enabled` becomes `HUGO_PARAMS_SEARCH_ENABLED`.

## Building the Documentation for Github Pages

The documentation site can be built for Github Pages by running `make build.public`. This will
output the site to `public`.

## Building the Documentation for Internal (Offline) Use

The documentation site can be built for internal (offline) use by running `make build.internal`. This will
output the site to `internal`.

## Contributing

Please see the style, branch naming, and commit guidelines in [CONTRIBUTING](CONTRIBUTING.md)

## Creating New Documentation

Run `make new <path>` to create a new documentation section from the [template](doc/archetypes/section-bundle/_index.md) at `path`. For example, `make new getting-started/hello` will create a section in `getting-started/hello`.

## Releasing

See the [Release template](.github/ISSUE_TEMPLATE/release.md)
