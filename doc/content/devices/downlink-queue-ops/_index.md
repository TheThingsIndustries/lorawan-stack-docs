---
title: "Downlink Queue Operations"
description: ""
---

{{% tts %}} keeps a queue of downlink messages per device. Applications can keep pushing downlink messages or replace the queue with a list of downlink messages.

You can schedule a downlink using the CLI, MQTT or HTTP webhooks.

This guide shows how to interact with the downlink queue from the command-line interface (CLI).

<!--more-->

{{< cli-only >}}

If there are more application downlink messages in the queue, the Network Server sets the LoRaWAN `FPending` bit to indicate end devices that there is more downlinks available. In class A downlink, this typically triggers the device to send an uplink message to receive the downlink message. In class C, the Network Server automatically transmits all queued downlink messages.

## Push and replace downlink queue

To push downlink to the end of the queue:

```bash
$ ttn-lw-cli end-devices downlink push app1 dev1 \
  --frm-payload 01020304 \
  --priority NORMAL
  --f-port 42
```

You must pass an `FPort` with the `--f-port` flag. Confirmed downlinks can be set using `--confirmed`.

To replace the existing queue with a new item:

```bash
$ ttn-lw-cli end-devices downlink replace app1 dev1 \
  --frm-payload 01020304 \
  --priority NORMAL
  --f-port 42
```

## List queue

To see currently scheduled downlink messages:

```bash
$ ttn-lw-cli end-devices downlink list app1 dev1
```

## Clear queue

To clear scheduled downlink messages:

```bash
$ ttn-lw-cli end-devices downlink clear app1 dev1
```
