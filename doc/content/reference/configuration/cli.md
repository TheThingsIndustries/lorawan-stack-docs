---
title: "Command-Line Interface Options"
description: ""
---

## Global Options

Under normal circumstances, only `info`, `warn` and `error` logs are printed to the console. For development, you may also want to see `debug` logs.

- `log.level`: The minimum level log messages must have to be shown

By default the CLI assumes that it is connecting to servers that use TLS certificates that are trusted by the operating system. When connecting to servers with self-signed certificates or a custom CA, the `ca` option can be used to trust those certificates. When connecting servers that don't use TLS, the `insecure` option can be used.

- `ca`: CA certificate file
- `insecure`: Connect without TLS

The CLI can keep track of multiple configurations and multiple credentials. The `credentials-id` flag selects the set of credentials that are used to connect to servers. The `login` command registers the hosts that are configured at that moment, and will prevent leaking credentials to other hosts. This can be circumvented with the `allow-unknown-hosts` option.

- `credentials-id`: Credentials ID (if using multiple configurations)
- `allow-unknown-hosts`: Allow sending credentials to unknown hosts

By default the CLI uses JSON as the input and output format. It is also possible to use a [Go template](https://golang.org/pkg/text/template/) as output format.

- `input-format`: Input format
- `output-format`: Output format

The CLI is capable of retrying requests that were rejected by the rate limiter: errors of type `ResourceExausthed` and `Unavailable`. By default, this behavior is disabled but can be set through the following configurations:
- `retry-config.max`: Maximum amount of times that a request can be reattempted.
- `retry-config.default-timeout`: Default timeout between retry attempts.
- `retry-config.enable-metadata`: Enables use of the request response metadata to dynamically calculate a timeout for the retry attempts.
- `retry-config.jitter`: Fraction that creates a deviation of the timeout used between retry attempts.

## API Options

The CLI needs to be configured with the addresses of the OAuth server. The [Getting Started guide]({{< ref "/the-things-stack/interact/cli/installing-cli" >}}) gives a good example configuration for a typical deployment.

- `oauth-server-address`: OAuth Server address
- `identity-server-grpc-address`: Identity Server address
- `gateway-server-enabled`: Gateway Server enabled
- `gateway-server-grpc-address`: Gateway Server address
- `network-server-enabled`: Network Server enabled
- `network-server-grpc-address`: Network Server address
- `application-server-enabled`: Application Server enabled
- `application-server-grpc-address`: Application Server address
- `join-server-enabled`: Join Server enabled
- `join-server-grpc-address`: Join Server address
- `device-claiming-server-grpc-address`: Device Claiming Server address
- `device-template-converter-grpc-address`: Device Template Converter address
- `qr-code-generator-grpc-address`: QR Code Generator address
