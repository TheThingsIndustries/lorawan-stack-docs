---
title: "thethings.iO Setup"
description: ""
weight: 1
---

Before creating the Webhook integration on {{% tts %}}, follow this section to prepare the setup on thethings.iO first.

<!--more-->

Log in to your thethings.iO user account.

On the left hand menu, navigate to **Things**.

Click the **Create new IoT product** button. Give it a **Name**, choose **LoRa** as its format and finish with the **Create** button.

{{< figure src="create-new-iot-product.png" alt="Creating a new IoT product" >}}

{{< note >}} To parse the data coming from {{% tts %}}, you will use thething.iO's [Cloud Code Function](https://developers.thethings.io/docs/cloud-code-functions). {{</ note >}}

On the left hand menu, navigate to **Cloud Code**. Since you have created a new LoRa product, a `lora_parser` Cloud Code Function is automatically generated for you - you can find it under **Functions**.

{{< figure src="cloud-code-function.png" alt="Auto-generated Cloud Code Function" >}}

{{< note >}} To parse the data correctly, you need to modify this function according to the payload you are sending from {{% tts %}}. Checking [Data Formats](https://www.thethingsindustries.com/docs/reference/data-formats/) in the the official {{% tts %}} documentation might be useful. {{</ note >}}

To modify the `lora_parser` function code, click the **Edit** button on its right. 

In the **Code** window, paste the following code, adjust it to your uplink data and click **Save**:

```js
function main(params, callback){
  var payload = params.payload.uplink_message.decoded_payload;
  var result = [
    {
      "key": "battery",
      "value": payload.battery
    }
  ]
  callback(null, result); 
}
```

{{< figure src="modify-cloud-code-function.png" alt="Modifying the Cloud Code Function" >}}

Once you have created the product and the parser function, thethings.iO setup is ready. The next step will be creating the Webhook integration on {{% tts %}}. 

To complete the Webhook integration, you will need some information about the product you created in the previous steps. You can find the **Product ID** and its **Hash** in the **Details** window of the created product.

{{< figure src="callback-url.png" alt="Callback URL" >}}

At this point, you can see that the API has not been called yet. Also, if you scroll down and check the **Things** section, you will see that your product does not have any things activated yet. After we complete the integration, a thing will be activated within your product, you will see the API calls and you will be able to visualize the incoming data!
