---
title: "Make a Device Claimable"
description: ""
weight: 1
distributions: ["Enterprise", "Cloud"]
--- 

{{< cli-only >}}

This guide explains the process of making a device claimable.

<!--more-->

## Prerequisites

1. Access to The Things Industries Cloud. [Contact The Things Industries](mailto:cloud@thethingsindustries.com) to get onboarded
2. An application in The Things Industries Cloud. [See instructions]({{< ref "/integrations/adding-applications" >}})

## Register Devices

In order to be claimable, the device needs to be registered on The Things Join Server. This can be done in multiple ways.

### Registered on The Things Join Server Only

1. With root keys and claim authentication code
- Follow the [Register Devices]({{< ref "/getting-started/cloud-hosted/tti-join-server/register-devices" >}}) guide.

2. With secure element claiming
- Follow the [Claim ATECC608A Secure Elements]({{< ref "/devices/claim-atecc608a" >}}) guide.

### Registered on The Things Join Server and Configured in a Cloud Cluster

1. With root keys and claim authentication code
- Follow the [Activating Devices on Cloud]({{< ref "/getting-started/cloud-hosted/tti-join-server/activate-devices-cloud-hosted" >}}) guide.

2. With secure element claiming
- Follow the [Claim ATECC608A Secure Elements]({{< ref "/devices/claim-atecc608a" >}}) and [Activating Devices on Cloud]({{< ref "/getting-started/cloud-hosted/tti-join-server/activate-devices-cloud-hosted" >}}) guides.

## Generate QR code for claiming

After registering your devices, you need to generate QR codes for claiming.

Learn how to [Generate QR Codes]({{< ref "/devices/generate-qr-code#generate-qr-code-for-claiming" >}})

## Authorize Claiming
  
Replace `<app-id>` with the **Application ID** of the application that you created in prerequisites, and run the following command in the CLI:

```
$ ttn-lw-cli applications claim authorize <app-id>
```

The device is now ready to be claimed. You can test it by creating a second application and claiming a device there.
