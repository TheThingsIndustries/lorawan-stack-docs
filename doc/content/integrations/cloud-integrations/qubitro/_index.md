---
title: "Qubitro"
description: ""
weight: 
aliases: ["/integrations/cloud-integrations/qubitro/qubitro-setup", "/integrations/cloud-integrations/qubitro/tts-setup", "/integrations/cloud-integrations/qubitro/monitor-data"]
---

[Qubitro](https://www.qubitro.com/) is a device data platform (DDP) built for a hyper-connected world and used by companies of all sizes — from visionary startups to large enterprises across 40+ countries.

Qubitro has no-code source integration support for {{% tts %}}.

<!--more-->

## Prerequisites

1. A [user account on Qubitro](https://portal.qubitro.com/signup).

## Creating the integration

### Fetch credentials from Qubitro

To get the required credentials, **choose a project** from the list, then, click on the `New source` button and click on **{{% tts %}}** in the list.

Keep this page open and navigate to **{{% tts %}} Console** to configure the webhook integration.

{{< figure src="qubitro-copy-credentials.png" alt="Integration credentials" >}}

### Setup {{% tts %}}

Choose the application on {{% tts %}} Console then click on **Webhooks** from the left navigation menu. Next, click the **Add webhook** button located at the top right of the page, and choose **Qubitro** from the list.

Copy and paste the values of credentials from the first step on Qubitro Portal. You can also copy values individually from the **Projects Settings** and **Credentials** tab.

Click on the **Create Qubitro webhook** button and go back to the Qubitro Portal.

An example configuration is shown on the image below.

{{< figure src="qubitro-configuration.png" alt="Webhook configuration" >}}

### Verify integration

Click on the **Go to project** button and then the **Refresh** button to verify that devices are listed successfully.

> **Note:** Once the integration is configured, all devices connected to the same project on {{% tts %}} will be synchronized with Qubitro automatically.

{{< figure src="qubitro-device-list.png" alt="Device list" >}}

### Configure the decoder and verify the data

If you want to process incoming data, you need to configure decoder functions. You can create [custom decoder function](https://docs.qubitro.com/platform/functions/decoder/custom) or choose from available [device templates](https://docs.qubitro.com/platform/functions/decoder/template) on Qubitro Portal.

> **Note:** If the decoder is enabled on {{% tts %}}, Qubitro will automatically store incoming JSON data.

You can create a decoder function by navigating to the **Functions** tab located on the device page.

{{< figure src="qubitro-decoder.png" alt="Decoder list" >}}

Then, navigate to the device and click on the **Data** tab to verify the incoming data.

{{< figure src="qubitro-data-table.png" alt="Data table" >}}

### Customize device information (optional) 

You can customize device information, such as avatar, name, brand, and model, by navigating to the device settings.

{{< figure src="qubitro-device-settings.png" alt="Device settings" >}}

An example device overview is shown below.

{{< figure src="qubitro-device-overview.png" alt="Device overview" >}}

## Work with Device Data

Click on the **Dashboads** tab to create dashboards.

{{< figure src="qubitro-create-widget.png" alt="Create widget" >}}

You can also discover other features such as **Rule Functions** on Qubitro Portal.

{{< figure src="qubitro-rule-list.png" alt="Rule list" >}}

For more cool features, see the [official Qubitro documentation](https://docs.qubitro.com/).