---
title: "Device Claiming Server Options"
description: ""
---

## Device Claiming Server Mount

The Device Claiming Server can be served under any arbitrary path on your server

- `dcs.mount`: Path on the server where the Device Claiming Server will be served

## OAuth Options

The Device Claiming app uses the [OAuth 2.0 authorization flow](https://en.wikipedia.org/wiki/OAuth#OAuth_2.0_2) to authorize actions in the backend. You can customize the authorization parameters if necessary:

- `dcs.oauth.authorize-url`: The OAuth Authorize URL
- `dcs.oauth.client-id`: The OAuth client ID
- `dcs.oauth.client-secret`: The OAuth client secret
- `dcs.oauth.token-url`: The OAuth Token Exchange URL
- `dcs.oauth.logout-url`: The logout URL of the OAuth server used to perform client initiated logouts

## Frontend Setup

You can change various values that will be passed to the JavaScript logic and HTML Head tags of the Web UI:

### Component Configuration

The Device Claiming Server needs to know how the individual {{% tts %}} components are configured, so it can execute API calls correctly. Likewise, disabled components will cause possible respective options and menus in the Device Claiming Server frontend to be disabled.

- `dcs.ui.as.base-url`: Base URL to the HTTP API
- `dcs.ui.as.enabled`: Enable Application Server related functionality in the Device Claiming Server
- `dcs.ui.is.base-url`: Base URL to the HTTP API
- `dcs.ui.is.enabled`: Enable Identity Server related functionality in the Device Claiming Server
- `dcs.ui.dcs.base-url`: Base URL to the HTTP API
- `dcs.ui.dcs.enabled`: Enable Device Claiming Server related functionality in the Device Claiming Server
- `dcs.ui.ns.base-url`: Base URL to the HTTP API
- `dcs.ui.ns.enabled`: Enable Network Server related functionality in the Device Claiming Server

### File Includes

You can control which CSS and JavaScript files are included into the rendered HTML of the Device Claiming Server. Note that these files must be present in the `/public` folder during runtime. 

- `dcs.ui.js-file`: The names of the JavaScript file
- `dcs.ui.css-file`: The names of the CSS files

### Assets and Custom Branding

You can control the url of the assets folder that the Device Claiming Server frontend will use, e.g. if you plan on using a CDN to serve your assets. The branding base url will enable custom branding for logos, favicons and OpenGraph images. See the [custom branding guide]({{< ref "/reference/branding" >}}) for detailed descriptions on this subject.

- `dcs.ui.assets-base-url`: The base URL to the page assets
- `dcs.ui.branding-base-url`: The base URL to the branding assets
- `dcs.ui.branding-cluster-id`: The cluster ID to show below the logo
- `dcs.ui.branding-text`: The branding text to show below the logo
- `dcs.ui.icon-prefix`: The prefix to put before the page icons (favicon.ico, touch-icon.png, og-image.png)
- `dcs.ui.canonical-url`: The page canonical URL
- `dcs.ui.descriptions`: The page description
- `dcs.ui.language`: The page language
- `dcs.ui.site-name`: The site name
- `dcs.ui.sub-title`: The page sub-title
- `dcs.ui.support-link`: The URI that the support button will point to
- `dcs.ui.documentation-base-url`: The base URL for generating documentation links
- `dcs.ui.theme-color`: The page theme color
- `dcs.ui.title`: The page title
