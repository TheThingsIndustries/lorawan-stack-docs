---
title: "Troubleshooting"
description: ""
weight: 3
---

<!--
TODO: https://github.com/TheThingsNetwork/lorawan-stack/issues/2714
Move to generic getting started guide once ready.
-->

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
