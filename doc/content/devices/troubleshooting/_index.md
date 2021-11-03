---
title: "Troubleshooting Devices"
description: ""
---

This section provides help for common issues and frequently asked questions you may have when adding devices. 

<!--more-->

## I receive an error when registering an end device.

Here are some common errors and solutions:

- **ID already taken**: Another end device in the application is using this ID. Choose a different Device ID. See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for more information.
- **An end device with JoinEUI `<join-eui>` and DevEUI `<dev-eui>` is already registered as `<device-id>` in application `<application-id>`**: Within {{% tts %}} deployment, only a single end device can be registered with a certain combination of DevEUI and JoinEUI/AppEUI. If you previously registered an end device with this combination of DevEUI and JoinEUI, you can delete the existing device and repeat the registration. You can also register the device using another JoinEUI, but keep in mind that you will need to configure that JoinEUI in the device as well.
- **An end device with JoinEUI `<join-eui>` and DevEUI `<dev-eui>` is already registered in another tenant**: Within {{% tts %}} deployment, only a single end device can be registered with a certain combination of DevEUI and JoinEUI/AppEUI, across all tenants. If someone already registered an end device with this combination of DevEUI and JoinEUI, you can contact the manufacturer to check if your EUIs are correct and/or provide you new EUIs. You can also register the device using another JoinEUI, but keep in mind that you will need to configure that JoinEUI in the device as well.
- **Duplicate identifiers**: This error occurs when an end device is deleted from the Identity Server, but the device entry persists in the Join Server, Network Server and Application Server databases. In this case, the device will not appear in {{% tts %}} Console, so you need to check if it is present in the Join Server/Network Server/Application Server components using the following command:

    ```bash
    curl -X 'GET' 'https://thethings.example.com/api/v3/<js/ns/as>/applications/<application_id>/devices/<end-device_id>' -H 'accept: application/json' -H 'Authorization: Bearer <api-key>'
    ```

    If the device entry is present in the above mentioned components, you can delete it with:

    ```bash
    curl 'https://thethings.example.com/api/v3/<js/ns/as>/applications/<application_id>/devices/<end-device_id>' -X DELETE -H 'Accept: application/json' -H 'Authorization: Bearer <api-key>'
    ```

## How do I see device events?

Device event logs can be found in the console in the device's general information page. See [Working with Events]({{< ref "getting-started/events" >}}) for other ways of subscribing to events.

## I see no Join Requests from my device in {{% tts %}}.

Check your network coverage, and if your device is activated and transmitting Join Requests. 

## My device will not join. What do I do?

- Double check your DevEUI, JoinEUI or AppEUI, LoRaWAN and Regional Parameters Version, root keys (AppKey, and with LoRaWAN 1.1 or higher, NwkKey)
- Check gateway and device events for traffic from your device. Below are a few common issues
    - **MIC mismatch** error in the device events: Possible mismatch of AppKey in device firmware to the AppKey registered in {{% tts %}} console. Update the AppKey in the console accordingly
    - **Uplink channel not found** error in the gateway events: Indicates there is a mismatch of the frequency plans. Double check frequency plan settings in your end device and gateways (they must be the same LoRaWAN band)
    - **DevNonce has already been used** error in the device events: Indicates a duplicate use of Devnonce. Generally happens when the device has sent too many unsuccessful Join Requests
    - **DevNonce is too small** error in the device events: If the device is using LoRaWAN MAC version 1.1 or 1.0.4, this error occurs when DevNonce is not being incremented, so the Join Server ignores Join Requests with the same or lower DevNonce value comparing to the previous one. Contact your device's manufacturer to find out the correct LoRaWAN MAC and PHY versions, and configure the device in {{% tts %}} accordingly
    - **Uplink channel not found** error in the device events: The device is transmitting Join Requests in the non-default channels of the band which is not in line with the LoRaWAN Specification. Contact the end-device manufacturer
- Double check your network connection. If there is a slow connection from the server to the gateway, the join accept message may be sent too late (this can happen when a gateway uses 3G as a backhaul). If using the CLI, run `ttn-lw-cli gateways connection-stats <gateway-id>` to see the round trip time (RTT) for your gateway
- Check for duplicate use of JoinNonce (or AppNonce)
- Adjust ADR and link check settings to conditions which the device is located in

## My device is stuck in a continuous join loop. What can I do?

- Check for the errors and solutions listed above
- If the Network Server is processing Join Requests and scheduling Join Accepts, check the gateway events and see whether the Join Accept downlink messages are being scheduled by the gateway
- If you see any deviation in scheduling Join Accept downlinks from the gateway, follow the [Troubleshooting Gateways]({{< ref "/gateways/troubleshooting" >}})

## No downlinks are reaching my device. What do I do?

- Check gateway and application events for traffic from your device
- Check duty cycle restrictions
- Device clock drift often occurs when SF12 is used
- Check your antenna connections

## I do not see any uplinks from my device in the Gateway Live data.

Here are some common causes and solutions:

- The device is not transmitting uplink messages. Check if your device is transmitting uplinks by observing its debug logs.
- The device has no network coverage. Check if your device has a network coverage from any of the gateways registered in your tenant.
- The gateway is not receiving uplinks due to hardware issues. Check if your gateway is receiving uplinks by observing its debug logs.
- The gateway is not forwarding received uplinks to the Network Server. Check your gateway's debug logs for any errors or warnings. Refer to the [Troubleshooting Gateways guide]({{< ref "/gateways/troubleshooting" >}}).

## {{% tts %}} is no longer receiving uplinks from my device. What do I do?

- Check [gateway events](#how-do-i-see-gateway-events) and [device events](#how-do-i-see-device-events) for traffic from your device
- Check for FCnt mismatch on ABP devices

## How to infer a downlink flow in {{% tts %}}?

When scheduling messages for downlink communication, different events are generated by different {{% tts %}} components, and they can be observed on a gateway or on a device level.

Observe the following events in the Live data tab of the device overview in {{% tts %}} Console:
- When the downlink is scheduled, the Application Server generates the `as.down.data.receive` and `as.down.data.forward` events.
- Next, the Network Server schedules the downlink to the Gateway Server. The `ns.down.data.schedule.attempt` and `ns.down.data.schedule.success` events are generated upon successful scheduling of the downlink by the Network Server. If downlink scheduling fails, the `ns.down.data.schedule.fail` event is generated instead.

Observe the following events in the Live data tab of the gateway overview in {{% tts %}} Console:
- If the downlink is successfully scheduled from the Gateway Server to the gateway, the Gateway Server generates the `gs.down.send` and `gs.down.tx.success` events. This indicates that the downlink is successfully sent to the gateway and the gateway scheduled the downlink to be sent to the device. If downlink scheduling fails, the `gs.down.tx.fail` event is generated instead.

> For more information on different events in TTS, read [Events API]({{< ref "/reference/api/events" >}}).

If you did not encounter any deviations in this flow, that should be an indication of a successful downlink scheduling. However, if the downlink is not reaching your device, check the gateway packet forwarder logs and search for any errors that might help you identify the cause of the downlink failure.

## When I schedule a downlink, I see the `ns.down.data.schedule.fail` event in the Live data tab and the downlink message fails to be transmitted.

The `ns.down.data.schedule.fail` event, that can be noticed in the Live data tab of the device overview in {{% tts %}} Console, indicates the downlink scheduling failure at the Network Server.

The `ns.down.data.schedule.fail` event usually occurs with the following errors:
- `no_absolute_gateway_time`: Downlinks are being scheduled with the absolute time, and the absolute time of the Gateway Server is not in sync with the absolute time of the gateway. To sync them, a gateway has to either report its GPS time, or transmit five downlink frames in order for Gateway Server to infer its absolute time by observing RTTs.
- `scheduling_conflict`: Devices are synchronized, i.e. a number of devices are sending joins or uplinks at the same time. To avoid device synchronization, devices need to be configured to initiate joins or send uplinks at random times or with random delays. You can also try with improving the network coverage in your area. See [Best Practices]({{< ref "/devices/best-practices#synchronization-backoff-and-jitter" >}}) for more info about device synchronization.

We also advise to double check your network connection. If the connection between the gateway and the Network Server is slow, downlink messages could be sent too late. For example, this can happen in case of:
- Cellular or satellite gateway backhauls
- Cluster latencies
- Gateway level issues



## Scheduling a downlink from {{% tts %}} Console is disabled with a warning `Simulation is disabled for devices that skip paload crypto`.

When using the [AWS IoT integration]({{< ref "/integrations/cloud-integrations/aws-iot" >}}) with the **End to End Encryption** option enabled, scheduling downlink messages from {{% tts %}} Console is restricted by default.

When this option is enabled, encryption and decryption at the Application Server is disabled, i.e. the `skip_payload_crypto` field for the end device is enabled on the application level. The downlinks are expected to be scheduled from the AWS IoT, and not from the {{% tts %}}.

## {{% tts %}} intermittently receives uplinks from my device, but with the FCnt gap.

Your device probably does not have a good network coverage. Some common reasons:

- The device is using SF7, while it should be using a higher SF for better coverage and reach.
- There might be a conflict in receiving uplinks due to [synchronization of devices]({{< ref "/devices/best-practices#synchronization-backoff-and-jitter" >}}).

Check your network coverage, and make sure your devices are within your gateway's reach and are using a suitable SF.

## I can see some received uplinks in gateway Live data events, but I do not see them in device events.

Possible causes and solutions:

- The Network Server dropping uplink messages received from the gateway
    - The uplinks could be coming from other devices in the gateways range, that are not registered in {{% tts %}}. In this case, you can just ignore them.
    - If you are facing this while trying to activate a device, please double-check that the DevEUI and JoinEUI/AppEUI on {{% tts %}} and on your device match.
- FCnt mismatch
    - For ABP devices, the FCnt mismatch might occur if the device resets while the **Reset Frame Counters** option for the device is disabled. Try enabling the **Reset Frame Counters** option in the device's overview in {{% tts %}} Console, or by setting [MAC commands]({{< ref "/devices/mac-settings#available-mac-settings" >}}) using the CLI.
    - For OTAA devices, the FCnt mismatch might occur due to missing packets. The maximum FCnt gap between two consecutive uplinks is `16384` according to the LoRaWAN specification. Try re-joining your OTAA device.
- Using inappropriate frequencies
    - This case applies only to ABP devices and EU/IN/AS frequency bands. Since the Network Server is initially accepting uplinks from devices only in default channels, uplinks from the device that is using non-default channels are dropped. In this case, **Factory Preset Frequencies** have to be set either in device's overview in {{% tts %}} Console, or by setting [MAC commands]({{< ref "/devices/mac-settings#available-mac-settings" >}}) using the CLI. If these settings are applied to an existing device, you might need to reset the device as well.
