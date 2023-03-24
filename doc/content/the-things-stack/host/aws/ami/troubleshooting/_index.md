---
title: "Troubleshooting AWS AMI Deployment"
description: ""
weight: 6
aliases: [/getting-started/aws/troubleshooting]
---

<!--
TODO: https://github.com/TheThingsNetwork/lorawan-stack/issues/2714
Move to generic getting started guide once ready.
-->

This section contains information to troubleshoot {{% tts %}} deployment.

<!--more-->

### My CloudFormation stack creation failed

The CloudFormation Events page contains information on the progress of the deployment of various AWS services. This also contains error information (if any) which can help you debug the cause of the failure.

### How can I SSH into my machine?

You can SSH into the EC2 machine using the public IP output value. 

Log in AWS Console and open the CloudFormation resource and click on your recently deployed stack. Navigate to the **Outputs** tab and copy the value of the **PublicIP** field. 

Now, using the private key of the **SSH Key** value that you entered during deployment, you can SSH into the machine using:

```bash
ssh -i <path-to-private-key> ec2-user@<PublicIP>
```

### How can I see logs of {{% tts %}}?

{{% tts %}} binary runs as a `systemd` service. In order to access the logs, SSH into the machine as described above and use the following command:
```bash
sudo journalctl -f -u lorawan-stack.service
```

### How do I see more detailed debug logs of {{% tts %}}?

By default, {{% tts %}} does not log detailed `DEBUG` messages. In order to enable this, SSH into the EC2 instance as described above and add the following lines to the file `/tti/lorawan-stack/config.yml` using an editor such as `nano`.

```bash
log:
  level: debug
```
Restart the service for this to take effect:

```bash
sudo systemctl restart lorawan-stack.service
```

The debug logs can be read using the `journalctl`, same as above:

```bash
sudo journalctl -f -u lorawan-stack.service
  ```

### My gateway doesn't connect. What do I do?

Please check the [Troubleshooting Gateways]({{< ref "/gateways/troubleshooting" >}}) guide.
  
### My device doesn't join. How do I fix this?

Please check the [Troubleshooting Devices]({{< ref "/devices/troubleshooting" >}}) guide.

Device join failure could be due to a number of reasons. Ensure that the device settings are correct. This includes the JoinEUI, DevEUI and/or AppKey/NwkKey and the frequency plan settings. Check the logs as described above to locate the potential cause of the issue.

### I have tried deploying the stack a few times. Now I suddenly cannot get the TLS certficate

In our stack we use Let's Encrypt certificates, which are requested upon stack deployment. There are quotas in place, once you hit them you need to wait before requesting a certificate again. If you're redeploying the stack multiple times for testing purposes, use a different domain, so that you don't hit the limit in your production environment. For details, please refer to the [Let's Encrypt website](https://letsencrypt.org/docs/rate-limits/).

### My update has failed, and I don't know the details

You can find logs in the `/tti/bootstrap/*.log` files.

### There are store errors in {{% tts %}} logs

This means that {{% tts %}} fails to connect to the database and/or Redis. For details of your database and Redis, go to Amazon RDS and ElastiCache respectively. Refer to the `Resources` tab in the CloudFormation stack to know which RDS and ElastiCache instances belong to the {{% tts %}} instance. Make sure that Amazon does not signal any issues, and all metrics are within expected values. This includes, but is not limited to CPU, memory, free disk, available connections.

### Migration has failed with `dial tcp 127.0.0.1:5432: connect: connection refused`

This error occurs when the stack executable doesn't properly read the configuration file.

To resolve this issue, you can do `export TTN_LW_CONFIG=/tti/lorawan-stack/config.yml` before running the migration command. See [Database Schema Migrations]({{< ref "the-things-stack/host/aws/ami/updating#database-schema-migrations" >}}).

## Professional Support

Additional paid support for this deployment is offered by The Things Industries. You can [contact The Things Industries support](mailto:support@thethingsindustries.com) or visit [the support page](https://www.thethingsindustries.com/support/).
