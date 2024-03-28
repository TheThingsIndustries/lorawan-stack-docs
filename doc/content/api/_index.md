---
title: "API"
description: ""
aliases:
  ["/api/reference/grpc", "/the-things-stack/interact/api/", "/reference/api"]
weight: 7
menu:
  main:
    weight: 7
---

{{% tts %}} is API first by design and has rich support for various kinds of APIs. This section introduces the reader to the different types of APIs supported by {{% tts %}}, basic concepts required to use the APIs and full reference list of all the supported APIs.

<!-- more -->

<div class="fixed-table table-api">

| Type                                                      | Description                                                                                                              |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [HTTP (REST)]({{< ref "/api/reference/http" >}})          | {{% tts %}} HTTP (REST) APIs are primarily used for managing entities (ex: Devices, gateways, users, organizations etc). |
| [gRPC]({{< ref "/api/reference/grpc" >}})                 | {{% tts %}} backend components communicate with each other primarily using [gRPC](https://grpc.io/).                     |
| [LoRa® Gateway]({{< ref "/api/concepts/lora-gateway" >}}) | APIs for LoRa® Gateways to communicate with {{% tts %}}.                                                                 |
| [Application Integrations]({{< ref "/integrations" >}})   | APIs to read/receive application data and send downlinks to devices.                                                     |

</div>

<br/>

The [concepts]({{< ref "/api/concepts" >}}) section introduces important concepts required to use {{% tts %}} APIs. Make sure to read these guides before using {{% tts %}} APIs.

The [reference]({{< ref "/api/reference" >}}) section contains references on the different APIs supported by {{% tts %}}.
