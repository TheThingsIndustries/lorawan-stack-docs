# IoT in a Box

> IoT in a Box combines an intelligent network of sensors and gateways with monitoring and reporting applications to solve unique and complex monitoring …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/iotinabox/


[IoT in a Box](https://www.iotinabox.com/) combines an intelligent network of sensors and gateways with monitoring and reporting applications to solve unique and complex monitoring challenges.

Visit [IoT in a Box helpdesk](https://iotinabox.zendesk.com/hc/en-us) for detailed documentation.

## Prerequisites

1. An [Iot in a Box user account](https://iotinabox.mydevices.com/home).

## Setup IoT in a Box

Once you log into your IoT in a Box account, you will need to add a company. You can add it by providing your company info in **Company**, **Country**, **Address** and other fields as shown on the image below.

![Creating a company](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/iotinabox/company.png)


Next, you will be asked to add your gateway. To add it, your need to enter the **Gateway ID** that is printed on the sticker on the device bottom.

![Adding a gateway](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/iotinabox/add-gateway.png)


You will also be asked to add your device, which you can do by submitting the **Device ID**. You can find this ID printed on the sticker on your device. 

![Adding a device](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/iotinabox/add-device.png)


Check the supported hardware in [myDevices online store](https://store.mydevices.com/). Devices that are not purchased from this store can be added by submitting their DevEUI/model, or by registering them through your IoT in a Box Whitelabel Console.

## Configure The Things Stack

After finishing IoT in a Box setup, use the **IoTinaBox™** [Webhook template](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/) to create a Webhook integration on The Things Stack.

To integrate, you only need to fill out the **Webhook ID** field with a desired value, and provide an IoT in a Box **Subscription Key**.

> **Note:** You can obtain the IoT in a Box subscription key by sending an email to `support@mydevices.com`.


![IoT in a Box webhook](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/iotinabox/iotinabox-template.png)


To see the values of all parameters of the IoT in a Box integration, click on the integration after you created it with the Webhook template.

At this point, you have set up everything to monitor your sensor devices, receive alerts and get daily reports on their status.

