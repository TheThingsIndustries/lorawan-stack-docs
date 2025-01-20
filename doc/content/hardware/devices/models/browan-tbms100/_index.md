---
title: "Browan TBMS100 Motion Sensor"
description: ""
weight:
aliases: [/devices/models/browan-tbms100]
---

{{< figure src="tbms100.png" alt="Generic Node Sensor Edition" class="float plain" >}}

The Browan [TBMS100 Motion Sensor](https://lora-alliance.org/wp-content/uploads/2020/05/RM_Motion-SensorPIR_20200205_v2_with-downlink.pdf) is a PIR motion sensor designed to detect occupancy or movement in homes or buildings for security and efficient facility management. It helps optimize the utilization of spaces like desks, conference rooms, and bathrooms.

<!--more-->

## Provisioning Information

The provisioning information, such as **JoinEUI** and **DevEUI**, can be found on the back of the device. The **AppKey**, which is sensitive information, is provided within an Excel sheet via email to the person who purchased it.

{{< figure src="tbms100-back.png" alt="TBMS100 provisioning information" >}}

{{< note "The TBMS100 doesn’t have a QR code that supports {{% tts %}} to extract provisioning information." />}}

## Onboarding to {{% tts %}}

You can onboard your TBMS100 using the **LoRaWAN Device Repository** or **manually** option.

If you prefer onboarding with the **LoRaWAN Device Repository**, in the **End device type** section, under **Input method**, select the **Select the end device in the LoRaWAN Device Repository** option.

The [Onboarding devices without QR codes]({{< ref "/hardware/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/hardware/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are TBMS100-specific:

- End device brand: **Browan Communication Incorp.**
- Model: **Motion Sensor**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0.1**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

{{< figure src="tbms100-device-repository.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/hardware/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/hardware/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are TBMS100-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

{{< figure src="tbms100-manually.png" alt="Settings for manual registration" >}}
