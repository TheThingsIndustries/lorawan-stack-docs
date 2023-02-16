---
title: "LoRaWAN Join Server Configuration"
description: ""
---

{{% tts %}} Network Server and Application Server can use LoRaWAN Backend Interfaces 1.0 and 1.1 with LoRaWAN Join Servers.

<!-- more -->

Network Server and Application Server use this configuration to contact LoRaWAN Join Servers. Learn how to configure [Network Server]({{< ref "/reference/configuration/network-server#interoperability-options" >}}) and [Application Server]({{< ref "/reference/configuration/application-server#interoperability-options" >}}) to use the interoperability client configuration.

## Configuration Files

{{% tts %}} reads configuration from a file system. The root should contain `config.yml`, which contains Join Servers.

```yml
join-servers:
  - file: './path/js.yml'     # relative path to a file containing Join Server configuration
    components: ['as', 'ns']  # optional selector for components (new in 3.21.0)
    join-euis:                # list of Join EUI prefixes the Join Server should handle
      - '11AA000000000000/16' # in this example, the first 16 bits, so all JoinEUIs starting with 11AA
```

All paths are relative to the `config.yml` file they are defined in.

{{% tts %}} Network Server always first tries the cluster-local Join Server. If the cluster-local Join Server does not accept the join-request, a Join Server is contacted via the LoRaWAN Backend Interfaces interoperability.

In case `JoinEUI` prefixes overlap, the most specific prefix takes precedence. `0000000000000000/0` prefix matches all `JoinEUI`s. Use this prefix if you wish to define a Join Server interoperability configuration for all other join-requests. For example:

```yml
join-servers:
  - file: './fallback/js.yml'
    join-euis:
      - '0000000000000000/0'
```

The Join Server configuration provides means to configure how the components interact with the Join Server. The configuration supports multiple options:

```yml
scheme: 'https'                          # URL scheme. Defaults to https
fqdn: 'thethings.example'                # FQDN of the Join Server
port: 443                                # port to connect at. Defaults to 443
protocol: 'BI1.0'                        # Backend Interfaces protocol to use (BI1.0 or BI1.1)
paths:                                   # custom URI paths to use for various requests. Defaults to /
  join: 'some/path'                      # the URI path to use for JoinReq
  rejoin: 'some/other/path'              # the URI path to use for RejoinReq
  app-s-key: 'other/path'                # the URI path to use for AppSKeyReq
  home-ns: 'somepath'                    # the URI path to use for HomeNSReq
sender-ns-id: '1122334455667788'         # Backend Interfaces 1.1 NSID (overrides ns.interop.id)
basic-auth:                              # HTTP Basic Authentication (optional)
  username: 'user'                       # HTTP Basic username
  password: 'secret'                     # HTTP Basic password
tls:                                     # TLS configuration to use (optional)
  source: 'file'                         # TLS client certificate source (file or key-vault)
  root-ca: 'path/to/clientca.pem'        # path to CA file to verify TLS server certificate (optional)
  certificate: 'path/to/clientcert.pem'  # path to TLS client certificate
  key: 'path/to/clientkey.pem'           # path to TLS client key
headers:                                 # HTTP headers to send, defined as key-value map
  Some-Header: 'SomeValue'
```

If `tls.source` is set to `key-vault`, {{% tts %}} uses its [Key Vault]({{< ref "/reference/configuration/the-things-stack#key-vault" >}}) configuration to load the TLS client certificate.

## Interoperability with The Things Join Server

The Things Join Server is a stand-alone LoRaWAN Join Server that can be deployed by device makers, distributors and integrators.

The Things Join Server operated by The Things Industries should be configured as follows:

```yml
# config.yml
join-servers:
  ...
  - file: './tti/js.yml'
    join-euis:
      - '70B3D57ED0000000/64'
      - 'EC656E0000000000/56'
  ...
```

```yml
# tti/js.yml
fqdn: 'js.cloud.thethings.industries'
protocol: 'BI1.1'
tls:
  source: 'key-vault'
```

## Interoperability with Semtech Join Server

Semtech Join Server is a hosted LoRaWAN Join Server by Semtech for use with pre-provisioned LoRa Edge modems.

Semtech Join Server should be configured as follows:

```yml
# config.yml
join-servers:
  ...
  - file: './semtech/js.yml'
    join-euis:
      - '0016C00000000000/24'
  ...
```

```yml
# semtech/js.yml
fqdn: 'js.loracloud.com'
port: 7009
protocol: 'BI1.0'
paths:
  join: 'api/v1/rens/rens-1::2/lbi_joinreq'  # replace 'rens-1::1' by the RENS issued by Semtech
tls:
  source: 'file'
  root-ca: './ca.pem'                        # path to the CA issued by Semtech
  certificate: './cert.pem'                  # path to the TLS client certificate issued by Semtech
  key: './key.pem'                           # path to the TLS client key issued by Semtech
```
