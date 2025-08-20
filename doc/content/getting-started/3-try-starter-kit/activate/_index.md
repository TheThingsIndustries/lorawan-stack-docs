---
title: "Step 1: Activate your Starter kit for LoRaWAN"
description: "Activate your Starter kit for LoRaWAN"
weight: 1
---

This guide shows you how to activate your Starter Kit’s LoRaWAN® gateway and end device.

<!--more-->

{{< youtube "JRTPpME2-bw" >}}

### 1. {{% ttigpro %}}

First, set up the gateway. It receives messages from the end device and forwards them to {{% tts %}}, and the other way around. Once the gateway is online, you can activate your end device to start sending and receiving data.

We’ll use the built-in 4G LTE SIM in The Things Indoor Gateway Pro to connect to The Things Stack. You can switch to WiFi or Ethernet later if needed.

If you prefer a visual guide to connecting {{% ttigpro %}} you can use the video below.

<details><summary>Show video</summary>
{{< youtube "vEYlTZ4XS-k" >}}
</details>

There are **only two steps** to connecting {{% ttigpro %}} to {{% tts %}}.

##### Step 1: Register in {{% tts %}}

1. Open the back panel of the gateway. This can be done by clicking the slot provided on the back side of the gateway counter clockwise. If you're unsure, check out how to do this on [Youtube](https://youtu.be/vEYlTZ4XS-k?t=109)

Here, you will find a QR Code and some information about the gateway.

{{< figure src="ttigpro-qrcode.jpg" alt="TTIG Pro QR Code" width="35%" >}}

1. In {{% tts %}} Console, go to **Gateways**.
2. Click **Register Gateway**.
3. Click **Scan gateway QR code** and scan the QR code back of the gateway. A few things to note

- You can use any camera connected to your machine, even the built-in one.
- Make sure to center the QR Code in the camera's view port.
- In some older browsers/operating systems, the camera may not be able to detect the QR code.
  - In this case, instead of pressing **Scan gateway QR code**, manually enter the **Gateway EUI** field, which is printed on the back of the gateway (looks like `EC656EFFFEXXXXXX`).
  - {{% tts %}} automatically detects this gateway and asks you to enter an **Owner Token**. This is printed on the back panel of the gateway _below_ the **Power Input** field.

4. Enter a **Gateway ID**, which is a unique identifier used by {{% tts %}}

5. Select the **Frequency plan** to use.The frequency plan configures certain radio parameters for the gateway. If you're unsure of this at this point, select

- For Europe and UK, choose `Europe 863-870 MHz (SF9 for RX2 - recommended)`
- For North America (US, EU, Mexico) choose `United States 902-928 MHz, FSB 2 (used by TTN)`
- You can always change the value later.

5. Click **Claim gateway**.

##### Step 2: Connect a power supply cable

Connect the USB-C cable to the power supply slot.
{{< figure src="ttigpro-power-cable.jpg" alt="Connect power"  width="35%">}}

{{< warning >}}Only use the power adapter that comes with {{% ttigpro %}}.{{< /warning >}}

It may take several minutes to activate the SIM card and attach to a mobile network.

After a few minutes, {{% ttigpro %}} should be connected to {{% tts %}}. You can see this in the `Connections` section on the right hand side of the **Connection Settings** page.

{{< figure src="post-claim.png" alt="Post claim">}}

If you would like to learn more about {{% ttigpro %}} or setup WiFi or Ethernet connectivity, you can check the dedicated [{{% ttigpro %}}]({{< ref "/hardware/gateways/models/thethingsindoorgatewaypro/" >}}) page.

Let's now register and activate the end device to send and receive data.

### 2. mClimate Multipurpose Button

##### Step 1: Register in {{% tts %}}

1. First create an application in {{% tts %}}. An application is a collection of end devices.

{{< figure src="create-application.png" alt="Create an application">}}

2. Now within the application, select **Register end device**.
3. Select **Scan end device QR code**.

4. Use the QR code that's part of a _separate piece of paper included in the box_. This will prefill important information required to claim the end device.

{{< figure src="scan-end-device-qrcode.png" alt="Scan end device QR code">}}

5. From the model dropdown, select **Multipurpose button**. The rest of the information about the end device is automatically fetched and prefilled.

6. For the **Frequency plan**, select the _exact same value_ that you selected for the {{% ttigpro %}}.

{{< figure src="select-frequency-plan.png" alt="Select frequency plan">}}

7. The rest of the information is already setup for you. You can at this point choose to customize the **End Device ID** field or leave the pre-generated value.

8. Click the **Register end device** button. You device should now be successfully registered.

{{< figure src="register-end-device.png" alt="Register end device">}}

You will now be redirected to the end device.

{{< figure src="post-registration.png" alt="Registered end device">}}

##### Step 2: Activate

1. Open the **Live Data** tab of the end device.

{{< figure src="live-data-tab.png" alt="Live data tab">}}

2. Make sure that {{% ttigpro %}} is connected to {{% tts %}} and is **1-2 meters away** from the end device.
3. Pull the plastic strip at the back of the gateway. This allows the battery to touch the contact point and the device now starts a _join request_.

- A join request is a special uplink message used by the end device to "join" a network ({{% tts %}} in this case).
- If the device is registered properly, {{% tts %}} returns a join accept message, with a few configuration parameters to the end device.

The device is now successfully configured and sends the first data message. Since a LoRaWAN message consists of bytes, {{% tts %}} decodes these bytes into human readable information, which is seen in the payload field on the live data page. The following is an example.

{{< figure src="join.png" alt="Join procedure">}}

The following are sample values.

```json
{
  "batteryVoltage": 3.4,
  "pressEvent": 0,
  "sensorTemperature": 22.2,
  "singlePressEventCounter": 0,
  "thermistorProperlyConnected": true
}
```

5. Now you can _press the button_ and you will see it's surrounding LED blink green, which is a signal that an uplink was sent to the {{% tts %}}. If you now check the live data tab, you'll see the newest data message at the top.

{{< figure src="second-uplink.png" alt="Button press">}}

If you have any issues in this process, don't worry and check out the
[troubleshooting guide]({{< ref "/getting-started/3-try-starter-kit/troubleshooting" >}})

Now that you've successfully setup the LoRaWAN gateway and end device, let's go ahead and collect and visualize this data.
