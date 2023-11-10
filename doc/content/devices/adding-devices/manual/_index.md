---
title: "Manually adding devices"
description: ""
weight: 1
aliases:
---

If your devices are not yet part of the [LoRaWAN® Device Repository](https://github.com/TheThingsNetwork/lorawan-devices/) or you want to set advanced fields, you can add devices manually in {{% tts %}}.

<!--more-->

To do this, choose the **Enter end device specifics manually** input method. Please refer to your device's datasheet to ensure entering the following information correctly. If such sheet has not been provided, please contact the manufacturer to assist you with obtaining this data.

Choose a **Frequency plan** appropriate for your region. Your device and gateway must use the same [frequency plan]({{< ref "/reference/frequency-plans/" >}}) to communicate.

Select the device **LoRaWAN version**. This should be provided with your device as the LoRaWAN version, LoRaWAN specification, or MAC version.

{{< warning >}}
Choosing the incorrect LoRaWAN version can lead to complex errors. Activation may work, but the device will not be able to communicate consistently. If you are unsure about the LoRaWAN version you have selected, watch the [event log]({{< ref "the-things-stack/management/events" >}}) for errors!
{{</ warning >}}

Choose the **Regional Parameters version** provided by the manufacturer of your device. This should be specified in the data sheet as Regional Parameters or PHY version.

{{< figure src="manual.png" alt="Manually create end device" >}}

### Advanced settings

To modify advanced settings, expand the **Show advanced activation, LoRaWAN class and cluster settings** dropdown.

Here, you may choose your **Activation mode**. If you choose **OTAA**, follow the [OTAA Devices]({{< ref "/devices/adding-devices/manual/otaa" >}}) subsection after this one, and if you choose **ABP**, follow the [ABP Devices]({{< ref "/devices/adding-devices/manual/abp" >}}) subsection.

If your device supports **Class B** or **Class C** features, you may enable them using the dropdown **Additional LoRaWAN class capabilities**.

Under **Network defaults**, you can choose to **Use network's default MAC settings**. This option is enabled by default because for most deployments, {{% tts %}} defaults for Rx delay and other MAC settings will be suitable. However, if you want to modify **Rx2 data rate** or **Rx2 frequency**, uncheck this option and provide your custom values. If using [ABP activation mode](#abp-devices), this will also allow you to configure **Rx1 data rate offset**, **Rx1 delay**, **Factory preset frequencies** and to reset frame counters.

{{< note >}} There are lots of additional options here that aren't mentioned for the sake of keeping this section concise. If you want to learn more about them, see the [MAC Settings]({{< ref "/devices/configuring-devices/mac-settings" >}}) section and/or hover over the tooltip icons on the respective inputs. {{</ note >}}

You can also choose to **Skip registration on Join Server** for testing purposes. We advise not to check this option unless you're an expert.
