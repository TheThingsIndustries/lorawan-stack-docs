---
title: "LoRaWAN Backend Interfaces Interoperability"
description: ""
---

{{% tts %}} Network Server and Application Server can use LoRaWAN Backend Interfaces 1.0 and 1.1 with LoRaWAN Join Servers.

<!-- more -->

{{% tts %}} reads configuration from a file system. The root should contain `config.yml`, which contains Join Servers.

```yml
join-servers:
  - file: './path/js.yml'     # relative path to a file containing Join Server configuration
    components: ['as', 'ns']  # optional selector for components (new in 3.21.0)
    join-euis:                # list of Join EUI prefixes the Join Server should handle
    - '11AA000000000000/16'   # in this example, the first 16 bits, so all JoinEUIs starting with 11AA
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
protocol: 'BI1.0'                        # Backend Interfaces protocol to use (one of BI1.0 or BI1.1)
paths:                                   # custom URI paths to use for various requests. Defaults to /
  join: 'some/path'                      # the URI path to use for JoinReq
  rejoin: 'some/other/path'              # the URI path to use for RejoinReq
  app-s-key: 'other/path'                # the URI path to use for AppSKeyReq
  home-ns: 'somepath'                    # the URI path to use for HomeNSReq
sender-ns-id: '1122334455667788'         # Backend Interfaces 1.1 NSID
basic-auth:                              # HTTP Basic Authentication (optional)
  username: 'user'                       # HTTP Basic username
  password: 'secret'                     # HTTP Basic password
tls:                                     # TLS configuration to use (optional)
  root-ca: 'path/to/clientca.pem'        # path to client CA
  certificate: 'path/to/clientcert.pem'  # path to client TLS certificate
  key: 'path/to/clientkey.pem'           # path to client TLS key
headers:                                 # HTTP headers to send, defined as key-value map
  Some-Header: 'SomeValue'
```

## Interoperability with The Things Join Server

The Things Join Server is a stand-alone LoRaWAN Join Server that can be deployed by device makers, distributors and integrators.

An example interoperability repository supporting The Things Join Server operated by The Things Industries could look like this:

```yml
# config.yml
join-servers:
  ...
  - file: './tti/ns-js.yml'
    components: ['ns']
    join-euis:
    - 'EC656E0000000000/24'

  - file: './tti/as-js.yml'
    components: ['as']
    join-euis:
    - 'EC656E0000000000/24'
  ...
```

```yml
# tti/ns-js.yml
fqdn: 'join.cloud.thethings.industries'
protocol: 'BI1.1'
sender-ns-id: 'ABCDEF0000000001'
basic-auth:
  username: 'ABCDEF0000000001'
  password: 'secret'
```

```yml
# tti/as-js.yml
fqdn: 'join.cloud.thethings.industries'
protocol: 'BI1.1'
basic-auth:
  username: 'thethings.example.com'
  password: 'secret'
```

## Interoperability with Semtech Join Server

Semtech Join Server is a hosted LoRaWAN Join Server by Semtech for use with pre-provisioned LoRa Edge modems.

An example interoperability repository supporting Semtech Join Server could look like this:

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
  root-ca: './ca.pem'                        # path to the client CA issued by Semtech
  certificate: './cert.pem'                  # path to the client TLS certificate issued by Semtech
  key: './key.pem'                           # path to the client TLS key issued by Semtech
```
