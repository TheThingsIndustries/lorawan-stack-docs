---
title: "Application Packages"
description: ""
aliases: "/integrations/application-packages"
---

Application packages specify state machines running both on the end device and the Application Server, as well as signalling messages exchanged between the end device's application layer and the Application Server.

<!--more-->

## Associations and Default Associations

The link between an application or a device and an application package is achieved through associations.

Associations link a device and a FPort to a specific application package. Since you may want to link all of the devices of an application without manually creating an association for each one of them, you may consider a default association, which links the application and a FPort to a specific application package.

All associations with available application packages can be managed [using the CLI]({{< ref "/reference/application-packages/using-the-cli" >}}) or [using the API]({{< ref "/reference/application-packages/using-the-api" >}}).
