---
title: "Post Deployment Configuration"
description: ""
weight: 2
aliases:
    - /guides/aws/ami/after-deploy/
---

This section provides the information necessary to get started with The Things Enterprise Stack after it is deployed via [AWS Marketplace](https://aws.amazon.com/marketplace/pp/The-Things-Industries-The-Things-Enterprise-Stack/B081HZKDJ4) using AWS CloudFormation.

## DNS configuration

In order to access the Console/API of the {{% tts %}}, the domain name chosen during deployment must be mapped to the public IP address of the CloudFormation stack. This section provides details on how to do that.

1. In AWS Console and open the CloudFormation resource and click on your recently deployed stack.
2. Navigate to the **Outputs** tab and copy the value of the **PublicIP** field.

Now, login to the Domain Name Management window of the Domain Name Registrar to which your preferred Domain is registered. Create a DNS **A** record with the parameters shown below.

|**Name**|**Record Type**|**Value**|
|---|---|---|
|`@`|`A`|**PublicIP**|

If you are using a sub-domain,

|**Name**|**Record Type**|**Value**|
|---|---|---|
|`sub-domain`|`A`|**PublicIP**|

For example, if your **PublicIP** value is `3.12.14.15` and your sub-domain is `lorawan.mycompany.com`, then navigate to the management tab for the domain `mycompany.com` and perform the following mapping

|**Name**|**Record Type**|**Value**|
|---|---|---|
|`lorawan`|`A`|3.12.14.15|

There will be an initial propagation delay for this value to be updated. You can check the status via a DNS lookup using either an [online tool](https://network-tools.webwiz.net/nslookup.htm) or using a command line tool (ex: `nslookup`).

Once the domain has been propagated, the DNS Lookup will show that your Domain (or sub-domain) is pointing to the **PublicIP** value.

### SSL certificates

As a security measure, plaintext access to the Console/API is disabled. In order to serve requests securely, The Things Enterprise Stack has built-in support to automatically request, serve and renew SSL certificates.

Apart from the DNS mapping above, no additional steps are necessary for this.

## Getting started using the Console

Please check the [Console Guide]({{< ref "/getting-started/console" >}}) to get quickly started with The Things Enterprise Stack Console.

## Getting started using the Command Line Interface (CLI)

Please check the [CLI Guide]({{< ref "/getting-started/cli" >}}) to get quickly started with The Things Enterprise Stack CLI.

## SSH access

In most cases, you will interact with The Things Enterprise Stack only via the Console or the CLI. However, in case there is a need to directly access the EC2 instance, there is an option to do so via SSH.

SSH access is possible only via the IP addresses set using the **Restrict SSH Access to IP Range** parameter during deployment. Also, the SSH client needs access to the private key corresponding to the public key that was chosen in the **SSH Key** parameter during deployment. The SSH username is `ec2-user`.

For example, you can use the OpenSSH client via the terminal and login using:

```bash
$ ssh -i <private-key-file> ec2-user@PublicIP
```

Upon accessing the machine, navigate to the `tti` directory:

```bash
$ cd /tti
```

This directory is structured as follows:

```
├── acme                        # contains SSL certificates and related files
├── bootstrap                   # contains logs generated during deployment and restarts
└── lorawan-stack
    ├── config.yml              # The Things Enterprise Stack configuration
    ├── environment             # additional environment variables
    ├── lorawan-frequency-plans # contains a local copy of the LoRaWAN Frequency Plans Repository
    ├── public                  # contains the static assets
    └── tti-lw-stack            # The Things Enterprise Stack binary
```

The Things Enterprise Stack binary is run as a `systemd` service. In order to check the logs, run the following:

```bash
$ sudo journalctl -f -u lorawan-stack.service
```

## Routing LoRaWAN Traffic

Now that your stack has been successfully deployed, let's look at how to connect a LoRaWAN Gateway, Register a LoRaWAN Device and read traffic from this device.

### Connecting a Gateway

Please check our extensive guides on [Connecting Gateways]({{< relref "gateways" >}}) for the particular brand/model of your gateway.

### Registering a device

Please check the guide on [Adding Devices]({{< relref "devices/adding-devices" >}}).

## AWS IoT

The Things Enterprise Stack supports publishing of uplink messages directly to the [AWS IoT suite](https://aws.amazon.com/iot/). In order for this to work, the **AWS IoT Telemetry** option in the CloudFormation template must be set to **true** during the deployment phase.

Please check the guide on [AWS IoT]({{< relref "integrations/aws-iot/application-server-telemetry" >}}) for more information.

## Updating the CloudFormation stack

We recommend using [Change Sets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html) to to update the CloudFormation Stack.

On the AWS Console, open the **CloudFormation** service, navigate to the **Change sets** tab and select **Create change set**. There are two choices that can be made here:

- Use current template: Choose this option to update input parameters on an existing template.
- Replace current template: Choose this option to use a new template on the existing deployment. This option should be used to apply new versions of The Things Enterprise Stack that are delivered as new version of the CloudFormation template.

Once the necessary options are updated, select the **Create Change Set** option. This will create a change set that describes the resources that will be updated by this change and if any of these resources need to be replaced. 

After confirming the changes, select **Execute**. Depending on the resources, this will take some time to complete and can be tracked using the **Events** tab on the AWS Console.

## Manual upgrade of databases (Amazon RDS/ Redis) using snapshots

The update of certain fields of the CloudFormation stack necessitates the recreation of the database. AWS does not automatically migrate the data and hence, this must be done manually. A disclaimer is added to such fields in the CloudFormation template description.

In order to migrate the database without the loss of data, first create a snapshot of your database before running a change set on these fields.

- For RDS, navigate to **RDS** > **Snapshots** on the AWS Console and select **Take Snapshot**.
- For Redis (ElastiCache), navigate to **ElastiCache** on the AWS Console and select your Redis Replication Group and select **Backup** option.

Now run a change set on CloudFormation.

- For RDS, enter the ARN (Amazon Resource Name) of the snapshot into the **Amazon RDS Snapshot** field and run the change set.
- For Redis (ElastiCache), enter the Name of the backup into the **Amazon RDS Database Name** and run the change set.

The following section contains some basic troubleshooting information.
