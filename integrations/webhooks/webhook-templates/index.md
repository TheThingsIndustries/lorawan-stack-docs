# Webhook Templates

> Webhook templates define a webhook integration that is not yet created. Templates allow using common values for many webhooks, such as a common base URLs. …

Source: https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/


Webhook templates define a webhook integration that is not yet created. Templates allow using common values for many webhooks, such as a common base URLs.

Webhook templates are primarily targeted at service providers who want to create specialized webhook integrations for the users of The Things Stack.

### Typical use cases

1. Create a webhook with a personalized base URL, format and message paths.
2. Provide users with additional information about the webhook itself, using documentation and visual aids.
3. Simplify the process of enabling the integration by removing the manual work of the user.

## How does it work?

Webhook templates can be used to pre fill the common values of a webhook integration such as the base URL, the message paths or the provided headers. They also allow input from the user, in the form of fillable fields, which are then replaced in the template by the Console in order to obtain the concrete webhook. 

See [Template Format](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/format/) for more information on the contents of a webhook template and  [Template Instantiation](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/instantiation/) for more information of the process through which a webhook template, with user input, is converted into a webhook integration.


## Pages in this section

- [Format](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/format/index.md): Webhook templates are described using the YAML language. Their format is very closely related to that of a normal webhook integration, but with additional …
- [Instantiation](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/instantiation/index.md): The process through which a webhook template becomes a webhook integration is called instantiation. Instantiation is done by the Console after the user has …
- [Adding Webhook Templates](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/adding_webhook_templates/index.md): The Things Stack uses Webhook templates from the lorawan-webhook-templates Github repository. The lorawan-webhook-templates repository is open source, so users …

