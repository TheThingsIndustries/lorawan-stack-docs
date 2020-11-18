---
title: "The Things Stack Setup"
description: ""
weight: 1
---

This section shows you to configure the uplink payload formatter on {{% tts %}} before creating an integration setup on ThingsBoard.

<!--more-->

>Learn to create a [payload formatter]({{< ref "/integrations/payload-formatters" >}}) in {{% tts %}} Console or with the CLI.

Define a [Javascript]({{< ref "/integrations/payload-formatters/javascript" >}}) payload formatter and take the following code as an example of the formatter parameter:

```js
function decodeUplink(input) {
  return {
    data: {
      temperature: input.bytes[0]
    }
  };
}
```
>**Note:** The payload formatter shown above extracts the first byte of your payload and sets it as a temperature value, but `data` object's contents can vary depending on the telemetry type your device is sending.

Also, note your credentials available under **MQTT** submenu of the **Integrations** menu on the left, because you will need them for further steps.
