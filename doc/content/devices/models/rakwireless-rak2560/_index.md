---
title: "RAKwireless RAK2560 Sensor Hub"
description: ""
weight: 
---

{{< figure src="rak2560.png" alt="RAK2560" class="float plain" width="80%">}}

The RAKwireless [RAK2560 WisNode Sensor Hub](https://store.rakwireless.com/products/sensor-hub) is a modular sensor ecosystem consisting of the Sensor Hub Smart Datalogger and multiple pre-configured sensor probes. With pluggable, interchangeable probes, and the option to add third-party sensors to the mixture, the Sensor Hub is a suitable and versatile solution platform for various IoT applications where environmental monitoring is needed. 

<!--more-->

## Sensor Setup

To acquire the provisioning information and properly setup the sensor you must download the **WisToolBox** App from the Play Store or the App Store on your phone.

After opening the app it will ask you to log in/create an account, but you can click on **Skip** in the top right if you don't wish to sign up.

Then press **Start**, select **NFC Activation** and follow the instructions for connecting to the device.

Once you reach the menu of the device, select the **LORA & LORAWAN PARAMETERS** tab. After that open the **Global Settings** dropdown and make sure the Join mode and Region are set correctly. 

Then open the **LoRaWAN keys, ID, EUI** dropdown and copy the **Device EUI**, **AppEUI** and **AppKey** and save them somewhere as they will be needed later for onboarding.

{{< figure src="wistoolbox.png" alt="Settings tab of the device." width="40%">}}

Finally select the **Sensor Probe** tab up top and open the dropdowns for the respective sensors that are used. Here you can set the intervals or thresholds of when to send data.

Make sure you enable the **Send uplink** toggle depending on which method  you use.

## Onboarding to {{% tts %}}

The device can be onboarded using the **Device Repository** or **manually**.

{{< note "The RAK2560 does not support onboarding with a QR code." />}}

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 800 end-device profiles, including the RAK2560, which enables quick and easy registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are RAK2560-specific:

- End device brand: **RAKwireless Technology Co.**
- Model: **RAK2560 Sensor Hub**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0.0**

After configuring your device, select the **Register end device** button.

{{< figure src="rak2560-register.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are specific to the RAK2560:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A** 

After configuring your device, select the **Register end device** button.

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between your end device and {{% tts %}}.

{{< figure src="rak2560-live-data.png" alt="Live Data tab" >}}