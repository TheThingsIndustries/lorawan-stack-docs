---
title: "Claim"
description: ""
weight: 1
aliases:
  - /devices/claim-atecc608a
---

This guide helps device makers to claim Microchip ATECC608 secure elements on The Things Join Server.

<!--more-->

## Prerequisites

1. ATECC608A-TNGLORA or ATECC608B-TNGLORA secure elements. [Product details](https://www.microchip.com/wwwproducts/en/ATECC608A-TNGLORA)
2. Device security (manifest) file. You can obtain this from your [Microchip Direct order history](https://www.microchipdirect.com/orders)
3. Provisioner access to The Things Join Server. [Contact The Things Industries support](mailto:support@thethingsindustries.com) to get access.
4. The Things Join Server command-line interface (`ttjs`) installed. [See instructions to install `ttjs`](https://www.npmjs.com/package/ttjs-cli)

## Initialize `ttjs`

To initialize The Things Join Server CLI `ttjs`, run the following command:

```bash
ttjs init
```

This prompts the URL, provisioner credentials and location to save the configuration:

```
✔ Server URL … https://js.cloud.thethings.industries
✔ Provisioner username … example
✔ Provisioner password … ********************
✔ Configuration file … ~/.config/ttjs/config.yaml
✔ Save configuration … yes
```

Verify that your credentials are correct:

```bash
ttjs list
```

This should return the currently provisioned devices (or `[]` if there aren't any).

## Import manifest

Next, import your manifest file, in this case named `manifest.json`:

```bash
ttjs import -f microchip-atecc608 manifest.json
```

This provisions the secure elements in The Things Join Server and returns the generated owner tokens, for example:

```js
[
  {
    devEUI: "0004A310001AAED6",
    ownerToken: "C05EA29C",
    rootKeysExposed: false,
  },
];
```

The owner token is called claim authentication code in {{% tts %}}. This is the proof of ownership for claiming devices. See [Device Claiming]({{< ref "/devices/concepts/device-claiming" >}}) for more information.

## Export root keys

In case your end devices are to be activated on a LoRaWAN® Network Server that does not support claiming on The Things Join Server, the root keys can be exported:

```bash
ttjs get <dev-eui> --nonces --root-keys
```

{{< warning >}} When you export the root keys, they are marked forever as exposed. This reduces the security of the end device. Current and future owners of the device are not guaranteed privacy and secure activation if the keys are not carefully stored. {{</ warning >}}

This returns the root keys and LoRaWAN nonces (if any):

```js
{
  devEUI: '0004A310001AAED6',
  ownerToken: 'C05EA29C',
  rootKeysExposed: true,
  nonces: { nextJoinNonce: 2, usedDevNonces: [1836, 10331] },
  rootKeys: {
    appKey: '525746CCF9CF5DE887BE5D836D08B5C9',
    nwkKey: 'CB0F4E236567566D2A976B3DAB2CF7A5'
  }
}
```

{{< note >}} The secure elements are pre-provisioned with JoinEUI `70B3D57ED0000000`. {{</ note >}}

This allows you to register the devices on any LoRaWAN Network Server that does not support The Things Join Server.
