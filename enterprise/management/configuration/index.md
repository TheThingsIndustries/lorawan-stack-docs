# Configuration

> The Things Stack binary can be configured with many different options. Those options can be provided as command-line flags, environment variables or using a …

Source: https://www.thethingsindustries.com/docs/enterprise/management/configuration/


The Things Stack binary can be configured with many different options. Those options can be provided as command-line flags, environment variables or using a configuration file.

> **Note:** These configuration methods only apply to The Things Stack Open Source and Enterprise deployments that follow the [Installation](https://www.thethingsindustries.com/docs/enterprise/docker/) guide. AWS Launcher deployments can be configured using the [CloudFormation template settings](https://www.thethingsindustries.com/docs/enterprise/aws/ami/deployment-guide/#deployment-using-aws-cloud-formation). Managed deployments such as Cloud and The Things Stack Sandbox are configured for you by The Things Industries.


## Configuration Sources

In this reference we will refer to configuration options by name. On this page we will show how the `console.ui.canonical-url` option can be configured.

### Command-line flags

Command-line flags have the highest priority and, as such, override other means of configuration (environment variable or file). This looks as follows:

```bash
$ ttn-lw-stack start console --console.ui.canonical-url "https://thethings.example.com/console"
```

### Environment variables

Environment variables for configuration options are very similar to the command-line flags, except that they are in uppercase, and all separators (`.` or `-`) are replaced by underscores (`_`). Environment variables are also prefixed with `TTN_LW_`.

> **Note:** In many cases you'll want to use a `.env` file that is loaded using the [`dotenv` command of direnv](https://direnv.net/man/direnv-stdlib.1.html) or the [`env_file` option of Docker Compose](https://docs.docker.com/compose/compose-file/#env_file). You can also `export` each environment variable, or run `export $(grep -v '^#' .env | xargs)` to export all variables in the `.env` file.


The option from the command-line example from above would look as follows with environment variables:

```bash
TTN_LW_CONSOLE_UI_CANONICAL_URL="https://thethings.example.com/console"
```

### Configuration files

You can also configure The Things Stack with a YAML configuration file. This is again similar to the command-line flags, except that each `.` represents a YAML node. This allows you to group related options together:

```yaml
console:
  ui:
    canonical-url: "https://thethings.example.com/console"
    # other console UI options
  # other console options
```

You can specify the location of the YAML configuration file with the command-line flag `-c` or `--config`. If this flag is not present, The Things Stack will look for config files in the following locations:

- The current directory
- The user's home directory (as [determined by Go](https://golang.org/pkg/os/#UserHomeDir))
- The user's config directory (as [determined by Go](https://golang.org/pkg/os/#UserConfigDir))

You can run The Things Stack with the `--help` flag, and check the description of the `--config` flag for the exact locations that are being checked.

### Defaults

The Things Stack can be used for local testing purposes without any custom configuration.

## Printing the Current Configuration

You can see the current configuration with the `config` command of `ttn-lw-stack` or `ttn-lw-cli`. By default this will print the configuration as CLI flags. Use the `--env` or `--yml` flags to print the configuration as environment variables or as YAML.


## Pages in this section

- [General Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/the-things-stack/index.md): Global Options Under normal circumstances, only info, warn and error logs are printed to the console. For development, you may also want to see debug logs. …
- [Tenant Billing Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/tenant-billing-server/index.md): General options tbs.tenant-admin-key : The tenant administration key configured in the Identity Server. tbs.pull-interval : How frequently to pull the metering …
- [Alert Routing Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/alert-routing-server/index.md): New in 3.30.0 The Alert Routing Server dispatches alert notifications about network components in The Things Stack to receivers over email and SMS. It receives …
- [Application Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/application-server/index.md): Security Options as.device-kek-label: Label of KEK used to encrypt device keys at rest Interoperability Options The as.interop options configure how Application …
- [Command-Line Interface Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/cli/index.md): Global Options Under normal circumstances, only info, warn and error logs are printed to the console. For development, you may also want to see debug logs. …
- [Console Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/console/index.md): Console Mount The Console can be served under any arbitrary path on your server console.mount: Path on the server where the Console will be served OAuth Options …
- [Device Claiming Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/device-claiming-server/index.md): End Device Claiming Options dcs.edcs.net-id: NetID of the Network Server to configure when claiming dcs.edcs.ns-id: NSID of the Network Server to configure when …
- [Gateway Configuration Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/gateway-configuration-server/index.md): Security Options gcs.require-auth: Require authentication for the HTTP endpoints Basic Station CUPS Options The gcs.basic-station options configure the GCS to …
- [Gateway Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/gateway-server/index.md): General Options gs.update-version-info-delay Gateways are disconnected from The Things Stack when settings affecting the connection with the Gateway Server …
- [Identity Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/identity-server/index.md): General Options is.delete.restore: Defines how long after soft-deletion an entity can be restored Database Options The Identity Server needs to be connected to …
- [Join Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/join-server/index.md): Security Options js.device-kek-label: Label of KEK used to encrypt device keys at rest General Options js.default-join-eui: Default JoinEUI for the Join Server …
- [Network Operations Center Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/network-operations-center/index.md): Network Operations Center Mount The Network Operations Center can be served under any arbitrary path on your server: noc.mount: Path on the server where the …
- [Network Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/network-server/index.md): General Options ns.dev-addr-prefixes: Device address prefixes of this Network Server ns.net-id: NetID of this Network Server ns.cluster-id: ClusterID of this …
- [Packet Broker Agent Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/packet-broker-agent/index.md): Registration Options pba.registration.name: Friendly name to register with Packet Broker pba.registration.administrative-contact.email: Email address of the …

