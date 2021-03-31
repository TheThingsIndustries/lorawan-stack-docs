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

- [ ] Update the [documentation version](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/config/_default/config.toml#L28) to match the current minor, if necessary (`v3.${minor}`).
- [ ] To generate documentation, create a clone of [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack), and **checkout the git tag of the release**.
- [ ] To generate API documentation, run the following from within the clone of [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack): 

```bash
$ tools/bin/mage ttiProto:hugoData
```

- [ ] Copy generated files to `lorawan-stack-docs` with the following command:

```bash
$ cp -r doc/data/api /path/to/lorawan-stack-docs/doc/data/
```

- [ ] To generate and export CLI documentation from within the clone of [TheThingsIndustries/lorawan-stack](https://github.com/TheThingsIndustries/lorawan-stack), first run the following command to build the CLI:

```bash
$ go build -tags tti ./cmd/tti-lw-cli
```

- [ ] Then export the CLI documentation using the following command:

```bash
$ HOME=$HOME ./tti-lw-cli gen-yaml-doc -o /path/to/lorawan-stack-docs/doc/data/
```

#### Check (for reviewers)

- [ ] The documentation version is up to date.
- [ ] The TTI and TTN API documentation has been generated and updated in [doc/data/api](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/data/api). This includes the following files:

```
doc/data/api/tti.lorawan.v3/messages.yml
doc/data/api/tti.lorawan.v3/services.yml
doc/data/api/tti.lorawan.v3/enums.yml
doc/data/api/ttn.lorawan.v3/messages.yml
doc/data/api/ttn.lorawan.v3/services.yml
doc/data/api/ttn.lorawan.v3/enums.yml
```

- [ ] The TTI CLI documentation has been generated and updated in [doc/data](https://github.com/TheThingsIndustries/lorawan-stack-docs/blob/master/doc/data). This includes the following file:

```
doc/data/ttn-lw-cli.yml
```

- [ ] All generated documentation matches the version that is being released.
