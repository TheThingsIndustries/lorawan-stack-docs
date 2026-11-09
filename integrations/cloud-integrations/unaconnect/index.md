# UnaConnect

> UnaConnect is a middleware cloud platform for IoT device management from UnaBiz. It allows onboarding large fleets of devices, collecting and processing their …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/unaconnect/


[UnaConnect](https://docs.unaconnect.io/) is a middleware cloud platform for IoT device management from [UnaBiz](https://www.unabiz.com/). It allows onboarding large fleets of devices, collecting and processing their data, and integrating with various end platforms in a secure and efficient manner.

This guide will help you set up an integration between The Things Stack and UnaConnect.

## Prerequisites

1. A [user account on UnaConnect](https://docs.unaconnect.io/docs/uc-docs/Getting%20Started#before-you-start). 

## UnaBiz setup

Before creating the integration on The Things Stack, you first need to [add your device on UnaConnect](https://docs.unaconnect.io/docs/uc-docs/Getting%20Started/adding-device).

## Configure The Things Stack

Now you are ready to instantiate the UnaConnect [Webhook template](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/). This will allow you to forward data from your The Things Stack device to the UnaConnect device you created in the previous step.

On The Things Stack, navigate to **Integrations &#8594; Webhooks** and choose **UnaConnect** Webhook template.

Give a **Webhook ID** to your integration. Enter the **UnaConnect server region** (`aps-1` for Asia-Pacific, `euw-1` for Europe).

![UnaConnect integration on TTS](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/unaconnect/unaconnect-webhook-template.png)


Congrats, your integration is ready! Navigate to your device on UnaConnect and observe the incoming data from your The Things Stack device.

Visit [UnaConnect](https://docs.unaconnect.io/docs/uc-docs/Getting%20Started/Setting%20up%20the%20Networks/tti) for more info.
