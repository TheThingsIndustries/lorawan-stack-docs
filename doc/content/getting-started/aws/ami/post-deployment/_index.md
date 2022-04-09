---
title: "Post Deployment Configuration"
description: ""
weight: 2
aliases: "/guides/aws/ami/after-deploy"
---

This section provides the information necessary to get started with {{% tts %}} after it is deployed via [AWS Marketplace](https://aws.amazon.com/marketplace/pp/The-Things-Industries-The-Things-Enterprise-Stack/B081HZKDJ4) using AWS CloudFormation.

<!--more-->

## DNS Configuration

In order to access the Console/API of the {{% tts %}}, the domain name chosen during deployment must be mapped to the public IP address of the CloudFormation stack. This section provides details on how to do that.

1. Log in AWS Console and open the CloudFormation resource and click on your recently deployed stack.
2. Navigate to the **Outputs** tab and copy the value of the **PublicIP** field.

Now, login to the Domain Name Management window of the Domain Name Registrar to which your preferred Domain is registered. Create a DNS **A** record with the parameters shown below.

|**Name**|**Record Type**|**Value**|
|---|---|---|
|`@`|`A`|**PublicIP**|

If you are using a sub-domain:

|**Name**|**Record Type**|**Value**|
|---|---|---|
|`sub-domain`|`A`|**PublicIP**|

For example, if your **PublicIP** value is `3.12.14.15` and your sub-domain is `lorawan.mycompany.com`, then navigate to the management tab for the domain `mycompany.com` and perform the following mapping:

|**Name**|**Record Type**|**Value**|
|---|---|---|
|`lorawan`|`A`|3.12.14.15|

There will be an initial propagation delay for this value to be updated. You can check the status via a DNS lookup using either an [online tool](https://network-tools.webwiz.net/nslookup.htm) or using a command line tool (ex: `nslookup`).

Once the domain has been propagated, the DNS Lookup will show that your Domain (or sub-domain) is pointing to the **PublicIP** value.

### SSL Certificates

As a security measure, plaintext access to the Console/API is disabled. In order to serve requests securely, {{% tts %}} has built-in support to automatically request, serve and renew SSL certificates.

Apart from the DNS mapping above, no additional steps are necessary for this.

## Getting Started using the Console

Please check the [Console]({{< ref "/getting-started/console" >}}) guide to get quickly started with {{% tts %}} Console.

## Getting Started using the Command Line Interface (CLI)

Please check the [CLI]({{< ref "/getting-started/cli" >}}) guide to get quickly started with {{% tts %}} CLI.

## SSH Access

In most cases, you will interact with {{% tts %}} only via the Console or the CLI. However, in case there is a need to directly access the EC2 instance, there is an option to do so via SSH.

SSH access is possible only via the IP addresses set using the **Restrict SSH Access to IP Range** parameter during deployment. Also, the SSH client needs access to the private key corresponding to the public key that was chosen in the **SSH Key** parameter during deployment. The SSH username is `ec2-user`.

For example, you can use the OpenSSH client via the terminal and login using:

```bash
ssh -i <private-key-file> ec2-user@PublicIP
```

Upon accessing the machine, navigate to the `tti` directory:

```bash
cd /tti
```

This directory is structured as follows:

```
├── acme                        # contains SSL certificates and related files
├── bootstrap                   # contains logs generated during deployment and restarts
└── lorawan-stack
    ├── config.yml              # The Things Stack Enterprise configuration
    ├── environment             # additional environment variables
    ├── lorawan-frequency-plans # contains a local copy of the LoRaWAN Frequency Plans Repository
    ├── public                  # contains the static assets
    └── tti-lw-stack            # The Things Stack Enterprise binary
```

{{% tts %}} binary is run as a `systemd` service. In order to check the logs, run the following:

```bash
sudo journalctl -f -u lorawan-stack.service
```

## Routing LoRaWAN Traffic

Now that your stack has been successfully deployed, let's look at how to connect a LoRaWAN Gateway, Register a LoRaWAN Device and read traffic from this device.

### Connecting a Gateway

Please check [Gateways]({{< relref "gateways" >}}) section to find an extensive connecting guide for the particular brand/model of your gateway.

### Registering a Device

Please check the [Adding Devices]({{< relref "devices/adding-devices" >}}) guide.

## AWS IoT

{{% tts %}} supports publishing of uplink messages directly to the [AWS IoT suite](https://aws.amazon.com/iot/). In order for this to work, the **AWS IoT Telemetry** option in the CloudFormation template must be set to **true** during the deployment phase.

Please check the guide on [AWS IoT]({{< relref "integrations/cloud-integrations/aws-iot" >}}) guide for more information.
