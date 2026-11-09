# 3.30.0

> Added Fine grained NbTrans overrides for the dynamic ADR mode. See the --mac-settings.adr.mode.dynamic.overrides.data-rate-[index].min-nb-trans and …

Source: https://www.thethingsindustries.com/docs/whats-new/3.30.0/


### Added

- Fine grained NbTrans overrides for the dynamic ADR mode. See the `--mac-settings.adr.mode.dynamic.overrides.data-rate-[index].min-nb-trans` and `--mac-settings.adr.mode.dynamic.overrides.data-rate-[index].max-nb-trans` family of parameters.
- Support for storing user's bookmarks in the database.
  - This requires a database schema migration (`ttn-lw-stack is-db migrate`) because of the new `user_bookmarks` table.
- Support for storing user's Console Preferences in the database.
  - This requires a database schema migration (`ttn-lw-stack is-db migrate`) because of the new `console_preferences` column in the `users` table.
- Network Operations Center now includes a gateway's Round Trip Times panel.
  - This requires a Network Operations Center migration (`tti-lw-stack noc-db migrate`).
  - Shows the minimum, maximum and median values of the gateway's RTT values over a time window.

### Changed

- Searching for collaborators displays only accounts that are not already attached to the entity's collaborator list.

