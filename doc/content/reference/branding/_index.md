---
title: 'Web UI Branding'
description: ''
---

This reference gives details on how to customize the branding of the login pages and the Console.

<!--more-->

## Cloud Branding

[{{% tts %}} Cloud]({{< ref "/the-things-stack/host/cloud" >}}) users can use a custom branding in {{% tts %}} Console. Branding customization is available for each {{% tts %}} Cloud tenant.

See below for what's available to customize and what files are necessary. Users need to host these files on a CDN (e.g. an S3 bucket) and provide a link to it as shown in the [Tenant Settings guide]({{< ref "/the-things-stack/concepts/interact/console/tenant-settings#branding" >}}).

## Title, Subtitle and Description

The title, subtitle and description of the login pages and the Console can be changed using configuration options. For details, see the [Identity Server configuration reference]({{< ref "/reference/configuration/identity-server#oauth-ui-options" >}}) and the [Console configuration reference]({{< ref "/reference/configuration/console" >}}).

## Logos

Logos of the web UI can be rebranded by pointing the **Branding base URL** in the Console (as described in [Tenant Settings]({{< ref "/the-things-stack/concepts/interact/console/tenant-settings#branding" >}})) to a location that contains the following files:

| **Filename**           | **Size** | **Purpose** |
| ---------------------- | -------- | ----------- |
| console-favicon.svg    | vector   | The SVG logo for the console that is shown in browser tabs and bookmarks |
| console-favicon.png    | multiple | The fallback favicon logo for the console in `PNG` format; recommended size 32x32 |
| console-favicon.ico    | multiple | The fallback favicon logo for the console in `ICO` format; recommended size 32x32 |
| console-og-image.png   | 1200x600 | The logo for the console that is shown when sharing links on social media |
| console-touch-icon.png | 400x400  | The logo for the console that is shown mobile devices |
| claim-favicon.svg {{< distributions "Cloud" "Enterprise" >}}     | vector   | The SVG logo for the device claiming frontend that is shown in browser tabs and bookmarks |
| claim-favicon.png {{< distributions "Cloud" "Enterprise" >}}     | multiple | The fallback favicon logo for the device claiming frontend in `PNG` format; recommended size 32x32 |
| claim-favicon.ico {{< distributions "Cloud" "Enterprise" >}}     | multiple | The fallback favicon logo for the device claiming frontend in `ICO` format; recommended size 32x32 |
| claim-og-image.png {{< distributions "Cloud" "Enterprise" >}}    | 1200x600 | The logo for the device claiming frontend that is shown when sharing links on social media |
| claim-touch-icon.png {{< distributions "Cloud" "Enterprise" >}}  | 400x400  | The logo for the device claiming frontend that is shown mobile devices |
| logo.svg               | vector   | The logo for the console that is shown in the menu bar of the console |
| oauth-favicon.svg      | vector   | The SVG logo for the login pages that is shown in browser tabs and bookmarks |
| oauth-favicon.png      | multiple | The fallback favicon logo for the login pages in `PNG` format; recommended size 32x32 |
| oauth-favicon.ico      | multiple | The fallback favicon logo for the login pages in `ICO` format; recommended size 32x32 |
| oauth-og-image.png     | 1200x600 | The logo for the login pages that is shown when sharing links on social media |
| oauth-touch-icon.png   | 400x400  | The logo for the login pages that is shown mobile devices |

If the **Branding base URL** option is set, the `logo.svg` is used to display a secondary logo next to the logo of {{% tts %}} for LoRaWAN. It is recommended to use a logo with a wide (e.g. 5:1) or square (1:1) aspect ratio. Tall logos (e.g. 1:5; height larger than width) will be displayed very small, due to the limited height of the header bar.

If you have your favicon as a PNG, use ImageMagick to convert it to ICO:
 
```bash
convert console-favicon.png \
    -define icon:auto-resize=64,48,32,16 \
    console-favicon.ico
```

For the additional info about configuration options required to set a custom branding, see the [Identity Server configuration reference]({{< ref "/reference/configuration/identity-server#oauth-ui-options" >}}) and the [Console configuration reference]({{< ref "/reference/configuration/console" >}}).

## Deployment Information and Disclaimers

It is possible to highlight some deployment information and disclaimers in the header of the web UIs. E.g. you can highlight an SLA that applies or a support tier that is connected with the deployment. Please see the respective sections in the [Identity Server configuration reference]({{< ref "/reference/configuration/identity-server#oauth-ui-options" >}}) and [Console configuration reference]({{< ref "/reference/configuration/console#deployment-information-and-disclaimers" >}}).
