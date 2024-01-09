---
title: "Browan TBMS100"
description: ""
weight: 
---

{{< figure src="tbms100.png" alt="Generic Node Sensor Edition" class="float plain" >}}

The Browan [TBMS100](https://www.browan.com/product/motion-sensor-pir/detail) is a PIR motion sensor designed to detect occupancy or movement in homes or buildings for security and efficient facility management. It helps optimize the utilization of spaces like desks, conference rooms, and bathrooms.

<!--more-->

# Onboarding to {{% tts %}}

The provisioning information, such as **JoinEUI** and **DevEUI**, can be found on the back of the device. 

{{< figure src="tbms100-back.png" alt="TBMS100 provisioning information" >}}

{{< note "The sensitive information, the **AppKey**, is provided within an Excel sheet via email to the person who purchased it." />}}

The TBMS100 doesn't support onboarding with a QR code. You must proceed directly to the options [**Select the end device in the LoRaWAN Device Repository**]({{< ref "#using-the-lorawan-device-repository" >}}) or [**Enter end device specifics manually**]({{< ref "#manually" >}}).

## Using the LoRaWAN Device Repository

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Browan TBMS100, which requires less information for registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select **Select the end device in the LoRaWAN Device Repository** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) page explains all the configurations you need to provide. However, the following are the TBMS100 specific configurations you want to include:

- End device brand: **Browan Communication Incorp.**
- Model: **Motion Sensor**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0.1**

After providing all the configurations, select the **Register end device** button.

{{< figure src="tbms100-device-repository.png" alt="Settings for registration through device repository" >}}

## Manually

The TBMS100 also supports manual registration, but make sure all configurations are provided correctly.

In the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) pages explain all the configurations you need to provide. However, the following are the TBMS100 specific configurations you want to include:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

After providing all the configurations, select the **Register end device** button.

{{< figure src="tbms100-manually.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

In both registration options, after registering the device, you will be redirected to the **Overview** tab of the **End devices** page.

{{< figure src="tbms100-overview-tab.png" alt="Overview tab" >}}

Then, select the **Live Data** tab to view all messages exchanged between the end device and the Network Server.

{{< figure src="tbms100-live-data.png" alt="Live data tab" >}}
