# 3.27.1

> Added Add support for administrative_contact and technical_contact in the Console. Reimplement move away prompt in payload formatter views in the Console. Add …

Source: https://www.thethingsindustries.com/docs/whats-new/3.27.1/


### Added

- Add support for `administrative_contact` and `technical_contact` in the Console.
- Reimplement move away prompt in payload formatter views in the Console.
- Add telemetry collection for the CLI. A background process was added to the CLI in order to send the following information: Operating System, Architecture, Binary version and Golang version. The message is sent every 24 hours and it contains an unique random number as an identifier. It is enabled by default and in order to disable it, set `telemetry.enable` to false in the CLI configuration. For more information, consult the documentation [here](https://www.thethingsindustries.com/docs/reference/telemetry/cli).
- Add telemetry collection for the IdentityServer. A background task was added in the Identity Server which is responsible for collecting information regarding the amount of each entity in the database, this has the purpose of allowing us to better understand how users are interacting with the system, an example being if tenants are using Organizations or just Users. All information is sent every 24 hours and it contains an identifier composed of the URLs present in the following configuration fields `console.ui.[is|gs|ns|as|js].base-url`. It is enabled by default and in order to disable it, set `telemetry.enable` to false in the Stack configuration. For more information, consult the documentation [here](https://www.thethingsindustries.com/docs/reference/telemetry/identity_server).

### Fixed

- OAuth clients created by an admin no longer trigger an email requesting approval from one of the tenant's admins.
- Broken network routing policy links in the Packet Broker panel of the admin panel in the Console.
- Application Server downlink related events now contain the complete set of end device identifiers, and the received at timestamp is now provided at all times.
- Wrong order of breadcrumbs in the device views of the Console.

