---
title: "Step 5: Control the end device behavior remotely"
description: ""
weight: 5
---

LoRaWAN® is a full-duplex protocol, which means that we can both receive data from and send data to the end device. So far, we've only worked with uplink data from the end device. In this guide, let's look at interacting with the end device using downlinks.

<!--more-->

The mClimate Multipurpose button for LoRaWAN is a Class A device. This is a special mode of operation where the end device listens for downlinks only after sending an uplink. This allows the end device to control when the radio is turned on, which helps preserve battery.

This means that when you schedule a downlink via {{% tts %}}, it's not immediately sent, but queued until the device sends an uplink.

In {{% tts %}} Console, select your application and navigate to the end device overview page.

Select the **Messaging** tab. The default option here is **Schedule Downlink** and that's what we are going to use.

{{< figure src="downlink-view.png" alt="Downlink view" >}}

This view has a few options. For the sake of this example, we can leave the following defaults in place.

- **Insert mode**: `Replace downlink queue`
- **FPort**: `1`
- **Payload type**: `Bytes`

We will only be adding different values to the **Payload** field for different types of downlinks.

#### Activate LEDs

In this example, we will control the GREEN LED on the button. The following table explains the available options.

<div class="fixed-table">

| Byte Number | Value and Meaning                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0           | 0x05                                                                                                                                                                          |
| 1           | 0x01 - Turn the LED ON; <br> 02 - Blink fast (100ms on, 100ms off); <br> 03 - Blink slow (100ms on, 1000ms off); <br> 04 - Turn the LED OFF.                                  |
| 2           | XX - Duration for the LED behavior. <br> Duration, [seconds] = XX \* 10. <br> If zero, do it until next LED related command is received <br> or the verify button is pressed. |

</br>
</div>

So if we want to make the LED blink fast for 20 seconds, the downlink payload is `05 02 02`.

{{< figure src="blink-green.png" alt="Blink Green LED" >}}

Enter this value in the **Payload** field and press **Schedule Downlink** and this downlink will be queued.

Now, press the button on the end device. This will trigger an uplink to the {{% tts %}} and {{% tts %}} in turn will send this downlink to the device via the gateway.

The Green LED button should now blink for 20s and then turn off. You can experiment with different button configurations from the table above.

#### Request Hardware and Software Version

Now, let's move on to more practical use cases for sending downlinks to end devices. We are now going to request the hardware and software version of the end device.

To do this, enter the value `04` in the **Payload** field and press **Schedule Downlink**. Now once again, press the button. The device will send an uplink and receive the downlink command.

The device will now send another uplink with the device version in the payload. You can see these values in the decoded payload.

{{< figure src="hardware-version.png" alt="Hardware Version" >}}

#### Fetch Stored Button Press Counters

The mClimate Multipurpose button for LoRaWAN stores button press event counters; i.e., how many times the button was single pressed, double pressed and triple pressed.

<div class="fixed-table">

| Payload value | Counter type         |
| ------------- | -------------------- |
| 0xB1          | Single press counter |
| 0xB2          | Double press counter |
| 0xB3          | Triple press counter |

</br>
</div>

Let's first fetch the single press counter. Enter the value `b1` in the **Payload** field and press **Schedule Downlink**. Now once again, press the button. The device will send an uplink and receive the downlink command.

The device will now send another uplink with the counter value in the payload. You can see the counter value in the decoded payload.

{{< figure src="single-press-counter.png" alt="Single press counter" >}}

You can explore this further by double pressing and triple pressing the button and fetching the corresponding counter.

#### Other options

The mClimate Multipurpose button has a few other downlink options that you can explore. The full downlink reference can be found on [mClimate's documentation page](https://docs.mclimate.eu/mclimate-lorawan-devices/devices/mclimate-multipurpose-button-lorawan/mclimate-button-lorawan-device-communication-protocol).
