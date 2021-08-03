---
title: "The Things Uno"
description: ""
weight: 
---

{{< figure src="TheThingsUno.png" alt="CloudGate Gateway" class="float plain" >}}

The [Things Uno](https://www.thethingsnetwork.org/docs/devices/uno/) is based on the [Arduino Leonardo](https://store.arduino.cc/usa/leonardo) (not the Arduino Uno) with an added **Microchip** LoRaWAN module ([RN2483](https://www.microchip.com/wwwproducts/en/RN2483) or [RN2903](https://www.microchip.com/wwwproducts/en/RN2903)). It is fully compatible with the **Arduino IDE** and existing Arduino shields.

**The Things Uno** lets you easily get started with **LoRaWAN** application development using the Arduino IDE. Choose the correct Things Uno board to suit the recommended frequency plan of your country/region.

## Setting up Arduino IDE
The Arduino Integrated Development Environment (IDE) allows you to write code using the Arduino programming language (C/C++), compile (verify), and upload it to the Things Uno board. It supports Windows, Mac OS, Linux, and Chrome OS.

Download the latest release of the [Arduino IDE](https://www.arduino.cc/en/Main/Software). There are different ways to install it. The full instructions can be found at https://www.arduino.cc/en/Guide for each operating system. After you have downloaded and installed the Arduino IDE, you will need to start the IDE.

In the **menu bar** select **Sketch &#8594; Include Library &#8594; Manage Libraries...** or **Tools &#8594; Manage Libraries...**

In the **Library Manager** window search for **The Things Network**.

Select **TheThingsNetwork** Arduino library from the search results.

Select the **Install** button.

When the installation finishes, close the **Library Manager** by selecting the **Close** button.

{{< figure src="LibraryManager.png" alt="Library Manager" >}}

## Connecting Things UNO to your Computer
To begin, connect your Things Uno to the computer with the USB cable. 

[INSERT IMAGE]

In the **menu bar** select **Tools &#8594; Board &#8594; Arduino Leonardo**. This will tell your Arduino IDE to upload sketches to your Things Uno board.

[INSERT IMAGE]

In the **menu bar** select **Tools &#8594; Port &#8594; Serial port** (the serial port associated with your Things Uno).

[INSERT IMAGE]

## Creating an Application
The Things Uno (or any end device) needs to be registered with an **application** to communicate with The Things Stack. To create an application follow the steps given below:

If you don’t have a Things Stack account, create a [free account](https://account.thethingsnetwork.org/register) before you begin. Next, sign in to [The Things Stack](https://eu1.cloud.thethings.network) with your credentials.

In the top menu, select **Applications**, or in the middle of the window, select the **Go to applications** (large) icon.

{{< figure src="TheThingsStackConsole1.png" alt="The Things Stack Console" >}}

On the **Applications** page, create a new application by selecting **+Add application** at the top-right of The Things Stack window.

{{< figure src="AddApplication.png" alt="Add Application" >}}

In the **Add Application** window enter a name for the **Application ID**. Following are the rules for creating an Application ID.

- Must be unique within an application server of the network.
- Must start with a lowercase letter or a number.
- Can only contain lowercase letters, numbers, and hyphens.
- Cannot have spaces between words. You can combine them using hyphens.
- Must have less than 26 characters.

Add an **Application name** and **Description** if you'd like (these fields are optional).

Select the **Create application** button.

{{< figure src="CreateApplication.png" alt="Create Application" >}}

Your application will be created, and you will be redirected to the **Application overview** page.

{{< figure src="ApplicationOverview.png" alt="Application Overview" >}}

## Writing your First Sketch to Get the DevEUI and AppEUI

In this section, you will learn how to write and upload your first sketch to The Things Uno. This sketch prints **DevEUI**, **AppEUI**, and some useful information that you will need to register your Things Uno with the Things Stack.

In the menu bar, select **File &#8594; New**. A new window will open with the default Arduino sketch.

```
void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
```
In the menu bar select **Sketch &#8594; Include Library &#8594; The Things Network**. The following code will add to the top of the sketch.

```
#include <TheThingsNetwork.h>
```

This will import **The Things Network Arduino library** to your sketch and provide you with some useful functions to work with LoRaWAN. 

Type the following lines to create two serial port objects for **Serial** and **Serial1**.

```
#define loraSerial Serial1
#define debugSerial Serial
```
 
{{< note >}}The **Serial** object allows communication between **The Things Uno** and your **computer**. Also, the **Serial1** object allows communication between **The Things Uno** and the **Microchip LoRa module**.{{</ note >}}

Type the following line to define the frequency plan of your Things Uno. Replace `REPLACE_ME` with `TTN_FP_EU868` or `TTN_FP_US915` depending on the frequency plan of your Things Uno and your country/region. (Click [here](https://www.thethingsnetwork.org/docs/devices/arduino/usage/#set-the-frequency-plan) to find the macro values for `freqPlan`).

```
// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan REPLACE_ME
```

{{< note >}}The Things Uno supports only **EU868** and **US915** frequency plans.{{</ note >}}

Type the following line after the `freqPlan`.

```
TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);
```

This will create a `TheThingsNetwork` object named `ttn` with `loraSerial`, `debugSerial`, and `freqPlan` as inputs.


Type the following lines inside the `setup()` function.

```
debugSerial.begin(9600);
loraSerial.begin(57600);
```

This will call the `begin()` function for each serial port object to set the baud rate for serial data transmission. Use `9600` and `57600` bits per second for `debugSerial` and `loraSerial` respectively. 


Type the following lines just after the `loraSerial.begin(57600);`. 

```
while (!debugSerial) {
    ;
}
```

This will tell your code not to jump to the next line until the **Serial Monitor** is ready.

Type the following code snippet just after the **while loop**.

```
debugSerial.println("-- STATUS");
ttn.showStatus();
```

The `showStatus()` function retrieves some useful device-specific information from the Microchip LoRa module and prints them on the **Serial Monitor**.

After editing your sketch, **save** it as `TheThingsUnoTest` by selecting **File &#8594; Save As** from the **menu bar**. 

Once completed your Arduino sketch should look something like this:

***TheThingsUnoTest.ino***

```
#include <TheThingsNetwork.h>
 
#define loraSerial Serial1
#define debugSerial Serial
 
// Replace REPLACE_ME with TTN_FP_EU868 or TTN_FP_US915
#define freqPlan TTN_FP_EU868
 
TheThingsNetwork ttn(loraSerial, debugSerial, freqPlan);
 
void setup()
{
  loraSerial.begin(57600);
  debugSerial.begin(9600);

    while (!debugSerial) {
    ;
    }

  debugSerial.println("-- STATUS");
  ttn.showStatus();

}
 
void loop()
{
}
```

Make sure that your Things Uno board is connected to your computer and select the **Upload** button in the toolbar. The IDE verifies your sketch again and uploads it to your Things Uno. During this process, the **TX/RX** LEDs on your Things Uno board should blink, indicating the information is traveling between the Things Uno and your computer.

Once uploaded, your sketch will immediately start to run but you cannot see any output unless you open the Arduino **Serial Monitor**. The Arduino Serial Monitor is a tool that can be used to print information passing through the serial port. 

In the **menu bar** select **Tools &#8594; Serial Monitor**. Once open the Serial Monitor prints something similar to the following output.

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

**Copy** the Serial Monitor output to a text editor (i.e. Notepad) because you will need the **AppEUI** and **DevEUI** when you register your Things Node with the Things Stack.

## Registering The Things UNO with The Things Stack
It’s time to register your Things Uno with the Things Stack. 

On the **Applications** page, select your application to go to its overview page. 

Select **+ Add end device** in the bottom-right of the page.

{{< figure src="AddEndDevice.png" alt="Add end device" >}}

The Things Stack provides two options to register your end device.
- From the LoRaWAN Device Repository
- Manually

Each registering option provides both **OTAA** and **ABP** activation methods. Let’s have a look at them one by one.

### From the LoRaWAN Device Repository 
This is the easiest way to register your Things Uno with the Things Stack.

On the **Register end device** page, in the **From the LoRaWAN Device Repository** tab, under **Select the end device**, select the following mandatory fields:
- Brand - `The Things Products`
- Model – `The Things Uno`
- Hardware Ver. – `1.0`
- Firmware Ver. – `quickstart` or `abp` (we recommend you to use `quickstart` as it provides **OTAA**.)
- Profile (Region) – Choose `EU_863_870` or `US_902_928` to match with your board. 

{{< figure src="RegisterEndDeviceRepo.png" alt="Register End Device from LoRaWAN repository" >}}

Under the **Enter registration data**, select/fill the following mandatory fields.

If you have selected `quickstart` from the **Firmware Ver.** in the previous step:
- Frequency plan – Select `Europe 863-870 MHz (SF9 for RX2 - recommended)` for **EU_863_870** or `United States 902-928 MHz, FSB2 (used by TTN)` for **US_902_928**.
- AppEUI – Copy the **AppEUI** from the output printed by the ***TheThingsUnoTest*** sketch.
- DevEUI – Copy the **DevEUI** from the output printed by the ***TheThingsUnoTest*** sketch.
- AppKey – Select **Generate** button to generate an **AppKey**.
- End device ID – A unique human-readable identifier for your Things Uno.

{{< note >}}
Following are the rules for creating an End device ID:
- Must be unique within an application server of the network.
- Must start with a lowercase letter or a number.
- Can only contain lowercase letters, numbers, and hyphens.
- Cannot have spaces between words. You can combine them using hyphens.
- Must have less than 36 characters.
{{</ note >}}

Select the **Register end device** button. 

{{< figure src="RegisterEndDeviceRepoOTAA.png" alt="Register End Device from LoRaWAN repository OTAA" >}}

If you have selected `abp` from the **Firmware Ver.** in the previous step:
- Frequency plan – Select `Europe 863-870 MHz (SF9 for RX2 - recommended)` for **EU_863_870** or `United States 902-928 MHz, FSB2 (used by TTN)` for **US_902_928**.
- Device address - Select **Generate** button.
- AppSKey– Select **Generate** button.
- NwkSKey– Select **Generate** button.
- End device ID – A unique human-readable identifier for your Things Uno (see above for naming conversions).

Select the **Register end device** button. 

{{< figure src="RegisterEndDeviceRepoABP.png" alt="Register End Device from LoRaWAN repository ABP" >}}

Once registered, you will be redirected to the overview page of the newly registered device, where you can find the generated **AppKey** which we’ll need next.

### Manually
Manual registration requires providing more information than the previous option but it provides a flexible way of adding end devices. 

On the **Register end device** page select the **Manually** tab.

In the **Basic settings** select/fill the following:

- LoRaWAN version - `MAC V1.1`
- Regional Parameters version: `PHY V1.1 REVB`
- Frequency plan – select the frequency plan for your region. For Europe select `Europe 863-870 MHz (SF9 for RX2 – recommended)` and for the US select `United States 902-923 MHz, FB2 (used by TTN)`.
- Select **Show advanced activation, LoRaWAN class and cluster settings** to expand the hidden section if not visible.
- Activation mode: `Over the air activation (OTAA)` or `Activation by personalization (ABP)`(we recommend you to use `Over the air activation (OTAA)`).

If you have selected `Over the air activation (OTAA)`:
- Additional LoRaWAN class capabilities - `None (class A only)`
- DevEUI - copy **DevEUI** from the output printed by the ***TheThingsUnoTest*** sketch.
- JoinEUI - copy **AppEUI** from the output printed by the ***TheThingsUnoTest*** sketch.
- AppKey - select **Generate** button.
- NwkKey - select **Generate** button.
- End device ID – A unique, human-readable identifier for your Things Uno (see above for naming conversions).

{{< figure src="RegisterEndDeviceManualOTAA.png" alt="Register End Device Manually OTAA" >}}

If you have selected `Activation by personalization (ABP)`:
- DevEUI - copy **DevEUI** from the output printed by the ***TheThingsUnoTest*** sketch.
- Device address - select **Generate** button.
- AppSKey - select **Generate** button.
- FNwkSIntKey - select **Generate** button.
- SNwkSIntKey - select **Generate** button.
- NwkSEncKey - select **Generate** button.
- End device ID - A unique, human-readable identifier for your Things Uno (see above for naming conversions).

{{< figure src="RegisterEndDeviceManualABP.png" alt="Register End Device Manually ABP" >}}

Select the **Register end device** button.

Your device is now registered with The Things Stack! You will be redirected to the overview page of the Things Uno.

## Activating the Things UNO - OTAA
In this section, you will learn how to use the **Over the air activation (OTAA)** method to activate your Things Uno with the Things Stack. To do so you had to register your Things Uno with the Things Stack using either **LoRaWAN Device Repository** with `quickstart` or **Manually** with `OTAA`.

Type the following code after the `#include <TheThingsNetwork.h>`.

```
// Set your AppEUI and AppKey
const char *appEui = "0000000000000000";
const char *appKey = "00000000000000000000000000000000";
```

Replace the `appEUI` with the **AppEUI** you have copied from the previous sketch’s output.

Replace the `appKey` with the **AppKey** you have generated with either From the **LoRaWAN device repository** or **Manually**.

Type the following code in the `setup()` function just after the `loraSerial.begin(57600)`.

```
debugSerial.println("-- JOIN");
ttn.join(appEui, appKey);
```

Upload the sketch to your Things Uno and then open the Serial Monitor. You should see something like this.

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

Meanwhile, you should see something like this in the **Live data** section on your **application overview** page.

[INSERT IMAGE]

Your device is now activated and ready to send/receive messages to/from The Things Stack!.

## Sending Messages
With the Things Stack, you can send small packets of data under certain limitations. The following example will explain to you how to send the status of the Things Uno’s built-in LED (pin 13) as a simple message.

In the Arduino IDE, go back to your ***TheThingsUnoTest*** sketch and replace the `loop()` function with the following lines:

```
debugSerial.println("-- LOOP");
    
// Prepare array of 1 byte to indicate LED status
byte data[1];
data[0] = (digitalRead(LED_BUILTIN) == HIGH) ? 1 : 0;
    
// Send it off
ttn.sendBytes(data, sizeof(data));
      
delay(10000);
```

- The `byte data[1]` creates an empty bytes array of size **1**.
- The `digitalRead()` function reads the status of the built-in LED (pin 13) and stores **1** in the bytes array if the LED is **ON** (pin 13 is HIGH) or stores **0** if the LED is **OFF** (pin 13 is LOW).
- The `sendBytes()` function accepts the data to be sent and the size of data.
- The `delay(10000)` makes **10 seconds** delay between each message

After editing, upload the sketch to your Things UNO. Then in the Arduino IDE, open the Serial Monitor. You should see something like this:

```
-- LOOP
Sending: mac tx uncnf 1 with 1 bytes
Successful transmission
```

The above output indicates that the data has been sent from your Things Uno side to the Things Stack. 

## Decoding the received messages

Now let’s confirm whether the data has been received to the Things Stack. On the Application page, select the Live data tab. You should now see the messages come in:

[INSERT IMAGE]


On the **Applications** page, select the **Payload formatter** tab and then select **Uplink**.

Under **Setup**, from the **Formatter type** drop-down list select **Javascript**.

Copy and paste the following **JavaScript** code in the **Formatter parameter** box.

```
function Decoder(bytes, port) {
  // Decode an uplink message from a buffer
  // (array) of bytes to an object of fields.
  var decoded = {};
        
  if (port === 1) decoded.led = bytes[0];
        
  return decoded;
}
```

Select the **Save changes** button.

{{< figure src="PayloadFormatter.png" alt="Payload Formatter" >}}

Write something explaining the result/output. 

NOTE: Unable to complete the document as I don’t have a Things UNO to test and produce the output.

## Sending Messages from the Things Stack to The Things UNO

TODO: Complete this section with the Things UNO


