---
title: "Activation by Personalization (ABP)"
description: ""
weight: 2
---

If your device cannot be activated using the more secure OTAA, you may manually activate it by programming security keys it, i.e. using ABP. This guide explains how to add ABP devices manually.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

Click on the **Show advanced activation, LoRaWAN class and cluster settings** select **Activation by Personalization (ABP)**.

Choose the appropriate **Additional LoRaWAN class capabilities**. When using ABP, it is important to make sure that the Rx1 settings in your device match those in {{% tts %}}. Uncheck **Network Defaults** to specify settings that match those in your device. {{% tts %}} recommends an Rx1 delay of `5` seconds, but this value would have to also be programmed into your device.

{{< figure src="abp-network-defaults.png" alt="ABP Network Settings" >}}

Now proceed with **Provisioning information**. Enter a **JoinEUI/AppEUI** if provided by your manufacturer. If it is not provided by the manufacturer and your device is programmable, you can generate a random one in accordance with the test ranges defined by the [IEEE 802 standards](https://ieee802.org/) or use all zeros, just make sure to program the same value into your device. Then click **Confirm**.

Enter your **DevEUI**. This should be provided by your manufacturer for commercial devices. If your device is programmable, you may generate an EUI using the **Generate** button, and program it in your device.

Use the **Generate** button to create a **Device address**, and program it in your device.

For LoRaWAN versions 1.0.x, generate an **AppSKey** and **NwkSKey** and program them in your device.

For LoRaWAN versions 1.1.x, generate an **AppSKey**, **FNwkSIntKey**, **SNwkSIntKey**, and **NwkSEncKey**, and program them in your device.

Finally, give your device a unique **End device ID**. See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for guidelines about choosing a unique ID.

{{< figure src="abp-fields-set.png" alt="ABP fields set" >}}

Click **Register end device** to create the end device.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

First, list the available frequency plans and LoRaWAN versions:

```bash
ttn-lw-cli end-devices list-frequency-plans
ttn-lw-cli end-devices create --help
```

For adding ABP devices, we can define the following parameters:

```bash
APP_ID="app1"
DEVICE_ID="dev1"
FREQUENCY_PLAN="EU_863_870"
DEV_ADDR="00E4304D"
APP_SESSION_KEY="A0CAD5A30036DBE03096EB67CA975BAA"
NWK_SESSION_KEY="B7F3E161BC9D4388E6C788A0C547F255"
```

Make sure you modify these according to your setup.

**LoRaWAN 1.0.x:**

It is also possible to register an ABP activated device using the `--abp` flag as follows:

```bash
ttn-lw-cli end-devices create $APP_ID $DEVICE_ID \
  --frequency-plan-id $FREQUENCY_PLAN \
  --lorawan-version 1.0.3 \
  --lorawan-phy-version 1.0.3-a \
  --abp \
  --session.dev-addr $DEV_ADDR \
  --session.keys.app-s-key.key $APP_SESSION_KEY \
  --session.keys.nwk-s-key.key $NWK_SESSION_KEY
```

This will create an end device `dev1` in application `app1` with the `EU_863_870` frequency plan, that uses LoRaWAN 1.0.3 MAC and 1.0.3-a PHY versions. Make sure you replace these versions according to your setup.

Please note that the `NwkSKey` is returned as `f_nwk_s_int_key` ({{% tts %}} uses LoRaWAN 1.1 terminology).

You can also pass `--with-session` to have a session generated.

**LoRaWAN 1.1.x:**

To register a LoRaWAN 1.1.x end device using ABP:

```bash
F_NWK_SESSION_INT_KEY="01020304050607080102030405060708"
S_NWK_SESSION_INT_KEY="01020304050607080102030405060708"
NWK_SESSION_ENC_KEY="01020304050607080102030405060708"
ttn-lw-cli end-devices create $APP_ID $DEVICE_ID \
  --frequency-plan-id $FREQUENCY_PLAN \
  --lorawan-version 1.1.0 \
  --lorawan-phy-version 1.1.0-b \
  --abp \
  --session.dev-addr $DEV_ADDR \
  --session.keys.app-s-key.key $APP_SESSION_KEY \
  --session.keys.nwk-s-key.key $NWK_SESSION_KEY
  --session.keys.f-nwk-s-int-key.key $F_NWK_SESSION_INT_KEY \
  --session.keys.s-nwk-s-int-key.key $S_NWK_SESSION_INT_KEY \
  --session.keys.nwk-s-enc-key.key $NWK_SESSION_ENC_KEY
```

This will create an end device `dev1` in application `app1` with the `EU_863_870` frequency plan, that uses LoRaWAN 1.1.0 MAC and 1.1.0-b PHY versions. Make sure you replace these versions according to your setup.

You can also pass `--with-session` to have a session generated.

{{< /tabs/tab >}}

{{< /tabs/container >}}
