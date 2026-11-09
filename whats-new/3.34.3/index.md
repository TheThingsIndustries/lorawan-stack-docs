# 3.34.3

> Added Parsers for newly added normalized payload fields. Changed Increased the default value from 5 to 15 for maximum number of confirmed uplink retransmission …

Source: https://www.thethingsindustries.com/docs/whats-new/3.34.3/


### Added

- Parsers for newly added normalized payload fields.

### Changed

- Increased the default value from 5 to 15 for maximum number of confirmed uplink retransmission for LoRaWAN version prior 1.0.4.
- Ping response settings for the TTIGW protocol to mark less gateway connections as disconnected.

### Fixed

- ADR respects the MAC settings `adr.mode.dynamic.min-data-rate-index` and `adr.mode.dynamic.max-data-rate-index` values

### Removed

- Maximum retransmission delay window for confirmed uplinks.

