---
title: "Device Claiming"
description: ""
aliases: ["/devices/device-claiming"]
---

Device claiming is a mechanism that securely transfers ownership from the device maker to the device owner without transferring LoRaWAN® root keys. This section provides an overview to resources for device makers and device owners.

<!--more-->

## Who is it for?

It is for device owners who need to claim ownership of their devices.

### Typical use cases

1. Onboarding a device by scanning its QR code that contains the ownership information.
2. Bulk importing devices with ownership information.

## How does it work?

Device makers provision devices on a LoRaWAN Join Server that supports claiming. As part of this process, a "claim authentication code" or "owner token" is generated: a proof of ownership.

Device makers send the proof of ownership together with the physical end devices to the owner. There are various ways to transfer the proof of ownership: it can be encoded in a QR code or text printed on the device packaging, or sent as an import file.

Device owners claim the device by scanning the QR code, entering the claim authentication code or importing a file with claim authentication codes. The process of claiming a device using its QR code is integrated in the [adding devices flow]({{< ref "/devices/adding-devices" >}}). Instructions on how to claim a device using claim authentication code are presented below.

Device claiming works with LoRaWAN Join Servers configured in {{% tts %}}. By default, {{% tts %}} Cloud and Community Edition are preconfigured to use The Things Join Server and Semtech Join Server. If you operate {{% tts %}} Enterprise or Open Source, configure the [LoRaWAN Backend Interfaces interoperability repository]({{< ref "/reference/interop-repository" >}}) and the [Device Claiming repository]({{< ref "/reference/device-claiming-repository" >}}) accordingly.

## Claiming devices using Claim Authentication Code

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

Navigate to your application in {{% tts %}} Console and click the **+ Register end device** button.

Select the **Enter end device specifics manually**, then provide **Frequency plan**, **LoRaWAN version** and **Regional Parameters version**.

In the **Provisioning information** section, fill in the **JoinEUI** of The Things Join Server and **Confirm**. 

Then, enter the **DevEUI**, **Claim authentication code** and **End device ID** of a device that you wish to claim.

Finish by clicking **Register end device**.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

To claim end device via CLI, issue the following command:

```bash
ttn-lw-cli create <application-id> <device-id> \
    --dev-eui <dev-eui> \
    --app-eui <app-eui> \
    --frequency-plan-id <frequency plan> \
    --lorawan-version <lorawan-version> \
    --lorawan-phy-version <lorawan-phy-version> \
    --supports-join \
    --claim-authentication-code.value <claim-authentication-code>
```

{{< note >}} The `join-server-enabled` option in the CLI configuration has to be set to `false` when claiming devices using the CLI. {{</ note >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}