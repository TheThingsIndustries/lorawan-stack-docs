---
title: "Downlink Queue Operations"
description: ""
weight: 7
---

{{% tts %}} keeps a queue of downlink messages per device. Applications can keep pushing downlink messages or replace the queue with a list of downlink messages.

<!--more-->

You can schedule a downlink using the CLI, MQTT or HTTP webhooks.

To schedule downlinks using MQTT, see [MQTT Server]({{< ref "integrations/mqtt" >}}). To schedule downlinks using webhooks, see [Scheduling Downlinks with Webhooks]({{< ref "integrations/webhooks/scheduling-downlinks" >}}).

{{< note >}} See the [Confirmed Downlinks Behavior]({{< ref "/devices/concepts/confirmed-downlinks-behavior" >}}) section to learn how confirmed downlinks behavior for class B and class C devices differs from confirmed downlinks behavior for class A devices. {{</ note >}}

This guide shows how to interact with the downlink queue from the command-line interface (CLI).

{{< cli-only >}}

If there are more application downlink messages in the queue, the Network Server sets the LoRaWAN® `FPending` bit to indicate end devices that there is more downlinks available. In class A downlink, this typically triggers the device to send an uplink message to receive the downlink message. In class C, the Network Server automatically transmits all queued downlink messages.

We define some user parameters that will be used below:

```bash
APP_ID="app1"
DEVICE_ID="dev1"
PAYLOAD="01020304"
PRIORITY="NORMAL"
F_PORT="42"
```

Make sure to modify these according to your setup.

## Push and replace downlink queue

To push downlink to the end of the queue:

```bash
ttn-lw-cli end-devices downlink push $APP_ID $DEVICE_ID \
  --frm-payload $PAYLOAD \
  --priority $PRIORITY \
  --f-port $F_PORT
```

You must pass an `FPort` with the `--f-port` flag. Confirmed downlinks can be set using `--confirmed`.

To replace the existing queue with a new item:

```bash
ttn-lw-cli end-devices downlink replace $APP_ID $DEVICE_ID \
  --frm-payload $PAYLOAD \
  --priority $PRIORITY \
  --f-port $F_PORT
```

{{% tts %}} limits the application downlink queue on 10k messages per end device. When this limit is reached, no more scheduled downlinks can be placed in the queue and {{% tts %}} will drop them. In order to avoid hitting the application downlink queue limit and loosing downlinks, we advise scheduling downlink messages in batches.

## List queue

To see currently scheduled downlink messages:

```bash
ttn-lw-cli end-devices downlink list $APP_ID $DEVICE_ID
```

## Clear queue

To clear scheduled downlink messages:

```bash
ttn-lw-cli end-devices downlink clear $APP_ID $DEVICE_ID
```
