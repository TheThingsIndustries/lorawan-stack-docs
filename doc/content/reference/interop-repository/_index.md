---
title: "LoRaWAN Backend Interfaces interoperability"
description: ""
---

{{% tts %}} Network Server and Application Server can use LoRaWAN Backend Interfaces 1.0 and 1.1 with LoRaWAN Join Servers.

<!-- more -->

{{% tts %}} reads configuration from a file system. The root should contain `config.yml`, which contains various Join Servers.

<!--more-->

```yml
join-servers:                 # list of Join Server interoperability configurations,
                              # used to map a JoinEUI to the Join Server
  - file: './path/js.yml'     # relative path to a file containing Join Server configiration
    join-euis:                # list of Join EUI prefixes the Join Server should handle
    - '11aa000000000000/16'
```

All paths are relative to the file they are defined in, that is `example/js.yml` defined in `interopconf/config.yml` is expected to be located at `interopconf/example/js.yml`.

In case `JoinEUI` prefixes overlap, the most specific prefix takes precedence.

{{% tts %}} Network Server always first tries the cluster-local Join Server and if it's not found or the device is not found, a Join Server via this interoperability is contacted.

`0000000000000000/0` prefix matches all `JoinEUI`s, while being the least specific, hence it always matches last. Use this prefix if you wish to define a "fallback" Join Server interoperability configuration.

For example, consider `config.yml` as follows:

```yml
join-servers:
  - file: './example/js.yml'
    join-euis:
    - 'abcd000000000000/16'
    - 'dcba000000000000/16'

  - file: './fallback/js.yml'
    join-euis:
    - '0000000000000000/0'
```

A configuration like this would make Join Server requests for JoinEUIs starting with `ABCD` or `BCDA` to be handled by Join Server defined at `example/js.yml` in interoperability mode and all other ones to be handled by Join Server defined at `fallback/js.yml`.

The Join Server configuration provides means to configure how the components interact with the Join Server. The configuration supports multiple options:

```yml
scheme: 'https'                          # URL scheme. Defaults to https
fqdn: 'thethings.example'                # FQDN of the Join Server
port: 12345                              # port to connect at. Defaults to 443
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

### The Things Join Server

The Things Join Server is a stand-alone LoRaWAN Join Server that can be deployed by device makers, distributors and integrators.

An example interoperability repository supporting The Things Join Server operated by The Things Industries could look like this:

- `config.yml`:
```yml
join-servers:
  ...
  - file: './tti/js.yml'
    join-euis:
    - 'EC656E0000000000/24'
  ...
```

- `tti/js.yml`:
```yml
fqdn: 'join.cloud.thethings.industries'
protocol: 'BI1.1'
sender-ns-id: 'ABCDEF0000000001'
basic-auth:
  username: 'ABCDEF0000000001'
  password: 'secret'
```

### Semtech Join Server

Semtech Join Server is a hosted LoRaWAN Join Server by Semtech for use with pre-provisioned LoRa Edge modems.

An example interoperability repository supporting Semtech Join Server could look like this:

- `config.yml`:
```yml
join-servers:
  ...
  - file: './semtech/js.yml'
    join-euis:
    - 'ffffffbb00000000/32'
    - '0016c00000000000/24'
  ...
```

- `semtech/js.yml`:
```yml
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
