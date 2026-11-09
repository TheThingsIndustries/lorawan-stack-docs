# 3.30.2

> Fixed Increased the timeout for Basic Station gateways sending HTTP headers. There should now be enough time for embedded devices with little to no hardware …

Source: https://www.thethingsindustries.com/docs/whats-new/3.30.2/


### Fixed

- Increased the timeout for Basic Station gateways sending HTTP headers. There should now be enough time for embedded devices with little to no hardware acceleration to perform a TLS handshake. In particular, The Things Indoor Gateway can now connect to The Things Stack presenting a ECDSA certificate.
- Reconnect a gateway when the antenna gain is adjusted.
- Fixed length bytes fields, such as EUIs, device addresses or device keys, are no longer considered as being all zero when provided as null values in JSON requests.

