# 3.29.0

> Added relays command to ttn-lw-cli, which enables the management of LoRaWAN relays, including their configuration and uplink forwarding rules. Changed User’s …

Source: https://www.thethingsindustries.com/docs/whats-new/3.29.0/


### Added

- `relays` command to `ttn-lw-cli`, which enables the management of LoRaWAN relays, including their configuration and uplink forwarding rules.

### Changed

- User's primary email address validation is now decoupled from deprecated `ContactInfo` field.
  - This requires a database schema migration (`ttn-lw-stack is-db migrate`) because of the new `email_validations` table.
- Entities' `ContactInfo` field now returns information regarding the administrative and technical contacts instead of the deprecated `ContactInfo` information.
  - This requires a database schema migration (`ttn-lw-stack is-db migrate`) due to the removal of old information in the `contact_infos` table.
  - The emails of the administrative and technical contacts are only returned in the `ContactInfo` field if the caller has the appropriate rights.
- Organizations can now opt out from sending administrative and technical notifications to all collaborators.
  - New organizations do not send administrative and technical notifications to all collaborators by default.
  - To alter the behavior update the organization's `fanout_notifications` field.

### Removed

- The `http.client.transport.compression` and `http.server.transport.compression` experimental flags.

### Fixed

- Fix Add collaborator form not validating collaborator on submit in the Console.

