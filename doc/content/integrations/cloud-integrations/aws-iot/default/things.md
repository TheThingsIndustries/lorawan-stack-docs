---
title: "Managing Things"
description: ""
weight: 30
aliases: ["/integrations/aws-iot/default/things"]
---

The AWS IoT Integration for {{% tts %}} synchronizes the device registry: you can create and claim things in AWS IoT Core which trigger a Lambda function that creates or claims the device in {{% tts %}}.

<!--more-->

{{< note >}} Devices that you create in {{% tts %}} are automatically created as AWS IoT Core things as soon as they activate or send their first uplink message.

Create and claim things only for devices that are not yet in your {{% tts %}} application. {{</ note >}}

## Thing Type and Names

The AWS IoT Integration for {{% tts %}} uses the thing that you specified when deploying the integration. By default, the thing type is `lorawan`.

Things are created automatically as they join the network or send an uplink message. For the name of new things, you can use their `<DevEUI>` or `<stackName>_<DeviceID>`.

{{< note >}}
- `stackName`: the AWS CloudFormation stack name of your deployment
- `DeviceID`: the device-id of your device
{{</ note >}}

Your AWS IoT things overview may look like this:

{{< figure src="../things-overview.png" alt="Things Overview" >}}

## Preparation

In order to create and claim things in AWS IoT, you need to enable event-based messages. This enables the AWS IoT Integration to act on thing create, update and delete events.

In the AWS Console, open **Services** and go to **IoT Core**.

In the menu on the left, in the bottom, click **Settings**.

In the **Event-based messages** pane, click **Edit**.

Make sure that at least **Thing: Created, updated, deleted** is checked.

{{< figure src="../topic-settings.png" alt="Thing Topics" >}}

## Creating and Claiming Things

You can use AWS IoT to create and claim devices in {{% tts %}}. This is useful to manage all your things in one place, without having to use {{% tts %}} Console, CLI or API.

**Creating** a Thing allows you to add any LoRaWAN device by manually entering its information and security keys. **Claiming** a Thing allows you to use a QR code to transfer ownership from the manufacturer or previous owner of the device, if the device has been provisioned for claiming. See [Device Claiming]({{< ref "devices/device-claiming" >}}) for more information.

In the AWS Console, open **Services** and go to **IoT Core**.

In the menu on the left, click **Manage**, go to **Things** and click **Create** in the top-right.

Click **Create a single thing**.

{{< figure src="../create-thing-1.png" alt="Create Thing" >}}

As **Name**, enter any thing name you like.

Make sure that **Thing Type** is set to the correct thing type, by default `lorawan`.

There are two mandatory attributes that come with the thing type: `devEUI` and `stackName`:

- `devEUI`: the hexadecimal LoRaWAN DevEUI.
- `stackName`: the AWS CloudFormation stack name of your deployment. This makes sure that the things are unique and kept apart if you use multiple AWS IoT Integrations side-by-side in your AWS account.

{{< figure src="../create-thing-2.png" alt="Create Thing" >}}

Next, you can create a new device by specifying all required attributes, or your can claim an existing thing with an authentication code (or owner token).

### Creating Things

When creating things, you need to specify the minimum attributes for creating LoRaWAN devices:

- `joinEUI`: the hexadecimal LoRaWAN JoinEUI (or AppEUI). You may also specify `appEUI` instead.
- `lorawanVersion`: either `1.0`, `1.0.1`, `1.0.2`, `1.0.3` or `1.1`
- `regionalParametersVersion`: either `1.0`, `1.0.1`, `1.0.2` (or `1.0.2-a`), `1.0.2-b`, `1.0.3-a`, `1.1-a` or `1.1-b`
- `appKey`: hexadecimal LoRaWAN AppKey
- `nwkKey`: hexadecimal LoRaWAN NwkKey (only when using LoRaWAN 1.1 or higher)
- Optional `deviceID`: the device ID that will be used to create the device in your {{% tts %}} application. When omitted, the integration uses `eui-<dev-eui>` as device ID. See [ID and EUI constraints]({{< ref "/reference/id-eui-constraints" >}}) for accepted ID formats.
- Optional `frequencyPlanID`: the frequency plan ID. See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) for the supported values. When omitted, the default frequency plan of your AWS region is used. See the **Outputs** section of your AWS CloudFormation stack to see which one that is.

{{< note >}}
Any errors during Creating Things will be propagated to CloudWatch. See [Troubleshooting]({{< ref "/reference/frequency-plans" >}}) for more information about retrieving logs.
{{< /note >}}

{{< figure src="../create-thing-3.png" alt="Create Thing" >}}

[Finalize device creation]({{< relref "#finalize-create" >}})

### Claiming Things

First, follow [the steps above]({{< relref "#creating-and-claiming-things" >}}).

When claiming things, you need to specify the minimum attributes for claiming LoRaWAN devices:

- `joinEUI`: the hexadecimal LoRaWAN JoinEUI (or AppEUI). You may also specify `appEUI` instead.
- `claimAuthenticationCode`: the claim authentication code, also known as owner token or pin code.
- Optional `deviceID`: the device ID that will be used to create the device in your {{% tts %}} application. When omitted, the integration uses `eui-<dev-eui>` as device ID.

{{< figure src="../claim-thing.png" alt="Claim Thing" >}}

{{< note >}} Are you a device maker? Learn [how to make your devices claimable]({{< ref "devices/device-claiming/make-device-claimable" >}}). {{</ note >}}

### Finalize Create

Click **Next**.

Click **Skip certificate and create thing**.

{{< note >}} Certificates are used when your AWS IoT thing is capable of TLS client authentication. This is not applicable to LoRaWAN end devices. Therefore, you don't need to manage certificates for LoRaWAN devices in AWS IoT. {{</ note >}}

Your thing is now created. Please see [Troubleshooting]({{< relref "troubleshooting" >}}) if your device is not showing up in your {{% tts %}} application.
