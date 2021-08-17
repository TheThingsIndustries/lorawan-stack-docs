---
title: "Update"
description: ""
weight: 60
---

You can update the Azure IoT Hub integration for {{% tts %}} using [Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview) easily. In most cases, this is without service interruptions.

<!--more-->

> Download the latest template from [here](https://ttsiothubintegration.blob.core.windows.net/integration-releases/latest/main.json)

In the Azure Console, open your Resource Group and go to **Deployments**.

In the list of deployments, go to the deployment that you created when deploying the integration. See [Deployment Guide]({{< relref "deployment" >}}).

In the top-right, click **Redeploy**.

{{< figure src="../deployments.png" alt="Deployments" >}}

Click **Edit template**.

{{< figure src="../deployment-1.png" alt="Deployment View" >}}

Click **Load file** and select the template you have just downloaded.

{{< figure src="../load-template-1.png" alt="Edit Template" >}}

Click **Save**.

Now, create a new API key as described in the [Deployment Guide]({{< relref "deployment" >}}). Provide the created API key for **Stack API Key**.

{{< figure src="../deployment-1.png" alt="Deployment View" >}}

Review the parameters. Unless new functionality adds new parameters, you can leave the current values unchanged.

Click **Review + Create**, then **Create**.

{{< note >}} Updating all resources can take up to 5 minutes. {{</ note >}}

When the deployment is updated, you'll see the status `Your deployment is complete`.
