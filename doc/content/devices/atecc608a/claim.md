---
title: "Claim"
description: ""
weight: 1
distributions: ["Enterprise", "Cloud"]
aliases:
  - "/devices/claim-atecc608a"
---

This guide helps device makers to claim Microchip ATECC608A/B secure elements on The Things Join Server.

<!--more-->

## Prerequisites

1. ATECC608A-TNGLORA or ATECC608B-TNGLORA secure elements. [Product details](https://www.microchip.com/wwwproducts/en/ATECC608A-TNGLORA)
2. Device security (manifest) file. You can obtain this from your [Microchip Direct order history](https://www.microchipdirect.com/orders)
3. Access to {{% tts %}} Cloud. [Contact The Things Industries](mailto:cloud@thethingsindustries.com) to get onboarded
4. An application in {{% tts %}} Cloud. [See instructions]({{< ref "/integrations/adding-applications" >}})
5. Your The Things Join Server address. [See Join Server addresses]({{< ref "/getting-started/cloud-hosted/tti-join-server" >}})

## Import Manifest

Visit the Console of The Things Join Server, e.g.:

`https://<tenant-id>.join.cloud.thethings.industries/console`

Go to the **Applications** menu and select your application. 

Go to **Devices** and click **Import Devices** button in the upper right. 

As **Format**, select **Microchip ATECC608A-TNGLORA Manifest File**.

Click **Select a file** and open your manifest file. If you want to make your device available for claiming by other users, check **Set claim authentication code**.

{{< figure src="../import-devices-settings.png" alt="Import settings" >}}   

Click **Create Devices** to finish.

{{< figure src="../import-devices-progress.png" alt="Import progress" >}}

Your secure elements are now claimed in your application. The secure elements cannot be claimed by anyone else until you delete the devices.

Note that claiming the secure elements only creates devices on the Join Server, but they are not registered on a Network Server or Application Server yet. You first need to register them on a Network Server and Application Server before you can activate the devices.

[Learn how to activate devices on {{% tts %}} Cloud]({{< ref "/getting-started/cloud-hosted/tti-join-server/activate-devices-cloud-hosted" >}})
