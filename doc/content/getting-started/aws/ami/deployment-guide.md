---
title: "Deployment Guide"
description: ""
weight: 20
---

## Overview

This section contains a detailed information to help you setup {{% tts %}} via the [AWS Marketplace listing](https://aws.amazon.com/marketplace/pp/B081HZKDJ4?qid=1593444260869&sr=0-1&ref_=srh_res_product_title).

{{< figure src="ami-architecture.jpg" alt="AMI Architecture" >}}

### AWS Deployment Architecture

The following image describes the architecture of the components that are deployed while using the **default parameters**.

{{< figure src="aws-deployment-architecture.png" alt="AMI deployment Architecture" >}}

## Preparation

This section lists the preparatory steps necessary to successfully complete this guide.

### Specialized Knowledge

In order to follow this guide to deploy {{% tts %}}, it is recommended to be familiar with the following concepts
- AWS EC2, AWS CloudFormation
- Shell and command line usage
- Basics of LoRaWAN devices and gateways

### Prerequisites

The following are necessary to complete this guide
1. An account with AWS with access to the AWS Marketplace. If you don't have one, one can be created using the [Create an AWS account](https://portal.aws.amazon.com/billing/signup#/start) page.
2. An RSA Public-Private Key pair
3. Sufficient rights on your account to create IAM roles.
4. A LoRaWAN compliant Gateway. This guide uses a [Tektelic Kona Micro]( https://tektelic.com/wp-content/uploads/KONA-Micro.pdf).
5. A LoRaWAN compliant End Device. This guide uses [Smart Building Sensors - Motion sensor](https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-motion-sensor-eu868.html).
6. Access to a name server for DNS mapping.

## Deployment using AWS Cloud Formation

### Step 1: Prepare your deployment

1. Login to your AWS Marketplace and navigate to the [product page for {{% tts %}} for LoRaWAN](https://aws.amazon.com/marketplace/pp/B081HZKDJ4).
2. Choose the correct AWS Region in which to deploy your stack. Also choose the **Software Pricing Tier** that suits your needs.
3. Make sure to read the terms of usage and other information available.
4. If applicable, [request a service limit increase](https://console.aws.amazon.com/support/cases#/create?issueType=service-limit-increase&limitType=service-code-) for additional VPCs and/or Elastic IPs.
5. Click **Continue to Subscribe** and accept the terms and conditions once they are found satisfactory.
6. Now click **Continue to Configuration** to configure your deployment.

### Step 2: Configure your deployment

The **Continue to Configuration** button will redirect you to the AWS CloudFormation page where the CloudFormation template is pre-loaded. 
This template allows the user to customize the deployment. The following is a list of the supported parameters that are available to the user.

#### Basic Configuration

|Parameter|Description|Default|
|---|---|---|
| EC2 Instance Name | Name of the EC2 instance. | `the-things-enterprise-stack` |
|Domain|Domain name. You should be able to configure DNS for the domain. TLS certificates from Let's Encrypt will automatically be requested.|-|
|Network Title*|The title of your deployment.|`The Things Enterprise Stack for LoRaWAN`|

> \* This is an optional field

#### Security Configuration

|**Parameter**|**Description**|**Default**|
|---|---|---|
|Admin Username|Name of the admin user|`admin`|
|Admin Email|Email address of the admin user|`admin@mycompany.com`|
|Initial Admin Password|Initial admin password. Please choose a strong password. It is recommended to change this password upon first login.|-|
|Amazon RDS Database Username|Username of the relational database|`postgres`|
|Amazon RDS Database Password|Password for the relational database. This password is used to access the Amazon RDS database.|-|
|SSH Key|Name of an existing EC2 KeyPair to enable SSH access to your instance.|-|
|SendGrid API Key*|API key for [SendGrid](https://sendgrid.com/) to send emails.|-|

> \* This is an optional field

#### External Connectivity

|**Parameter**|**Description**|
|---|---|
|Restrict SSH Access to IP Range|The source IP address range that can be used to connect via SSH to the EC2 instances. Use 0.0.0.0/0 for global SSH access.|
|Restrict Service Access to IP Range|The source IP address range that can be used to connect to the deployed services. Use 0.0.0.0/0 for global access.|

#### User Registration

All of the fields below are optional.

|**Parameter**|**Description**|**Default**|
|---|---|---|
|Require Admin Approval|If set to true, administrator approval is needed for creating new accounts.|false|
|Require Email Validation|If set to true, validation of contact information is necessary to create new accounts.|false|
|Require User Invites| If set to true, email invites are necessary to create new accounts.|false|
|Minimum Length|Minimum length for user passwords.|8|
|Minimum Number of Digits|Minimum number of digits for user passwords.|1|
|Minimum Number of Special Characters|Minimum number of special characters for user passwords.|0|
|Minimum Number of Uppercase Letters|Minimum number of uppercase letters for user passwords.|1|

#### Resource Settings

The fields in this section are for advanced users. A change to some of these parameters might incur additional costs.

|**Parameter**|**Description**|**Default**|
|---|---|---|
|EC2 Instance Type|EC2 Instance Type|t3.small|
|Redis Backup Retention Period*|The retention period for daily Redis backups (days).|7|
|Redis Instance Type|The size of machine for the Redis instance.|cache.t2.small|
|Enable Multi-AZ for Redis| If true, replicas of Redis are created. If true, RedisNumCacheClusters property must be greater than 1.|false|
|Number of Redis Multi-AZ Instances|The number of replicas for this replication group. If RedisMultiAZSupport is true, this value must be greater than 1. Note that this multiplies the Amazon ElastiCache Redis instance costs.|1|
|Amazon RDS Database Name|Name of the relational database. (Warning) A change to this field requires manual migration of the database.|ttn_lorawan|
|Amazon RDS Instance Type|The instance type for the Amazon RDS database.|db.t3.small|
|Amazon RDS Backup Retention Period|The retention period for daily Amazon RDS backups (days). (Warning) A change to this field requires manual migration of the database.|7|
|Amazon RDS Postgres Version|PostgreSQL version for the Amazon RDS database.|11.4|
|Enable Multi-AZ for Amazon RDS| If true, a failover instance is created in case the primary instance fails. Note that this doubles the Amazon RDS instance costs.|false|

#### LoRaWAN Network Server Settings

The following parameters are optional

|**Parameter**|**Description**|**Default**|
|---|---|---|
|LoRaWAN JoinEUI Prefix|Prefix for the LoRaWAN JoinEUIs that are handled by this network.|0000000000000000/0|
|LoRaWAN DevAddr Prefix|Prefix for the LoRaWAN DevAddrs that are handled by this network.|00000000/7|
|LoRaWAN NetID|The LoRaWAN NetID that is assigned through [LoRa Alliance membership](https://lora-alliance.org/become-a-member). This is required if your network needs interoperability (e.g. roaming, peering, join flow) with other networks. If you do not have a NetID, please use 000000 or 000001.|000000|

#### AWS IoT settings

|**Parameter**|**Description**|**Default**|
|---|---|---|
|AWS IoT Telemetry|If set to true, publish all upstream messages to AWS IoT.|true|

#### Update From Existing Deployment

The following parameters are exclusively meant for updating an existing deployment.

|**Parameter**|**Description**|
|---|---|
|Amazon RDS Snapshot|The ARN (Amazon Resource Name) of the Amazon RDS snapshot to restore the database from.|
|Amazon ElastiCache Redis Snapshot|The name of the Redis snapshot to restore the database from.|
|S3 Profile Pictures Bucket Name|The name of the S3 bucket for profile pictures.|
|S3 End Device Pictures Bucket Name|The name of the S3 bucket for end device pictures.|

### Step 3: Start your deployment

1. Once the parameters of {{% tts %}} are configured, click **Next** to configure options for the CloudFormation Stack. You may use the defaults in this page. 
2. Click **Next** review the deployment. Select the **I acknowledge that AWS CloudFormation might create IAM resources.** checkbox and click **Create Stack** option. 
3. If all the parameters were entered correctly, AWS CloudFormation triggers the creation of your CloudFormation stack. The stack is now in the `CREATE_IN_PROGRESS` state. On average, this process takes about 40 minutes.
4. You can monitor the status of your deployment by navigating to **CloudFormation** > **\<your-stack-name\>** > **Events**.
5. Once the required resources are successfully deployed, the state of the CloudFormation stack is updated to `CREATE_COMPLETE`.

### Step 4: DNS Configuration

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

#### SSL Certificates

As a security measure, plaintext access to the Console/API is disabled. In order to serve requests securely, {{% tts %}} has built-in support to automatically request, serve and renew SSL certificates. Apart from the DNS mapping above, no additional steps are necessary for this.

### Step 5: Login to {{% tts %}}

Once you've ensured that the DNS Mapping works, you can now login to the console of {{% tts %}} using the url `https://domain/console`.
If you're using a subdomain then use `https://subdomain.domain/console`

{{< figure src="aws-quick-start-login.png" alt="AWS Login" >}}

> There might be a delay of a few seconds while the stack sets up the SSL Certificates. This happens only the very first login.

Click on **Login** and enter the **Admin Username** and **Initial Admin Password** that you set during the deployment.

{{< figure src="aws-quick-start-creds.png" alt="AWS Creds" >}}

> We highly recommend you to update your password upon the first login.

## Routing LoRaWAN Traffic

Now that your stack has been successfully deployed, let's look at how to connect a LoRaWAN Gateway, Register a LoRaWAN Device and read traffic from this device.

### Connecting a Gateway

Please check our extensive guides on [Connecting Gateways]({{< relref "gateways" >}}) for the particular brand/model of your gateway.

### Registering a device

Please check the guide on [Adding Devices]({{< relref "devices/adding-devices" >}}).

### AWS IoT

Please check the guide on [AWS IoT]({{< relref "integrations/aws-iot/application-server-telemetry" >}}).

## Troubleshooting

This section contains information to troubleshoot {{% tts %}} deployment.

### FAQ

1. My CloudFormation stack creation failed

The CloudFormation Events page contains information on the progress of the deployment of various AWS services. This also contains error information (if any) which can help you debug the cause of the failure.

2. How can I SSH into my machine?

You can SSH into the EC2 machine using the public IP output value. In AWS Console and open the CloudFormation resource and click on your recently deployed stack. Navigate to the **Outputs** tab and copy the value of the **PublicIP** field. Now using the private key of the **SSH Key** value that you entered during deployment, you can SSH into the machine using
```bash
$ ssh -i <path-to-private-key> ec2-user@<PublicIP>
```

3. How can I see logs of {{% tts %}}?

{{% tts %}} binary runs as a `systemd` service. In order to access the logs, SSH into the machine as described above and use the following command.
```bash
  $ sudo journalctl -f -u lorawan-stack.service
```

4. How do I see more detailed debug logs of {{% tts %}}?

By default, {{% tts %}} does not log detailed `DEBUG` messages. In order to enable this, SSH into the EC2 instance as described above and add the following lines to the file `/tti/lorawan-stack/config.yml` using an editor such as `nano`.
```bash
log:
  level: debug
```
- Restart the service for this to take effect.
```bash
$ sudo systemctl restart lorawan-stack.service
```
- The debug logs can be read using the `journalctl`, same as above:
```bash
$ sudo journalctl -f -u lorawan-stack.service
   ```

5. My Gateway doesn't connect. What do I do?

<!--
TODO: https://github.com/TheThingsNetwork/lorawan-stack/issues/2714
Link to relevant section when available.
-->

Please check the troubleshooting section in the Connecting Gateways guide.
  
6. My device doesn't join. How do I fix this?

<!--
TODO: https://github.com/TheThingsNetwork/lorawan-stack/issues/2714
Link to relevant section when available.
-->

Device join failure could be due to a number of reasons. Ensure that the device settings are correct. This includes the JoinEUI, DevEUI and/or AppKey/NwkKey and the frequency plan settings. Check the logs as described above to locate the potential cause of the issue.

### Professional Support

Additional paid support for this deployment is offered by The Things Industries. You can contact us either by mailing us at `support@thethingsindustries.com` or by visiting [our support page](https://www.thethingsindustries.com/stack/aws/support). 
