---
title: "Sending Temperature with MKR WAN 1310"
description: ""
weight:
---

In this section we are going to try an example project where you will try to connect a Temperature and Humidity sensor to the MKR WAN 1310 to send the data over LoRaWAN and then decode it on {{% tts %}}.

<!--more-->

{{< figure src="../fritzing.png" alt="" class="float plain" width="100%">}}


## Circuit

For this project you are going to be needing:
- **DHT11**
- Some **Jumper Wires**
- **Breadboard**

Once you have the components, wire it up like so:
- **Arduino 5V** -> **Plus DHT11**
- **Arduino GND** -> **Minus DHT11**
- **Arduino Pin 6** -> **Signal DHT11**

Illustration on the right displays the wiring as well.

## Creating the code

Before we continue, you need to make sure you have the **DHT sensor library by Adafruit** installed: 

{{< figure src="../dht-lib.png" alt="">}}

Next let's go through the code step by step and explain what all the fields mean.

### The code

First we initialize the **MKRWAN** and **DHT** libraries we need for this code. After that is the creation of the LoRa modem. Then we set up the variables for the `AppEUI` and `AppKey`. **Note that you need to add the AppEUI and AppKey from {{% tts %}}** between the double quotes. Finally we setup the DHT component with `6` as the pin and `DHT11` as the sensor type.

```cpp
#include <MKRWAN.h>
#include "DHT.h"

// Uncomment if using the Murata chip as a module
LoRaModem modem(Serial1);

String appEui = "";
String appKey = "";

DHT dht(6, DHT11);
```

In the `void setup ()` we initialize the Serial communication first. Then we set up the modem to use the correct regional band (**Note that you need to change this to whichever region you're in**). Using `dht.begin()` we initialize the dht component. Finally using `modem.joinOTAA` the device will join the LoRaWAN network.
```cpp
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial);
  // change this to your regional band (eg. US915, AS923, ...)
  if (!modem.begin(EU868)) {
    Serial.println("Failed to start module");
    while (1) {}
  };
  
  dht.begin();

  int connected = modem.joinOTAA(appEui, appKey);
  if (!connected) {
    Serial.println("Something went wrong; are you indoor? Move near a window and retry");
    while (1) {}
  }
}
```

In the `void loop()` we initialize the variables containing the values of Temperature and Humidity. We multiply these values by 100, since we can not send decimal numbers directly over LoRaWAN. Using the `byte payload` function we contain all the values we need for sending. Then using `mode.write` we finally send the package off to the network, ready to be received by {{% tts %}}.

```cpp
void loop() {
  int t = dht.readTemperature() * 100;
  int h = dht.readHumidity() * 100;

  byte payload[4];
  payload[0] = highByte(t);
  payload[1] = lowByte(t);
  payload[2] = highByte(h);
  payload[3] = lowByte(h);

  Serial.println("Temperature: ");
  Serial.println(dht.readTemperature());
  Serial.println("Humidity: ");
  Serial.println(dht.readHumidity());

  modem.beginPacket();
  modem.write(payload, sizeof(payload));
  modem.endPacket(true);
  delay(100000);
}
```
## {{% tts %}}

And the payload formatter:

```javascript
function decodeUplink(input) {
  // Read the temperature and humidity from the payload
  var t = (input.bytes[0] << 8 | input.bytes[1]) / 100;
  var h = (input.bytes[2] << 8 | input.bytes[3]) / 100; 
  
  return {
    data: {
      temperature: t,
      humidity: h
    }
  };
}
```