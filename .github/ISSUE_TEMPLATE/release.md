---
name: Release
about: Checklist for releases
---

<!--
Please check items along as you follow the release process.
-->

#### Overview

This is a checklist for releases. This is filled in by both the releaser and the reviewer where necessary.

#### Update Documentation

- [ ] Create a new release in the [`whats-new` section](https://github.com/TheThingsIndustries/lorawan-stack-docs/tree/master/doc/content/whats-new) and copy the release CHANGELOG from [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack). The title is the release version and the date is the release date.
- [ ] Copy the contents of the latest UPGRADING.md from the [lorawan-stack-aws](https://github.com/TheThingsIndustries/lorawan-stack-aws) to [/enterprise/aws/ecs/changelog](https://github.com/TheThingsIndustries/lorawan-stack-docs/tree/master/doc/content/enterprise/aws/ecs/changelog/index.md)
- [ ] Remove empty sections from the created release file.
- [ ] Update the [documentation version](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/config/_default/config.toml#L28) to match the current PATCH, if necessary (`3.${minor}.${patch}`). Note that this previously included a "v" prefix and only included a minor, but the patch must be included or repository and CLI links will break, and no "v" should be prefixed.
- [ ] To generate documentation, create a clone of [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack), and **checkout the git tag of the release**.
- [ ] To generate API documentation, run the following from within the clone of [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack):

```bash
$ tools/bin/mage ttiProto:hugoData
```

- [ ] Copy generated files to `lorawan-stack-docs` by running the following commands in `lorawan-stack-docs`:

```bash
$ rsync --recursive --delete --remove-source-files ../lorawan-stack/api/ttn.lorawan.v3/ ./doc/data/api/ttn.lorawan.v3/
$ rsync --recursive --delete --remove-source-files ../lorawan-stack/api/tti.lorawan.v3/ ./doc/data/api/tti.lorawan.v3/
```

> NOTE: This assumes that the parent directory of `lorawan-stack-docs` also contains `lorawan-stack`. If not, you'll need to adjust the commands accordingly.

- [ ] To generate and export CLI documentation from within the clone of [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack), first run the following command to build the CLI:

```bash
$ go build -tags tti ./cmd/tti-lw-cli
```

- [ ] Then export the CLI documentation using following commands:

```bash
$ HOME='$HOME' ./tti-lw-cli gen-md-doc -o ../lorawan-stack-docs/doc/content/ttn-lw-cli
```

```bash
$ HOME='$HOME' ./tti-lw-cli gen-json-tree -o ../lorawan-stack-docs/doc/data/commands
```

- [ ] Replace links to `end-devices/templates` with `templates` as they are not exported correctly:

```bash
$ sed -i.bak 's/end-devices_templates/templates/g' ../lorawan-stack-docs/doc/content/ttn-lw-cli/ttn-lw-cli_end-devices.md
```

- [ ] Clean up:

```bash
$ rm ../lorawan-stack-docs/doc/content/ttn-lw-cli/ttn-lw-cli_end-devices.md.bak
```

> NOTE: This assumes that the parent directory of `lorawan-stack-docs` also contains `lorawan-stack`. If not, you'll need to adjust the commands accordingly.

#### Check (for reviewers)

- [ ] A new section has been created in [`whats-new`](doc/content/whats-new) with the corresponding CHANGELOG from [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack). The title is the release version and the date is the release date.
- [ ] The latest UPGRADING.md from the [lorawan-stack-aws](https://github.com/TheThingsIndustries/lorawan-stack-aws) has been copied to [/enterprise/aws/ecs/changelog](https://github.com/TheThingsIndustries/lorawan-stack-docs/tree/master/doc/content/enterprise/aws/ecs/changelog/index.md)
- [ ] The documentation version is up to date with the latest PATCH (`3.${minor}.${patch}`). No "v" is prefixed.
- [ ] The TTI and TTN API documentation has been generated and updated in [doc/data/api](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/data/api). This includes the following files:

```
doc/data/api/tti.lorawan.v3/messages.yml
doc/data/api/tti.lorawan.v3/services.yml
doc/data/api/tti.lorawan.v3/enums.yml
doc/data/api/ttn.lorawan.v3/messages.yml
doc/data/api/ttn.lorawan.v3/services.yml
doc/data/api/ttn.lorawan.v3/enums.yml
```

- [ ] The TTI CLI documentation has been generated and updated in [doc/data](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/data). This includes the following files:

```
doc/data/commands/ttn-lw-cli.json
doc/content/ttn-lw-cli/*.md
```

- [ ] All generated documentation matches the version that is being released.
