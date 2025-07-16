---
title: "Troubleshooting"
description: ""
---

This page lists solutions to common issues.

<!--more-->

#### The end device does not join. What do I do now?

1. Make sure the gateway is connected and online. You can check this in the Gateway overview page in the {{% tts %}} console.
2. Check that the end device is at least 1-2 meters away from the gateway.
3. Wait for a few minutes before pressing the button.

#### What else can I do with end device downlinks?

The following table explains the available options for different types of downlinks

##### Controlling LED Behavoir

<div class="fixed-table">

| Byte Number | Value and Meaning                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0           | 0x05                                                                                                                                                                          |
| 1           | 0x01 - Turn the LED ON; <br> 02 - Blink fast (100ms on, 100ms off); <br> 03 - Blink slow (100ms on, 1000ms off); <br> 04 - Turn the LED OFF.                                  |
| 2           | XX - Duration for the LED behavior. <br> Duration, [seconds] = XX \* 10. <br> If zero, do it until next LED related command is received <br> or the verify button is pressed. |

</br>
</div>

The mClimate Multipurpose button has a few other downlink options that you can explore. The full downlink reference can be found on [mClimate's documentation page](https://docs.mclimate.eu/mclimate-lorawan-devices/devices/mclimate-multipurpose-button-lorawan/mclimate-button-lorawan-device-communication-protocol).
