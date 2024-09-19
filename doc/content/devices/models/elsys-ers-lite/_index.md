---
title: "Elsys ERS Lite"
description: ""
weight: 
---

{{< figure src="ers-lite.png" alt="ELSYS ERS Lite" class="float plain" width="60%">}}

The [Elsys ERS Lite](https://www.elsys.se/en/ers-lite/) is an indoor environment sensor for measuring temperature and humidity.

<!--more-->

## Provisioning Information

The provisioning information, **DevEUI**, can be found on the back of the device. You can use all zeros as the **JoinEUI**. The **AppKey** is provided through an email when you purchase the device.

{{< figure src="ers-lite-back.png" alt="Elsys ERS Lite provisioning information" class="plain" width="40%">}}

{{< note "Elsys ERS Lite cannot be onboarded to {{% tts %}} using QR code." />}}

## Onboarding to {{% tts %}}

You can onboard your Elsys ERS Lite using the **LoRaWAN Device Repository** or **manually** option.

If you prefer onboarding with the **LoRaWAN Device Repository**, in the **End device type** section, under **Input method**, select the **Select the end device in the LoRaWAN Device Repository** option.

The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are Elsys ERS Lite-specific:

- End device brand: **Elsys**
- Model: **ERS Lite indoor environment monitoring**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

{{< figure src="ers-lite-repository.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are Elsys ERS Lite-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

{{< figure src="ers-lite-manually.png" alt="Settings for manual registration" >}}
