---
title: "Resource Limiting"
description: ""
new_in_version: "3.14.2"
distributions: ["Enterprise", "AWS Launcher"]
---

{{% tts %}} supports setting maximum limits for active resources. Access to each resource is limited by a unique identifier key, and it is possible to define resource limiting classes for fine-grained control.

<!--more-->

## Example configuration

The resource limiting configuration is split into multiple profiles. For each profile, we provide a name and the maximum number of concurrent resources allowed rate. The profile is associated with a number of resource limiting classes. Refer to the [Limited Entities]({{< ref "#limited-entities" >}}) section below for a list of all available resource limiting classes and what they mean.

Enable resource limiting by adding the following configuration to your `ttn-lw-stack.yml`.

{{< note >}} The values shown below are only meant as an example. Make sure to adjust them accordingly, depending on the actual traffic of your deployment. {{</ note >}}

```yaml
resource-limiting:
  profiles:
    - name: Limit application data plane connections (MQTT and gRPC)
      max-concurrent: 50
      associations:
        - as:conn
    - name: Override limit for application `test-app-1` of tenant `test-tenant-1`
      max-concurrent: 100
      associations:
        - as:conn:app:test-app-1@test-tenant-1
    - name: Override limit for all applications of tenants `test-tenant-2` and `test-tenant-3`
      max-concurrent: 200
      associations:
        - as:conn:tenant:test-tenant-2
        - as:conn:tenant:test-tenant-3
```

## Limited Entities

{{< resource-limiting >}}

{{< note >}} For resources where multiple classes are defined, the first matching profile will be used. For example, if profile `A` is associated with class `as:conn` and profile `B` is associated with `as:conn:app:my-application@my-tenant`, then connections for `my-application@my-tenant` will use the limits from profile `B`. {{< /note >}}

## Resource Limiting Actions

The following table describes how {{% tts %}} reacts when the maximum resource limits are exceeded.

| Resource                     | Resource Limit Action                                                         | Expected Client Action                    |
| ---------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| gRPC Application Connections | Calls to `Subscribe` RPC will fail with an error of type `ResourceExhausted`. | Terminate existing connections and retry. |
| MQTT Application Connections | A `ServerUnavailable` response is returned for new connections.               | Terminate existing connections and retry. |

## External configuration

It is possible to load extra resource limiting profiles from an external file. Create a file named `/opt/config/resource-limiting.yml` (replace `/opt/config` with any path you like) with the following contents:

```yaml
# If a profile is configured in `ttn-lw-stack.yml` for `as:conn`, then
# it will be overriden
profiles:
  - name: Example profile
    max-concurrent: 5
    associations: [as:conn]
```

Then add the following config to `ttn-lw-stack.yml` (replace `/opt/config` with your path):

```yaml
resource-limiting:
  # This will read profiles from /opt/config/resource-limiting.yml
  config-source: directory
  directory: /opt/config
```
