# Database Operations

> This page describes the steps for performing database operations on an AWS ECS deployment.

Source: https://www.thethingsindustries.com/docs/enterprise/aws/ecs/database-operations/


This page describes the steps for performing database operations on an AWS ECS deployment.

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
  --launch-type FARGATE \
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

**AWS Console:**

```
tti-lw-stack,storage-db,init,--timescaledb.chunk-time-interval,12h,--timescaledb.enable-retention-policy,--timescaledb.retention-days,31
```



**AWS CLI:**

```
["tti-lw-stack","storage-db","init","--timescaledb.chunk-time-interval","12h","--timescaledb.enable-retention-policy","--timescaledb.retention-days","31"]
```


> **Note:** Depending on your use case, feel free to adjust parameter values.


## Initialize Network Operations Center Database

When deploying your main cluster with Network Operations Center for the first time, the database needs to be initialized.

**AWS Console:**

```
tti-lw-stack,noc-db,init
```



**AWS CLI:**

```
["tti-lw-stack","noc-db","init"]
```


> **Note:** While initialization alone is needed for deployment itself, creating initial resources mentioned below is required for The Things Stack to work.


## Migrate Identity Server Database

Before upgrading the Identity Server to a new minor version or deploying The Things Stack for the first time, the database may need to be migrated.

**AWS Console:**

```
tti-lw-stack,is-db,migrate
```



**AWS CLI:**

```
["tti-lw-stack","is-db","migrate"]
```


> **Note:** While the migration alone is sufficient for completing the deployment, creating initial resources mentioned above is required for The Things Stack to work.


## Create a Tenant in the Identity Server Database (multi-tenant only)

If you can not, or do not want to use the Tenant Billing Server or the API to create tenants, you can create tenants directly in the database.

The command for this is:

**AWS Console:**

```
tti-lw-stack,is-db,create-tenant,--id=$TENANT_ID,--name=$TENANT_NAME
```



**AWS CLI:**

```
["tti-lw-stack","is-db","create-tenant","--id=$TENANT_ID","--name=$TENANT_NAME"]
```


> **Note:** Replace `$TENANT_ID` and `$TENANT_NAME` with your own.


## Create the OAuth Client for the Command-Line Interface

**AWS Console:**

```
tti-lw-stack,is-db,create-oauth-client,--tenant-id=NULL,--id=cli,--name=Command Line Interface,--no-secret,--redirect-uri=local-callback,--redirect-uri=code
```



**AWS CLI:**

```
["tti-lw-stack","is-db","create-oauth-client","--tenant-id=NULL","--id=cli","--name=Command Line Interface","--no-secret","--redirect-uri=local-callback","--redirect-uri=code"]
```


> **Note:** Replace `--tenant-id=NULL` with `--tenant-id=$TENANT_ID` in single-tenant deployments.


## Create the OAuth Clients

The Console and Network Operations Center are OAuth clients. These clients must be created before they can be used.

Use the following command with variables:

**AWS Console:**

```
tti-lw-stack,is-db,create-oauth-client,--tenant-id=NULL,--id=$ID,--name=$NAME,--secret=$CLIENT_SECRET,--redirect-uri=$REDIRECT_PATH,--redirect-uri=$REDIRECT_URI,--logout-redirect-uri=$LOGOUT_REDIRECT_PATH,--logout-redirect-uri=$LOGOUT_REDIRECT_URI
```



**AWS CLI:**

```
["tti-lw-stack","is-db","create-oauth-client","--tenant-id=NULL","--id=$ID","--name=$NAME","--secret=$CLIENT_SECRET","--redirect-uri=$REDIRECT_PATH","--redirect-uri=$REDIRECT_URI","--logout-redirect-uri=$LOGOUT_REDIRECT_PATH","--logout-redirect-uri=$LOGOUT_REDIRECT_URI"]
```


> **Note:** - Replace `--tenant-id=NULL` with `--tenant-id=$TENANT_ID` in single-tenant deployments.
> - For secondary clusters (where the domain of the Console or Network Operations Center is not equal to the domain of the Identity Server), omit you can omit the `--redirect-uri` and `--logout-redirect-uri` to relative paths (only keep the URI).


Set the variables as follows:

| Key                    | Console                                                                                        | Network Operations Center                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `ID`                   | `client_id` from Secrets Manager: `<network>-<environment>-<cluster>-console-oauth-client`     | `client_id` from Secrets Manager: `<network>-<environment>-<cluster>-noc-oauth-client`     |
| `NAME`                 | `Console`                                                                                      | `Network Operations Center`                                                                |
| `CLIENT_SECRET`        | `client_secret` from Secrets Manager: `<network>-<environment>-<cluster>-console-oauth-client` | `client_secret` from Secrets Manager: `<network>-<environment>-<cluster>-noc-oauth-client` |
| `REDIRECT_URI`         | `https://${DOMAIN}/console/oauth/callback`                                                     | `https://${DOMAIN}/noc/oauth/callback`                                                     |
| `REDIRECT_PATH`        | `/console/oauth/callback`                                                                      | `/noc/oauth/callback`                                                                      |
| `LOGOUT_REDIRECT_URI`  | `https://${DOMAIN}/console`                                                                    | `https://${DOMAIN}/noc`                                                                    |
| `LOGOUT_REDIRECT_PATH` | `/console`                                                                                     | `/noc`                                                                                     |

## Create Admin User

**AWS Console:**

```
tti-lw-stack,is-db,create-admin-user,--tenant-id,$TENANT_ID,--email,$ADMIN_EMAIL,--password,$ADMIN_PASSWORD
```



**AWS CLI:**

```
["tti-lw-stack","is-db","create-admin-user","--tenant-id","$TENANT_ID","--email","$ADMIN_EMAIL","--password","$ADMIN_PASSWORD"]
```


> **Note:** Replace `$TENANT_ID`, `$ADMIN_EMAIL` and `$ADMIN_PASSWORD` with your own.


## Migrate Network Server Database

Before upgrading the Network Server to a new minor version, the database may need to be migrated.

**AWS Console:**

```
tti-lw-stack,ns-db,migrate
```



**AWS CLI:**

```
["tti-lw-stack","ns-db","migrate"]
```


## Prune Network Server Database

Before upgrading the Network Server to a new minor version, the unused data may be pruned from the database.

**AWS Console:**

```
tti-lw-stack,ns-db,prune
```



**AWS CLI:**

```
["tti-lw-stack","ns-db","prune"]
```


## Migrate Application Server Database

Before upgrading the Application Server to a new minor version, the database may need to be migrated.

**AWS Console:**

```
tti-lw-stack,as-db,migrate
```



**AWS CLI:**

```
["tti-lw-stack","as-db","migrate"]
```


## Migrate Network Operations Center Database

Before upgrading the Network Operations Center to a new minor version, the database may need to be migrated.

**AWS Console:**

```
tti-lw-stack,noc-db,migrate
```



**AWS CLI:**

```
["tti-lw-stack","noc-db","migrate"]
```


## Migrate Device Claiming Server Database

Before upgrading the Device Claiming Server to a new minor version, the database may need to be migrated.

**AWS Console:**

```
tti-lw-stack,dcs-db,migrate
```



**AWS CLI:**

```
["tti-lw-stack","dcs-db","migrate"]
```


