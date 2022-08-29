---
title: "JavaScript"
description: ""
alias: "/integrations/payload-formatters/javascript"
---

JavaScript payload formatters allow you to write functions to encode or decode messages. JavaScript functions are executed using an [JavaScript ECMAScript 5.1](https://www.ecma-international.org/ecma-262/5.1/) runtime.

<!--more-->

Tips:

- The payload formatters should be simple and lightweight. 
- Use arithmetic operations and bit shifts to convert binary data to fields. 
- Avoid using non-trivial logic or polyfills. 

{{< note >}}
Payload formatters use ECMAScript 5.1 (2009), which has some distinct differences compared to newer, commonly used ECMAScript revisions. See [here](https://www.javatpoint.com/es5-vs-es6) for a quick comparison.

For security, the runtime does not support modules (`require` syntax) or any network or file system access.
{{</ note >}}

{{< warning >}} The maximum size of a JavaScript payload formatter is 40KB (40,960 bytes). Payload formatters loaded from the [Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}) can be larger. {{</ warning>}}

Learn more about payload formatters and examples:

- [Uplink]({{< relref "uplink" >}})
- [Downlink]({{< relref "downlink" >}})
