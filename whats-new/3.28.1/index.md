# 3.28.1

> Added Logo customization according to Subscription Tier of the TTS Cloud in the Console. The http.client.transport.compression experimental flag. It controls …

Source: https://www.thethingsindustries.com/docs/whats-new/3.28.1/


### Added

- Logo customization according to Subscription Tier of the TTS Cloud in the Console.
- The `http.client.transport.compression` experimental flag. It controls whether the HTTP clients used by the stack support gzip and zstd decompression of server responses. It is enabled by default.
- The `http.server.transport.compression` experimental flag. It controls whether the HTTP servers used by the stack support gzip compression of the server response. It is enabled by default.

### Changed

- The Things Stack is now built with Go 1.21.
- End device claiming on The Things Join Server now takes the tenant cluster's NetID and NSID, if set.
- Statistics for gateways are now fetched in a single request.

### Fixed

- Resolve scroll jumps when selecting different tabs of a table in the Console.
- `BatchGetGatewayConnectionStats` RPC rights check in certain cases.

