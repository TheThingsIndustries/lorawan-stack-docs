---
title: "Transfer to new Join Server"
description: ""
weight: 2
distributions: ["Enterprise", "Cloud"]
---

ATECC608A/B secure elements are provisioned to The Things Join Server. This Join Server supports activation with all LoRaWAN Backend Interfaces compliant Network Servers. You don't need to be a user of {{% tts %}} to activate devices with a secure element via The Things Join Server.

<!--more-->

If you don't want to use The Things Join Server, you can transfer to a new Join Server. There are two options for doing so, which are both explained in this section.

## New `JoinEUI`

Regardless of how the root keys are transferred, a new Join Server requires a new `JoinEUI` (or `AppEUI`) for the end devices. This is because the `JoinEUI` with which the secure elements are provisioned points exclusively to The Things Join Server.

The `JoinEUI`, like `DevEUI`, is issued from an MAC-S (OUI-36), MAC-M (OUI-28) or MAC-L (OUI) block that is obtained from the IEEE. [Apply for an assignment](https://regauth.standards.ieee.org/standards-ra-web/pub/view.html#registries).

## Export Root Keys

The first option is to export the root keys from The Things Join Server. The root keys are normally not exposed to users, but they can be exported with the purpose of transferring to a different Join Server.

The requester must provide an RSA public key (see [RFC 3447](https://tools.ietf.org/html/rfc3447)) with which The Things Join Server will encrypt the root keys. The root keys are returned as [JSON Web Encryption (JWE)](https://openid.net/specs/draft-jones-json-web-encryption-02.html#sec.asymmetric_encryption) per end device.

Once the keys are exported, they are still in The Things Join Server. The end devices should be deleted from The Things Join Server to ensure that activations will not be handled by The Things Join Server anymore.

{{< note >}}Currently, this process is not readily available for self service with {{% tts %}} CLI or Console. Please contact support for help.{{< /note >}}

## Rekeying

{{< warning >}}Rekeying requires LoRaWAN 1.1.1 and is not expected before Q4 2021. The ATECC608A/B secure elements are however prepared to support this rekeying procedure.{{< /warning >}}

The second option is to rekey the secure elements. This works by sending an instruction to rekey to the end device as part of the LoRaWAN 1.1.1 join-accept. This instruction contains the new `JoinEUI` and a security cookie, or number used once (nonce), that the end device calculates as (non-secret) input to a key derivation function to derive new root keys. The join-accept does not contain the new root key(s): the ATECC608A/B is provisioned with a secret rekeying key from which new root keys can be derived.

The requester can instruct The Things Join Server to rekey the end device. The requester must provide a new `JoinEUI` pointing to the new Join Server. The Things Join Server generates a new security cookie with which it derives the new root keys. The new root keys are exported as JWE (see above), that the requester can use to import in the new Join Server. Whenever the end device joins next, The Things Join Server sends the rekey instruction as part of the join-accept. The end device derives the new root keys with the same key derivation function as The Things Join Server and sets the new `JoinEUI`. The end device will then perform a second join, which will be answered by the new Join Server.
