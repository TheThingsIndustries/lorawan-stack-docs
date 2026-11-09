# 3.27.2

> Added Locations retrieved from gateway status messages are now be displayed in the gateway map in the Console, even when they are not received through a secure …

Source: https://www.thethingsindustries.com/docs/whats-new/3.27.2/


### Added

- Locations retrieved from gateway status messages are now be displayed in the gateway map in the Console, even when they are not received through a secure connection.

### Fixed

- Accidental deactivation of the storage integration on visiting its console page.
- Getting tenant registry totals in batches of specific entity types by using field masks; `tti.lorawan.v3.TenantRegistry/BatchGetRegistryTotals` now supports field masks.
- Fix gateway connection stats being stuck at `Connecting` until the first uplink is processed in the Console.

