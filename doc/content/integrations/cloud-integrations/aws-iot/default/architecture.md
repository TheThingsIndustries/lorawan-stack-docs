---
title: "Architecture"
description: ""
weight: 10
aliases: ["/integrations/aws-iot/default/architecture"]
---

The AWS IoT Core integration is a serverless deployment that scales automatically as your deployment grows.

<!--more-->

{{< figure src="../architecture.svg" alt="Default integration architecture" class="plain" >}}

The key resources deployed in your AWS account are:

- Cross-account role for {{% tts %}} to connect to your AWS IoT Core MQTT endpoint
- AWS Lambda functions to create the thing type and configure the integration as pub/sub in {{% tts %}}
- AWS Lambda functions for claiming and creating devices, and for handling uplink and downlink messages
- Secret with key encryption key (KEK) to leverage LoRaWAN end-to-end encryption
- IoT Core rules to trigger the Lambda functions based on topics and attributes

This is a serverless deployment: there are no compute resources being deployed. AWS only charges for usage, which is driven by traffic. The only continuous charges are by IoT Core connectivity from {{% tts %}} to your AWS account. All permissions are the minimum permissions for the integration to function.

## End-to-End Encryption {#end-to-end-encryption}

This integration supports true LoRaWAN end-to-end encryption: the application payload is encrypted on the end device with the LoRaWAN AppSKey, and decrypted in your AWS Account. The underlying network infrastructure passes your application payload in the encrypted form - it cannot see your data.

When end-to-end encryption is enabled, this integration configures Join Server with your key encryption key (KEK) that is generated in your AWS Account and stored as a secret in [Secrets Manager](https://aws.amazon.com/secrets-manager/). Join Server encrypts the AppSKey with the KEK before passing it to the network layer. The network layer sends the encrypted AppSKey to your AWS Account, where it gets decrypted. 

{{< note >}} This feature only works with OTAA devices registered in the in-cluster Join Server or The Things Join Server.{{</ note >}}

When using this feature, your AWS application needs to process the LoRaWAN application payload in binary form, as the network layer's payload encoding and decoding functions cannot work with the encrypted data.

{{< note >}} When **End-to-End Encryption** option on AWS is enabled, the **Skip Payload Crypto** option will be enabled on the application level in {{% tts %}}. In this case, scheduling downlink messages from {{% tts %}} is restricted, and can only be achieved from AWS. Downlink scheduling through the Console and CLI is not supported. {{</ note >}}
