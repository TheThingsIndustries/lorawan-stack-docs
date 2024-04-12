---
title: "Deployment"
description: ""
weight: 3
aliases: [/getting-started/aws/ecs/deployment]
---

This page describes the steps for deploying {{% tts %}} on AWS ECS.

<!--more-->

Most steps involve deploying a CloudFormation stack from our templates. Some steps involve some manual work.

## VPC and Subnets

We start with the `1-1-vpc` template that creates the foundation for your deployment: the Virtual Private Cloud (VPC) and the different subnets in two availability zones (AZs). See the [Architecture]({{< relref "../architecture" >}}) section for more information.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/1-1-vpc.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for a **CIDR block**. The default value is usually fine, but if you plan to deploy multiple clusters, you may want to use CIDRs that do not overlap.

## TLS Certificates

Go to AWS Certificate Manager and request a certificate for your domain of choice.

If you are deploying a multi-tenant deployment, request a certificate that contains both `domain` and `*.domain`.

Certificate Manager will give further instructions on creating the DNS records that are required for issuing the certificates.

Alternatively, you can continue with the deployment without TLS, and request Let's Encrypt certificates later using [a dedicated template]({{< relref "#lets-encrypt-certificates-optional" >}}).

## DNS Records

Go to AWS Route 53 and create an A record that points `domain` to the Network Load Balancer that was created when you deployed the `1-1-vpc` template:

- **Routing Policy**: Simple routing
- **Record Name**: `domain`
- **Value/Route traffic to**: Alias to Network Load Balancer
- **Record Type**: A (IPv4)

* **Evaluate Target Health**: **Yes**

If you are deploying a multi-tenant deployment, create an similar record for `*.domain` in addition to the plain `domain` record.

{{< note >}} Even though the current templates do not support IPv6 yet, you can already create additional AAAA records to be ready for IPv6. {{</ note >}}

## Bastion Host (optional)

The `1-2-bastion` template will deploy an EC2 instance in one of the public subnets of your VPC. This instance can be used to provide external access to your cluster.

{{< note >}} You can also skip this template, and deploy it when you actually need external access to your cluster. {{</ note >}}

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/1-2-bastion.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for the **Instance Type** you want to use. A small instance is typically fine, since it will only be used to provide access.

The **SSH Key Name** is the name of the SSH keypair you created before (see [Prerequisites]({{< relref "../prerequisites" >}})). The IPv4 and IPv6 ranges can be used to configure the Security Group rules that allow external access to this instance.

## Opsgenie Alarms (optional)

The `1-3-opsgenie` template will deploy an SNS Topic and a Subscription to receive AWS CloudWatch alarms and forward it to your Opsgenie server. An Opsgenie CloudWatch API Key is necessary.

Once this is deployed, you can enable alerting that's configured for particular resources.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/1-3-opsgenie.gen.template (replace `3.x.y` with the current minor and patch version).

For more information, please refer to the [Opsgenie documentation](https://support.atlassian.com/opsgenie/docs/integrate-opsgenie-with-amazon-cloudwatch/).

## Aurora Database

The `2-1-db-aurora-master` and `2-2-db-aurora-replica` templates together create a highly available RDS Aurora PostgreSQL cluster. The template `2-1-db-aurora-master` creates a database cluster with a single master instance. The template `2-2-db-aurora-replica` can be deployed multiple times to deploy additional read-only replicas. See the [Architecture]({{< relref "../architecture" >}}) section for more information.

**Master Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/2-1-db-aurora-master.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for the **Database Name** and **Username** you want to configure on the database (the password will be generated).

You can select an appropriate **Instance Class** for your network. It is typically fine for small clusters to start with `db.t3.medium` and scale as you grow.

If you are migrating your database from a previous deployment, or if you are upgrading your database, you can fill the ARN of the database **Snapshot** that should be restored.

**Replica Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/2-2-db-aurora-replica.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for an **Instance Type**, just as for the master template. It is typically fine for small clusters to start with `db.t3.medium` and scale as you grow.

## Redis Database

You can deploy one or multiple Redis clusters with the `2-3-db-redis` template. {{% tts %}} uses Redis for multiple purposes, and can use separate clusters for different purposes.

Most deployments start with a single `general` cluster that is used for all purposes. It is also possible to use the `general` cluster for persistence only, and use a separate `cache` cluster for caching temporary data. See the [Architecture]({{< relref "../architecture" >}}) section for more information.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/2-3-db-redis.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})) and the previously described purpose, this template asks for the **Instance Type**. It is typically fine for small clusters to start with `cache.t3.medium` and scale as you grow.

It is recommended to have a **Multi-AZ** cluster with automatic failover, in which case you'll need 2 **Replicas**. Since most load is read-write it is not necessary to deploy more than 2 replicas.

If you are migrating your database from a previous deployment, or if you are upgrading your database, you can fill the name of the database **Snapshot** that should be restored.

## S3 Buckets

The template `2-4a-is-s3` creates S3 buckets for the Identity Server. This template only needs to be deployed for your "main" cluster that contains your Identity Server. Secondary clusters do not have an Identity Server and don't need this template.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/2-4a-is-s3.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for the names of the buckets you want to create. It is typically fine to leave these parameters empty, and have automatically generated bucket names.

The template `2-4b-routing-s3` creates an S3 bucket that stores configuration for interoperability with other LoRaWAN® Backend Interfaces-compliant servers. Even if you don't plan to immediately activate interoperability, this template is still required by another template that you will deploy later in this guide.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/2-4b-routing-s3.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for the name of the bucket you want to create. It is typically fine to leave this parameter empty, and have a automatically generated bucket name.

After deploying the `2-4b-routing-s3` template, you need to upload the interop configuration to the interop bucket, EDCS configuration to the EDCS bucket and plugins configuration to the plugins bucket. For details on those configuration files, see the [Interoperability Repository reference]({{< ref "/reference/interop-repository" >}}) and the [Device Claiming reference]({{< ref "/reference/device-claiming-repository" >}}). If you do not have the configuration, you can upload an empty configuration file:

```bash
touch config.yml
aws s3 cp config.yml s3://${InteropConfigBucket}/config.yml
aws s3 cp config.yml s3://${EDCSConfigBucket}/config.yml

touch plugins.yml
aws s3 cp plugins.yml s3://${PluginsConfigBucket}/plugins.yml
```

{{< note >}} If you did not set bucket names, see outputs of the `2-4b-routing-s3` stack for the names of those buckets. {{</ note >}}

## TimescaleDB (optional) {#timescaledb-optional}

The template `2-5-db-timescale` is an optional template that creates an EC2 instance that runs [TimescaleDB](https://www.timescale.com/), which is used by the Storage Integration and the Network Operations Center (NOC).

{{< note >}} If you do not want to install the Storage Integration and NOC, you do not need to deploy this template. However, deploying this template is mandatory if you wish to install them. {{</ note >}}

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/2-5-db-timescale.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template requires you to choose an **Instance type** and **SSH Key Name** to be used to login to the instance. You either need to specify the **EBS Volume Snapshot ID** to restore, or the **EBS Volume Size** for the storage volume to create.

Finally, you need to specify the database name, username and password. If you restore from a snapshot, these must match the existing database in the snapshot.

## Security Group Rules

The template `3-1-security-group-rules` creates the security group rules for both external and internal network traffic.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/3-1-security-group-rules.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for the IP address ranges that are allowed to connect to the different ports exposed by {{% tts %}}. The [Architecture]({{< relref "../architecture" >}}) section gives more information about these ports. For (public) deployments that should be accessible from anywhere on the internet, the defaults do not need to be changed.

## Load Balancer Listeners

Template `3-2-load-balancer-rules` creates listeners and target groups for the Network Load Balancer. Before deploying this template, go to AWS Certificate Manager, and copy the ARN of the TLS certificate you created earlier.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/3-2-load-balancer-rules.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})) and the previously mentioned TLS certificate ARN, this template asks if you want to serve HTTP/2, which is recommended for all deployments.

## Secrets

The `4-1-secrets` template creates several secrets in AWS Secrets Manager

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/4-1-secrets.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters, the **License Key**, **Cluster Secrets** and **OAuth Client Secrets** (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for login information for your email provider. Currently, only Sendgrid and SMTP are supported.

For deployments that connect to Packet Broker, you need to configure your Packet Broker secrets here. If you don't have this, you can leave these parameters empty. It is possible to add or update this in the future.

For multi-tenant deployments that use tenant billing through Stripe (see the [Stripe Billing reference]({{< ref "/reference/stripe" >}})), you need to configure the Stripe API key (starting with `sk_`) and Stripe endpoint secret key (starting with `whsec_`). It is possible to add or update this in the future.

For the **Gateway Secrets Encryption Key Value** parameter, provide an AES-128 Key in Base64. The following command can be used to randomly generate one:

```bash
openssl rand -base64 16
```

## Configuration

The `4-2a-configuration` template creates several configuration parameters in AWS Systems Manager Parameter Store.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/4-2a-configuration.gen.template (replace `3.x.y` with the current minor and patch version).

As with the other templates, this one also asks for the re-used parameters from the [Prerequisites]({{< relref "../prerequisites" >}}). Next to these parameters, this template has some notable parameters:

- **Domain** and **Identity Server Domain** are the `domain` from earlier. In multi-tenant deployments, tenants will use `[tenant-id].[domain]` to access the cluster.
- The **Default Tenant ID** is the tenant ID of the only tenant in single-tenant deployments, or the optional default tenant ID in multi-tenant deployments. Please note that the stack does not automatically create the default tenant. See [Database Operations]({{< ref "/the-things-stack/host/aws/ecs/database-operations" >}}) for instructions how to do this manually.

For the other parameters, see the descriptions and the [Configuration reference]({{< ref "/reference/configuration" >}}).

## Rate limiting

The `4-2b-configuration-rate-limiting` template creates configuration options for rate limiting. Even if you don't want to use rate limiting, deploying this template is obligatory.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/4-2b-configuration-rate-limiting.gen.template (replace `3.x.y` with the current minor and patch version).

More information can be found in the [Rate-limiting]({{< relref "/reference/rate-limiting" >}}) section.

## Resource Limiting (optional)

The `4-2c-configuration-resource-limiting` template allows setting resource limiting in the Application Server.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/4-2c-configuration-resource-limiting.gen.template (replace `3.x.y` with the current minor and patch version).

More information can be found in the [Resource-limiting]({{< relref "/reference/resource-limiting" >}}) section.

## ECS Cluster

Before deploying the ECS cluster, check the ECS settings in your AWS account by going to **Amazon ECS** > **Account Settings**. If you use multiple IAM users, you need to do this with your root account.

Under **Amazon ECS ARN and resource ID settings** the **new ARN and resource ID format** needs to be enabled for **container instances**, **services** and **tasks**. If you plan to deploy {{% tts %}} on container instances, **AWSVPC Trunking** needs to be enabled.

Alternatively, you can configure these settings for the entire AWS account using the AWS CLI:

```bash
aws ecs put-account-setting-default --name serviceLongArnFormat --value enabled --region $AWS_REGION
aws ecs put-account-setting-default --name taskLongArnFormat --value enabled --region $AWS_REGION
aws ecs put-account-setting-default --name containerInstanceLongArnFormat --value enabled --region $AWS_REGION
aws ecs put-account-setting-default --name awsvpcTrunking --value enabled --region $AWS_REGION
```

{{< note >}} These settings need to be applied in **each** AWS region where you want to deploy a cluster. {{</ note >}}

As discussed in the [Architecture]({{< relref "../architecture" >}}) section, we will need the container instances for running UDP Gateway Servers. For all other services, you can consider deploying those to Fargate, in which case you won't need as much resources on the container instances.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-1-ecs-cluster.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters and the name of your SSH keypair (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for an **Instance Type** and number of container instances. It is typically fine for small clusters to start with 2x `m5.large`. If you plan to use Fargate for all containers other than the UDP Gateway Server, 2x `t3.micro` may already be sufficient. Again, you can scale to more or larger instances as your network grows.

{{< warning >}} `t3` instances [don't support ENI trunking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html#eni-trunking-supported-instance-types) that is required to run a larger number of containers on the instance. {{</ warning >}}

## Operations

The `5-2-ecs-ops` template creates an ECS Task Definition that will be used for performing database operations such as initializing, migrating and cleaning.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-2-ecs-ops.gen.template (replace `3.x.y` with the current minor and patch version).

In addition to the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})), this template asks for the Redis clusters to use. If you only deployed one Redis cluster, this is the `general` cluster. If you deployed a separate cluster for caching, select `cache` as the **Cache Cluster**.

The **Ops Image** is the Docker image that you want to use. The official image is `docker.io/thethingsindustries/lorawan-stack:3.x.y-aws` (replace `3.x.y` with the current version).

You can now run instances of this task definition to perform operations on the deployment.

{{< warning >}} You need to initialize the Identity Server database before moving on to the next step. See the [Migrate Identity Server Database]({{< ref "../database-operations#migrate-identity-server-database" >}}) for details. {{</ warning >}}

## Identity Server or Identity Server Proxy

Depending on the type of cluster you are deploying, you need to deploy either `5-3a-ecs-is-service` (the Identity Server) or `5-3b-ecs-external-is-proxy` (proxy to Identity Server in another cluster).

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-3a-ecs-is-service.gen.template (replace `3.x.y` with the current minor and patch version).

Fill the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})) and the Redis clusters to use. The official image is `docker.io/thethingsindustries/lorawan-stack:3.x.y-aws` (replace `3.x.y` with the current version). When deploying to `FARGATE`, make sure to select [a valid combination of CPU and Memory](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html), or you will get an error about `Invalid CPU or memory value specified` when you deploy the stack.

> We recommend to start with 2 instances.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-3b-ecs-external-is-proxy.gen.template (replace `3.x.y` with the current minor and patch version).

Fill the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})) and the domain of the cluster that contains the Identity Server. The official image is `docker.io/thethingsindustries/lorawan-stack:3.x.y-aws-proxy` (replace `3.x.y` with the current version). When deploying to `FARGATE`, make sure to select [a valid combination of CPU and Memory](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html), or you will get an error about `Invalid CPU or memory value specified` when you deploy the stack.

> We recommend to start with 2 instances.

## Tenant Billing Server (optional)

In a multi-tenant deployment where tenants are billed through Stripe, you'll need to deploy the Tenant Billing Server.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-3c-ecs-tbs-service.gen.template (replace `3.x.y` with the current minor and patch version).

Fill the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})) and the Redis clusters to use. The official image is `docker.io/thethingsindustries/lorawan-stack:3.x.y-aws` (replace `3.x.y` with the current version). When deploying to `FARGATE`, make sure to select [a valid combination of CPU and Memory](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html), or you will get an error about `Invalid CPU or memory value specified` when you deploy the stack.

## Routing Services

The `5-4-ecs-services` template creates all other routing services.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-4-ecs-services.gen.template (replace `3.x.y` with the current minor and patch version).

Fill the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})) and the Redis clusters to use. Indicate whether the services should use the Identity Server in the current cluster, or an external one through the proxy.

For all services: the official image is `docker.io/thethingsindustries/lorawan-stack:3.x.y-aws` (replace `3.x.y` with the current version). When deploying to `FARGATE`, make sure to select [a valid combination of CPU and Memory](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html), or you will get an error about `Invalid CPU or memory value specified` when you deploy the stack.

> We recommend to start with 2 instances of each service. For some services it is not possible (yet) to deploy more than one instance.

## Monitoring (optional, but recommended)

We strongly recommend to monitor your deployment with [Prometheus](https://prometheus.io) and send alerts to [Alertmanager](https://prometheus.io/docs/alerting/latest/overview/), from where you can forward alerts to external on-call notification systems. With the `5-6-ecs-monitoring` you can deploy Prometheus to your ECS cluster.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-6-ecs-monitoring.gen.template (replace `3.x.y` with the current minor and patch version).

Fill the re-used parameters (see [Prerequisites]({{< relref "../prerequisites" >}})) and information about the cluster.

The official image is `docker.io/thethingsindustries/lorawan-stack:3.x.y-aws-prometheus` (replace `3.x.y` with the current minor and patch version). When deploying to `FARGATE`, make sure to select [a valid combination of CPU and Memory](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html), or you will get an error about `Invalid CPU or memory value specified` when you deploy the stack. Prometheus typically needs CPU=1024 and Memory=2048.

{{< note >}} By default, Prometheus stores metrics only for a limited time. You can optionally enable long-term storage of metrics in an S3 bucket. This is done using a [Thanos](https://thanos.io/) sidecar. We do not support querying from long-term storage yet. {{</ note >}}

The username for accessing Prometheus is `metrics`. Users can configure a custom `PrometheusPassword` while deploying the `5-6-ecs-monitoring.gen.template`. If this password wasn't configured during deployment, users can use `HTTPMetricsPasswordSecret` in the outputs section of the `4-1-secrets.gen.template`.

We recommend to point Prometheus to an external **Alertmanager URL**, so that you can be alerted about (potential) problems with your deployment.

## HTTP and gRPC Proxy

The template `5-7-ecs-proxy` deploys the proxy that routes incoming gRPC and HTTP requests from the outside world to the right service.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-7-ecs-proxy.gen.template (replace `3.x.y` with the current minor and patch version).

The official image is `docker.io/thethingsindustries/lorawan-stack:3.x.y-aws-proxy` (replace `3.x.y` with the current minor and patch version). When deploying to `FARGATE`, make sure to select [a valid combination of CPU and Memory](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html), or you will get an error about `Invalid CPU or memory value specified` when you deploy the stack.

> We recommend to start with 2 instances.

## Let's Encrypt Certificates (optional) {#lets-encrypt-certificates-optional}

Unfortunately not all gateways are able to connect when using AWS-issued certificates. If this is the case in your deployment, you can use the `5-8a-certs-le` and `5-8b-ecs-certbot-scheduled-task` templates to request certificates from [Let's Encrypt](https://letsencrypt.org/).

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-8a-certs-le.gen.template (replace `3.x.y` with the current minor and patch version).

The Docker image we'll use is `docker.io/thethingsindustries/aws-certbot-dns-route53:latest`.

On the initial deployment, leave the **Existing Certificate ARN** blank.

We need to manually request the certificates for the first time. In the CloudFormation **Output** window, copy the value for the output `RunCertbotTaskCLICommand` and run that from a CLI.

{{< note >}} If your deployment uses only the `FARGATE` launch type, then append `--launch-type FARGATE` to the command in the `RunCertbotTaskCLICommand` output. {{</ note >}}

After the task succeeds, go to **Certificate Manager**, find the new certificate, and copy its ARN. Back in CloudFormation, update the stacks for templates `3-2-load-balancer-rules` and `5-8a-certs-le`, and paste that certificate ARN.

{{< note >}} If the ECS Task has been run multiple times for some reason and there are multiple certificates in ACM, then check the Task Logs for the correct ARN. {{</ note >}}

To automatically renew the certificate from Let's Encrypt, we will now deploy template `5-8b-ecs-certbot-scheduled-task`.

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/5-8b-ecs-certbot-scheduled-task.gen.template (replace `3.x.y` with the current minor and patch version).

> We recommend to schedule this task to run every 14 days.

## Mutual TLS (optional)

The template `2-4c-mtls-s3` generates an S3 bucket to store CA certificates, needed for mutual TLS authentication via a supported proxy (Envoy).

**Template:** https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x.y/2-4c-mtls-s3.gen.template (replace `3.x.y` with the current minor and patch version).

More information can be found in the [Mutual TLS]({{< ref "/the-things-stack/host/aws/ecs/mutual-tls" >}}) section.
