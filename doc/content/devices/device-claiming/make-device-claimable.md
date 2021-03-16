---
title: "Make a Device Claimable"
description: ""
weight: 1
distributions: ["Enterprise", "Cloud"]
--- 

This guide explains the process of making a device claimable. When a device is claimable, someone else can claim the device in a secure manner.

<!--more-->

## Prerequisites

1. An application in The Things Stack Cloud. [See instructions]({{< ref "/integrations/adding-applications" >}})

## Authorize Claiming

In order for anyone to claim devices that are registered in your application, you need to authorize claiming. This is needed for {{% tts %}} to move the device out of your application. This needs to be done once, per application.

{{< cli-only >}}

Replace `<app-id>` with the **Application ID** of the application that you created in prerequisites, and run the following command in the CLI:

```bash
$ ttn-lw-cli applications claim authorize <app-id>
```

To undo the action:

```bash
$ ttn-lw-cli application claim unauthorize <app-id>
```

## Register Device

In order to make a device claimable, the device first needs to be added first in the application that has been authorized for claiming.

If you already have devices in your application that can be claimed, i.e. to transfer the ownership, you can go ahead to the next section.

If you don't have a device in the application yet, you can add it by using one of the following ways:

1. [Add a device]({{< relref "../adding-devices/" >}}) in {{% tts %}}
2. [Register a device]({{< ref "/getting-started/cloud-hosted/tti-join-server/register-devices" >}}) on The Things Join Server (i.e. not in a Network Server or Application Server yet)
3. [Import ATECC608A Secure Elements]({{< relref "../claim-atecc608a" >}}) on The Things Join Server. Make sure to enable the **Set claim authentication code** option

## Claiming Settings

When your device is added in {{% tts %}}, you can go ahead and configure claiming settings. This is comprised of a claim authentication code and a validity window. The claim authentication code is a secret value. The validity window is an optional start and end date on which the claim authentication code can be used.

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

Go to your application in {{% tts %}} Console. Go to **End devices** in the left menu and find the device you want to configure for claiming.

Find the claiming settings in the **Claiming** tab:

{{< figure src="../claiming-settings.png" alt="Claiming settings" >}}

To save the claiming settings you edited, click **Save changes**.

To disallow claiming, click **Delete claim authentication code**.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

To configure claiming using the CLI, use the following command:

```bash
$ ttn-lw-cli end-device <app-id> <device-id> --claim-authentication-code.value ABCD \
  --claim-authentication-code.valid-from 2021-03-01T00:00:00Z \
  --claim-authentication-code.valid-from 2021-03-31T23:59:59Z
```

This sets the secret claim authentication code to `ABCD`, that can be used in March 2021.

{{< /tabs/tab >}}

## Generate QR Code for Claiming

You can use QR codes to make claiming really easy. The QR code includes the unique identifiers of the device as well as the secret claim authentication code.

Learn how to [Generate QR Codes]({{< relref "../generate-qr-code#generate-qr-code-for-claiming" >}})
