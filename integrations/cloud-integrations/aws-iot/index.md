# AWS IoT

> The key features of the Default Integration are: Handling uplink and downlink messages: The Things Stack publishes uplink messages to IoT Core and subscribes to …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/


The key features of the Default Integration are:

- **Handling uplink and downlink messages**: The Things Stack publishes uplink messages to IoT Core and subscribes to downlink messages that you sent from IoT Core. Also, you receive all downlink queued, sent, failed, acknowledged and not acknowledged events in IoT Core
- **Creating devices**: manage things in IoT Core
- **Updating device state in shadow**: monitor devices using useful metrics reported in the shadow state, like signal quality and number of covering gateways

This integration comes with a AWS CloudFormation template to deploy in your AWS account.

![Default integration overview](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/overview.svg)



## Pages in this section

- [Architecture](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/architecture/index.md): The AWS IoT Core integration is a serverless deployment that scales automatically as your deployment grows.
- [Deployment Guide](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/deployment-guide/index.md): Learn how to deploy the AWS IoT integration for The Things Stack.
- [Managing Things](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/things/index.md): The AWS IoT Integration for The Things Stack synchronizes the device registry: you can create and claim things in AWS IoT Core which trigger a Lambda function …
- [Messages](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/messages/index.md): The Things Stack publishes uplink messages to AWS IoT Core MQTT. An IoT Core rule triggers a Lambda function which processes the message, creates a new IoT Core …
- [Metrics](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/metrics/index.md): The AWS IoT integration for The Things Stack reports device metrics to the shadow state. This is useful to retrieve information about the session and …
- [Update](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/update/index.md): You can update the AWS IoT integration for The Things Stack using AWS CloudFormation easily. In most cases, this is without service interruptions.
- [Uninstall](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/uninstall/index.md): You can uninstall the AWS IoT integration for The Things Stack using AWS CloudFormation.
- [Troubleshooting AWS IoT Integration](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/troubleshooting/index.md): The AWS IoT Integration for The Things Stack puts logs to AWS CloudWatch where you can find detailed traces and errors.

