---
title: "Adding Gateways"
description: ""
weight: -2
aliases: [/getting-started/cli/create-gateway, /getting-started/console/create-gateway]
---

This section contains instructions for adding Gateways in {{%tts%}}.

<!--more-->

{{< note >}}
Some gateways, like [The Things Indoor Gateway]({{< ref "gateways/thethingsindoorgateway" >}}), have special instructions for claiming. Look for your gateway in the left hand menu for specific instructions, as this guide does not apply to those gateways.
{{</ note >}}

Adding gateways using the Console or the CLI is usually most convenient, so those methods are extensively explained in this section. However, it is also possible to add gateways [using the API]({{< ref "/getting-started/api#register-a-gateway" >}}).

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Adding Gateways using the Console

In addition to the written instructions below, a video with instructions for adding a gateway is available on [The Things Network youtube channel](https://youtu.be/o6nwc3APXns).

<details><summary>Show video</summary>
{{< youtube "o6nwc3APXns" >}}
</details>

Go to **Gateways** in the top menu, and click **+ Add Gateway** to reach the gateway registration page.

Fill the **Gateway ID**, **Gateway EUI** (if your gateway has an EUI) and **Frequency Plan**. The other fields are optional. Click **Create Gateway** to finish.

{{< figure src="gateway-creation.png" alt="Gateway creation" >}}

Your gateway will be created and you will be redirected to the gateway overview page of your newly created gateway.

{{< figure src="gateway-overview.png" alt="Gateway overview" >}}

You can now connect your gateway to {{% tts %}}.

### Create Gateway API Key

Some gateways require an API Key with Link Gateway Rights to be able to connect to {{% tts %}}. 

In order to do this, navigate to the **API Keys** menu of your gateway and select **Add API Key**. 

Enter a name for your key, select the **Link as Gateway to a Gateway Server for traffic exchange, i.e. write uplink and read downlink** right and then press **Create API Key**.

{{< figure src="gateway-api-key-creation.png" alt="Gateway API Key creation" >}}

You will see a screen that shows your newly created API Key. You now can copy it in your clipboard by pressing the copy button. After saving the key in a safe place, press **I have copied the key**. You will not be able to see this key again in the future, and if you lose it, you can create a new one to replace it in the gateway configuration.

{{< figure src="gateway-api-key-created.png" alt="Gateway API Key created" >}}

## Set Gateway Location

Once you have added your gateway to {{% tts %}}, you can also set its location to be displayed on a map widget by clicking **Change location settings**. 

If you do not mind your gateway's location to be publicly displayed, check the **Publish location** box.

The gateway location can be manually set by entering the **Latitude**, **Longitude** and **Altitude** values. 

You can also check the **Update from status messages** box if you want to update the location based on the metadata from the incoming uplink gateway status messages. The location settings you manually entered will be overwritten by the updates from the gateway status messages.

{{< note >}} {{% tts %}} Console currently supports setting one antenna location per gateway. {{</ note >}}

{{< figure src="gateway-location.png" alt="Gateway location" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Adding Gateways using the CLI

We define some user parameters that will be used below:

```bash
GTW_ID="gtw1" 
FREQUENCY_PLAN="EU_863_870"
GTW_EUI="00800000A00009EF"
USER_ID="admin"
```

Make sure to modify these according to your setup.

First, list the available frequency plans:

```bash
ttn-lw-cli gateways list-frequency-plans
```

Then, create the first gateway with the chosen frequency plan:

```bash
ttn-lw-cli gateways create $GTW_ID \
  --user-id $USER_ID \
  --frequency-plan-id $FREQUENCY_PLAN \
  --gateway-eui $GTW_EUI \
  --enforce-duty-cycle
```

This creates a gateway `gtw1` with user `admin` as collaborator, frequency plan `EU_863_870`, EUI `00800000A00009EF` and respecting duty-cycle limitations. You can now connect your gateway to {{% tts %}}.

### Create Gateway API Key

Some gateways require an API Key with Link Gateway Rights to be able to connect to {{% tts %}}.

Create an API key for the gateway:

```bash
API_KEY_NAME="API key for connecting my gateway"
ttn-lw-cli gateways api-keys create \
  --name $API_KEY_NAME \
  --gateway-id $GTW_ID \
  --right-gateway-link
```

The CLI will return an API key such as `NNSXS.VEEBURF3KR77ZR...`. This API key has only link rights and can therefore only be used for linking this gateway. Make sure to copy the key and save it in a safe place. You will not be able to see this key again in the future, and if you lose it, you can create a new one to replace it in the gateway configuration.

## Set Gateway Location 

Once you have added your gateway to {{% tts %}}, you can also set the locations of the gateway antennas. 

Add an antenna and set its location  with:

```bash
LAT="43.84"
LONG="18.32"
ALT="500"
ttn-lw-cli gateways set $GTW_ID \
  --antenna.location.latitude $LAT \
  --antenna.location.longitude $LONG \
  --antenna.location.altitude $ALT \
  --antenna.add \
```

If you do not mind your gateway's location to be publicly displayed, append the `--location-public` flag.

You can also set the gateway location to be updated from various sources with the `--antenna.location.source` flag. The source of the location data can be the registry, GPS data, results of the LoRa RSSI geolocation, etc.

Use `ttn-lw-cli gateways set $GTW_ID --help` command to see the full list of the available location sources and other relatable info. Keep in mind that if you set the alternative location source, the location settings you manually set will be overwritten by the automatic updates from that source.

The CLI will return something like:

```json
{
  "ids": {
    "gateway_id": "gtw1"
  },
  "created_at": "2020-05-27T14:43:13.606Z",
  "version_ids": {
  },
  "auto_update": true,
  "antennas": [
    {
      "location": {
        "latitude": 43.84,
        "longitude": 18.32,
        "altitude": 500,
        "source": "SOURCE_REGISTRY"
      }
    }
  ],
  "location_public": true
}
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

Keep in mind that if you change the physical location of your gateway, the location update in {{% tts %}} will take place only after you restart the gateway.

## Set Gateway Antenna Gain

{{% cli-only %}}

A preffered way for adjusting a downlink path gain is setting the gateway antenna gain, instead of changing the gateway Tx power. The following command will set the gateway antenna gain to 3 dB:

```bash
GAIN="3"
ttn-lw-cli gateways set $GTW_ID --antenna.gain $GAIN
```

The CLI output will be similar to:

```json
{
  "ids": {
    "gateway_id": "gtw1"
  },
  "created_at": "2020-05-27T14:43:13.606Z",
  "version_ids": {
  },
  "auto_update": true,
  "antennas": [
    {
      "gain": 3,
      "location": {
        "latitude": 43.84,
        "longitude": 18.32,
        "altitude": 500,
        "source": "SOURCE_REGISTRY"
      }
    }
  ],
  "location_public": true
}
```

Keep in mind that the `antennas.location` object will be empty if you have not previously set the gateway antenna location.

Once a gateway has been added, get started with [Adding Devices]({{< ref "/devices/adding-devices" >}}) and [Integrations]({{< ref "/integrations" >}}) to process and act on data.

## Forwarding Uplinks to Packet Broker

In deployments connected to [Packet Broker]({{< ref "/getting-started/packet-broker" >}}), you can control if you want uplinks received by your gateway to be forwarded to Packet Broker or not. In these deployments, uplinks received by your gateway are being forwarded to Packet Broker by default, but you can choose to disable this behavior.

To disable forwarding uplink messages from your gateway to Packet Broker in {{% tts %}} Console, navigate to the **General settings** tab on the left hand menu in your gateway's overview, scroll to the bottom of the **Basic settings** section and tick the **Disabled** box under **Packet Broker** option.

{{< figure src="pb-forwarding.png" alt="Forwarding uplinks to Packet Broker" >}}

To disable forwarding uplink messages from your gateways to Packet Broker using the CLI, use the following command:

```bash
ttn-lw-cli gateways set $GTW_ID --disable-packet-broker-forwarding
```

Keep in mind that changes will apply only after restarting the gateway.