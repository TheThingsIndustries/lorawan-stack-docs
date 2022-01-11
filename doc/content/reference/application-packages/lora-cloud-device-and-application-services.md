---
title: "LoRa Cloud Device & Application Services"
description: ""
aliases: "/integrations/application-packages/lora-cloud-device-and-application-services"
---

The LoRa Cloud Device & Application Services v1 application package communicates the uplinks received from a compatible device to the LoRa Cloud Device & Application Services, and schedules the downlinks received from the service back to the device.

More information on the LoRa Cloud Device & Application Services can be found in the [official LoRa documentation](https://www.loracloud.com/documentation/device_management?url=overview.html).

## Creating a New Uplink Token

In order to use the LoRa Cloud Device & Application Services application package, a new access token must be created in order to allow the Application Server to send the uplinks to the Device & Application Services. 

The new token can be created in the LoRa Cloud Device & Application Services portal, in the **Token Management** section.

{{< figure src="../lora-dms-token-creation.png" alt="Token creation" >}}

After filling in the token name and clicking the **Add New Token** button, the token will be created.

{{< figure src="../lora-dms-token-created.png" alt="Token created" >}}

## Enabling the Package

{{< cli-only >}}

The package can now be enabled using the `default-associations set` command:

```bash
APP_ID="app1"
F_PORT=199
# Create a JSON formatted file containing the uplink token
echo '{ "token": "AQEAdqwV67..." }' > package-data.json
# Create the association
ttn-lw-cli applications packages default-associations set $APP_ID $F_PORT --package-name lora-cloud-device-management-v1 --data-local-file package-data.json
```

This will enable the package on FPort `199` of all of the devices of application `app1`. You can now use the LoRa Cloud Device & Application Services in order to manage your device!

<details><summary>Output</summary>

```json
{
  "ids": {
    "application_ids": {
      "application_id": "app1"
    },
    "f_port": 199
  },
  "created_at": "2019-12-18T10:35:15.565807113Z",
  "updated_at": "2019-12-18T22:06:21.693359719Z",
  "package_name": "lora-cloud-device-management-v1",
  "data": {
      "token": "AQEAdqwV67..."
    }
}
```
</details>

## Using a Custom Server URL

{{< cli-only >}}

The package may be configured to use a custom server URL using the package data:

```bash
# Create a JSON formatted file containing the uplink token and the server URL
echo '{ "token": "AQEAdqwV67...", "server_url": "https://app.example.com/" }' > package-data.json
# Create or update the default association
ttn-lw-cli applications packages default-associations set $APP_ID $F_PORT --package-name lora-cloud-device-management-v1 --data-local-file package-data.json
```

<details><summary>Output</summary>

```json
{
  "ids": {
    "application_ids": {
      "application_id": "app1"
    },
    "f_port": 199
  },
  "created_at": "2020-05-14T02:04:45.286874524Z",
  "updated_at": "2020-05-14T02:04:45.286874524Z",
  "package_name": "lora-cloud-device-management-v1",
  "data": {
      "server_url": "https://app.example.com",
      "token": "AQEAdqwV67..."
    }
}
```
</details>

## Package Data JSON Schema

The package data format is common between both default associations and associations, and should contain the following fields:

| Field | Type | Description | Required | Default value |
|-------|------|-------------|---------|---------------|
| `token` | `string` | The acces token to be used by the package to submit uplinks to the LoRa Cloud Device & Application Services | Yes | None. |
| `server_url` | `URL` | The custom base URL to be used for service communication | No | `https://das.loracloud.com`

Fields can be customized on a per device basis, by overriding the field in the package data of the association.
