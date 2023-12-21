---
title: "Login with the CLI"
description: ""
weight: 2
aliases: [/getting-started/cli/login]
---

This section explains how to login to {{% tts %}} using the command-line interface.

<!--more-->

The CLI needs to be logged on in order to create gateways, applications, devices and API keys. With {{% tts %}} running, login with the following command:

{{< tabs/container "Cloud, {{% ttss %}}, and Open Source" "Enterprise" >}}

{{< tabs/tab "Cloud, {{% ttss %}}, and Open Source" >}}

```bash
ttn-lw-cli login
```

or on Windows:

```bash
ttn-lw-cli.exe login
```

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

```bash
tti-lw-cli login
```

or on Windows:

```bash
tti-lw-cli.exe login
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

This will open a browser window with the OAuth login page where you can login with your credentials. This is also where you can create a new account if you do not already have one.

During the login procedure, the CLI starts a webserver on `localhost` in order to receive the OAuth callback after login. If you are running the CLI on a machine that is not `localhost`, you can pass the `--callback=false` flag. This will allow you to perform part of the OAuth flow on a different machine, and copy-paste a code back into the CLI.
