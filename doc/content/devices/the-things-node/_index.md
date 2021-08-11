---
title: "The Things Node"
description: ""
weight: 
---

{{< figure src="TheThingsNode.jpg" alt="The Things Node" class="float plain" >}}

**The Things Node** is based on the [SparkFun Pro Micro - 3.3V/8Mhz](https://www.sparkfun.com/products/12587) with an added Microchip LoRaWAN module ([RN2483](https://www.microchip.com/wwwproducts/en/RN2483) or [RN2903](https://www.microchip.com/wwwproducts/en/RN2903)). It features a temperature sensor, [NXP’s digital accelerometer](http://www.nxp.com/products/sensors/accelerometers/3-axis-accelerometers/2g-4g-8g-low-g-12-bit-digital-accelerometer:MMA8452Q), light sensor, pushbutton, and RGB LED. All this is packaged in a matchbox-sized waterproof (IP54) casing with a 3 AAA battery compartment.

The Things Node is compatible with the **Arduino software (IDE)**. In this quickstart, you will learn how to register your Things Node with {{% tts %}} and program it with the Arduino software for activating with {{% tts %}}.

**Download** the latest release of the [Arduino Software (IDE)](https://www.arduino.cc/en/Main/Software) and [install](https://www.arduino.cc/en/Guide) it on your operating system.

**Start** the Arduino Software (IDE).

The Things Network has written two excellent Arduino libraries ([The Things Network Arduino Library](https://github.com/TheThingsNetwork/arduino-device-lib) and [The Things Node Arduino Library](https://github.com/TheThingsNetwork/arduino-node-lib)) for the Things Uno. **The Things Network** library provides functions to communicate with {{% tts %}} (E.g. device activation, sending data, etc). **The Things Node** library helps you to configure the sensors and reading sensor data from onboard sensors (E.g. configuring the onboard temperature sensor and reading the temperature).

In the Arduino IDE, select **Sketch &#8594; Include Library &#8594; Manage Libraries…** or **Tools &#8594; Manage Libraries…** from the menu bar.

In the **Library Manager** window, search for **TheThingsNetwork**.

Select **TheThingsNetwork** Arduino library from the search results.

Select the **Install** button.

{{< figure src="TheThingsNetworkArduinoLib.png" alt="The Things Network Arduino library" >}}

When the installation finishes, again in the **Library Manager** window, search for **TheThingsNode**.

Select **TheThingsNode** Arduino library from the search results.

Select the **Install** button.

{{< figure src="TheThingsNodeArduinoLib.png" alt="The Things Node Arduino library" >}}

When the installation finishes, close the **Library Manager** by selecting the **Close** button.

## Connecting the Things Node to a Computer

The Things Node can be connected to a computer using a [micro-USB cable](https://www.sparkfun.com/products/13244). First, you should open the enclosure to access the USB port on the back of the Things Node’s PCB.

{{< note "USB is usually the easiest way to power the Things node, especially when you are programming it. It is acceptable to connect both batteries and a USB connector at the same time. The Things node can automatically select the best power source." />}}

Using a **Phillips** screwdriver remove both screws as shown in the following image.

{{< figure src="NodeOpenCase.jpg" alt="Open the node case" >}}

Connect a micro-USB cable to the connector found between the battery compartment and the top side of the case. Then connect the other end of the micro-USB cable to your computer.

{{< figure src="ConnectUsbCable.png" alt="Connect USB cable" >}}

{{< note "Some micro-USB cables might not fit the limited space between the battery compartment and the casing. Also make sure you use a cable that supports data, not just power. The one we ship with The Things Uno should work." />}}

Connect the other end of the USB cable to your computer.

In the Arduino IDE, select **Tools &#8594; Boards &#8594; SparkFun Pro Micro** from the menu bar.

Select **Tools &#8594; Processor &#8594; ATmega32U4 (3.3V, 8Mhz)** from the menu bar.

Select **Tools &#8594; Port** and choose the correct serial port associated with your Things Node.

## Getting the DevEUI and AppEUI

The sample sketch that can be found in the **TheThingsNetwork** Arduino library prints the **DevEUI**, **AppEUI**, and some other useful information when you need to register your Things Node with {{% tts %}}.

In the Arduino IDE, select **File &#8594; Examples &#8594; TheThingsNode &#8594; DeviceInfo** from the menu bar. The **DeviceInfo** sketch will open in a new window. The sample sketch should look something like this.

```
#include <TheThingsNetwork.h>

#define loraSerial Serial1
#define debugSerial Serial

// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan REPLACE_ME

TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);

void setup()
{
  loraSerial.begin(57600);
  debugSerial.begin(9600);
}

void loop()
{
  debugSerial.println("Device Information");
  debugSerial.println();
  ttn.showStatus();
  debugSerial.println();
  debugSerial.println("Use the EUI to register the device for OTAA");
  debugSerial.println("-------------------------------------------");
  debugSerial.println();

  delay(10000);
}
```

Replace **REPLACE_ME** with **TTN_FP_EU868** or **TTN_FP_US915** depending on the frequency plan of your Things Node and your country/region.

```
// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan REPLACE_ME
```

{{< note "The Things Node supports only **EU868** and **US915** frequency plans." />}}


Select **Sketch &#8594; Upload** from the menu bar to upload the sketch. The Arduino IDE verifies your sketch again and uploads it to your Things Node.

Once uploaded, your sketch will immediately start to run but you cannot see any output unless you open the Arduino **Serial Monitor**. The Arduino **Serial Monitor** is a tool that can be used to print information passing through the serial port. 

Select **Tools &#8594; Serial Monitor** from the menu bar to open the **Serial Monitor**.

Once open the Arduino **Serial Monitor** prints something similar to the following output.

```
-- STATUS
EUI: 0004A30B001B7AD2
Battery: 3223
AppEUI: 70B3D57EF000001C
DevEUI: 0004A30B001B7AD2
Band: 868
Data Rate: 5
RX Delay 1: 1000
RX Delay 2: 2000
Total airtime: 0.00 s
```

**Copy** the Serial Monitor output into a **text editor** (E.g. Notepad) because you will need the **AppEUI** and **DevEUI** when you register your Things Node with {{% tts %}}.

## Creating an Application

The Things Node (or any end device) first needs to be registered with an **application** to communicate with {{% tts %}}. To create a new application, follow the instructions on the [Adding Applications]({{< ref "/integrations/adding-applications" >}}) page.

## Registering The Things Node with {{% tts %}}

It’s time to register your Things Node with {{% tts %}}. 

On the **Applications** page, select your application to go to its **overview** page.

Select **+Add end device** in the bottom-right of the page.

{{< figure src="AddEndDevice.png" alt="Add The Things Node" >}}

{{% tts %}} provides two options to register your end device.

- From the LoRaWAN Device Repository
- Manually

The **From the LoRaWAN Device Repository** option provides only the **OTAA** activation method and the **Manually** option provides both **OTAA** and **ABP** activation methods. In this tutorial, we only look at the first option, **From the LoRaWAN Device Repository** which is the easiest way to register your Things Node with {{% tts %}}.

On the **Register end device** page, select the **From the LoRaWAN Device Repository** tab, if not already selected by default.

Under **Select the end device**, select the following mandatory fields.

- Brand - `The Things Products`
- Model – `The Things Node`
- Hardware Ver. – `1.0`
- Firmware Ver. – `1.0`
- Profile (Region) – Choose `EU_863_870` or `US_902_928` to match with your board. 

{{< figure src="RegisterThingsNodeP1.png" alt="Register Things Node" >}}

Under the **Enter registration data**, select/fill the following mandatory fields.

- Frequency plan – Select `Europe 863-870 MHz (SF9 for RX2 - recommended)` for **EU_863_870** or `United States 902-928 MHz, FSB2 (used by TTN)` for **US_902_928**.
- AppEUI – Copy the **AppEUI** from the output printed by the ***DeviceInfo*** sketch.
- DevEUI – Copy the **DevEUI** from the output printed by the ***DeviceInfo*** sketch.
- AppKey – Select **Generate** button to generate an **AppKey**.
- End device ID –  Give your device a unique human-readable [identifier]({{< ref "reference/id-eui-constraints" >}}).

Select the **Register end device** button. 

{{< figure src="RegisterThingsNodeP2.png" alt="Register Things Node" >}}

Once registered, you will be redirected to the **overview** page of the newly registered Things Node, where you can find the generated **AppKey** which we’ll need next.

## Activating the Things Node - OTAA

In this section, you will learn how to use Over the air activation (OTAA) method to activate your Things Node with {{% tts %}}.

In the Arduino IDE, select **File &#8594; Examples &#8594; TheThingsNode &#8594; Basic** from the menu bar. The ***Basic.ino*** sketch will open in a new window.

Replace the lines following the comment **Set your AppEUI and AppKey**. These keys can be found in your Things Node’s **overview** page under the **Activation information**.

```
// Set your AppEUI and AppKey
const char *appEui = "0000000000000000";
const char *appKey = "00000000000000000000000000000000";
```

{{< figure src="ActivationInformation.png" alt="Activation Information" >}}

Replace **REPLACE_ME** with `TTN_FP_EU868` or `TTN_FP_US915` depending on the frequency plan of your Things Node and your country/region.

```
// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan TTN_FP_EU868
```

Select **Sketch &#8594; Upload** from the menu bar to upload the sketch.

Within 10 seconds, select **Tools &#8594; Serial Monitor** from the menu bar to open the **Serial Monitor**.

You should see something like this on the Arduino **Serial Monitor**.

```
-- STATUS
EUI: 0004A30B001B7AD2
Battery: 3223
AppEUI: 70B3D57EF000001C
DevEUI: 0004A30B001B7AD2
DevAddr: 260127C6
Data Rate: 5
RX Delay 1: 1000
RX Delay 2: 2000
Total airtime: 0.00 s
-- JOIN
Version is RN2483 1.0.1 Dec 15 2015 09:38:09, model is RN2483
...
Sending: mac set appeui with 8 bytes
Sending: mac set deveui 0004A30B001B7AD2
Sending: mac set appkey with 16 bytes
Sending: mac join otaa
Join accepted. Status: 00000401
DevAddr: 26012E93
```

Meanwhile, you should see something like this in the **Live data** section on your **Application overview** page.

[INSERT IMAGE - capture join-request and join-accept messages]

Your **Things Node** is now activated and ready to send/receive messages to/from **{{% tts %}}!**.

## Decoding the Received Messages

Now let’s confirm whether the data has been received to {{% tts %}}. On the **Applications** page, select the Live data tab. You should now see the messages come in. What you see on the **Live data** tab are the raw payloads in hex-formatted, space-separated bytes.

[INSERT IMAGE - raw payload (before applying the payload formatter)]

These payloads are difficult to understand so let’s decode them into meaningful fields.

On the **Applications** page, select the **Payload formatter** tab and then select **Uplink**.

Under **Setup**, from the **Formatter type** drop-down list select **Javascript**.

Copy and paste the following **JavaScript** code in the **Formatter parameter** box.

```
function Decoder(bytes, port) {
  var decoded = {};
  var events = {
    1: 'setup',
    2: 'interval',
    3: 'motion',
    4: 'button'
  };
  decoded.event = events[port];
  decoded.battery = (bytes[0] << 8) + bytes[1];
  decoded.light = (bytes[2] << 8) + bytes[3];
  decoded.temperature = ((bytes[4] << 8) + bytes[5]) / 100;
  return decoded;
}
```

Select the **Save changes** button.

{{< figure src="UplinkPayloadFormatter.png" alt="Uplink Payload Formatter" >}}

Now go back again to the **Live data** tab. The new messages should now show their **decoded** payload.

[INSERT IMAGE - after applied the payload formatter]

You have now completed the quickstart and are able to activate the Things Node, send messages to an application, and decode them from the server side to get meaningful data. Go build something!