---
title: "Configuring the CLI"
description: ""
weight: 2
---

{{% tts %}} CLI needs to be properly configured in order to connect to {{% tts %}}. To configure the CLI, you first have to create a configuration file, then make that file available to the CLI.

The CLI configuration file can be generated or manually created. Keep reading for detailed instructions.

## Generate configuration file

To generate the CLI configuration file, use the following command in your terminal:

{{< tabs/container "Open Source" "Enterprise" >}}

{{< tabs/tab "Open Source" >}}

```bash
$ ttn-lw-cli use thethings.example.com [--fetch-ca] [--user] [--overwrite]
```

{{< note >}} Keep in mind to use `ttn-lw-cli.exe` instead of `ttn-lw-cli` on Windows. {{</ note >}}

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

```bash
$ tti-lw-cli use thethings.example.com [--fetch-ca] [--user] [--overwrite]
```

{{< note >}} Keep in mind to use `tti-lw-cli.exe` instead of `tti-lw-cli` on Windows. {{</ note >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

{{< note >}} `thethings.example.com` represents your {{% tts %}} server address, so you need to replace it according to your setup. Here are few examples:

- if you are using {{% tts %}} Community Edition `eu1` cluster, you need to replace `thethings.example.com` with `eu1.cloud.thethings.network` (see [The Things Network addresses page]({{< ref "getting-started/ttn/addresses#command-line-interface" >}}) for more info about endpoints)

- if you are using a tenant on {{% tts %}} Cloud `eu1` cluster, you need to replace it with `<tenant-id>.eu1.cloud.thethings.industries` (see [{{% tts %}} Cloud addresses page]({{< ref "getting-started/cloud-hosted/addresses#command-line-interface" >}}) for more info about endpoints)

- if you are running {{% tts %}} on your localhost, you will need to replace it with `localhost`
{{</ note >}}

This will generate the CLI configuration and save it to a file named `.ttn-lw-cli.yml`. By default, the file is saved on the current directory, use the `--user` to save it under the user `.config` directory.

{{< note >}} The default configuration file for both `ttn-lw-cli` and `tti-lw-cli` CLI versions is named `.ttn-lw-cli.yml`. {{</ note >}}

> If you have a trouble finding the generated `.ttn-lw-cli.yml` file, take a look at your terminal. The last `INFO` line in response to running the command will contain the location of the generated file such as:
>
> ```bash
> INFO	Config file for eu1.cloud.thethings.network written in /home/user/.config/.ttn-lw-cli.yml
> ```

If the deployment is using a CA that is not already trusted by your system, use the `--fetch-ca` flag to also connect to the server and retrieve the CA required for establishing secure communication.

If you are using a [custom certificate authority]({{< ref "/getting-started/installation/certificates#custom-certificate-authority" >}}), you will have to specify the path to the CA file with `--ca="/path/to/ca.pem"` flag when running the CLI.

If the configuration file already exists and you run the command to generate it again, it will not be overwritten by default and an error will be printed instead. Use `--overwrite` to overwrite the existing configuration file.

{{< note >}} You can also use the `--grpc-port` and `--oauth-server-address` flags to override the default values for the gRPC port and the OAuth server address. These are not needed for standard deployments.

An example of having to specify the `--oauth-server-address` is if you are using an `https` port other than `443` (for example if you are [running {{% tts %}} on localhost]({{< ref "/getting-started/installation/configuration#running-the-things-stack-as-localhost" >}})). If running {{% tts %}} on localhost, you need to append `--oauth-server-address="https://localhost:8885/oauth` when running the CLI.
{{</ note >}}

## Manually create configuration file

First, create a `.ttn-lw-cli.yml` file.

If using {{% tts %}} Community Edition by The Things Network or {{% tts %}} Cloud, you can visit the addresses page for [The Things Network]({{< ref "getting-started/ttn/addresses#command-line-interface" >}}) or [{{% tts %}} Cloud]({{< ref "getting-started/cloud-hosted/addresses#command-line-interface" >}}) to find CLI configuration files for these deployments.

{{< warning >}} Do not forget to change the **Cluster** (and enter the **Tenant ID** for Cloud deployment) on the top of the page when taking the CLI configuration contents from [The Things Network addresses page]({{< ref "getting-started/ttn/addresses#command-line-interface" >}}) or [{{% tts %}} Cloud addresses page]({{< ref "getting-started/cloud-hosted/addresses#command-line-interface" >}}). The addresses in the CLI configuration section will automatically adjust, so you can just copy the configuration and paste it in the `.ttn-lw-cli.yml` file you created. {{</ warning >}}

If hosting your own deployment, copy and paste the following contents in the `.ttn-lw-cli.yml` file:

```yaml
oauth-server-address: 'https://thethings.example.com/oauth'

identity-server-grpc-address: 'thethings.example.com:8884'
gateway-server-grpc-address: 'thethings.example.com:8884'
network-server-grpc-address: 'thethings.example.com:8884'
application-server-grpc-address: 'thethings.example.com:8884'
join-server-grpc-address: 'thethings.example.com:8884'
device-claiming-server-grpc-address: 'thethings.example.com:8884'
device-template-converter-grpc-address: 'thethings.example.com:8884'
qr-code-generator-grpc-address: 'thethings.example.com:8884'
```

{{< note >}} `thethings.example.com` represents your {{% tts %}} server address, so you need to replace it according to your setup. Here are few examples:

- if you are using {{% tts %}} Community Edition `eu1` cluster, you need to replace `thethings.example.com` with `eu1.cloud.thethings.network` (see [The Things Network addresses page]({{< ref "getting-started/ttn/addresses#command-line-interface" >}}) for more info about endpoints)

- if you are using a tenant on {{% tts %}} Cloud `eu1` cluster, you need to replace it with `<tenant-id>.eu1.cloud.thethings.industries` (see [{{% tts %}} Cloud addresses page]({{< ref "getting-started/cloud-hosted/addresses#command-line-interface" >}}) for more info about endpoints)

- if you are running {{% tts %}} on your localhost, you will need to replace it with `localhost`
{{</ note >}}

If you are using an `https` port other than `443` (for example if running {{% tts %}} on localhost), you need to specify that port by adding the following line in `.ttn-lw-cli.yml`:

```yaml
oauth-server-address: 'https://thethings.example.com:8885/oauth'
```

If your deployment uses a custom certificate authority, you will need to specify the path to the CA file by adding the following line in the configuration file:

```yaml
ca: /path/to/ca.pem
```

For advanced options, see the [Configuration Reference]({{< ref "/reference/configuration/cli" >}}).

## Configure the CLI

Now, when you have the `.ttn-lw-cli.yml` file, you have multiple options to make this file available to the CLI in order to configure it:

1. Set the environmental variable by typing `export TTN_LW_CONFIG=/path/to/.ttn-lw-cli.yml`
2. Use command-line flag `-c /path/to/.ttn-lw-cli.yml` when running the CLI
3. Save the configuration file as `.ttn-lw-cli.yml` in `$XDG_CONFIG_HOME`, your home directory, or the working directory.

{{< note >}} On Windows, use `set TTN_LW_CONFIG=/path/to/.ttn-lw-cli.yml` to set the environmental variable. {{</ note >}}

{{< warning >}} When using the `snap` packages, `~/.ttn-lw-cli.yml` will fail with permission errors. Choose a different path for the configuration file. {{</ warning >}}

{{< tabs/container "Open Source" "Enterprise" >}}

{{< tabs/tab "Open Source" >}}

{{< note >}} Check if the wanted configuration file is being properly loaded using `ttn-lw-cli config` command. {{</ note >}}

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

{{< note >}} Check if the wanted configuration file is being properly loaded using `tti-lw-cli config` command. {{</ note >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}
