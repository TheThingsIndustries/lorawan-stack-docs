---
title: "Device Claiming Configuration"
description: ""
---

{{% tts %}} Device Claiming Server can claim devices on LoRaWAN® Join Servers.

<!--more-->

Device Claiming Server uses this configuration to contact LoRaWAN Join Servers. Learn how to configure [Device Claiming Server]({{< ref "/reference/configuration/device-claiming-server#end-device-claiming-options" >}}) to use the configuration files.

## Configuration Files

{{% tts %}} reads configuration from a file system. The root should contain `config.yml`, which contains Join Servers.

```yml
join-servers:
  - file: './path/js.yml'     # relative path to a file containing Join Server configuration
    join-euis:                # list of Join EUI prefixes the Join Server should handle
      - '11AA000000000000/16' # in this example, the first 16 bits, so all JoinEUIs starting with 11AA
    type: 'ttjsv2'            # type of the Join Server
```

All paths are relative to the `config.yml` file they are defined in.

### The Things Join Server

The Things Join Server operated by The Things Industries should be configured as follows:

```yml
# config.yml
join-servers:
  ...
  - file: './tti/js.yml'
    join-euis:
      - '70B3D57ED0000000/64'
      - 'EC656E0000000000/56'
    type: 'ttjsv2'
  ...
```

The `type` of The Things Join Server is `ttjsv2`. The configuration supports the following options:

```yml
# tti/js.yml
url: 'https://js.cloud.thethings.industries'  # URL of The Things Join Server
tls:                                          # TLS configuration to use (optional)
  source: 'file'                              # TLS client certificate source (file or key-vault)
  root-ca: 'path/to/clientca.pem'             # path to CA file to verify TLS server certificate (optional)
  certificate: 'path/to/clientcert.pem'       # path to TLS client certificate
  key: 'path/to/clientkey.pem'                # path to TLS client key
```

If `tls.source` is set to `key-vault`, {{% tts %}} uses its [Key Vault]({{< ref "/reference/configuration/the-things-stack#key-vault" >}}) configuration to load the TLS client certificate.

Please contact [The Things Industries support](mailto:support@thethingsindustries.com) to gain access to The Things Join Server.
