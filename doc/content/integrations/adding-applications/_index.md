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
$ ttn-lw-cli applications create app1 --user-id admin
```

This creates an application `app1` with the `admin` user as collaborator.

{{< /tabs/tab >}}

{{< /tabs/container >}}

Next, see [Adding Integrations]({{< ref "/integrations/adding-integrations" >}}) to proceed with using the built-in [MQTT Server]({{< ref "/integrations/mqtt" >}}) and [HTTP Webhooks]({{< ref "/integrations/webhooks" >}}) for receiving uplink and sending downlink traffic.

End devices are also created within applications. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) for more information.
