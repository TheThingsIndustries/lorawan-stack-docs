# 3.10.3

> Added Configure application activation settings from the CLI (see ttn-lw-cli application activation-settings commands). CLI support for federated authentication …

Source: https://www.thethingsindustries.com/docs/whats-new/3.10.3/


### Added

- Configure application activation settings from the CLI (see `ttn-lw-cli application activation-settings` commands).
- CLI support for federated authentication provider deletion (`ttn-lw-stack is-db delete-auth-provider`).

### Security

- Fixed an issue with authentication on the `/debug/pprof`, `/healthz` and `/metrics` endpoints.

