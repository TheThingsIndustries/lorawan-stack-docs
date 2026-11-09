# Qubitro

> Qubitro is a device data platform (DDP) built for a hyper-connected world and used by companies of all sizes — from visionary startups to large enterprises …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/


[Qubitro](https://www.qubitro.com/) is a device data platform (DDP) built for a hyper-connected world and used by companies of all sizes — from visionary startups to large enterprises across 40+ countries.

Qubitro has no-code source integration support for The Things Stack.

## Prerequisites

1. A [user account on Qubitro](https://portal.qubitro.com/signup).

## Creating the integration

### Fetch credentials from Qubitro

To get the required credentials, **choose a project** from the list, then, click on the `New source` button and click on **The Things Stack** in the list.

Keep this page open and navigate to **The Things Stack Console** to configure the webhook integration.

![Integration credentials](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-copy-credentials.png)


### Setup The Things Stack

Choose the application on The Things Stack Console then click on **Webhooks** from the left navigation menu. Next, click the **Add webhook** button located at the top right of the page, and choose **Qubitro** from the list.

Copy and paste the values of credentials from the first step on Qubitro Portal. You can also copy values individually from the **Projects Settings** and **Credentials** tab.

Click on the **Create Qubitro webhook** button and go back to the Qubitro Portal.

An example configuration is shown on the image below.

![Webhook configuration](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-configuration.png)


### Verify integration

Click on the **Go to project** button and then the **Refresh** button to verify that devices are listed successfully.

> **Note:** Once the integration is configured, all devices connected to the same project on The Things Stack will be synchronized with Qubitro automatically.

![Device list](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-device-list.png)


### Configure the decoder and verify the data

If you want to process incoming data, you need to configure decoder functions. You can create [custom decoder function](https://docs.qubitro.com/platform/functions/decoder/custom) or choose from available [device templates](https://docs.qubitro.com/platform/functions/decoder/template) on Qubitro Portal.

> **Note:** If the decoder is enabled on The Things Stack, Qubitro will automatically store incoming JSON data.

You can create a decoder function by navigating to the **Functions** tab located on the device page.

![Decoder list](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-decoder.png)


Then, navigate to the device and click on the **Data** tab to verify the incoming data.

![Data table](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-data-table.png)


### Customize device information (optional) 

You can customize device information, such as avatar, name, brand, and model, by navigating to the device settings.

![Device settings](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-device-settings.png)


An example device overview is shown below.

![Device overview](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-device-overview.png)


## Work with Device Data

Click on the **Dashboads** tab to create dashboards.

![Create widget](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-create-widget.png)


You can also discover other features such as **Rule Functions** on Qubitro Portal.

![Rule list](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/qubitro/qubitro-rule-list.png)


For more cool features, see the [official Qubitro documentation](https://docs.qubitro.com/).
