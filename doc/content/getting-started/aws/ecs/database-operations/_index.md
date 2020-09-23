---
title: "Database Operations"
description: ""
weight: 4
---

This page describes the steps for performing database operations on an AWS ECS deployment.

<!--more-->

The `OpsRunTaskArguments` output of the stack deployed from the `5-2-ecs-ops` template contains the parameters needed to run (database) operations. The value of this output contains:

```
TASK_DEFINITION CLUSTER_NAME SUBNET_ONE SUBNET_TWO SECURITY_GROUP
```

To run a task from the AWS Console, go to **Amazon ECS** > **Clusters** > your cluster > **Tasks**, and click **Run new Task**.

For **Task Definition** select the latest version of the ops task definition (`TASK_DEFINITION` from earlier). Select the **VPC**, and for **Subnets** the subnets `SUBNET_ONE` and `SUBNET_TWO` from the `OpsRunTaskArguments` mentioned earlier. Instead of creating a new security group, select the existing `SECURITY_GROUP` listed in `OpsRunTaskArguments`.

Under **Advanced Options** > **Container Overrides** > `ttes`, set the **Command override** to the command you want to run, separating arguments with commas. A typical command will look like `tti-lw-stack,COMMAND,ARGUMENTS,AND,FLAGS`.

Alternatively, you can run ops commands using the AWS CLI:

```bash
$ aws ecs run-task \
  --task-definition TASK_DEFINITION \
  --cluster CLUSTER_NAME \
  --launch-type EC2 \
  --network-configuration '{
    "awsvpcConfiguration":{
      "subnets":[
        "SUBNET_ONE",
        "SUBNET_TWO"
      ],
      "securityGroups":[
        "SECURITY_GROUP"
      ],
      "assignPublicIp":"DISABLED"
    }
  }' \
  --overrides '{
    "containerOverrides":[
      {
        "name":"ttes",
        "command":[
          "tti-lw-stack","COMMAND","ARGUMENTS","AND","FLAGS"
        ]
      }
    ]
  }'
```

In this case, the command, arguments and flags need to be written as a JSON array.

## Initialize Identity Server Database

When deploying your main cluster with Identity Server for the first time, the database needs to be initialized.

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,is-db,init
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","is-db","init"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

## Create a Tenant in the Identity Server Database (multi-tenant only)

If you can not, or do not want to use the Tenant Billing Server or the API to create tenants, you can create tenants directly in the database.

The command for this is:

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,is-db,create-tenant,--id=your-tenant-id,--name=Your Tenant Name
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","is-db","create-tenant","--id=your-tenant-id","--name=Your Tenant Name"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

## Create the OAuth Client for the Command-Line Interface

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,is-db,create-oauth-client,--tenant-id=NULL,--id=cli,--name=Command Line Interface,--no-secret,--redirect-uri=local-callback,--redirect-uri=code
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","is-db","create-oauth-client","--tenant-id=NULL","--id=cli","--name=Command Line Interface","--no-secret","--redirect-uri=local-callback","--redirect-uri=code"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

> **NOTE:** Replace `--tenant-id=NULL` with `--tenant-id=your-tenant-id` in single-tenant deployments.

## Create the OAuth Client for the Console

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,is-db,create-oauth-client,--tenant-id=NULL,--id=console-eu1,--name=Europe 1 Console,--secret=CLIENT_SECRET,--redirect-uri=/console/oauth/callback,--redirect-uri=https://domain/console/oauth/callback,--logout-redirect-uri=/console,--logout-redirect-uri=https://domain/console
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","is-db","create-oauth-client","--tenant-id=NULL","--id=console-eu1","--name=Europe 1 Console","--secret=CLIENT_SECRET","--redirect-uri=/console/oauth/callback","--redirect-uri=https://domain/console/oauth/callback","--logout-redirect-uri=/console","--logout-redirect-uri=https://domain/console"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

> **NOTE (1):** Replace `--tenant-id=NULL` with `--tenant-id=your-tenant-id` in single-tenant deployments.

> **NOTE (2):** Replace the values of `--id`, `--name` and `--secret` with your own.

> **NOTE (3):** For secondary clusters (where the domain of the Console is not equal to the domain of the Identity Server), omit `--redirect-uri=/console/oauth/callback` and `--logout-redirect-uri=/console`.

> **NOTE (4):** You can use a similar command for the Device Claiming server if you use `/claim` instead of `/console` for the redirect URIs.

## Migrate Identity Server Database

Before upgrading the Identity Server to a new minor version, the database may need to be migrated.

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,is-db,migrate
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","is-db","migrate"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}
