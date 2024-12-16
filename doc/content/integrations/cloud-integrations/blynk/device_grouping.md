---
title: "Device Grouping"
description: "Group your devices correctly to ensure seamless integration and effective device management."
weight: 3
---

To ensure seamless integration and effective device management, follow these principles:

## Use Separate Applications and Templates for Different Device Types
* **Why:** Each device type typically has unique data structures and behaviors. Using separate templates ensures that Blynk can correctly process and display device-specific telemetry data.
* **How:** Create a dedicated application in The Things Stack for each Blynk template. This alignment allows you to configure a payload formatter at the application level, ensuring consistent data formatting across devices within the same group.

## Group Devices of the Same Type in the Same Application and Template
* **Why:** Grouping devices of the same type within a single application simplifies management and avoids issues caused by mixing different device types.
* **How:** Use a common payload formatter for all devices within an application. This reduces the risk of errors and ensures consistent behavior across similar devices.

## Benefits of This Approach
**Consistency in Data Processing** \
Configuring a shared payload formatter at the application level ensures uniformity, preventing potential bugs caused by incompatible data formats.

**Simplified Maintenance** \
Managing devices of the same type in a single application and template makes it easier to update configurations, troubleshoot issues, and scale the solution.

**Accurate Template Association** \
By separating applications for different templates, Blynk can correctly associate devices with their respective templates during the import process.

{{< warning "If multiple Blynk templates are connected to a single The Things Stack application, Device Provisioning from The Things Stack will be disabled for all associated templates. This limitation can lead to challenges in managing device lifecycles and should be avoided." />}}
{{< figure src="../incorrect-device-grouping.png" alt="Incorrect Device Grouping warning" >}}
