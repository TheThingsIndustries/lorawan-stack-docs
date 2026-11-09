# Losant IoT Platform

> Losant’s Enterprise IoT Platform provides the complete edge and cloud software foundation to build and scale compelling IoT applications for your customers. The …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/losant/


[Losant’s Enterprise IoT Platform](https://www.losant.com/) provides the complete edge and cloud software foundation to build and scale compelling IoT applications for your customers.

The Losant platform consists of 5 main components to help build an IoT solution and get it to market quickly. These 5 components are Edge Compute, Devices and Data Sources, Data Visualizations which includes Jupyter Notebooks, a Visual Low-Code/No-Code Workflow Engine, and End User Experiences.

![Losant Enterprise IoT Platform](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/losant/losant-platform-expanded-whiteBG.png)


## Requirements

1. If you do not have a Losant account, please create a free [Losant Sandbox account](https://www.losant.com/iot-platform/sandbox).
2. You can also view a complete Losant How-To Guide on [How To Integrate The Things Stack with Losant](https://docs.losant.com/guides/how-to-integrate-with-the-things-stack/), which will walk you through the below steps in more detail.

## Losant Setup

[Sign in](https://accounts.losant.com/signin) to the Losant Platform.

Navigate to your Losant application. If you do not have an application, you can [create a new application](https://docs.losant.com/applications/overview/) by starting from a blank application or one of [Losant’s Application Templates](https://docs.losant.com/templates/overview/), like [The Things Network Application Template](https://docs.losant.com/templates/the-things-network/).

Click on `Webhooks` and then `Add Webhook`.
![Add Losant Webhook](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/losant/losant-add-webhook.png)


Enter a `Webhook Name` and then click `Create Webhook`.
![New Losant Webhook](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/losant/losant-new-webhook.png)


Once the Webhook is created, copy the unique identifier from the URL that comes after `https://triggers.losant.com/webhooks/`. This value will be used below when configuring The Things Stack.
![Losant Webhook Created](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/losant/losant-webhook-created.png)


## Configure The Things Stack

Ensure that you have a The Things Stack account and an application setup. If you do not, follow the steps detailed in this Losant How-To Guide, [How to Integrate with The Things Stack](https://docs.losant.com/guides/how-to-integrate-with-the-things-stack/). 

Navigate to your application and click `Integrations`, then `Webhooks`, and then `Add webhook`.
![New TTS Webhook](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/losant/tts-add-webhook.png)


Click on the Losant Webhook template.
![Select Losant Webhook Template](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/losant/tts-select-losant-webhook-template.png)


Enter the following information into the Losant Webhook template configuration and then click `Create Losant webhook`.

- `Webhook ID`: any unique identifier here will work
- `Unique ID from the Losant Webhook URL`: this is the Unique ID from the Losant Webhook that was just created and copied to the clipboard.
![Create Losant Webhook](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/losant/tts-create-losant-webhook.png)


Once you have added the integration, ensure that you have a Losant Application Workflow created to receive this data which is detailed in the Losant How-To Guide, [How to Integrate with The Things Stack](https://docs.losant.com/guides/how-to-integrate-with-the-things-stack/#step-7-create-a-losant-application-workflow-to-receive-data-from-the-lorawan-sensor-and-confirm-data-flow-to-losant-via-uplinks). You can also [edit this Webhook integration](https://docs.losant.com/guides/how-to-integrate-with-the-things-stack/#editing-your-losant-webhook-in-tts) once it is created to include additional options such as Basic Auth or to enable other message types (Downlink ack, Downlink sent, Downlink failed, etc.) to be forwarded to Losant.

## Troubleshooting

If you run into any issues or have any further questions, please reach out to Losant on the [Losant Forums](https://forums.losant.com/).
