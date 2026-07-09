---
title: "Alert Routing Server Options"
description: ""
aliases: [/reference/configuration/alert-routing-server]
---

{{< distributions "Cloud" "Enterprise" >}} {{< new-in-version "3.30.0" >}} The [Alert Routing Server]({{< ref "/concepts/architecture/components/alert-routing-server" >}}) dispatches alert notifications about network components in {{% tts %}} to receivers over email and SMS. It receives alerts from an external generator such as [Prometheus and Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/), stores them in a queue, and delivers a notification to each configured receiver.

{{< warning >}} The Alert Routing Server is only available in {{% tts %}} deployments on AWS that use the [CloudFormation templates]({{< ref "/enterprise/aws/ecs/deployment#alert-routing-server-optional" >}}), which deploy and wire up the component together with Prometheus and Alertmanager. It is not available for Docker or [Kubernetes]({{< ref "/enterprise/kubernetes" >}}) deployments. {{</ warning >}}

{{< note >}} Alert routing is an experimental feature. {{</ note >}}

## Routing Options

The `ars.routing` options control whether the Alert Routing Server dispatches alert notifications.

- `ars.routing.enabled`: Enable alert routing (default `true`)

## Alertmanager Options

Alert notifications are delivered to the Alert Routing Server by Alertmanager through a webhook. The webhook endpoint is exposed at `/api/v3/ars/internal/alertmanager` and is protected with HTTP Basic Authentication, using the username `alertmanager` and the password configured below. Configure the same password in the `basic_auth` section of the Alertmanager webhook receiver.

- `ars.alert-manager.password`: Password that Alertmanager must use to authenticate to the Alert Routing Server webhook

## Queue Options

The Alert Routing Server stores alert notifications in a [FIFO](<https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)>) queue before dispatching them to receivers. The `provider` option selects the queue backend. Currently the `aws-sqs` provider is implemented.

- `ars.queue.provider`: Provider of the queue to be used (`aws-sqs`)

When `aws-sqs` is used as provider, the Alert Routing Server connects to an [Amazon SQS](https://aws.amazon.com/sqs/) FIFO queue. The AWS credentials and region can be set explicitly with the options below, or resolved from the standard AWS environment when left empty.

- `ars.queue.aws-sqs.name`: Name of the SQS queue to use
- `ars.queue.aws-sqs.region`: AWS region of the queue
- `ars.queue.aws-sqs.endpoint`: AWS endpoint (optional, for testing or custom endpoints)
- `ars.queue.aws-sqs.access-key-id`: AWS access key ID
- `ars.queue.aws-sqs.secret-access-key`: AWS secret access key
- `ars.queue.aws-sqs.session-token`: AWS session token
- `ars.queue.aws-sqs.max-messages-per-receive`: Maximum number of messages to receive per call (default `10`)
- `ars.queue.aws-sqs.visibility-timeout`: Visibility timeout for the messages (default `1m`)
- `ars.queue.aws-sqs.wait-timeout`: Wait time for receiving messages (default `20s`)

## Notification Sender Options

The Alert Routing Server dispatches alert notifications to receivers over email and SMS. These options configure the providers used for each delivery channel, as well as the network details embedded in notifications.

### Network Options

Notifications contain the name of the network and links back to the Identity Server and Console.

- `ars.senders.network.name`: The name of the network
- `ars.senders.network.identity-server-url`: The URL of the Identity Server
- `ars.senders.network.console-url`: The URL of the Console
- `ars.senders.network.assets-base-url`: The base URL to the email assets
- `ars.senders.network.branding-base-url`: The base URL to the email branding assets
- `ars.senders.network.subscription-management-url`: The URL of the Subscription Management

### Email Options

The email sender can be configured with different providers. Currently the `sendgrid` and `dir` providers are implemented. The email address and name of the sender should be configured regardless of the provider that is used.

- `ars.senders.email.provider`: Email provider to use (`sendgrid`, `dir`)
- `ars.senders.email.sender-address`: The address of the sender
- `ars.senders.email.sender-name`: The name of the sender

When `sendgrid` is used as provider, an API key is required. For testing, use the sandbox to prevent emails from actually being sent.

- `ars.senders.email.sendgrid.api-key`: The SendGrid API key to use
- `ars.senders.email.sendgrid.sandbox`: Use SendGrid sandbox mode for testing

When `dir` is used as provider, provide the path to the local directory where email messages should be written to. This is intended for development only.

- `ars.senders.email.dir`: Directory to write emails to when the `dir` provider is used

### SMS Options

The SMS sender can be configured with different providers. Currently the `twilio` and `dir` providers are implemented.

- `ars.senders.sms.provider`: SMS provider to use (`twilio`, `dir`)

When `twilio` is used as provider, configure the Twilio account and messaging service credentials.

- `ars.senders.sms.twilio.account-sid`: Twilio account SID to use
- `ars.senders.sms.twilio.api-key`: Twilio API key to use
- `ars.senders.sms.twilio.api-secret`: Twilio API secret to use
- `ars.senders.sms.twilio.messaging-service-sid`: Twilio messaging service SID to use

When `dir` is used as provider, provide the path to the local directory where SMS messages should be written to. This is intended for development only.

- `ars.senders.sms.dir`: Directory to write SMS to when the `dir` provider is used
