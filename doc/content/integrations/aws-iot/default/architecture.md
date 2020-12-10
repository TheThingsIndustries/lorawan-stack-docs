---
title: "Architecture"
description: ""
weight: 10
---

The AWS IoT Core integration is a serverless deployment that scales automatically as your deployment grows.

<!--more-->

{{< figure src="../architecture.svg" alt="Default integration architecture" class="plain" >}}

The key resources deployed in your AWS account are:

- Cross-account role for {{% tts %}} to connect to your AWS IoT Core MQTT endpoint
- AWS Lambda functions to create the thing type and configure the integration as pub/sub in {{% tts %}}
- AWS Lambda functions for claiming and creating devices, and for handling uplink and downlink messages
- Secret with key encryption key (KEK) to leverage LoRaWAN end-to-end encryption {{< new-in-version "3.10.0" >}}
- IoT Core rules to trigger the Lambda functions based on topics and attributes

This is a serverless deployment: there are no compute resources being deployed. AWS only charges for usage, which is driven by traffic. The only continuous charges are by IoT Core connectivity from {{% tts %}} to your AWS account. All permissions are the minimum permissions for the integration to function.

## End-to-End Encryption {{< new-in-version "3.10.0" >}}

This integration supports true LoRaWAN end-to-end encryption: the application payload is encrypted on the end device with the LoRaWAN AppSKey, and decrypted in your AWS Account. The underlying network infrastructure passes your application payload in the encrypted form - it cannot see your data.

When enabled, this integration configures the Global Join Server with your key encryption key (KEK) that is generated in your AWS Account and stored as a secret in [Secrets Manager](https://aws.amazon.com/secrets-manager/). The Global Join Server encrypts the AppSKey with the KEK before passing it to the network layer. The network layer sends the encrypted AppSKey to your AWS Account, where it gets decrypted. This feature only works with devices registered in the Global Join Server.

When using this feature, your AWS application needs to process the LoRaWAN application payload in binary form, as the network layer's payload encoding and decoding functions cannot work with the encrypted data.
