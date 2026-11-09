# Webhooks

> The Webhooks feature allows The Things Stack to send application related messages to specific HTTP(S) endpoints.

Source: https://www.thethingsindustries.com/docs/integrations/webhooks/


The Webhooks feature allows The Things Stack to send application related messages to specific HTTP(S) endpoints.

## Who is it for?

Webhooks can be used to build integrations between The Things Stack and any third party service. For example, The Things Stack can send a webhook every time an uplink is received, which can then be visualized in an external dashboard. See [Webhook Templates](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/) for examples of third party services which The Things Stack is pre-configured to work with.

### Typical use cases

1. Visualizing or acting on uplink data on another platform.
2. Scheduling downlinks from a third party service.

## How does it work?

Webhooks access an HTTP(S) endpoint and pass relevant data as JSON. The third party service must expose this endpoint and listen for data, or post messages to The Things Stack. For uplinks, this is encrypted or unencrypted application data, metadata about gateways and signal strength, timestamps, etc. For downlinks, The Things Stack expects an application payload.

See [Data Formats](https://www.thethingsindustries.com/docs/integrations/data-formats/) for examples of uplink and downlink JSON messages.


## Pages in this section

- [Creating Webhooks](https://www.thethingsindustries.com/docs/integrations/webhooks/creating-webhooks/index.md): This section provides instructions for creating a webhook in the console.
- [Scheduling Downlinks](https://www.thethingsindustries.com/docs/integrations/webhooks/scheduling-downlinks/index.md): This section provides instructions for scheduling downlinks using HTTP Webhooks.
- [Webhook Path Variables](https://www.thethingsindustries.com/docs/integrations/webhooks/path-variables/index.md): Webhook path variables allow you to substitute device and application specific variables in webhook paths. This section provides instructions for using webhook …
- [Webhook Retries](https://www.thethingsindustries.com/docs/integrations/webhooks/retries/index.md): The webhook retries feature allows webhooks to be enqueued and be retried multiple times if the final endpoint is temporarily unavailable.
- [Webhook Templates](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/index.md): Webhook templates define a webhook integration that is not yet created. Templates allow using common values for many webhooks, such as a common base URLs. …
- [Troubleshooting Webhooks](https://www.thethingsindustries.com/docs/integrations/webhooks/troubleshooting/index.md): This section provides help for common issues and frequently asked questions you may have when using Webhooks.

