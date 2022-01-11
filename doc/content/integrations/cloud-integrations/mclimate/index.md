---
title: "MClimate"
description: ""
weight:
---

[MClimate](https://mclimate.eu/) is an IoT company which designs and develops smart home and automation solutions with a focus on sustainability, comfort, security and energy savings. This IoT platform can be used with a wide range of MClimate IoT devices that turn home and office appliances into smart ones, and help you control your electricity usage. 

<!--more-->

See [MClimate LoRaWAN Devices documentation page](https://docs.mclimate.eu/mclimate-lorawan-devices/) for detailed documentation on using MClimate with LoRaWAN.

## Prerequisites

1. You need to own an MClimate device, such as [MClimate Vicki LoRaWAN](https://docs.mclimate.eu/mclimate-lorawan-devices/devices/mclimate-vicki-lorawan), and have it connected to {{% tts %}}.
2. [MClimate app](https://mclimate.eu/pages/app) installed with a user account.

The [MClimate devices documentation](https://docs.mclimate.eu/mclimate-lorawan-devices#devices) contains extended manuals and datasheets for operating these devices, but also details on connecting each device to {{% tts %}}, uplink decoder and downlink encoder functions, etc.

## Configure {{% tts %}}

To complete the Webhook integration between {{% tts %}} and your MClimate app, you can use the **MClimate** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}). Navigate to **Integrations &#8594; Webhooks** and choose the MClimate template.

To integrate, you only need to fill in the **Webhook ID** with an arbitrary value.

{{< figure src="mclimate-template.png" alt="MClimate Webhook template" >}}

To see the values of all parameters of the MClimate integration, click on the integration after you created it with the Webhook template.

You can now enjoy your smart surrounding at a lower energy cost!

For more details on setting up a Webhook integration with MClimate using {{% tts %}} Custom webhook, see this [link](https://docs.mclimate.eu/mclimate-lorawan-devices/integrations/the-things-industries).