---
title: "Updating AWS AMI Deployment"
description: ""
weight: 3
---

This section contains information to update {{% tts %}} deployment on AWS Marketplace.

<!--more-->

## Updating the CloudFormation Stack

We recommend using [Change Sets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html) to update the CloudFormation Stack.

On the AWS Console, open the **CloudFormation** service, navigate to the **Change sets** tab and select **Create change set**. There are two choices that can be made here:

- Use current template: Choose this option to update input parameters on an existing template.
- Replace current template: Choose this option to use a new template on the existing deployment. This option should be used to apply new versions of The Things Enterprise Stack that are delivered as new version of the CloudFormation template.

Once the necessary options are updated, select the **Create Change Set** option. This will create a change set that describes the resources that will be updated by this change and if any of these resources need to be replaced. 

After confirming the changes, select **Execute**. Depending on the resources, this will take some time to complete and can be tracked using the **Events** tab on the AWS Console.

{{< note >}} We recommend to only update the AWS resource configuration via the CloudFormation template. Updating resources outside CloudFormation causes unpredicted behavior during updates or EC2 instance restart, and limits the possible support we can provide. {{</ note >}}

## New CloudFormation template

New CloudFormation template version can be downloaded from [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-okhh3ofzhqj56?qid=1593444260869&sr=0-1&ref_=srh_res_product_title#pdp-usage). Click **View CloudFormation Template** and then **Download CloudFormation Template** to download the most recent template.

## Manual Upgrade of Databases (Amazon RDS and ElastiCache) using snapshots

The update of certain fields of the CloudFormation stack necessitates the recreation of the database. AWS does not automatically migrate the data and hence, this must be done manually. This section applies only when CloudFormation plans to recreate the database.

In order to migrate the database without the loss of data, first create a snapshot of your database before running a change set on these fields.

- For RDS, navigate to **RDS** > **Snapshots** on the AWS Console and select **Take Snapshot**.
- For Redis (ElastiCache), navigate to **ElastiCache** on the AWS Console and select your Redis Replication Group and select **Backup** option.

Now run a change set on CloudFormation.

- For RDS, enter the ARN (Amazon Resource Name) of the snapshot into the **Amazon RDS Snapshot** field and run the change set.
- For Redis (ElastiCache), enter the Name of the backup into the **Amazon ElastiCache Redis Snapshot** and run the change set.

## Database Schema Migrations

When updating minor version of the stack, you might be required to perform database migrations. Please refer to the changelog for information which migrations are needed when updating to given version. Remember that you need to perform migrations mentioned not only in the latest version, but also those mentioned in versions between your current and target version. Database migrations are run by logging into the EC2 machine that the stack runs on, and executing relevant commands. Required command you need to run is also mentioned in the changelog, for example:

> This requires a database schema migration (`ttn-lw-stack is-db migrate`) because of the added columns.

The `tti-lw-stack` executable is located in `/tti/lorawan-stack/`. When running it, in the environment you need to have the `TTN_LW_CONFIG=/tti/lorawan-stack/config.yml` variable exported. Example use:

```bash
export TTN_LW_CONFIG=/tti/lorawan-stack/config.yml

/tti/lorawan-stack/tti-lw-stack is-db migrate
```

If you encounter any issues, please refer to [Troubleshooting]({{< ref "getting-started/aws/ami/troubleshooting" >}}).
