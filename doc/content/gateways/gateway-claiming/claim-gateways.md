---
title: "Claim a Gateway"
description: ""
weight: 2
distributions: ["Enterprise", "Cloud"]
--- 

You can update the example below with your tenant ID and cluster ID by filling them here.

{{< tenant-cluster-selector >}}

## Prerequisites

1. An account in The Things Industries Cloud.
2. EUI of the gateway that you wish to claim.
3. The Claim Authentication Code for the gateway (shared out of band by the current gateway owner).
4. The Current CUPS Key used by the gateway (for {{% lbs %}} only).

## General

The `--target-gateway-id` field is optional. If left blank, the server will attempt to use `eui-<gateway-id>` as the gateway ID. If a gateway already exists with either Gateway ID values, claiming will fail.

If the gateway has been successfully claimed, so you can return to the Console and you will see it in your list of gateways.

Once a gateway is claimed, it needs to restarted for the new changes to take effect.

### Claim a Gateway (LoRa Basics Station)

If the gateway is a {{% lbs %}} Gateway and has a CUPS server configured to a The Things Industries Cloud tenant, then you must additionally setup CUPS redirection. This means that when the newly claimed gateway connects to the CUPS server, the server will update the CUPS endpoint and credentials to the ones of the new owner.

The additional fields that need to be set are
- `--target-cups-uri`: The URI of the CUPS server once the gateway is claimed. For The Things Industries Cloud, this would be;
    <p>
    <code data-content="cluster-address">
    https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:443
    </code>
    </p>

- `--current-gateway-key`: The API Key by the gateway currently to connect to the CUPS Server.

{{< cli-only >}}

Replace `<gateway-id>` with the **Gateway ID** of the gateway that you created in prerequisites, and run the following command in the CLI:

```bash
$ ttn-lw-cli gateways claim <gateway-eui> --authentication-code <claim-authentication-code> --user-id <user-id> --target-gateway-id [target-gateway-id] --target-cups-uri <target-cups-uri> --current-gateway-key <current-cups-key>
```

### Claim a Gateway (non LoRa Basics Station)

{{< cli-only >}}

Replace `<gateway-id>` with the **Gateway ID** of the gateway that you created in prerequisites, and run the following command in the CLI:

```bash
$ ttn-lw-cli gateways claim <gateway-eui> --authentication-code <claim-authentication-code> --user-id <user-id> --target-gateway-id [target-gateway-id]
```
