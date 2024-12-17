---
title: "Troubleshooting"
description: "Troubleshooting API"
weight: 6
---

This section provides help for common issues and frequently asked questions you may have when using the API.

<!--more-->

###### "Forbidden path(s) in field mask" error

This error usually occurs when wrong path(s) are specified in the `field_mask` object in the API request body. See [Fields and Field Masks]({{< ref "/api/concepts/fieldmasks" >}}) section and make sure that paths listed under your `field_mask` are correct.

###### When adding a device, I get an "invalid end_device: embedded message failed validation" error.

The most common cause for this error is not following the regex pattern in the `device_id` field. See [End Device APIs]({{< ref "/api/reference/grpc/end_device#message:EndDeviceIdentifiers" >}}) section and make sure your `device_id` is in line with the defined regex pattern. See also [ID and EUI constaints]({{< ref "/concepts/architecture/id-eui-constraints" >}}) documentation.

###### Listing gateways via API call works for the eu1 {{% tts %}} Cloud cluster, but won't work for the nam1 cluster.

Unlike other server components, the Identity Server component of {{% tts %}} is hosted only in the `eu1` cluster for [{{% tts %}} Cloud]({{< ref "/concepts/server-addresses#api-endpoints" >}}) and [{{% tts %}} Sandbox]({{< ref "/concepts/ttn/addresses#api-endpoints" >}}). This is the reason why Identity Server API request to any cluster other than `eu1` will fail.

###### "426 Upgrade Required" error

This error indicates that the client HTTP protocol version is old, so the server refuses to perform the request and requires a client update to HTTP 1.1 version or higher.

###### "no_application_rights" or "no_user_rights" error

The API key you are using doesn't have sufficient rights to perform the desired API request. It might also be caused by a missing `Bearer` keyword in the `Authorization` header used in the API call.

To resolve this issue, make sure your API key has necessary rights to interact with the desired entity. Also, make sure to use the `Bearer` keyword when specifying the `Authorization` header.

###### "api_key_not_found" error

This error indicates that the specified API key used for the API call is not valid or doesn't exist at all. Double-check that the API key you provided is correct and still valid. If it is expired, you can generate a new API key and update your API call request with the new one.

###### "unauthenticated" error

This error occurs when the API request is made without proper authentication credentials. Make sure to include the correct API key in the authentication request header.

###### "URL using bad/illegal format or missing URL" error

The URL format in the API call command is incorrect or missing. Please make sure that the URL syntax is correct, that it includes all necessary parameters and that the specified endpoint is properly configured.
