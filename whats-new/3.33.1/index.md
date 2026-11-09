# 3.33.1

> Added Add recvTime field to the decodeUplink input in payload formatters Add the latest battery percentage of the end device in the ApplicationUplink message. …

Source: https://www.thethingsindustries.com/docs/whats-new/3.33.1/


### Added

- Add recvTime field to the decodeUplink input in payload formatters
- Add the latest battery percentage of the end device in the `ApplicationUplink` message.
- Add live data split view tutorial to the Console.

### Fixed

- Enforce default page limit on AS and NS List RPCs if a value is not provided in the request.
- Swapped field order in `RelayNotifyNewEndDeviceReq` MAC command.
- `LinkADRAns` MAC command verification when the end device does not support ADR.
- Being able to remove all attributes in general settings.

