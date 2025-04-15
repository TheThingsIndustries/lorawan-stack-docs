---
title: "Step 3: Activate the Starter kit for LoRaWAN"
description: "Activate the Starter kit for LoRaWAN"
weight: 3
---

This guide walks you through activating the end device and managed gateway that's part of the Starter Kit for LoRaWAN®.

<!--more-->

Before we can activate an end device to send/receive data, we need to setup a LoRaWAN® gateway to receive messages from end devices and forward them to the {{% tts %}} and vice versa.

The Starter Kit for LoRaWAN contains {{% ttigpro %}}, a fully cloud-managed 8 channel LoRaWAN® gateway. It support true Zero-Touch Provisioning(ZTP) and is fully remotely managed via {{% tts %}}.

### 1. {{% ttigpro %}}

To keep things simple and get started right away, we are going to use the built-in 4G LTE sim card of {{% ttigpro %}} to communicate with {{% tts %}}. You can always later change this to WiFi or Ethernet.

There are only two steps to connecting {{% ttigpro %}}.

##### Step 1: Register in {{% tts %}}

1. Open the back panel of the gateway, where you will find a QR Code and some information about the gateway.

{{< figure src="ttigpro-qrcode.jpg" alt="TTIG Pro QR Code" width="35%" >}}

1. In {{% tts %}} Console, go to **Gateways**.
1. Click **Register Gateway**.
1. Click **Scan gateway QR code** and scan the QR code on the bottom of the gateway. Alternatively, enter the **Gateway EUI** and **Owner token**. This information is also available in [The Things Industries Account](https://accounts.thethingsindustries.com) if you do not have physical access to your gateway.
1. Enter a **Gateway ID** and select the **Frequency plan** to use.
1. Click **Claim gateway**.

##### Step 2: Connect a power supply cable

Connect the USB-C cable to the power supply slot.
{{< figure src="ttigpro-power-cable.jpg" alt="Connect power"  width="35%">}}

{{< warning >}}Only use the power adapter that comes with {{% ttigpro %}}.{{< /warning >}}

It may take several minutes to activate the SIM card and attach to a mobile network.

After a few minutes, {{% ttigpro %}} should be connected to {{% tts %}}.

{{< figure src="post-claim.png" alt="Post claim">}}

If you would like to learn more about {{% ttigpro %}} or setup WiFi or Ethernet connectivity, you can check the dedicated [{{% ttigpro %}}]({{< ref "/hardware/gateways/models/thethingsindoorgatewaypro/" >}}) page.

Let's now register and activate the end device to send and receive data.

### 2. mClimate Multipurpose Button

##### Step 1: Register in {{% tts %}}

1. First create an application in {{% tts %}}. An application is a collection of end devices.

{{< figure src="create-application.png" alt="Create an application">}}

2. Now within the application, select **Register end device**.
3. Select **Scan end device QR code**.

4. Use the QR code that's part of a separate piece of paper included in the box. This will prefill important information required to claim the end device.

{{< figure src="scan-end-device-qrcode.png" alt="Scan end device QR code">}}

5. From the model dropdown, select **Multipurpose button**. The rest of the information about the end device is automatically fetched and prefilled.

6. Select a frequency plan. In many cases, the frequency plan for the end device and gateway may be different. But, for simplicity, make sure to use the exact same one used for {{% ttigpro %}} for now.

{{< figure src="select-frequency-plan.png" alt="Select frequency plan">}}

7. The rest of the information is already setup for you. You can at this point choose to customize the **End Device ID** field or leave the pre-generated value.

8. Click the **Register end device** button. You device should now be successfully registered.

{{< figure src="register-end-device.png" alt="Register end device">}}

You will now be redirected to the end device.

{{< figure src="post-registration.png" alt="Registered end device">}}

##### Step 2: Activate

1. Open the live data tab of the end device.

{{< figure src="live-data-tab.png" alt="Live data tab">}}

2. Make sure that {{% ttigpro %}} is connected to {{% tts %}} and is 2-3 meters from the end device.
3. Pull the plastic strip at the back of the gateway. This allows the battery to touch the contact point and the device now starts a _join request_.

- A join request is a special uplink message used by the end device to "join" a network ({{% tts %}} in this case).
- If the device is registered properly, {{% tts %}} returns a join accept message, with a few configuration parameters to the end device.

{{< figure src="join.png" alt="Join procedure">}}

4. The device is now successfully configured and sends the first data uplink. Since a LoRaWAN message consists of bytes, {{% tts %}} decodes these bytes into human readable information, which is seen in the payload field on the live data page. The following is an example.

```json
{
  "batteryVoltage": 3.4,
  "pressEvent": 0,
  "sensorTemperature": 23.5,
  "singlePressEventCounter": 10,
  "thermistorProperlyConnected": true
}
```

The `pressEvent` field would be `0` indicating that the button was not pressed.

5. Now you can _press the button_ and you will see it's surrounding LED blink green, which is a signal that an uplink was sent to the {{% tts %}}. If you now check the live data tab, you'll see the newer uplink message at the top.

{{< figure src="second-uplink.png" alt="Button press">}}

The `pressEvent` field would be `1` indicating that the button was pressed.

Now that you've succesfully setup the LoRaWAN gateway and end device, let's go ahead and collect and visualize this data.
