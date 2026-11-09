# 3.28.2

> Added Rate limiting classes for individual HTTP paths. Rate limiting keys for HTTP endpoints now contain the caller API key ID when available. The caller IP is …

Source: https://www.thethingsindustries.com/docs/whats-new/3.28.2/


### Added

- Rate limiting classes for individual HTTP paths.
- Rate limiting keys for HTTP endpoints now contain the caller API key ID when available. The caller IP is still available as a fallback.
- Allow users to set multiple frequency plans only in the same band in the Console.

### Changed

- Server side events replaced with single socket connection using the native WebSocket API.
- Gateways now disconnect if the Gateway Server address has changed.
  - This enables CUPS-enabled gateways to change their LNS before the periodic CUPS lookup occurs.
- The LoRa Basics Station discovery endpoint now verifies the authorization credentials of the caller.
  - This enables the gateways to migrate to another instance gracefully while using CUPS.

### Fixed

- Batch gateway rights assertions when multiple membership chains are available (for example, both via a user and an organization).

