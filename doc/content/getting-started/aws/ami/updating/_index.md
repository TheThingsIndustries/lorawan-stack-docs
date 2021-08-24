---
title: "Updating AWS AMI Deployment"
description: ""
weight: 3
---

This section contains information to update {{% tts %}} deployment on AWS Marketplace.

<!--more-->

## Updating the CloudFormation Stack

We recommend using [Change Sets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html) to to update the CloudFormation Stack.

On the AWS Console, open the **CloudFormation** service, navigate to the **Change sets** tab and select **Create change set**. There are two choices that can be made here:

- Use current template: Choose this option to update input parameters on an existing template.
- Replace current template: Choose this option to use a new template on the existing deployment. This option should be used to apply new versions of The Things Enterprise Stack that are delivered as new version of the CloudFormation template.

Once the necessary options are updated, select the **Create Change Set** option. This will create a change set that describes the resources that will be updated by this change and if any of these resources need to be replaced. 

After confirming the changes, select **Execute**. Depending on the resources, this will take some time to complete and can be tracked using the **Events** tab on the AWS Console.

## Manual Upgrade of Databases (Amazon RDS and ElastiCache) using snapshots

The update of certain fields of the CloudFormation stack necessitates the recreation of the database. AWS does not automatically migrate the data and hence, this must be done manually. This section applies only when CloudFormation plans to recreate the database.

In order to migrate the database without the loss of data, first create a snapshot of your database before running a change set on these fields.

- For RDS, navigate to **RDS** > **Snapshots** on the AWS Console and select **Take Snapshot**.
- For Redis (ElastiCache), navigate to **ElastiCache** on the AWS Console and select your Redis Replication Group and select **Backup** option.

Now run a change set on CloudFormation.

- For RDS, enter the ARN (Amazon Resource Name) of the snapshot into the **Amazon RDS Snapshot** field and run the change set.
- For Redis (ElastiCache), enter the Name of the backup into the **Amazon RDS Database Name** and run the change set.

## Database Migrations

When updating minor version of the stack, you might be required to perform database migrations. Please refer to the changelog for information which migrations are needed when updating to given version. Remember that you need to perform migrations mentioned not only in the latest version, but also those mentioned in versions between your current and target version. Database migrations are run by logging into the EC2 machine that the stack runs on, and executing relevant commands. Required command you need to run is also mentioned in the changelog, for example:

> This requires a database schema migration (`ttn-lw-stack is-db migrate`) because of the added columns.
