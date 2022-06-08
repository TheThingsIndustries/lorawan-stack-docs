---
title: "my IoT open Tech"
description: ""
weight:
---

my IoT open Tech is an IoT platform, developed on top of [ThingsBoard Community Edition](https://thingsboard.io/docs/getting-started-guides/what-is-thingsboard/) (an open-source project), with a user-centered design.

Users can store and chart the telemetries from their devices, configure their features, and manage alarms.

my IoT open Tech development is a non-profit community effort open to everybody willing to contribute to an open, free and neutral IoT platform focused on social, educational and community use cases.

<!--more-->

Visit [my IoT open Tech Documentation](https://www.doc.my.iotopentech.io/) for detailed documentation.

## Prerequisites

1. A [compatible device](https://www.doc.my.iotopentech.io/supported-devices.html) already configured in {{% tts %}}. If you want to use a different device type, please consider contributing to our [Github repository](https://github.com/IoTopenTech/myIoTopenTech).
2. A user account on [my IoT open Tech](http://iotopentech.io/register.php).

## Register a Client Account in my IoT open Tech

Use your web browser to open [my IoT open Tech registration page](http://iotopentech.io/register.php).

Write you email address and press the **SEND** button.

{{< figure src="myiotopentech_register_account.png" alt="Register my IoT open Tech client account" >}}

After a few seconds, a new page will appear showing the **access token** of your Control Device in my IoT open Tech. Please keep this token safe. You will need it later.

{{< figure src="myiotopentech_access_token.png" alt="Keep your access token safe" >}}

Check your email inbox for a ThingsBoard account activation message, and click on the **Activate Your Account** button.

{{< figure src="myiotopentech_activate_your_account.png" alt="Activate your account email message" >}}

Next, you will be asked to choose a password and write it twice.

{{< figure src="myiotopentech_create_password.png" alt="Choose a password for your my IoT open Tech account" >}}

Finally press the **CREATE PASSWORD** button.

You will be redirected to the my IoT open Tech **HOME** page.

{{< figure src="myiotopentech_home_page.png" alt="my IoT open Tech Home page" >}}

## Create and Configure Your Device in my IoT open Tech

Click on the **DASHBOARDS** option on the left hand menu, and then on the **Configuración** panel to open the **Configuración** dashboard.

{{< figure src="myiotopentech_configuracion_dashboard.png" alt="The Configuración dashboard" >}}

In the central panel **ACTIVOS Y DISPOSITIVOS**, click on **ROOT** to open the configuration dialog box of your root asset.

Navigate to the **CREAR** tab, write a name for your device, choose the **Device** type, choose the model of your device (in our example LHT65), and press the **CREAR** button.

{{< figure src="myiotopentech_create_device.png" alt="Create your new device" >}}

The new created device will appear in the central panel nested below the **ROOT** asset.

Click on your new device to open its configuration dialog box.

Navigate to the **CONFIGURAR** tab, unfold the **Device EUI** section, write the Device EUI of your device (this value is available in your end device's overview page in {{% tts %}} Console under **DevEUI**), and press the **CONFIGURAR** button.

{{< figure src="myiotopentech_configure_deviceeui.png" alt="Configure the Device EUI of your device" >}}

## Configure {{% tts %}}

After finishing my IoT open Tech setup, use the **my IoT open Tech** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}.

To integrate, you only need to fill out the **Webhook ID** field with a desired value, and provide the **access token** of your my IoT open Tech Control Device.

{{< note >}} You got your Control Device's access token after registering your my IoT open Tech client account. If you haven't copied it upon registration, navigate to **HOME** panel on the left hand menu in my IoT open Tech, then to **DEVICES**, select your Control Device and press the **COPY ACCESS TOKEN** button. {{</ note >}}

{{< figure src="myiotopentech_webhook_template.png" alt="my IoT open Tech webhook template" >}}

## Monitoring Your Data

In the **HOME** page of my IoT open Tech, click on **DASHBOARDS** and then on the **Panel de control** dashboard.

In the **ACTIVOS Y DISPOSITIVOS** panel, click on your device.

As soon as new uplink message is sent from your end device and received by {{% tts %}}, the dashboard will automatically update to reflect the incoming data.

{{< figure src="myiotopentech_panel_de_control.png" alt="The Panel de control dashboard" >}}
