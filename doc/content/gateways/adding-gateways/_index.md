---
title: "Adding Gateways"
description: ""
weight: -1
aliases: [/getting-started/cli/create-gateway, /getting-started/console/create-gateway]
---

This section contains instructions for adding Gateways in {{%tts%}}.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Adding Gateways using the Console

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

You can also check the **Update from status messages** box if you want to update the location based on the metadata from the incoming uplink gateway status messages. 

{{< note >}} The location settings you manually entered will be overwritten by the updates from the gateway status messages. {{</ note >}}

{{< note >}} {{% tts %}} Console currently supports setting one antenna location per gateway. {{</ note >}}

{{< figure src="gateway-location.png" alt="Gateway location" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Adding Gateways using the CLI

First, list the available frequency plans:

```bash
$ ttn-lw-cli gateways list-frequency-plans
```

Then, create the first gateway with the chosen frequency plan:

```bash
$ ttn-lw-cli gateways create gtw1 \
  --user-id admin \
  --frequency-plan-id EU_863_870 \
  --gateway-eui 00800000A00009EF \
  --enforce-duty-cycle
```

This creates a gateway `gtw1` with user `admin` as collaborator, frequency plan `EU_863_870`, EUI `00800000A00009EF` and respecting duty-cycle limitations. You can now connect your gateway to {{% tts %}}.

{{< note >}} The CLI returns the created and updated entities by default in JSON. This can be useful in scripts. {{</ note >}}

### Create Gateway API Key

Some gateways require an API Key with Link Gateway Rights to be able to connect to {{% tts %}}.

Create an API key for the gateway:

```bash
$ ttn-lw-cli gateways api-keys create \
  --name link \
  --gateway-id gtw1 \
  --right-gateway-link
```

The CLI will return an API key such as `NNSXS.VEEBURF3KR77ZR...`. This API key has only link rights and can therefore only be used for linking this gateway. Make sure to copy the key and save it in a safe place. You will not be able to see this key again in the future, and if you lose it, you can create a new one to replace it in the gateway configuration.

## Set Gateway Location 

Once you have added your gateway to {{% tts %}}, you can also set the locations of the gateway antennas. 

Add an antenna and set its location  with:

```bash
$ GTW_ID="your-gateway-id"
$ ttn-lw-cli gateways set $GTW_ID \
  --antenna.location.latitude 43.84 \
  --antenna.location.longitude 18.32 \
  --antenna.location.altitude 500 \
  --antenna.add \
```

If you do not mind your gateway's location to be publicly displayed, append the `--location-public` flag.

You can also set the gateway location to be updated from various sources with the `--antenna.location.source` flag. The source of the location data can be the registry, GPS data, results of the LoRa RSSI geolocation, etc. 

{{< note >}} Use `ttn-lw-cli gateways set gtw1 --help` command to see the full list of the available location sources and other relatable info. 

If you set the alternative location source, the location settings you manually set will be overwritten by the automatic updates from that source. {{</ note >}}

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

{{< note >}} Keep in mind that if you change the physical location of your gateway, the location update in {{% tts %}} will take place only after you restart the gateway. {{</ note >}}

Once a gateway has been added, get started with [Adding Devices]({{< ref "/devices/adding-devices" >}}) and [Integrations]({{< ref "/integrations" >}}) to process and act on data.
