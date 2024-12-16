---
title: "Milesight EM300-TH"
description: ""
weight: 
---

{{< figure src="milesight-EM300-TH.png" alt="Milesight EM300-TH" class="float plain" width="60%" >}}

The [Milesight EM300-TH](https://www.milesight.com/iot/product/lorawan-sensor/em300-th) is an environment sensor suitable for monitoring indoor and outdoor temperature and humidity. It can be widely used in office areas, greenhouses and other environments.

<!--more-->

## Provisioning Information

For the provisioning information:
- **DevEUI**: Can be found on the back of the device. 
- **JoinEUI**: `24E124C0002A0001`.
- **AppKey**: Will be received through an email after purchasing the device.

{{< figure src="milesight-EM300-TH-back.png" alt="EM300-TH provisioning information" class="plain" width="40%">}}

{{< note "The Milesight EM300-TH cannot be onboarded to {{% tts %}} using QR code." />}}

## Onboarding to {{% tts %}}

You can onboard your EM300-TH using the **LoRaWAN Device Repository** or **manually** option.

If you prefer onboarding with the **LoRaWAN Device Repository**, in the **End device type** section, under **Input method**, select the **Select the end device in the LoRaWAN Device Repository** option.

The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are EM300-TH-specific:

- End device brand: **Milesight IoT Co., Ltd**
- Model: **EM300-TH**
- Hardware Ver.: **V2.2**
- Firmware Ver.: **1.15**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

{{< figure src="em300-th-repo.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are EM300-TH-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

{{< figure src="em300-th-manually.png" alt="Settings for manual registration" >}}
