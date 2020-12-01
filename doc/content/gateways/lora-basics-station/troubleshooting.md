---
title: "Troubleshooting LoRa Basics™ Station"
description: ""
---

This section contains help for common problems you may encounter when using {{% lbs %}} to connect to {{% tts %}}.

<!--more-->

## What is my server address?

This is the address you use to access {{% tts %}}. If you followed the [Getting Started guide]({{< ref "/getting-started" >}}) this is the same as what you use instead of `thethings.example.com`.

CUPS uses the URI: `https://<server-address>:443`

LNS uses the URI: `wss://<server-address>:8887`

## How do I find the CA Trust?

See the [Root Certificates Reference]({{< ref "/reference/root-certificates" >}}).

## How do I use an API Key?

Use the following commands to generate a `api.key` file which is correctly formatted ({{% lbs %}} requires that `.key` files end with a CRLF character).

```bash
$ export API_KEY="your-api-key"
$ echo "Authorization: Bearer $API_KEY" | perl -p -e 's/\r\n|\n|\r/\r\n/g'  > api.key
```

Upload or copy the contents of this file in to your gateway as the **Gateway Key**.

See the [{{% lbs %}} Authorization documentation](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/?url=authmodes.html) or your manufacturers guidelines for additional information.

## Is an API Key required?

CUPS requires an API key for your gateway with the following rights:

- View gateway information
- Edit basic gateway settings
- Retrieve secrets associated with a gateway

LNS requires an API Key with the following rights:

- Link as Gateway to a Gateway Server for traffic exchange, i.e. write uplink and read downlink

## My gateway won't connect

Check your manufacturer's documentation to access the gateway logs on your gateway, which will help to diagnose the issue. Common issues include:

- Incorrect certificates. See the [Root Certificates Reference]({{< ref "/reference/root-certificates" >}}).
- Incorrect API key permissions. See [above](#is-an-api-key-required).
- Both CUPS and LNS are configured, and one is configured incorrectly. There is no need to configure both, as CUPS will automatically configure LNS. Follow the instructions for [configuring CUPS]({{< relref "cups" >}}).
