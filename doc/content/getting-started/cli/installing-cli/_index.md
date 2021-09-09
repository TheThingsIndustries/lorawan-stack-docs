---
title: "Installing the CLI"
description: ""
weight: 1
---

This section contains instructions for installing the command-line interface.

<!--more-->

{{< note >}} There are two versions of {{% tts %}} CLI: `ttn-lw-cli`and `tti-lw-cli`. For most users, `ttn-lw-cli` is sufficient, as it supports all commands to manage {{% tts %}}. `tti-lw-cli` has additional commands for tenant management, but is otherwise identical.

We recommend Cloud, Community Edition, and Open Source users to install `ttn-lw-cli`, and Enterprise users to install `tti-lw-cli`. {{</ note >}}

## Install using package managers (recommended)

Read this section to find out how to install {{% tts %}} CLI on your operating system with commonly used package managers.

{{< note >}} Using package managers (where possible) is a preferred installation method over installation using binaries. {{</ note >}}

### macOS

>Homebrew package manager is recommended for macOS. 
>
> Check out the [official Homebrew documentation](https://brew.sh/) for package manager installation instructions.

{{< tabs/container "Cloud, Community Edition, and Open Source" "Enterprise" >}}

{{< tabs/tab "Cloud, Community Edition, and Open Source" >}}

Once Homebrew is installed on your system, you can install {{% tts %}} CLI using the following command in your terminal:

```bash
$ brew install TheThingsNetwork/lorawan-stack/ttn-lw-cli
```

To upgrade the CLI if it is already installed, use:

```bash
$ brew upgrade TheThingsNetwork/lorawan-stack/ttn-lw-cli
```

Now you can run the CLI using `ttn-lw-cli` in your terminal.

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

Once Homebrew is installed on your system, you can install {{% tts %}} CLI using the following command in your terminal:

```bash
$ brew install TheThingsIndustries/lorawan-stack/tti-lw-cli
```

{{< note >}} When installing with `brew`, auto completion is enabled automatically. {{</ note >}}

To upgrade the CLI if it is already installed, use:

```bash
$ brew upgrade TheThingsIndustries/lorawan-stack/tti-lw-cli
```

Now you can run the CLI using `tti-lw-cli` in your terminal.

{{< /tabs/tab >}}

{{< /tabs/container >}}

### Linux

> `snap` package manager is recommended for Linux.
>
> Check out the [official `snap` documentation](https://snapcraft.io/docs) for package manager installation instructions.

{{< tabs/container "Cloud, Community Edition, and Open Source" "Enterprise" >}}

{{< tabs/tab "Cloud, Community Edition, and Open Source" >}}

Once `snap` is installed on your system, you can install {{% tts %}} CLI using the following command in your terminal:

```bash
$ sudo snap install ttn-lw-stack
$ sudo snap alias ttn-lw-stack.ttn-lw-cli ttn-lw-cli
```

To upgrade the CLI if it is already installed, use:

```bash
$ sudo snap refresh ttn-lw-stack
```

Now you can run the CLI using `ttn-lw-cli` in your terminal.

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

Once `snap` is installed on your system, you can install {{% tts %}} CLI using the following command in your terminal:

```bash
$ sudo snap install tti-lw-stack
$ sudo snap alias tti-lw-stack.tti-lw-cli tti-lw-cli
```

{{< note >}} When installing with `snap`, auto completion is enabled automatically. {{</ note >}}

To upgrade the CLI if it is already installed, use:

```bash
$ sudo snap refresh tti-lw-stack
```

Now you can run the CLI using `tti-lw-cli` in your terminal.

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Install using pre-built binaries

{{< tabs/container "Cloud, Community Edition, and Open Source" "Enterprise" >}}

{{< tabs/tab "Cloud, Community Edition, and Open Source" >}}

In case you are not using package managers as recommended above, you can still download [pre-built binaries](https://github.com/TheThingsNetwork/lorawan-stack/releases) for your operating system and processor architecture.

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

In case you are not using package managers as recommended above, you can still download [pre-built binaries](https://github.com/TheThingsIndustries/lorawan-stack/releases) for your operating system and processor architecture.

{{< /tabs/tab >}}

{{< /tabs/container >}}

Find the latest {{% tts %}} release, scroll down and expand the **Assets** section to see the binaries. Search for archives starting with `lorawan-stack-cli` (usually on top), then search for the specific archive ending with your operating system and processor architecture label.

> For example, if you are using a Linux operating system on a computer with an AMD64 processor, you need to download `lorawan-stack-cli_x.x.x_linux_amd64.tar.gz`.

{{< note >}} There are various ways to find out your processor architecture depending on your operating system. For example, on Linux you can use `uname -m` in your terminal, while on Windows you can use `echo %PROCESSOR_ARCHITECTURE%`. {{</ note >}}

Open the downloaded archive and extract it to the desired location. Enter the extracted directory.

You can now run the CLI from inside that directory, or add that directory to `PATH` to run the CLI from any location.

{{< tabs/container "Cloud, Community Edition, and Open Source" "Enterprise" >}}

{{< tabs/tab "Cloud, Community Edition, and Open Source" >}}

There are multiple ways to add the directory to `PATH`, depending on your operating system.

> For example, in Linux, you can run the CLI from inside the installation directory with `.\ttn-lw-cli` in your terminal.
>
> You can add the directory to `PATH` using the following command:
>
>```bash
>export PATH="$HOME/lorawan-stack-cli-installation-directory:$PATH"
>```
>
>Then, you can run the CLI using `ttn-lw-cli` in your terminal from any location.

{{< note >}} On Windows, {{% tts %}} CLI is run using `.\ttn-lw-cli.exe` instead of `.\ttn-lw-cli`. {{</ note >}}

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

There are multiple ways to add the directory to `PATH`, depending on your operating system.

> For example, in Linux, you can run the CLI from inside the installation directory with `.\tti-lw-cli` in your terminal.
>
> You can add the directory to `PATH` using the following command:
>
>```bash
>export PATH="$HOME/lorawan-stack-cli-installation-directory:$PATH"
>```
>
>Then, you can run the CLI using `tti-lw-cli` in your terminal from any location.

{{< note >}} On Windows, {{% tts %}} CLI is run using `.\tti-lw-cli.exe` instead of `.\tti-lw-cli`. {{</ note >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Auto-completion (optional)

After you have installed the CLI, you can also enable [auto-completion](ttps://en.wikipedia.org/wiki/Command-line_completion). Auto-completion allows the shell to automatically fill in commands after you type the first few letters. It is completely optional but can save you time entering commands.

{{< note >}} When installing {{% tts %}} CLI with `brew` and `snap` package managers, auto-completion is enabled automatically. {{</ note >}}

{{< tabs/container "Cloud, Community Edition, and Open Source" "Enterprise" >}}

{{< tabs/tab "Cloud, Community Edition, and Open Source" >}}

Use `ttn-lw-cli complete` to generate an auto-completion script for the `ttn-lw-cli` command while specifying the shell you are using:

```bash
$ ttn-lw-cli complete --shell bash --executable ttn-lw-cli > ttn-lw-cli-autocomplete
```

{{< note >}} `bash`, `zsh`, `fish` and `powershell` shells are supported. {{</ note >}}

Now you need to source the generated file to enable auto-completion:

```bash
$ . ./ttn-lw-cli-autocomplete
```

Alternatively, put in a default directory so that it gets loaded automatically (this directory depends on your operating system and your shell).

> For example, for `bash`, this directory is typically `/etc/bash_completion.d/`:
>
> ```bash
> $ sudo cp ./ttn-lw-cli-autocomplete /etc/bash_completion.d/
> ```

{{< note >}} Generating and sourcing an auto-completion PowerShell script on Windows is slightly different. In addition to `ttn-lw-cli` being replaced with `ttn-lw-cli.exe`, `ttn-lw-cli-autocomplete` needs to be replaced with `ttn-lw-cli-autocomplete.ps1` as follows:

```bash
$ ttn-lw-cli.exe complete --shell powershell --executable ttn-lw-cli.exe > ttn-lw-cli-autocomplete.ps1

$ . ./ttn-lw-cli-autocomplete.ps1
```
{{</ note >}}

{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}

Use `tti-lw-cli complete` to generate an auto-completion script for the `tti-lw-cli` command while specifying the shell you are using:

```bash
$ tti-lw-cli complete --shell bash --executable tti-lw-cli > tti-lw-cli-autocomplete
```

{{< note >}} `bash`, `zsh`, `fish` and `powershell` shells are supported. {{</ note >}}

Now you need to source the generated file to enable auto-completion:

```bash
$ . ./tti-lw-cli-autocomplete
```

Alternatively, put in a default directory so that it gets loaded automatically (this directory depends on your operating system and your shell).

> For example, for `bash`, this directory is typically `/etc/bash_completion.d/`:
>
> ```bash
> $ sudo cp ./tti-lw-cli-autocomplete /etc/bash_completion.d/
> ```

{{< note >}} Generating and sourcing an auto-completion PowerShell script on Windows is slightly different. In addition to `tti-lw-cli` being replaced with `tti-lw-cli.exe`, `tti-lw-cli-autocomplete` needs to be replaced with `tti-lw-cli-autocomplete.ps1` as follows:

```bash
$ tti-lw-cli.exe complete --shell powershell --executable tti-lw-cli.exe > tti-lw-cli-autocomplete.ps1

$ . ./tti-lw-cli-autocomplete.ps1
```
{{</ note >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}
