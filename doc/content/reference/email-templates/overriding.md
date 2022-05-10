---
title: "Overriding Templates"
removed_in_version: "3.19"
description: ""
weight: 6
---

{{< note >}} We recommend getting familiar with the [html/template](https://golang.org/pkg/html/template/) template format first. {{</ note >}}

## Template Components

An email template override has three components:

1. The subject file, which contains the subject of the email and is named `<identifier>.subject.txt`. 
2. The text contents file, which contains the contents of the email in text format and is named `<identifier>.txt`.
3. The HTML contents file, which contains the contents of the email in HTML format and is named `<identifier>.html`.


## Creating the Overrides

In order to override a template, one must provide all three files as part of the email templates repository and then provide them as part of the configuration.

Let's consider that we want to override the email that a user receives once they register, the email validation email, which has the identifier `validate`. We need to create the following files:


- `validate.subject.txt`
```text
Please confirm your email address for {{.Network.Name}}
```
- `validate.txt`
```text
Please confirm your email address for {{.Network.Name}}.
Your email address will be used as contact for {{.Entity.Type}} "{{.Entity.ID}}". 

Reference: {{.ID}}
Confirmation Token: {{.Token}}
```
- `validate.html`
```html
Please confirm your email address for {{.Network.Name}}. <br> 
Your email address will be used as contact for {{.Entity.Type}} "{{.Entity.ID}}". <br> <br> 

Reference: {{.ID}} <br> 
Confirmation Token: {{.Token}}
```

## Configuring the Location of the Overrides

Once you have written your overrides, you can configure the Identity Server with their location. For details on the configuration options, see the [Identity Server configuration reference]({{< ref "/reference/configuration/identity-server.md#email-options" >}}).
