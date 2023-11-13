---
title: "Manually adding devices"
description: ""
weight: 1
aliases:
---

If your devices are not yet part of the [LoRaWAN® Device Repository](https://github.com/TheThingsNetwork/lorawan-devices/) or you want to set advanced fields, you can add devices manually in {{% tts %}}.

<!--more-->

This guide lists the common fields required for registering OTAA and ABP devices via the console. If you want to use the CLI, go to the OTAA/ABP guide at the bottom of the page.

Choose the **Enter end device specifics manually** input method. Please refer to your device's datasheet to ensure entering the following information correctly.

Choose the **Enter end device specifics manually** option of the input method.

Choose an appropriate **Frequency Plan**. Your device and gateway must use the same [frequency plan]({{< ref "/reference/frequency-plans/" >}}) to communicate.

Select **LoRaWAN Version** and **Regional Parameters version** fields for your specific device.
These values are usually found in the end device documentation either on the vendor/manufacturer's website or on the data sheet. If this data is not available, check with the device vendor/manufacturer.

{{< warning >}}
Choosing the incorrect LoRaWAN version can lead to complex errors. Activation may work, but the device will not be able to communicate consistently. If you are unsure about the LoRaWAN version you have selected, watch the [event log]({{< ref "the-things-stack/management/events" >}}) for errors!
{{</ warning >}}

{{< figure src="device-input-method.png" alt="ABP input method" >}}

The above fields are common for both OTAA and ABP devices. Now, based on the device you are trying to add, choose the speficic guide for OTAA or ABP below.
