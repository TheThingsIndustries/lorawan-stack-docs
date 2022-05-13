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

For **Task Definition** select the latest version of the ops task definition (`TASK_DEFINITION` from earlier). 

Select the **VPC**, and for **Subnets** the subnets `SUBNET_ONE` and `SUBNET_TWO` from the `OpsRunTaskArguments` mentioned earlier. Instead of creating a new security group, select the existing `SECURITY_GROUP` listed in `OpsRunTaskArguments`.

Under **Advanced Options** > **Container Overrides** > `ttes`, set the **Command override** to the command you want to run, separating arguments with commas. A typical command will look like `tti-lw-stack,COMMAND,ARGUMENTS,AND,FLAGS`.

Alternatively, you can run ops commands using the AWS CLI:

```bash
aws ecs run-task \
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

## Initialize Events Storage

If you use events storage (template `timescale`), you need to initialize the database.

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,storage-db,init,--timescaledb.chunk-time-interval,12h,--timescaledb.enable-retention-policy,--timescaledb.retention-days,31
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","storage-db","init","--timescaledb.chunk-time-interval","12h","--timescaledb.enable-retention-policy","--timescaledb.retention-days","31"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

{{< note >}} Depending on your use case, feel free to adjust parameter values. {{</ note >}}

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

{{< note >}} While initialization alone is needed for deployment itself, creating initial resources mentioned below is required for the stack to work. {{</ note >}}

## Create a Tenant in the Identity Server Database (multi-tenant only)

If you can not, or do not want to use the Tenant Billing Server or the API to create tenants, you can create tenants directly in the database.

The command for this is:

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,is-db,create-tenant,--id=$TENANT_ID,--name=$TENANT_NAME
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","is-db","create-tenant","--id=$TENANT_ID","--name=$TENANT_NAME"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

{{< note >}} Replace `$TENANT_ID` and `$TENANT_NAME` with your own. {{</ note >}}

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

{{< note >}} Replace `--tenant-id=NULL` with `--tenant-id=$TENANT_ID` in single-tenant deployments. {{</ note >}}

## Create the OAuth Client for the Console

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,is-db,create-oauth-client,--tenant-id=NULL,--id=$ID,--name=$NAME,--secret=$CLIENT_SECRET,--redirect-uri=/console/oauth/callback,--redirect-uri=https://$DOMAIN/console/oauth/callback,--logout-redirect-uri=/console,--logout-redirect-uri=https://$DOMAIN/console
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","is-db","create-oauth-client","--tenant-id=NULL","--id=$ID","--name=$NAME","--secret=$CLIENT_SECRET","--redirect-uri=/console/oauth/callback","--redirect-uri=https://$DOMAIN/console/oauth/callback","--logout-redirect-uri=/console","--logout-redirect-uri=https://$DOMAIN/console"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

{{< note >}} 
- Replace `--tenant-id=NULL` with `--tenant-id=$TENANT_ID` in single-tenant deployments.
- Replace the values of `$ID`, `$NAME` and `$CLIENT_SECRET` with your own. `id` and `secret` can be found in the `<network>-<environment>-<cluster>-console-oauth-client` secret in the AWS Secrets Manager.
- For secondary clusters (where the domain of the Console is not equal to the domain of the Identity Server), omit `--redirect-uri=/console/oauth/callback` and `--logout-redirect-uri=/console`.
- You can use a similar command for the Device Claiming server and Network Operations Center if you use `/claim` and `/noc` instead of `/console` for the redirect URIs.
{{</ note >}}

## Create Admin User

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,is-db,create-admin-user,--tenant-id,$TENANT_ID,--email,$ADMIN_EMAIL,--password,$ADMIN_PASSWORD
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","is-db","create-admin-user","--tenant-id","$TENANT_ID","--email","$ADMIN_EMAIL","--password","$ADMIN_PASSWORD"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

{{< note >}} Replace `$TENANT_ID`, `$ADMIN_EMAIL` and `$ADMIN_PASSWORD` with your own. {{</ note >}}

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

## Migrate Network Server Database

Before upgrading the Network Server to a new minor version, the database may need to be migrated.

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,ns-db,migrate
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","ns-db","migrate"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

## Prune Network Server Database

Before upgrading the Network Server to a new minor version, the unused data may be pruned from the database.

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,ns-db,prune
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","ns-db","prune"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

## Migrate Application Server Database

Before upgrading the Application Server to a new minor version, the database may need to be migrated.

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,as-db,migrate
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","as-db","migrate"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}

## Migrate Device Claiming Server Database

Before upgrading the Device Claiming Server to a new minor version, the database may need to be migrated.

{{< tabs/container "AWS Console" "AWS CLI">}}
{{< tabs/tab "AWS Console" >}}
```
tti-lw-stack,dcs-db,migrate
```
{{</ tabs/tab >}}
{{< tabs/tab "AWS CLI" >}}
```
["tti-lw-stack","dcs-db","migrate"]
```
{{</ tabs/tab >}}
{{</ tabs/container >}}
