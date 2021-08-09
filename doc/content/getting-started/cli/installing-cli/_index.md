---
title: "Installing the CLI"
description: ""
weight: 1
---

This section contains instructions for installing the command-line interface.

<!--more-->

### Package managers (recommended)

{{< tabs/container "Open Source" "Enterprise" >}}

{{< tabs/tab "Open Source" >}}

#### macOS

```bash
$ brew install TheThingsNetwork/lorawan-stack/ttn-lw-cli
```

{{< note >}} When installing with `brew`, auto completion is enabled automatically. {{</ note >}}

To upgrade the CLI if it is already installed, use:

```bash
$ brew upgrade TheThingsNetwork/lorawan-stack/ttn-lw-cli
```

#### Linux

```bash
$ sudo snap install ttn-lw-stack
$ sudo snap alias ttn-lw-stack.ttn-lw-cli ttn-lw-cli
```

{{< note >}} When installing with `snap`, auto completion is enabled automatically. {{</ note >}}

To upgrade the CLI if it is already installed, use:

```bash
$ sudo snap refresh ttn-lw-stack
```

### Binaries

You can download [pre-built binaries](https://github.com/TheThingsNetwork/lorawan-stack/releases) for your operating system and processor architecture.

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

#### macOS

```bash
$ brew install TheThingsIndustries/lorawan-stack/tti-lw-cli
```

{{< note >}} When installing with `brew`, auto completion is enabled automatically. {{</ note >}}

To upgrade the CLI if it is already installed, use:

```bash
$ brew upgrade TheThingsIndustries/lorawan-stack/tti-lw-cli
```

#### Linux

```bash
$ sudo snap install tti-lw-stack
$ sudo snap alias tti-lw-stack.tti-lw-cli tti-lw-cli
```

{{< note >}} When installing with `snap`, auto completion is enabled automatically. {{</ note >}}

To upgrade the CLI if it is already installed, use:

```bash
$ sudo snap refresh tti-lw-stack
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Configuration

The command-line needs to be configured to connect to {{% tts %}}. You have multiple options to make the configuration file available to the CLI:

1. Environment: `export TTN_LW_CONFIG=/path/to/ttn-lw-cli.yml`
2. Command-line flag: `-c /path/to/ttn-lw-cli.yml`
3. Save as `.ttn-lw-cli.yml` in `$XDG_CONFIG_HOME`, your home directory, or the working directory.

{{< warning >}} When using the snap packages, `~/.ttn-lw-cli.yml` will fail with permission errors. Choose a different path. {{</ warning >}}

{{< note >}} The default configuration file for both Open Source and Enterprise versions of the CLI is named `.ttn-lw-cli.yml`. {{</ note >}}

### Generate configuration file

If using {{% tts %}} Community Edition by The Things Network or {{% tts %}} Cloud, visit the addresses page for [The Things Network]({{< ref "getting-started/ttn/addresses" >}}) or [{{% tts %}} Cloud]({{< ref "getting-started/cloud-hosted/addresses" >}}) to find CLI configuration files for these deployments.

If hosting your own deployment, for example at `thethings.example.com`, all you need is:

{{< tabs/container "Open Source" "Enterprise" >}}

{{< tabs/tab "Open Source" >}}

```bash
$ ttn-lw-cli use thethings.example.com [--fetch-ca] [--user] [--overwrite]
```

{{< warning >}} If configuring `ttn-lw-cli` for {{% tts %}} Cloud, see [Cloud Addresses]({{< ref "getting-started/cloud-hosted/addresses" >}}) for information about endpoints.
{{</ warning >}}

{{< note >}} On Windows, use `ttn-lw-cli.exe` instead of `ttn-lw-cli`. {{</ note >}}

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

```bash
$ tti-lw-cli use thethings.example.com [--fetch-ca] [--user] [--overwrite]
```

{{< note >}} On Windows, use `tti-lw-cli.exe` instead of `tti-lw-cli`. {{</ note >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

This will generate and save the required CLI config file. By default, the file is saved on the current directory, use the `--user` to save it under the user config directory.

If the deployment is using a CA that is not already trusted by your system, use the `--fetch-ca` flag to also connect to the server and retrieve the CA required for establishing secure communication.

If the file exists already, it is not overwritten and an error is printed instead. You can use `--overwrite` to overwrite the existing configuration file.

{{< note >}} You can also use the `--grpc-port` and `--oauth-server-address` flags to override the default values for the gRPC port and the OAuth server address. These are not needed for standard deployments. {{</ note >}}

{{< note >}} If you are using an `https` port other than `443` (for example if you are running {{% tts %}} on localhost), you need to specify the OAuth server address by appending the `--oauth-server-address="https://thethings.example.com:8885/oauth"` flag when running the CLI. 

If you are using a [custom certificate authority]({{< ref "/getting-started/installation/certificates#custom-certificate-authority" >}}), you will have to specify the `--ca="/path/to/ca.pem"` flag when running the CLI. {{</ note >}}

### Manually create configuration file

If using The Things Network or {{% tts %}} Cloud, visit the addresses page for [The Things Network]({{< ref "getting-started/ttn/addresses" >}}) or [{{% tts %}} Cloud]({{< ref "getting-started/cloud-hosted/addresses" >}}) to find CLI configuration files for these deployments.

If hosting your own deployment, you can create a file named `.ttn-lw-cli.yml` and paste the following contents:

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

{{< tabs/container "Open Source" "Enterprise" >}}

{{< tabs/tab "Open Source" >}}

{{< warning >}} If configuring `ttn-lw-cli` for {{% tts %}} Cloud, see [Cloud Addresses]({{< ref "getting-started/cloud-hosted/addresses" >}}) for information about endpoints.
{{</ warning >}}

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

If you are using an `https` port other than `443` (for example if running {{% tts %}} on localhost), you need to specify that port, e.g.:

```yaml
oauth-server-address: 'https://thethings.example.com:8885/oauth'
```

If your deployment uses a custom certificate authority, you will need to add the following line in the configuration file:

```yaml
ca: /path/to/ca.pem
```

For advanced options, see the [Configuration Reference]({{< ref "/reference/configuration/cli" >}}).

## Auto Completion

Auto completion allows the shell to [automatically fill in commands](https://en.wikipedia.org/wiki/Command-line_completion) after you type the first few letters. It is completely optional but can save you time entering commands.

{{< tabs/container "Open Source" "Enterprise" >}}

{{< tabs/tab "Open Source" >}}

Use `ttn-lw-cli complete` to generate an auto completion script for the `ttn-lw-cli` command. `bash`, `zsh`, `fish` and `powershell` shells are supported:

```bash
$ ttn-lw-cli complete --shell bash --executable ttn-lw-cli > ttn-lw-cli-autocomplete
```

Source the file to enable auto completion:

```bash
$ . ./ttn-lw-cli-autocomplete
```

Alternatively, put in a default directory so that it is loaded automatically (this directory depends on your Operating System and your shell).

For `bash`, this directory is typically `/etc/bash_completion.d/`:

```bash
$ sudo cp ./ttn-lw-cli-autocomplete /etc/bash_completion.d/
```

Generating and sourcing an auto completion PowerShell script on Windows is slightly modified:

```bash
$ ttn-lw-cli.exe complete --shell powershell --executable ttn-lw-cli.exe > ttn-lw-cli-autocomplete.ps1

$ . ./ttn-lw-cli-autocomplete.ps1
```

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

Use `tti-lw-cli complete` to generate an auto completion script for the `tti-lw-cli` command. `bash`, `zsh`, `fish` and `powershell` shells are supported:

```bash
$ tti-lw-cli complete --shell bash --executable tti-lw-cli > tti-lw-cli-autocomplete
```

Source the file to enable auto completion:

```bash
$ . ./tti-lw-cli-autocomplete
```

Alternatively, put in a default directory so that it is loaded automatically (this directory depends on your Operating System and your shell).

For `bash`, this directory is typically `/etc/bash_completion.d/`:

```bash
$ sudo cp ./tti-lw-cli-autocomplete /etc/bash_completion.d/
```

Generating and sourcing an auto completion PowerShell script on Windows is slightly modified:

```bash
$ tti-lw-cli.exe complete --shell powershell --executable tti-lw-cli.exe > tti-lw-cli-autocomplete.ps1

$ . ./tti-lw-cli-autocomplete.ps1
```

{{< /tabs/tab >}}

{{< /tabs/container >}}
