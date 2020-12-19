---
title: "Claim ATECC608A Secure Elements"
description: ""
distributions: ["Enterprise", "Cloud"]
---

The Things Industries and Microchip developed a security solution for LoRaWAN that enables secure key provisioning and secure cryptographic operations using secure elements.

This guide helps device makers to claim secure elements on The Things Join Server.

<!--more-->

[Learn more about this solution](https://www.thethingsindustries.com/technology/security-solution)

## Prerequisites

1. ATECC608A-TNGLORA secure elements. [Product details](https://www.microchip.com/wwwproducts/en/ATECC608A-TNGLORA)
2. Device security (manifest) file. You can obtain this from your [Microchip Direct order history](https://www.microchipdirect.com/orders)
3. Access to The Things Industries Cloud. [Contact The Things Industries](mailto:cloud@thethingsindustries.com) to get onboarded
4. An application in The Things Industries Cloud. [See instructions]({{< ref "/integrations/adding-applications" >}})
5. Your The Things Join Server address. [See Join Server addresses]({{< ref "/getting-started/cloud-hosted/tti-join-server" >}})

## Import Manifest

Go to the Console of The Things Join Server, e.g. `https://<tenant-id>.join.cloud.thethings.industries/console`.

Go to the **Applications** and select your application. 

Go to **Devices** and click **Import Devices** button in the upper right. 

As **Format**, select **Microchip ATECC608A-TNGLORA Manifest File**.

Click **Select a file** and open your manifest file. If you want to make your device available for claiming by other users, check **Set claim authentication code**.

{{< figure src="import-devices-settings.png" alt="Import settings" >}}   

Click **Create Devices** to finish.

{{< figure src="import-devices-progress.png" alt="Import progress" >}}

Your secure elements are now claimed in your application. The secure elements cannot be claimed by anyone else until you delete the devices.

Note that claiming the secure elements only creates devices on the Join Server, but they are not registered on a Network Server or Application Server yet. You first need to register them on a Network Server and Application Server before you can activate the devices.

[Learn how to activate devices on The Things Industries Cloud]({{< ref "/getting-started/cloud-hosted/tti-join-server/activate-devices-cloud-hosted" >}})
