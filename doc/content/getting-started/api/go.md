---
title: "Go Code Examples"
description: ""
weight:
---

[Go](https://golang.org) is an open source programming language that makes it easy to build simple, reliable, and efficient software.

<!-- more -->

## Setup

[Download](https://golang.org/dl/) and install Go. Run `go version` and make sure your version is newer than **1.15**.

We will use the gRPC API of {{% tts %}}.

Initialize a new Go module:

```bash
$ mkdir my_application
$ cd my_application
$ go mod init github.com/example/my_application
```

Add the following contents to your `go.mod` file:

```go
// go.mod
module github.com/example/my_application

go 1.15

// Dependency of lorawan-stack.
replace gopkg.in/DATA-DOG/go-sqlmock.v1 => gopkg.in/DATA-DOG/go-sqlmock.v1 v1.3.0

// Dependency of lorawan-stack.
replace gocloud.dev => gocloud.dev v0.19.0

// Dependency of lorawan-stack.
replace github.com/grpc-ecosystem/grpc-gateway => github.com/TheThingsIndustries/grpc-gateway v1.15.2-gogo

require (
    go.thethings.network/lorawan-stack/v3 v3.10.5
    google.golang.org/grpc v1.34.0
)
```

And then run `go mod download` to download Go dependencies.

## Get End Device

Create a `main.go` file and add the following code:

```go
// main.go
package main

import (
    "context"
    "crypto/tls"
    "fmt"

    "github.com/gogo/protobuf/types"
    "go.thethings.network/lorawan-stack/v3/pkg/rpcmetadata"
    "go.thethings.network/lorawan-stack/v3/pkg/ttnpb"
    "google.golang.org/grpc"
    "google.golang.org/grpc/credentials"
)

var (
    baseURL = "thethings.example.com" // Default gRPC port with TLS is 8884
    apiKey  = rpcmetadata.MD{
        AuthType:      "bearer",
        AuthValue:     "NNSXS.XXXXXXXXXXXXXX.YYYYYYYYYYY",
    }
    userAgent = "myGoIntegration/version"
)

func main() {
    opts := []grpc.DialOption{
        grpc.WithTransportCredentials(credentials.NewTLS(&tls.Config{})), // require TLS
        grpc.WithPerRPCCredentials(apiKey), // set API key for authorization
        grpc.WithUserAgent(userAgent), // set user agent
    }
    cc, err := grpc.Dial(baseURL, opts...)
    if err != nil {
        panic(err)
    }

    dev, err := ttnpb.NewEndDeviceRegistryClient(cc).Get(context.Background(), &ttnpb.GetEndDeviceRequest{
        EndDeviceIdentifiers: ttnpb.EndDeviceIdentifiers{
            DeviceID:               "dev1",
            ApplicationIdentifiers: ttnpb.ApplicationIdentifiers{ApplicationID: "app1"},
        },
        FieldMask: types.FieldMask{
            Paths: []string{
                "name",
                "description",
            },
        },
    })
    if err != nil {
        panic(err)
    }
    fmt.Println("Device id:", dev.DeviceID)
    fmt.Println("Device name:", dev.Name)
    fmt.Println("Device description:", dev.Description)
}
```

Then build and run with:

```bash
$ go build ./main.go
$ ./main

Device ID: dev1
Device name: my device name
Device description: my device description
```

## Streaming Responses

To get a stream of events for device `dev1` of application `app1`:

```go
// main.go
package main

import (
    "context"
    "crypto/tls"
    "fmt"

    "github.com/gogo/protobuf/types"
    "go.thethings.network/lorawan-stack/v3/pkg/rpcmetadata"
    "go.thethings.network/lorawan-stack/v3/pkg/ttnpb"
    "google.golang.org/grpc"
    "google.golang.org/grpc/credentials"
)

var (
    baseURL = "thethings.example.com" // Default gRPC port with TLS is 8884
    apiKey  = rpcmetadata.MD{
        AuthType:      "bearer",
        AuthValue:     "NNSXS.XXXXXXXXXXXXXX.YYYYYYYYYYY",
    }
    userAgent = "myGoIntegration/version"
)

func main() {
    opts := []grpc.DialOption{
        grpc.WithTransportCredentials(credentials.NewTLS(&tls.Config{})), // require TLS
        grpc.WithPerRPCCredentials(apiKey), // set API key for authorization
        grpc.WithUserAgent(userAgent), // set user agent
    }
    cc, err := grpc.Dial(baseURL, opts...)
    if err != nil {
        panic(err)
    }

    stream, err := ttnpb.NewEventsClient(cc).Stream(context.Background(), &ttnpb.StreamEventsRequest{
        Identifiers: []*ttnpb.EntityIdentifiers{
            {
                Ids: &ttnpb.EntityIdentifiers_DeviceIDs{
                    DeviceIDs: &ttnpb.EndDeviceIdentifiers{
                        DeviceID: "dev1",
                        ApplicationIdentifiers: ttnpb.ApplicationIdentifiers{
                            ApplicationID: "app1",
                        },
                    },
                },
            },
        },
    })
    if err != nil {
        panic(err)
    }

loop:
    for {
        event, err := stream.Recv()
        if err == io.EOF {
            break loop
        }
        if err != nil {
            panic(err)
        }

        // Do something fancy with the event
        fmt.Println("New event:", event.Name)
    }

    fmt.Println("Done")
}
```

```bash
$ go build main.go
$ ./main

New event: events.stream.start
...
```
