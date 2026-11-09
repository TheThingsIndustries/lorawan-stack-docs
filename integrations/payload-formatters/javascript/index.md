# JavaScript

> JavaScript payload formatters allow you to write functions to encode or decode messages. JavaScript functions are executed using an JavaScript ECMAScript 5.1 …

Source: https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/


JavaScript payload formatters allow you to write functions to encode or decode messages. JavaScript functions are executed using an [JavaScript ECMAScript 5.1](https://www.ecma-international.org/ecma-262/5.1/) runtime.

Tips:

- The payload formatters should be simple and lightweight. 
- Use arithmetic operations and bit shifts to convert binary data to fields. 
- Avoid using non-trivial logic or polyfills. 

> **Note:** Payload formatters use ECMAScript 5.1 (2009), which has some distinct differences compared to newer, commonly used ECMAScript revisions. See [here](https://www.javatpoint.com/es5-vs-es6) for a quick comparison.
> 
> For security, the runtime does not support modules (`require` syntax) or any network or file system access.


> **Warning:** The maximum size of a JavaScript payload formatter is 40KB (40,960 bytes). Payload formatters loaded from the [Device Repository](https://www.thethingsindustries.com/docs/integrations/payload-formatters/device-repo/) can be larger.


Learn more about payload formatters and examples:

- [Uplink](https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/uplink/)
- [Downlink](https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/downlink/)


## Pages in this section

- [Uplink](https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/uplink/index.md): The JavaScript decodeUplink() function is called when a data uplink message is received from a device. This function decodes the binary payload received from …
- [Downlink](https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/downlink/index.md): The encodeDownlink() function is called when a downlink message with decoded payload is scheduled to be sent to the end device. The encodeDownlink() function …

