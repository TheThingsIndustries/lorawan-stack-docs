---
title: "Make a Device Claimable"
description: ""
weight: 1
--- 

This guide explains the process of making a device claimable 

<!--more-->

{{< cli-only >}}

## Prerequisites

1. Access to The Things Industries Cloud Hosted. [Contact The Things Industries](mailto:cloud@thethingsindustries.com) to get onboarded.
3. An application in The Things Industries Cloud Hosted. [See instructions]({{< ref "/getting-started/console#create-application" >}})

## Register Devices

In order to be claimable the device needs to be registered on The Things Industries Join Server. This can be done in multiple ways.

### Registered on The Things Industries Join Server Only

1. With root keys and claim authentication code  
   Follow the [Register Devices]({{< ref "/getting-started/cloud-hosted/tti-join-server/register-devices" >}}) guide.

2. With secure element claiming  
   Follow the [Claim ATECC608A Secure Elements]({{< ref "/devices/claim-atecc608a" >}}) guide.

### Registered on The Things Industries Join Server and Configured in a Cloud Hosted Cluster

1. With root keys and claim authentication code  
   Follow the [Activating Devices on Cloud Hosted]({{< ref "/getting-started/cloud-hosted/tti-join-server/activate-devices-cloud-hosted" >}}) guide.

2. With secure element claiming  
   Follow the [Claim ATECC608A Secure Elements]({{< ref "/devices/claim-atecc608a" >}}) and [Activating Devices on Cloud Hosted]({{< ref "/getting-started/cloud-hosted/tti-join-server/activate-devices-cloud-hosted" >}}) guides.

## Generate QR code for claiming

After registering your devices, you need to generate QR codes for claiming

Learn here how to [Generate QR Codes]({{< ref "/devices/generate-qr-code/end-devices#generate-qr-code-for-claiming" >}}).

## Authorize Claiming
  
Replace `<app-id>` with the **Application ID** of the application that you created in prerequisites, and run the following command in the CLI:

```
$ ttn-lw-cli applications claim authorize <app-id>
```

The device is now ready to be claimed. You can test it by creating a second application and claiming a device there.
