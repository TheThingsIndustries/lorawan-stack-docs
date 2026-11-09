# Widgelix

> Widgelix is a powerful and flexible deep analytics cloud service for IoT device management and data visualization. Widgelix platform allows you to easily …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/widgelix/


[Widgelix](https://app.widgelix.com/) is a powerful and flexible deep analytics cloud service for IoT device management and data visualization. Widgelix platform allows you to easily integrate devices from various manufacturers into a single platform, making it easier to manage your IoT network and extract valuable insights from your collected data. With Widgelix, you can optimize your device performance, improve your decision-making, and drive business growth.

## Prerequisites

1. A [user account on Widgelix](https://app.widgelix.com/auth/register).

## Setup Widgelix

### Create a device template from Repository

Navigate to **Device Types** on the left hand menu, then click the **Load From Repository** button.

Select required device, give a **Name** to your template and click **Save** button.

![Add device template](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/widgelix/add-device-type.png)


### Add new device based on the template

Navigate to **Devices** on the left hand menu, then click the **Create Device** button.

Give a **Name** to your device, type **DevEUI**, assign previously created **Device Type** template and click **Save** button.

![Add device](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/widgelix/add-device.png)


### Configure Connectivity

Navigate to **Devices** on the left hand menu, then click on the created device.

Go to **Settings** tab and click on **Connectivity** section. Then select The Things Stack, switch **Secure** option. And finally, copy the given API Key because you'll need it in the next step.

![Add connectivity](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/widgelix/add-connectivity.png)


## Configure The Things Stack

Now you are ready to instantiate the Widgelix [Webhook template](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/). This will allow you to forward data from your The Things Stack device to **Widgelix**.

On The Things Stack, navigate to **Integrations &#8594; Webhooks** and choose **Widgelix** Webhook template.

Give a **Webhook ID** to your integration. Fill the **API Key** with value you previously copied from Widgelix.

![Widgelix integration on TTS](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/widgelix/tts-widgelix.png)


Congrats, **Widgelix** is now ready to accept your device's uplinks! Navigate back to **Devices** on Widgelix, click on your device and you will be able to observe all the incoming data from your device.

![Dashboard](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/widgelix/dashboard.png)


