---
title: "evrlast"
description: "Forward LoRaWAN uplinks from The Things Stack to the evrlast cloud platform with a webhook, and manage evrlast LoRaWAN devices"
weight:
---

[evrlast](https://app.evrlast.com) is a cloud platform for the automatic collection, monitoring, and analysis of sensor data. evrlast devices continuously measure environmental and operational parameters, transmit the data wirelessly to the evrlast cloud, and notify users whenever configured thresholds are exceeded. The evrlast web application provides a centralized dashboard for monitoring and managing all sensor data.

In addition to native evrlast devices, {{% tts %}} can be integrated as an additional data provider. Sensor data from {{% tts %}} is forwarded to the evrlast platform using webhooks, allowing you to monitor and analyze LoRaWAN devices from {{% tts %}} alongside your evrlast devices in a single platform.

<!--more-->

{{< note >}} The screenshots in this guide show the German user interface of the evrlast web application. The English labels used in the text correspond to the German labels in the screenshots. {{</ note >}}

## Create an Account

If you do not already have an evrlast account, you first need to register:

1. Open [evrlast](https://app.evrlast.com) in your web browser.
2. Click **Just use this link to register!** and enter your email address and a password.
3. You will receive a confirmation email. Click the link in the email to activate your account.
4. Sign in using your email address and password.

See also the [evrlast documentation](https://docs.evrlast.com/cloud/account_creation/).

## Create an API Key

Open your **User Profile** and navigate to the **API Keys** tab.

1. Click **Add**.
2. Confirm the creation of the new API key in the dialog.

   {{< figure src="create_api_key.png" alt="Create API Key" >}}

3. The following dialog shows the generated **Api Key**, the generated **Api Passwort** (API password) and the **Basic Auth Token**. The Basic Auth Token is the Base64 encoded combination of the API key and the API password, and it is required to configure the webhook. Copy the Basic Auth Token and store it securely.

   {{< figure src="generated_api_key.png" alt="Generated API key" >}}

{{< warning >}} The API password and the Basic Auth Token are shown only once. After you close the dialog, they cannot be displayed again. {{</ warning >}}

To connect your LoRaWAN network server directly with the evrlast cloud, manage the credentials in the **LoRaWAN Networks** tab, as described [below](#create-a-lorawan-network-in-evrlast).

See also the [evrlast documentation](https://docs.evrlast.com/lorawan/api_key/api_key/).

## Create a LoRaWAN Network in evrlast

A **LoRaWAN Network** is only required if you want to connect an **evrlast LoRaWAN device**: it allows the evrlast cloud to communicate directly with your network server, so that the platform can manage the device and its configuration without manual interaction with the LNS. You can skip this section for LoRaWAN devices from other manufacturers.

In the **LoRaWAN Networks** tab of your user profile, you can manage the connections to your LoRaWAN network servers (LNS).

### Gather the Connection Details

To connect the evrlast cloud with {{% tts %}}, you need the following information:

- **Server URL**
- **Application ID**
- **Access Token**

#### Server URL

The server URL is the address of your {{% tts %}} instance.

- For {{% tts %}} Community Edition (The Things Network), use the base URL of your cluster, for example `https://eu1.cloud.thethings.network`.
- For {{% tts %}} Cloud, use the base URL of your tenant, for example `https://<tenant>.eu1.cloud.thethings.industries`.
- If you are using a private installation of {{% tts %}}, use the URL of your own server.

#### Application ID

The **Application ID** uniquely identifies your application in {{% tts %}}.

To find it:

1. Log in to the Console.
2. Open **Applications**.
3. Select the application you want to connect.
4. Copy the **Application ID** displayed on the **General Information** page.

{{< note >}} The Application ID is also visible in the page URL after opening the application. {{</ note >}}

#### Access Token

The evrlast cloud authenticates with {{% tts %}} using an **API key** (access token).

To create one:

1. Open your application in the Console.
2. Navigate to **API keys**.
3. Click **+ Add API key**.
4. Enter a descriptive name, for example `evrlast cloud`.
5. Grant the required permissions. At minimum, the API key needs the following right:

   - Link as Application to a Network Server for traffic exchange, i.e. read uplink and write downlink

   Depending on the functionality used by the evrlast cloud, additional permissions may be required.

6. Click **Create API key**.
7. Copy the generated API key immediately.

{{< warning >}} {{% tts %}} only displays the API key once. Store it securely before leaving the page. {{</ warning >}}

### Add the Connection

Open your **User Profile** and navigate to the **LoRaWAN Networks** tab.

{{< figure src="lorawan_networks_tab.png" alt="LoRaWAN Networks" >}}

1. Click the **+ Add** button in the lower-left corner.
2. In the **Connection Details** dialog, select the **Platform** matching your network server (**TTN**).
3. Fill in the required fields, as described in the table below.
4. Click **Save** to create the connection. Click **Cancel** to discard your changes without saving.

| Field | Description |
|-------|-------------|
| **Name** | A descriptive name for the connection. This name is displayed in the overview. |
| **URL** | The address of the network server. |
| **Port** | The network server port, if required. |
| **Application ID** | Identifier of the application on the network server. |
| **Access Token** | Authentication token or API key used to authenticate with the network server. Click the **eye** icon to reveal the entered value. |

See also the [evrlast documentation](https://docs.evrlast.com/lorawan/networks/lorawan_networks/).

## Create the Webhook

Use the **evrlast** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}.

Enter the **Basic Auth Token** you copied above in the **API credentials** field.

## Register a New Device

In the evrlast web application, click **+ neues Gerät registrieren** (register new device) and select **LoRaWAN**. See also the [evrlast documentation](https://docs.evrlast.com/cloud/lorawan_registration/).

After your device has sent data to the evrlast platform, a device request is created. Confirm it to add the device to your evrlast device pool.

Open the **Device Requests** section in the evrlast web application. This page lists all devices that have recently connected but have not yet been assigned to your evrlast account.

1. Click **Confirm** next to the device you want to register.
2. If you register an evrlast device, select the LoRaWAN Network you created earlier in the dialog that appears. For devices from other manufacturers, you only need to confirm the assignment.
3. Confirm the assignment.
4. The device is automatically added to your **Device List** and is ready for use.

See also the [evrlast documentation](https://docs.evrlast.com/lorawan/thing_request/thing_request/).
