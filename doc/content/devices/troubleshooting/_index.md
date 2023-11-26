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

## I cannot access my device in {{% tts %}} Console.

If you cannot access your device in the Console, i.e. you're seeing the `An unknown error occured. Please try again later...` error, your device is probably not properly provisioned in all {{% tts %}} components (Identity Server, Join Server, Network Server and Application Server). For example, this might happen if you tried to create your device [using the API]({{< ref "/the-things-stack/interact/api/#multi-step-actions" >}}), but you haven't created it properly in all four server components.

This error can be resolved if you delete your device from all four above mentioned server components, and recreate it from scratch.

To check if your device is present in the Identity Server component:

```bash
curl -X 'GET' 'https://thethings.example.com/api/v3/applications/<application_id>/devices/<device_id>' -H 'Accept: application/json' -H 'Authorization: Bearer <api-key>'
```

To check if your device is present in Join Server, Network Server and/or Application Server:

```bash
curl -X 'GET' 'https://thethings.example.com/api/v3/<js/ns/as>/applications/<application_id>/devices/<device_id>' -H 'Accept: application/json' -H 'Authorization: Bearer <api-key>'
```

To delete your device from Identity Server:

```bash
curl -X DELETE 'https://thethings.example.com/api/v3/applications/<application_id>/devices/<device_id>' -H 'Accept: application/json' -H 'Authorization: Bearer <api-key>'
```

To delete your device from Join Server, Network Server and/or Application Server:

```bash
curl -X DELETE 'https://thethings.example.com/api/v3/<js/ns/as>/applications/<application_id>/devices/<device_id>' -H 'Accept: application/json' -H 'Authorization: Bearer <api-key>'
```

Next, recreate your device as documented in the [Using the API]({{< ref "/the-things-stack/interact/api/#multi-step-actions" >}}) section.

## I see "Unable to access the end device" error

If you're facing this error, your end device has probably been configured with incorrect server addresses, so {{% tts %}} Console treats and shows it as in `Other cluster`. To regain access to your end device, you should configure it with the correct server addresses. That can be done by accessing device's **General settings** and configuring server addresses, or by deleting and recreating the end device with appropriate server addresses.
 
## How do I see device events?

Device event logs can be found in the console in the device's general information page. See [Working with Events]({{< ref "the-things-stack/management/events" >}}) for other ways of subscribing to events.

## I see no Join Requests from my device in {{% tts %}}.

Check your network coverage, and if your device is activated and transmitting Join Requests.

It is possible that your device is sending Join Requests on non-default frequencies, i.e. on frequencies that {{% tts %}} is not listening on by default. If this is the case, Join Requests will be dropped on a gateway level. As per LoRaWAN® specification, devices should be sending Join Requests on default frequencies of the defined frequency band. To fix this issue, reach out to your device manufacturer and find out which are the default frequencies for your device. Also, check out [using inappropriate frequencies](#i-can-see-some-received-uplinks-in-gateway-live-data-events-but-i-do-not-see-them-in-device-events) below.

## My device will not join. What do I do?

- Double check your DevEUI, JoinEUI or AppEUI, LoRaWAN and Regional Parameters Version, root keys (AppKey, and with LoRaWAN 1.1 or higher, NwkKey)
- Check gateway and device events for traffic from your device. Below are a few common issues

  - **MIC mismatch** error in the device events: Possible mismatch of AppKey in device firmware to the AppKey registered in {{% tts %}} Console. Update the AppKey in the Console accordingly. Another cause can be using both AppKey and NwkKey for devices configured as LoRaWAN v1.0.x, where the Network Server will consider the device as capable for LoRaWAN v1.1. The configured NwkKey will be used for calculating the MIC and session key derivation in {{% tts %}} instead of AppKey, while the device will be using AppKey, causing the aforementioned error. You can use the command below to unset the NwkKey for the device:

  ```bash
  ttn-lw-cli end-devices set --application-id <app-id> --device-id <dev-id> --unset root-keys.nwk-key
  ```

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
- Did you schedule a command to reset your device as a confirmed downlink? If yes, the downlink confirmation will never arrive. You should always schedule the reset command as an unconfirmed downlink. However, if your device is already affected, use the **Reset session and MAC state** option under **Network layer** in your device's settings, then manually re-join the device.

## I see the "The LoRaWAN version `<mac-version>` does not support the `<frequency-plan-id>` frequency plan. Please choose a different MAC version or frequency plan" error while registering a device in {{% tts %}}.

{{% tts %}} returns this error when the frequency plan that you are using is not supported by the LoRaWAN MAC and PHY versions you specified. We suggest you to check your device's datasheet or user manual, or to contact your device manufacturer to find out correct MAC and PHY versions. You can also find your Regional Parameters document on the [LoRa Alliance site](https://lora-alliance.org/search-site/) and find out which frequency plans are supported by it.

## No downlinks are reaching my device. What do I do?

- Check gateway and application events for traffic from your device
- Check duty cycle restrictions
- Device clock drift often occurs when SF12 is used
- Check your antenna connections

## I do not see any uplinks from my device in the Gateway Live data.

Here are some common causes and solutions:

- The device is not transmitting uplink messages. Check if your device is transmitting uplinks by observing its debug logs.
- The device has no network coverage. Check if your device has a network coverage from any of the gateways registered in your tenant.
- The device is transmitting data in a different FSB (frequency sub-band) than the one that the gateway is listening on. Check if the frequency plan and FSB that the gateway listens on are correctly configured on {{% tts %}} and on the device.
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
- `scheduling_conflict`: Devices are synchronized, i.e. a number of devices are sending joins or uplinks at the same time. To avoid device synchronization, devices need to be configured to initiate joins or send uplinks at random times or with random delays. You can also try with improving the network coverage in your area. See [Best Practices]({{< ref "/devices/concepts/best-practices#synchronization-backoff-and-jitter" >}}) for more info about device synchronization.

We also advise to double check your network connection. If the connection between the gateway and the Network Server is slow, downlink messages could be sent too late. For example, this can happen in case of:

- Cellular or satellite gateway backhauls
- Cluster latencies
- Gateway level issues

## Scheduling a downlink from {{% tts %}} Console is disabled with a warning "Simulation is disabled for devices that skip payload crypto".

When using the [AWS IoT integration]({{< ref "/integrations/cloud-integrations/aws-iot" >}}) with the **End to End Encryption** option enabled, scheduling downlink messages from {{% tts %}} Console is restricted by default.

When this option is enabled, encryption and decryption at the Application Server is disabled, i.e. the `skip_payload_crypto` field for the end device is enabled on the application level. The downlinks are expected to be scheduled from the AWS IoT, and not from the {{% tts %}}.

Read more about skipping payload crypto option on an [application level]({{< ref "/integrations/adding-applications#payload-encryption-and-decryption" >}}) or on a [device level]({{< ref "/devices/adding-devices#application-layer-settings" >}}).

## {{% tts %}} intermittently receives uplinks from my device, but with the FCnt gap.

Your device probably does not have a good network coverage. Some common reasons:

- The device is using SF7, while it should be using a higher SF for better coverage and reach.
- There might be a conflict in receiving uplinks due to [synchronization of devices]({{< ref "/devices/concepts/best-practices#synchronization-backoff-and-jitter" >}}).

Check your network coverage, and make sure your devices are within your gateway's reach and are using a suitable SF.

## I can see some received uplinks in gateway Live data events, but I do not see them in device events.

Possible causes and solutions:

- The Network Server dropping uplink messages received from the gateway
  - The uplinks could be coming from other devices in the gateways range, that are not registered in {{% tts %}}. In this case, you can just ignore them.
  - If you are facing this while trying to activate a device, please double-check that the DevEUI and JoinEUI/AppEUI on {{% tts %}} and on your device match.
- FCnt mismatch
  - For ABP devices, the FCnt mismatch might occur if the device resets while the **Reset Frame Counters** option for the device is disabled. Try enabling the **Reset Frame Counters** option in the device's overview in {{% tts %}} Console, or by setting [MAC commands]({{< ref "/devices/configuring-devices/mac-settings#available-mac-settings" >}}) using the CLI.
  - For OTAA devices, the FCnt mismatch might occur due to missing packets. The maximum FCnt gap between two consecutive uplinks is `16384` according to the LoRaWAN specification. Try re-joining your OTAA device.
- Using inappropriate frequencies
  - This case applies only to ABP devices and EU/IN/AS frequency bands. Since the Network Server is initially accepting uplinks from devices only in default channels, uplinks from the device that is using non-default channels are dropped. In this case, **Factory Preset Frequencies** have to be set either in device's overview in {{% tts %}} Console, or by setting [MAC commands]({{< ref "/devices/configuring-devices/mac-settings#available-mac-settings" >}}) using the CLI. If these settings are applied to an existing device, you might need to reset the device as well.
- Session keys mismatch
  - For ABP devices, if there is a mismatch between session keys (AppSKey and NwkSKey) that are hardcoded in the device and those used when registering the device on {{% tts %}}, uplinks will not be seen in the device's Live data tab. Please cross-check that your device's session keys match the ones used upon registration on {{% tts %}}.

This problem can also occur after [migrating an active device session]({{< ref "/the-things-stack/migrating/migrating-from-v2/migrate-using-migration-tool/migrate-active-session" >}}) from {{% ttnv2 %}} to {{% tts %}}, for devices that transmit uplinks on frequencies that are not part of the standard [frequency plans]({{< ref "/reference/frequency-plans" >}}) used by {{% tts %}}. The issue arises from the fact that factory preset frequencies were not stored in {{% ttnv2 %}}, so they are not present in the [JSON file]({{< ref "/devices/adding-devices/adding-devices-in-bulk/device-json" >}}) used for importing devices in {{% tts %}}. There are two possible solutions:

- If the end device can be reset, i.e. if it can perform a re-join to {{% tts %}} network or at least reset frame counters (for ABP devices)
  - Go to **General settings** in the device overview in {{% tts %}} Console, navigate to **Network layer &#8594; Advanced MAC settings** and set the **Factory preset frequencies**, then click the **Reset session and MAC state** button. By resetting the device, a new session will be established with {{% tts %}} Network Server and the uplinks on the defined frequencies will be accepted.
- If the end device cannot be reset
  - Changes related to factory preset frequencies take effect only after a device reset, but applying the fix explained above will break the existing device session. If you really want to keep the active session or simply cannot reset the device physically, you can try adding the frequency channels manually in the `mac_state.current.channels` and `mac_state.desired_channels` parameters of the [JSON file]({{< ref "/devices/adding-devices/adding-devices-in-bulk/device-json" >}}) before you import it to {{% tts %}}.

## I notice a delay in scheduling Class C downlinks. What can I do to fix it?

Here are some common causes of a delay in scheduling downlinks for Class C devices:

- **The `Supports class C` option not enabled in device settings**: If this option is not enabled, {{% tts %}} treats the device as a class A device, so it schedules a downlink only after receiving an uplink. Find and enable this option under **General settings &#8594; Network layer &#8594; LoRaWAN class capabilities**, then trigger your device for a re-join in order for changes to have an effect.
- **Device not responding immediately on a confirmed downlink or a MAC command**: Your device might be configured to respond to confirmed downlinks and/or MAC commands with the next uplink, instead of immediately. All downlinks scheduled after the confirmed downlink or a MAC command will be in a pending state until the device responds with an ACK or a MAC answer. You can check pending requests with `ttn-lw-cli end-devices get --application-id <app-id> --device-id <dev-id> --mac-state > <dev-id>.mac-state.txt`. If the device does not respond in the `class-c-timeout` interval (5 minutes by default), all pending downlinks will be discarded. In this case, you need to configure your device to immediately answer confirmed downlinks and MAC commands.
- **Downlink failure**: If you have already addressed the above mentioned cases, but you are still experiencing a delay in scheduling downlinks, the downlinks might not be reaching the device. Please check your end device's debug logs, and your gateway's packet forwarder logs for errors. Find the common gateway-related issues and solutions in the [Troubleshooting Gateways]({{< ref "/gateways/troubleshooting" >}}) section.

## I see downlinks being sent after every uplink message, but I did not schedule any. What are those downlinks?

One of the possible causes might be that your end device is not answering MAC commands sent by the Network Server. The Network Server will continuously re-send those MAC commands, until the end device answers them. The recommended practice is to contact device manufacturer to resolve the issue.

## I'm facing errors when trying to change my device's frequency plan.

The Network Server performs a lot of checks to ensure that the end device MAC state and MAC settings are valid with respect to the frequency plan, so that is probably the source of errors you are facing. The most common error is `Invalid value of field mac_settings.rx2_data_rate_index.value`.

Updating device's frequency plan in {{% tts %}} is available in some cases, e.g. for devices that haven't been activated yet, or when changing spreading factor only, for example from Europe 863-870 MHz (SF9 for RX2) plan to Europe 863-870 MHz (SF12 for RX2).

Generally speaking, changing frequency plans in {{% tts %}} is not recommended and in large number of cases not available either, so you should always recreate your end device using the desired frequency plan.

## I see a "no decoder defined for codec {codec_id}" error after very downlink message.

This error indicates that your end device was added from the [Device Repository](https://github.com/TheThingsNetwork/lorawan-devices), but in the device's codec file there are no `downlinkEncoder` and `downlinkDecoder` functions defined. To fix this, you can reach out to the device manufacturer to update your device's codec file in the Device Repository. Alternatively, you can define the [payload formatter]({{< ref "/integrations/payload-formatters" >}}) on your own.

## Transmitting downlink message fails with the collision packet error.

The `COLLISION_PACKET` error occurs when downlink transmissions overlap - this happens when two or more packets overlap in time and use the same spreading factor, bandwith and frequency plan settings.

To avoid packet collisions, users can enable server-side buffering of donwlink messages. If server-side buffering is enabled, the Gateway Server schedules the downlink message to be sent after the downlink message that was already queued but not sent yet, so that their transmissions don't overlap. To enable this, navigate to your gateway's **General settings** section, expand the **LoRaWAN** section and **Enable** the **Schedule downlink late** option by ticking the box. Note that this is a recommended setting for gateways that use [UDP packet forwarder]({{< ref "/gateways/concepts/udp" >}}).
