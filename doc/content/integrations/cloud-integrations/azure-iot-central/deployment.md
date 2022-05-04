---
title: "Deployment Guide"
description: ""
weight: 20
---

Learn how to deploy the Azure IoT Ce4ntral integration for {{% tts %}}.

<!--more-->

## Prerequisites

1. Access to an Azure account. [Create a new account](https://signup.azure.com/)
2. An application in {{% tts %}}. [See instructions]({{< ref "/integrations/adding-applications" >}})

## Create API Key

Go to your application in {{% tts %}} Console, navigate to **Integrations &#8594; Azure IoT** on the left hand menu and click on **Expand** next to **Azure IoT Central**. Now click on **Generate API Key**.

{{< figure src="../create-api-key.png" alt="Create API key" >}}

Copy the generated API key and store it in a safe place, because you will need it in the next section.

Leave the integration page open, as you will need to copy in your **Azure Device Provisioning Service scope ID** and **Azure Device Provisioning Service access key** before saving the integration.

## Create Device Connection Group

Go to your Azure IoT Central Application, navigate to **Permissions &#8594; Device connection groups** on the left hand menu and click on **+ New**.

{{< figure src="../create-dev-conn-group.png" alt="Create Device Connection Group" >}}

Enter a **Name** for your Device Connection group, such as `the-things-stack`, then select the **Attestation type** **_Shared access signature (SAS)_**, then click on **Save**

{{< figure src="../save-dev-conn-group.png" alt="Save Device Connection Group" >}}

You will now be presented with the Device Connection Group overview.

{{< figure src="../copy-scope-details.png" alt="Device Connection Group Overview" >}}

The **ID scope** can now be copied into your integration settings as **Azure Device Provisioning Service scope ID**, and the **Primary key** can be copied as the **Azure Device Provisioning Service access key**. Click on **Enable/Update Azure IoT Central integration**.

{{< figure src="../save-integration-settings.png" alt="Save Integration Settings" >}}

## Data Export

Go back to your Azure IoT Central Application, navigate to **Data export &#8594; Destinations** on the left hand menu and click on **+ New destination**.

{{< figure src="../create-data-export-destination.png" alt="Create Data Export Destination" >}}

Enter a **Destination name**, such as `the-things-stack-destination`.

Select the **Destination type** **_Webhook_**, then enter the **Callback URL** mentioned in the {{% tts %}} Azure IoT Central integration page under **Data Export address**.

Select the **Authorization** **_Authorization token_** and input the API key generated in the previous step. Click on **Save**.

{{< figure src="../save-data-export-destination.png" alt="Save Data Export Destination" >}}

Navigate to **Data export &#8594; Exports** on the left hand menu and click on **+ New export**.

{{< figure src="../create-data-export.png" alt="Create Data Export" >}}

Enter a **Export name**, such `the-things-stack-export`.

Select the **Type of data to export** **_Property changes_**.

Click on **+Destinations**.

{{< figure src="../save-data-export-1.png" alt="Save Data Export 1" >}}

Under **Select your destination** chose the export destination you have create previously.

Click on **+Transform** and input the following query under **2. Build transformation Query**.

```
if .messageType == "devicePropertyDesiredChange" then
    {
        deviceId: .device.id,
        messageType: .messageType,
        properties: .device.properties.reported |
            map(
                select(
                    (.name == "decodedPayload") or
                    (.name == "rawDownlink")
                )
            ),
    }
else
    empty
end
```

Click on **Add**.

{{< figure src="../add-transformation-query.png" alt="Add Transformation Query" >}}

Click on **Save** in order to save the Data Export.

> Congratulations! 🎉 You have now set up the Azure IoT Central integration for {{% tts %}}!
