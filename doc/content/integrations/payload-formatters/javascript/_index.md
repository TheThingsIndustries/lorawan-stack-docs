---
title: "Javascript"
description: ""
alias: "/integrations/payload-formatters/javascript"
---

Javascript payload formatters allow you to write your own functions to encode or decode messages. Javascript functions are executed using an [JavaScript ECMAScript 5.1](https://www.ecma-international.org/ecma-262/5.1/) engine.

<!--more-->

Tips:
- The payload formatters should be simple and lightweight. 
- Use arithmetic operations and bit shifts to convert binary data to fields. 
- Avoid using non-trivial logic or polyfills. 

{{< note >}} Payload formatters use ECMAScript 5 (2009), which has some distinct differences compared to newer, commonly used ECMAScript revisions. See [here](https://www.javatpoint.com/es5-vs-es6) for a quick comparison. Notably, `let`, `const`, and arrow functions are not supported by ES5. {{</ note >}}

{{< note >}} For security, the runtime does not support modules, `require` syntax, or any input/output other than defined below. {{</ note >}}

{{< warning >}} The maximum size of a user-defined Javascript payload formatter is 40KB (40960 characters), unless the source of the payload formatter is [Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}). {{</ warning>}}

There are three different types of {{% tts %}} JavaScript payload formatters:

- [Uplink Decoder]({{< ref "/integrations/payload-formatters/javascript/uplink-decoder" >}})
- [Downlink Encoder]({{< ref "/integrations/payload-formatters/javascript/downlink-encoder" >}})
- [Downlink Decoder]({{< ref "/integrations/payload-formatters/javascript/downlink-decoder" >}})

Read the documentation below to further learn about these formatters and find associated examples.