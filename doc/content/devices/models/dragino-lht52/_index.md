---
title: "Dragino LHT52"
description: ""
weight: 
---

{{< figure src="lht52.png" alt="Generic Node Sensor Edition" class="float plain">}}

The Dragino [LHT52](https://www.dragino.com/products/temperature-humidity-sensor/item/199-lht52.html) is a temperature & humidity sensor and has a USB Type-C port to connect to external sensors such as an external temperature sensor.

<!--more-->

# Onboarding to {{% tts %}}

The provisioning information, which are the **JoinEUI**, **DevEUI** and **AppKey** can be found on a sticker inside the box. 

{{< figure src="lht52-prov-info.png" alt="LHT52 provisioning information" width="50%">}}

The LHT52 does not support onboarding with a QR code. You must proceed directly to the options [**Select the end device in the LoRaWAN Device Repository**](#using-the-lorawan-device-repository) or [**Enter end device specifics manually**](#manually).

## Using the LoRaWAN Device Repository

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Dragino LHT52, which enables quick and easy registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select **Select the end device in the LoRaWAN Device Repository** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) page explains all the configurations you need to provide. However, the following are the LHT52 specific configurations you want to include:

- End device brand: **Dragino Technology Co., Limited**
- Model: **LHT52**
- Hardware Ver.: **Unknown ver.**
- Firmware Ver.: **1.0**

After providing all the configurations, select the **Register end device** button.

{{< figure src="lht52-prov-info-stack.png" alt="Settings for registration through device repository" >}}

## Manually

The LHT52 also supports manual registration, but make sure all configurations are provided correctly.

In the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) pages explain all the configurations you need to provide. However, the following are the LHT52 specific configurations you want to include:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

After providing all the configurations, select the **Register end device** button.

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

In both registration options, after registering the device, you will be redirected to the **Overview** tab of the **End devices** page.

{{< figure src="lht52-overview.png" alt="Overview tab" >}}

Then, select the **Live Data** tab to view all messages exchanged between the end device and the Network Server.

{{< figure src="lht52-live-data.png" alt="Live data tab" >}}
