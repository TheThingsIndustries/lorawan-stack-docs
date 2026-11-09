# Homey

> Homey is a smart home hub that can be connected with practically every smart device on the market. This guide shows you how to integrate The Things Stack with a …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/homey/


[Homey](https://homey.app/en-us/) is a smart home hub that can be connected with practically every smart device on the market. This guide shows you how to integrate The Things Stack with a Homey application to get the best out of your LoRaWAN® data.

See [Homey support page](https://support.athom.com/hc/en-us/categories/360000886494) for detailed documentation.

## Prerequisites

1. You need to own a Homey device, such as [Homey Pro](https://homey.app/en-us/store/product/homey-pro/).
2. A [user account on Homey app](https://my.homey.app/login).
3. A [Homey flow](https://homey.app/en-us/flow/FUTQcG/) set up.

## Configure The Things Stack

Before you implement the Webhook integration, you first need to set up a [payload formatter](https://www.thethingsindustries.com/docs/integrations/payload-formatters/).

The Homey application extracts two states (`state1` and `state2`) and two associated values (`value1` and `value2`) from uplinks, which it then uses to trigger events. See the example payload formatter below.

<details><summary>Example payload formatter</summary>

```js
function decodeUplink(input) {
  
  // Assume 4 bytes received, e.g. 0x01, 0x9F
  // state1 & state2 must be strings/ word
  // value1 & value2 must be numbers
  
  // More examples here:
  // https://www.thethingsnetwork.org/docs/devices/bytes/
  
  var data = {};
  
    if (input.bytes[0] == 1){
      data.state1 = "On";
    } else{
      data.state1 = "Off";
    }
    
    if (input.bytes[1] == 1){
      data.state2 = "Open";
    } else{
      data.state2 = "Closed";
    }
    
    data.value1 = 5.2 * input.bytes[2];
    data.value2 = 25 + input.bytes[3];
    
  return {
    data: data,
    warnings: [],
    errors: []
  };
}
```
</details>

To see the payload formatter output (`decoded_payload` field contents) for input `00 01 05 1A`, expand the example below.

<details><summary>Example payload formatter output</summary>

```json
{
  "state1": "Off",
  "state2": "Open",
  "value1": 26,
  "value2": 51
}
```
</details>

To complete the Webhook integration between The Things Stack and your Homey app, you can use the **Homey** [Webhook template](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/).

To integrate, you need to fill in the **Webhook ID** with an arbitrary value, and provide the **Homey Webhook ID** and **Keypath Value** from Homey application. You can find these values by navigating to Homey application's **Settings** page.

![Homey Webhook template](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/homey/homey-template.png)


To see the values of all parameters of the Homey integration, click on the integration after you created it with the Webhook template.

Now your Homey is finally a part of your LoRaWAN network!

For details on setting up a Webhook integration with Homey using The Things Stack Custom webhook, see this [link](https://github.com/OOHehir/connector.ttn).

