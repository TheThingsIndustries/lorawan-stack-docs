---
title: "Microsoft Azure"
description: ""
weight: 
aliases: ["/integrations/cloud-integrations/microsoft-azure/azure-setup", "/integrations/cloud-integrations/microsoft-azure/tts-setup"]
---

[Azure](https://azure.microsoft.com/) is a cloud computing platform, created by Microsoft, for building and managing aplications and services, while supporting many different programming languages, frameworks and tools.

<!--more-->

In this guide, we use [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/) serverless service to run a function which can be triggered by an HTTP request. Since Azure offers many complex features, these instructions will help you to make a Webhook integration with {{% tts %}} in only a few easy steps.

## Prerequisites

1. A [user account on Azure](https://azure.microsoft.com/en-us/free/).

## Setup Azure

{{< note >}} More detailed instructions for creating Azure functions can be found in the [official Azure documentation](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function). {{</ note >}}

First, navigate to the Azure services dashboard and click on **Function App** service.

{{< figure src="azure-services-dashboard.png" alt="Function app in Azure services dashboard" >}}

Once you are in **Function App** creation wizard, all the options that you will need for this guide are in the **Basics** tab. 

Fill in the **Subscription** and **Resource Group** fields according to your preferences. If it is your first time using the Azure, you will have to create a new resource group.

Next, you have to provide a globally unique **Function App name**. After deploying your function, you can check if it is running by navigating to `https://{function_app_name}.azurewebsites.net/`.

Choose **Code** for **Publish** to publish your code files (the alternative would be publishing a Docker container). 

Since you can use different programming languages for your function, you have to choose an appropriate **Runtime stack**. In this guide, we use a **C#** function, therefore we choose **.NET Core** runtime stack. Also, you need to choose the **Version** of the installed runtime. The most recent version will automatically be suggested to you.

Choose a **Region** nearest to you, or near other services that your functions access. 

{{< figure src="creating-a-function-app.png" alt="Creating Azure function app" >}}

When finished, click on **Review + create** button, and then once again on **Create** button. At this point, you should see something like this:

{{< figure src="successfully-deployed-function-app.png" alt="Function app deployment complete" >}}

To view and manage your function app, select **Go to resource**.

In the next step, you will be creating a function inside your function app. From the left hand **Functions** menu, choose **Functions** and click on **Add** button. 

In the **New Function** pop-up menu, select **HTTP trigger**. Give your function a recognizable name and choose **Function** for **Authorization level**. 

{{< note >}} **Authorization level** defines whether the function requires an API key and if so, what kind (function or master key). Depending on this, an API key may be a part of the webhook URL. {{</ note >}}

Select **Create Function** to finish. 

{{< figure src="http-trigger-function-creation.png" alt="Creating HTTP trigger function" >}}

After creating a function, click on it and select **Code + Test** in the **Developer** menu on the left. Modify the function code as shown below in order to show incoming messages in JSON format. 

Also make sure to copy the **function URL**, because you will need it when creating a Webhook integration on {{% tts %}}. 

{{< figure src="http-trigger-function-code.png" alt="HTTP trigger function code" >}}

Finally, expand the **Logs** in the bottom and click on the **Start** button.

## Configure The Things Stack

{{< note >}} This section follows the [Creating HTTP Webhooks]({{< ref "/integrations/webhooks/creating-webhooks" >}}) guide. {{</ note >}}

Fill in the **Webhook ID** field and choose **JSON** for **Webhook format**. 

Fill in the **Base URL** field with the function URL you copied from Azure in the previous step. 

Check the message types for which you wish to enable this webhook and finish creating an integration with **Add Webhook** button in the bottom. 

{{< figure src="azure-webhook-creation.png" alt="Azure webhook" >}}

After creating the integration, navigate to the logs console in Azure to see the incoming messages printed in JSON format.
