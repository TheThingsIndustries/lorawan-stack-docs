---
title: "Adding Applications"
description: ""
weight: -1
aliases: [/getting-started/cli/create-application, /getting-started/console/create-application, /guides/getting-started/console/create-application]
---

This section contains instructions for creating an Application.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Adding Applications using the Console

In addition to the written instructions below, a video with instructions for adding an application is available on [The Things Network youtube channel](https://youtu.be/403yK_RaONE).

<details><summary>Show video</summary>
{{< youtube "403yK_RaONE" >}}
</details>

Go to **Applications** in the top menu, and click **+ Add Application** to reach the application registration page. Fill the application ID. The other fields are optional. 

Click **Create Application** to create the application.

{{< figure src="application-creation.png" alt="Application creation" >}}

Your application will be created and you will be redirected to the application overview page of your newly created application.

{{< figure src="application-overview.png" alt="Application overview" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Adding Applications using the CLI

Create the first application:

```bash
APP_ID="app1"
USER_ID="admin"
ttn-lw-cli applications create $APP_ID --user-id $USER_ID
```

This creates an application `app1` with the `admin` user as collaborator. Make sure to modify user parameters according to your setup.

{{< /tabs/tab >}}

{{< /tabs/container >}}

Next, see [Adding Integrations]({{< ref "/integrations/adding-integrations" >}}) to proceed with using the built-in [MQTT Server]({{< ref "/integrations/mqtt" >}}) and [HTTP Webhooks]({{< ref "/integrations/webhooks" >}}) for receiving uplink and sending downlink traffic.

End devices are also created within applications. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) for more information.

## Payload Encryption and Decryption

LoRaWAN frames are encrypted and decrypted on the application layer using the AppSKey by default.

Once the application is created, you can update your application settings to skip uplink payload decryption and downlink payload encryption. This will cause the Application Server to forward messages to integrations without any processing, for example it will neglect [payload formatters]({{< ref "/integrations/payload-formatters" >}}), meaning the integrations will be responsible for decrypting uplink messages in order to understand them. Also, scheduling downlinks from {{% tts %}} will be restricted, as it is expected for downlinks in that case to be scheduled from integrations.

To configure this setting, navigate to your applications's **General settings** tab in the Console and check the **Enabled** box under **Skip payload encryption and decryption** section.

{{< figure src="skip-payload-crypto.png" alt="Skip payload encryption and decryption" >}}
