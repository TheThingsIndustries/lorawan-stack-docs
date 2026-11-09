# 3.35.2

> Changed Rate limiting for downlink queue operations (DownlinkQueuePush, DownlinkQueueReplace) is now applied at the application level instead of per-device. …

Source: https://www.thethingsindustries.com/docs/whats-new/3.35.2/


### Changed

- Rate limiting for downlink queue operations (`DownlinkQueuePush`, `DownlinkQueueReplace`) is now applied at the application level instead of per-device. This may result in more `ResourceExhausted` (429) errors when multiple devices under the same application perform downlink queue operations concurrently.

### Fixed

- The support user is now properly excluded from admin-related operations (notifications, last admin checks for delete/update/purge).
- Application Server webhook registry now uses read-only Redis client for non-paginated list operations, reducing connection holding time during high traffic.

