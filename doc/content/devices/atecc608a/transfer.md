---
title: "Transfer to new Join Server"
description: ""
weight: 2
distributions: ["Enterprise", "Cloud"]
---

ATECC608A/B secure elements are provisioned to The Things Join Server. This Join Server supports activation with all LoRaWAN Backend Interfaces compliant Network Servers. You don't need to be a user of {{% tts %}} to activate devices with a secure element via The Things Join Server.

<!--more-->

In some scenarios, it is not feasible to use The Things Join Server. For instance, when the Network Server is deployed in a network with no internet access, when the LoRaWAN Network Server does not support the LoRaWAN Backend Interfaces, or when the LoRaWAN network operator wants to have access to the root keys.

To use the ATECC608A/B secure elements in these scenarios, you can transfer the root keys from The Things Join Server to a new Join Server. There are two options for doing so, which are both explained in this section.

## New `JoinEUI`

Regardless of how the root keys are transferred, a new Join Server requires a new `JoinEUI` (or `AppEUI`) for the end devices. This is because the `JoinEUI`, with which the secure elements are provisioned with, points exclusively to The Things Join Server.

The `JoinEUI`, just like `DevEUI`, is issued from an MAC-S (OUI-36), MAC-M (OUI-28) or MAC-L (OUI) block that can be obtained from IEEE. [Apply for an assignment](https://regauth.standards.ieee.org/standards-ra-web/pub/view.html#registries).

## Export Root Keys

The first option is to export the root keys from The Things Join Server. The root keys are normally not exposed to users, but they can be exported with the purpose of transferring to a different Join Server.

The requester must provide an RSA public key (see [RFC 3447](https://tools.ietf.org/html/rfc3447)) with which The Things Join Server will encrypt the root keys with. The root keys are returned as a [JSON Web Encryption (JWE)](https://openid.net/specs/draft-jones-json-web-encryption-02.html#sec.asymmetric_encryption) per end device.

Once the keys are exported, they are retained in The Things Join Server. The end devices should be deleted from The Things Join Server to ensure that activations of those devices will not be handled by The Things Join Server anymore.

{{< note >}}Currently, this process is not readily available for self service with {{% tts %}} CLI or Console. Please [contact The Things Industries support](mailto:support@thethingsindustries.com) for help.{{< /note >}}

## Rekeying

{{< warning >}}Rekeying requires LoRaWAN 1.1.1 and this specification revision is not expected to be available before Q4 2021. However, ATECC608A/B secure elements are already prepared to support the rekeying procedure.{{< /warning >}}

The second option is to rekey the secure elements. This works by sending an instruction to rekey to the end device as part of the LoRaWAN 1.1.1 join-accept. This instruction contains the new `JoinEUI` and a security cookie, or number used once (nonce), that the end device calculates as (non-secret) input to a key derivation function to derive new root keys. The join-accept does not contain the new root key(s): the ATECC608A/B is provisioned with a secret rekeying key from which new root keys can be derived.

The requester can instruct The Things Join Server to rekey the end device. The requester must provide a new `JoinEUI` pointing to the new Join Server. The Things Join Server generates a new security cookie with which it derives the new root keys. The new root keys are exported as JWE (see above), that the requester can use to import the new root keys in the new Join Server. Whenever the end device joins next, The Things Join Server will send the rekey instruction as part of the join-accept. The end device will then use the security cookie from the rekey instruction to derive the new root keys. Also, the end device sets the new `JoinEUI` from the rekey instruction. The end device will then perform a second join-request which will be answered by the new Join Server.
