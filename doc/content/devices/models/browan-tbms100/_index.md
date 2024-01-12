---
title: "Browan TBMS100"
description: ""
weight: 
---

{{< figure src="tbms100.png" alt="Generic Node Sensor Edition" class="float plain" >}}

The Browan [TBMS100](https://www.browan.com/product/motion-sensor-pir/detail) is a PIR motion sensor designed to detect occupancy or movement in homes or buildings for security and efficient facility management. It helps optimize the utilization of spaces like desks, conference rooms, and bathrooms.

<!--more-->

## Provisioning Information
The provisioning information, such as **JoinEUI** and **DevEUI**, can be found on the back of the device. The **AppKey**, which is sensitive information, is provided within an Excel sheet via email to the person who purchased it.


{{< figure src="tbms100-back.png" alt="TBMS100 provisioning information" >}}


{{< note "The TBMS100 doesn’t have a QR code that supports {{% tts %}} to extract provisioning information." />}}

## Onboarding to {{% tts %}}

You can onboard your TBMS100 using the **LoRaWAN Device Repository** or **manually** option.

If you prefer onboarding with the **LoRaWAN Device Repository**, in the **End device type** section, under **Input method**, select the **Select the end device in the LoRaWAN Device Repository** option.

The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are TBMS100-specific:

- End device brand: **Browan Communication Incorp.**
- Model: **Motion Sensor**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0.1**

After configuring your device, select the **Register end device** button.

{{< figure src="tbms100-device-repository.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are TBMS100-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

After configuring your device, select the **Register end device** button.

{{< figure src="tbms100-manually.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between the end device and {{% tts %}}.

{{< figure src="tbms100-live-data.png" alt="Live data tab" >}}
