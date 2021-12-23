---
title: "Make a Gateway Claimable"
description: ""
weight: 1
distributions: ["Enterprise", "Cloud"]
--- 

{{< cli-only >}}

This guide explains the process of making a gateway claimable. When a gateway is claimable, someone else can claim it securely.

<!--more-->

## Prerequisites

1. An gateway registered in a The Things Stack Cloud or The Things Stack Enterprise cluster [See instructions]({{< ref "/gateways/adding-gateways" >}}).

## Authorize Claiming

In order for anyone to claim a gateway that is owned by you, you need to authorize claiming. This is needed for {{% tts %}} to move the gateway to the other user. This needs to be done separately for each gateway.

Replace `<gateway-id>` with the **Gateway ID** of the gateway that you created in prerequisites, and run the following command in the CLI:

```bash
ttn-lw-cli gateways claim authorize <gateway-id>
```

To undo the action:

```bash
ttn-lw-cli gateways claim unauthorize <gateway-id>
```

## Claiming Settings

When a gateway is added in {{% tts %}}, its claiming settings can be configured.

This is comprised of a claim authentication code and a validity window. The claim authentication code is a secret value. The validity window is an optional start and end date on which the claim authentication code can be used.

The claim authentication code value should be in hex while updating the gateway. Refer to the following example.

```bash
CAC=ABCD
CAC_IN_HEX=$(echo -n "$CAC" | xxd -ps -u -c 8192)
ttn-lw-cli gateways update <gateway-id> --claim-authentication-code.secret.value $CAC_IN_HEX \
  --claim-authentication-code.valid-from 2021-03-01T00:00:00Z \
  --claim-authentication-code.valid-from 2021-03-31T23:59:59Z
```

This sets the secret claim authentication code secret value to `ABCD`, that can be used in March 2021. Please adapt these values for your specific case.

{{< warning >}} The claim authentication code allows anyone who has it to claim your gateway. Make sure to use a value that cannot be easily guessed and share it only with the intended recipient. {{</ warning >}}
