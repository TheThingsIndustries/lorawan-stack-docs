---
title: "Over the Air Activation (OTAA)"
description: ""
weight: 1
---

Over-the-Air-Activation (OTAA) is the secure, scalable way to activate LoRaWAN devices. All commercially available LoRaWAN devices support OTAA, and it is selected by default. This guide explains how to add OTAA devices manually.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

The example in this guide covers adding a device using [OTAA]({{< ref "reference/glossary#over-the-air-activation" >}}) (the most secure and preferred activation method) and [LoRaWAN version]({{< ref "reference/glossary#lorawan-version" >}}) MAC V1.0.2 (the most common LoRaWAN version, although newer versions are better and more secure) and RP001 Regional Parameters 1.0.2 revision B. Names and keys may vary slightly for other versions, but the process is the same and any differences are noted.

First, enter a **JoinEUI/AppEUI** if provided by your manufacturer. If it is not provided by the manufacturer and your device is programmable, you can generate a random one in accordance with the test ranges defined by the [IEEE 802 standards](https://ieee802.org/) or use all zeros, just make sure to program the same value into your device. Then click **Confirm**.

Enter your **DevEUI**. This should be provided by your manufacturer for commercial devices. If your device is programmable, you may generate an EUI using the **Generate** button, and program it in your device.

{{< note >}} Note that the **JoinEUI** and **DevEUI** fields will be pre-filled if you scanned your device's QR code as explained in [Onboarding Devices using QR Codes]({{< ref "/devices/adding-devices#onboarding-devices-using-qr-codes" >}}) section. {{</ note >}}

If your manufacturer provides an **AppKey**, enter it. Otherwise, use the **Generate** button to create one, and program it into your device.

Give your device a unique **End device ID**. See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for guidelines about choosing a unique ID.

{{< figure src="manual-network-settings-otaa.png" alt="Manually create OTAA end device" >}}

Click **Register end device** to create the end device.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

First, list the available frequency plans and LoRaWAN versions:

```bash
ttn-lw-cli end-devices list-frequency-plans
ttn-lw-cli end-devices create --help
```

We define some user parameters that will be used below:

```bash
APP_ID="app1"
DEVICE_ID="dev1"
FREQUENCY_PLAN="EU_863_870"
DEV_EUI="0004A30B001C0530"
APP_EUI="800000000000000C"
APP_KEY="752BAEC23EAE7964AF27C325F4C23C9A"
```

Make sure to modify these according to your setup.

**LoRaWAN 1.0.x:**

To create an end device using over-the-air-activation (OTAA):

```bash
ttn-lw-cli end-devices create $APP_ID $DEVICE_ID \
  --dev-eui $DEV_EUI \
  --app-eui $APP_EUI \
  --frequency-plan-id $FREQUENCY_PLAN \
  --root-keys.app-key.key $APP_KEY \
  --lorawan-version 1.0.3 \
  --lorawan-phy-version 1.0.3-a
```

This will create an end device `dev1` in application `app1` with the `EU_863_870` frequency plan, that uses LoRaWAN 1.0.3 MAC version and 1.0.3-a PHY versions. Make sure to replace the LoRaWAN MAC and PHY versions according to your setup.

Please note that the `AppEUI` is returned as `join_eui` ({{% tts %}} uses LoRaWAN 1.1 terminology).

If your device does not have a JoinEUI, you can use the default Join EUI of the Join Server. To use this, leave the `--join-eui`/`--app-eui` field empty. The CLI will contact the Join Server and get its default.

If your device does not have a DevEUI, set the `--request-dev-eui` flag. The CLI will contact the server and fetch a DevEUI.

{{< warning >}}
You must either use the value DevEUI/JoinEUI that's allotted to your device or let the server define these values as described above. Do not use `0000000000000000` or other randomly generated values as this is not LoRaWAN compliant and your devices will not be interoperable with other networks in the LoRaWAN ecosystem.
{{</ warning >}}

You can also pass `--with-root-keys` to have root keys generated. In this case, you do not need to specify `--root-keys.app-key.key`.

The end device should now be able to join the network.

**LoRaWAN 1.1.x:**

To create an end device using over-the-air-activation (OTAA):

```bash
NWK_KEY="01020304050607080102030405060708"
ttn-lw-cli end-devices create $APP_ID $DEVICE_ID \
  --dev-eui $DEV_EUI \
  --app-eui $APP_EUI \
  --frequency-plan-id $FREQUENCY_PLAN \
  --root-keys.app-key.key $APP_KEY \
  --root-keys.nwk-key.key $NWK_KEY \
  --lorawan-version 1.1.0 \
  --lorawan-phy-version 1.1.0-b
```

This will create an end device `dev1` in application `app1` with the `EU_863_870` frequency plan, that uses LoRaWAN 1.1.0 MAC and 1.1.0-b PHY versions. Make sure you replace these versions according to your setup.

You can also pass `--with-root-keys` to have root keys generated. In this case, you do not need to specify `--root-keys.app-key.key` or `root-keys.nwk-key.key`.

The end device should now be able to join the private network.

{{< /tabs/tab >}}

{{< /tabs/container >}}
