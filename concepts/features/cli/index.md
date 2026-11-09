# Command-line Interface

> Although the web interface of The Things Stack (the Console) currently has support for all basic features of The Things Stack, for more advanced actions, you …

Source: https://www.thethingsindustries.com/docs/concepts/features/cli/


Although the web interface of The Things Stack (the Console) currently has support for all basic features of The Things Stack, for more advanced actions, you may need to use the Command-Line Interface (CLI).

The The Things Stack Command-line Interface (CLI) provides a cross-platform tool for managing components through the command-line.
This section contains instructions for installing, configuring, and logging in with the CLI, so you can use it with your The Things Stack deployment.

To use the CLI, you need to complete three steps:

1. [Install the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/)
2. [Configure the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/configuring-cli/)
3. [Login with the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/login/)

If you need help with any CLI command, use the `--help` flag to get a list of subcommands, flags and their description and aliases.

For a complete list of CLI commands, see the [CLI reference](https://www.thethingsindustries.com/docs/concepts/features/cli/reference/).

For troubleshooting common CLI errors, see the [Troubleshooting CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/troubleshooting/) section.

## Configuration

See the [Configuration Reference](https://www.thethingsindustries.com/docs/enterprise/management/configuration/) for details on how the CLI can be configured. The different options are detailed in the [CLI Configuration Reference](https://www.thethingsindustries.com/docs/enterprise/management/configuration/cli/).

## Help for Commands

The CLI comes with builtin documentation. This documentation can be printed by adding the `-h` or `--help` flag to any command.

## Command Aliases

Many CLI commands names have aliases, which are different spellings or shorter versions of the same command. For instance, `applications` commands can also be written as `application`, `apps`, `app` or even `a`. This could save you some typing if you frequently use the CLI.

For even less typing you could also register an alias for `ttn-lw-cli` itself (`alias tt=ttn-lw-cli`).

## Input and Output Formats

By default the CLI outputs results as one or more JSON objects. These JSON objects are equivalent to the JSON objects that would be returned when using the HTTP API of The Things Stack. Some commands accept one or more JSON objects as input. These JSON objects are equivalent to the JSON objects that can be sent to the HTTP API.

The `--output-format` flag allows you to specify a [Go template](https://golang.org/pkg/text/template/) that is executed for the result(s) of a command. The example below executes lists applications and outputs their IDs and names:

```bash
ttn-lw-cli applications list --name --output-format "{{ .ApplicationID }}: {{ .Name }}"
```

## Login and Logout

The `login` command starts the OAuth authorization flow with the configured OAuth server. By default this makes use of an endpoint on `localhost` for the OAuth callback. If you are not running the CLI on the machine that is `localhost`, you can add the flag `--callback=false` to the `login` command. This will disable the callback endpoint, and instead ask you to copy/paste the authorization code that you will receive from the OAuth server.

It is also possible to use an API key instead of OAuth. To do this, add the flag `--api-key=NNSXS.AAAA.BBBB` to the `login` command (replacing `NNSXS.AAAA.BBBB` with your API key).

Logging out of the CLI is done with the `logout` command, which will automatically invalidate the OAuth access token that was in use.

## Entity Management

In most cases the CLI be used to manage entities, such as applications, end devices or gateways. For each of these entities, the cli has `create`, `get`, `list`, `update` and `delete` commands.

### Creating Entities

When creating an application or gateway, you need to specify a user or organization with the `--user-id` or `--organization-id` flag. This user or organization will be granted all rights on the new application or gateway.

When creating an end device, you need to specify an application in which the end device should be created.

All other flags correspond to the fields of the entity, as can be seen with the `--help` flag and in the [API Reference](https://www.thethingsindustries.com/docs/api/reference/grpc/).

### Getting or Listing Entities

When getting a single entity or listing entities, you need to provide flags for selecting the fields to fetch from the server. For performance reasons, list commands only allow a subset of fields (the fields stored in the [Identity Server](https://www.thethingsindustries.com/docs/concepts/architecture/components/identity-server/)).

### Updating Entities

When updating an entity, you provide flags for the fields that need to be updated. All other fields of the entitiy are left unchanged.

### Deleting Entities

Be careful when using the `delete` command, as it won't ask for confirmation.

## Access Control

The CLI can be used to manage access control of entities. Managing collaborators is done with the `collaborators` commands (i.e. `ttn-lw-cli applications collaborators`) and managing API keys with the `api-keys` commands (i.e. `ttn-lw-cli applications api-keys`).

### Collaborator Rights

Collaborator rights can be `set`, `list`ed or `delete`d. When setting collaborator rights, specify a user or organization with the `--user-id` or `--organization-id` flag and the flags for the rights that you want to assign. Use the `--help` or `-h` for more information on the available rights.

### API Keys

API keys can be `create`d, `list`ed, `update`d and `delete`d. Creating an API key is very similar to setting collaborator rights. Be aware that API keys are only shown once when they are created, and will never be shown again, so make sure to copy them to a safe place.

## Uplink Traffic

The CLI can be used to subscribe to uplink traffic. See the [Getting Started guide](https://www.thethingsindustries.com/docs/concepts/features/cli/) for more details.

## Downlink Queue

The CLI can manage the downlink queue of end devices. See the [Downlink Queue Operations guide](https://www.thethingsindustries.com/docs/hardware/devices/configuring-devices/downlink-queue-ops/) for more details.

## Events

The CLI can be used to subscribe to events. See the [Events guide](https://www.thethingsindustries.com/docs/concepts/features/events/) for more details.


## Pages in this section

- [Installing the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/index.md): This section contains instructions for installing the command-line interface.
- [Configuring the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/configuring-cli/index.md): The Things Stack CLI needs to be configured to connect to your The Things Stack deployment.
- [Login with the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/login/index.md): This section explains how to login to The Things Stack using the command-line interface.
- [Troubleshooting CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/troubleshooting/index.md): This section contains help for common errors encountered when using the CLI.
- [Command-Line Interface Reference](https://www.thethingsindustries.com/docs/concepts/features/cli/reference/index.md): This is the reference for the command-line interface of The Things Stack: ttn-lw-cli. Expand the command tree to the left to see information about commands.

