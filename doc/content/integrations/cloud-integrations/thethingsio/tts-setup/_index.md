---
title: "Webhook Integration with thethings.iO"
description: ""
weight: 2
---

Follow this section to create a Webhook integration on {{% tts %}} by using thethings.iO [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

<!--more--> 

On {{% tts %}}, navigate to **Integrations &#8594; Webhooks** and choose **thethings.iO** Webhook template.

Name your integration by filling in the **Webhook ID** field. 

Copy the product ID and its hash from thethings.iO **Callback URL** as explained in [thethings.iO Setup]({{< ref "/integrations/cloud-integrations/thethingsio/thethingsio-setup" >}}) section, and paste them into the **Product ID** and the **Hash** fields of the template, respectively.

{{< figure src="thethingsio-webhook-integration.png" alt="Creating the Webhook integration" >}}

Hit the **Create thethings.io webhook** button to finish. 

{{< note >}} To see the values of all parameters of the thethins.iO integration, click on the integration after you created it with the Webhook template. 

If you do this, you will see that the final callback URL has the following structure: `https://subscription.thethings.io/lora/foo/bar?idname=end_device_ids.dev_eui`. {{</ note >}}

