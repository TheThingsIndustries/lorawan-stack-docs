---
title: "Configuring the CLI"
description: ""
weight: 2
aliases: [/getting-started/cli/configuring-cli/]
---

{{% tts %}} CLI needs to be configured to connect to your {{% tts %}} deployment.

<!--more-->

To configure the CLI, you first have to create a configuration file, then make that file available to the CLI. The CLI configuration file can be generated or manually created.

## Step 1 - Create a configuration file

### Automatically generate configuration file

To generate the CLI configuration file, use the following command in your terminal:

{{< tabs/container "Cloud, {{% ttss %}}, and Open Source" "Enterprise" >}}

{{< tabs/tab "Cloud, {{% ttss %}}, and Open Source" >}}

If using {{% ttss %}}, use the following command as per your regional `cluster`:

```bash
ttn-lw-cli use <eu1/au1/nam1>.cloud.thethings.network
```

or on Windows, this would be:

```bash
ttn-lw-cli.exe use <eu1/au1/nam1>.cloud.thethings.network
```

If you are using {{% tts %}} Cloud use the following command with your `tenant id` and regional `cluster`.

```bash
ttn-lw-cli use <tenant_id>.<eu1/eu2/au1/nam1/>.cloud.thethings.industries
```

If you are hosting your own deployment, use the following, replacing `thethings.example.com` with your [server address]({{< ref "the-things-stack/concepts/server-addresses" >}}):

```bash
ttn-lw-cli use thethings.example.com
```

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

If you are hosting your own deployment, use the following, replacing `thethings.example.com` with your [server address]({{< ref "the-things-stack/concepts/server-addresses" >}}):

```bash
tti-lw-cli use thethings.example.com
```

or on Windows:

```bash
tti-lw-cli.exe use thethings.example.com
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

This will generate the CLI configuration and save it to a file named `.ttn-lw-cli.yml`.

By default, the file is created in the current directory. Add the `--user` flag to save it under the user's `.config` directory. The last `INFO` line in response to running the command will contain the location of the generated file:

```bash
INFO	Config file for eu1.cloud.thethings.network written in /home/user/.config/.ttn-lw-cli.yml
```

{{< note >}}
The default configuration file for both `ttn-lw-cli` and `tti-lw-cli` CLI versions is named `.ttn-lw-cli.yml`.
{{</ note >}}

Once you have the configuration file, proceed to [Step 2 - Configure CLI](#step-2---configure-the-cli) to pass the configuration file to the CLI.

#### Additional Flags (Optional)

If the deployment is using a CA that is not already trusted by your system, use the `--fetch-ca` flag to also connect to the server and retrieve the CA required for establishing secure communication, i.e:

```bash
tti-lw-cli use thethings.example.com --fetch-ca
```

If you are using a [custom certificate authority]({{< ref "/the-things-stack/host/docker/certificates#custom-certificate-authority" >}}), you will have to specify the path to the CA file with `--ca="/path/to/ca.pem"` flag when running the CLI.

If the configuration file already exists and you run the command to generate it again, it will not be overwritten by default and an error will be printed instead. Use `--overwrite` to overwrite the existing configuration file.

You can also use the `--grpc-port` and `--oauth-server-address` flags to override the default values for the gRPC port and the OAuth server address. Note that these are not needed for standard deployments. An example of having to specify the `--oauth-server-address` is if you are using an `https` port other than `443`, for example if you are [running {{% tts %}} on localhost]({{< ref "/the-things-stack/host/docker/configuration#running-the-things-stack-as-localhost" >}}). In case of running {{% tts %}} on localhost, you need to append `--oauth-server-address="https://localhost:8885/oauth` when running the CLI.

### Manually create configuration file

It is also possible to manually create a configuration file. For most configurations, this is not necessary, and it is preferable to [automatically generate the configuration](#automatically-generate-configuration-file). However, if you have separate component addresses, you can specify them in a manual configuration.

To manually configure, first create a `.ttn-lw-cli.yml` file.

Copy and paste the following contents in the `.ttn-lw-cli.yml` file, replacing `thethings.example.com` with the [server addresses]({{< ref "the-things-stack/concepts/server-addresses" >}}) of each component:

```yaml
oauth-server-address: "https://thethings.example.com/oauth"

identity-server-grpc-address: "thethings.example.com:8884"
gateway-server-grpc-address: "thethings.example.com:8884"
network-server-grpc-address: "thethings.example.com:8884"
application-server-grpc-address: "thethings.example.com:8884"
join-server-grpc-address: "thethings.example.com:8884"
device-claiming-server-grpc-address: "thethings.example.com:8884"
device-template-converter-grpc-address: "thethings.example.com:8884"
qr-code-generator-grpc-address: "thethings.example.com:8884"
```

If you are using an `https` port other than `443` (for example if running {{% tts %}} on localhost), you need to specify that port by adding the following line in `.ttn-lw-cli.yml`:

```yaml
oauth-server-address: "https://thethings.example.com:8885/oauth"
```

If your deployment uses a custom certificate authority, you will need to specify the path to the CA file by adding the following line in the configuration file:

```yaml
ca: /path/to/ca.pem
```

For advanced options, see the [Configuration Reference]({{< ref "/reference/configuration/cli" >}}).

## Step 2 - Configure the CLI

Once you have the `.ttn-lw-cli.yml` configuration file, you have multiple options to make this file available to the CLI in order to configure it:

1. Save the configuration file as `.ttn-lw-cli.yml` in `$XDG_CONFIG_HOME`, your home directory, or the working directory. If you [automatically generate configuration using `ttn-lw-cli use`](#automatically-generate-configuration-file), the configuration will be saved in the working directory.
2. Set the environmental variable by running:

**macOS and Linux:**

```bash
export TTN_LW_CONFIG=/path/to/.ttn-lw-cli.yml
```

**Windows:**

```bash
set TTN_LW_CONFIG=/path/to/.ttn-lw-cli.yml
```

3. Use command-line flag `-c /path/to/.ttn-lw-cli.yml` when running the CLI

{{< warning >}} When using the `snap` packages, `~/.ttn-lw-cli.yml` will fail with permission errors. Choose a different path for the configuration file. {{</ warning >}}

To check if configuration is being properly loaded, use the following command:

```bash
ttn-lw-cli config
```

or on Windows:

```bash
ttn-lw-cli.exe config
```

or for Enterprise deployments:

```bash
tti-lw-cli config
```

## Step 3 - Login

Once the CLI has been configured, proceed to [Login with the CLI]({{< relref "../login" >}}) to authorize and begin using the CLI.
