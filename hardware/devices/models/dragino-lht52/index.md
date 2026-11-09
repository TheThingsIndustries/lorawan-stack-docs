# Dragino LHT52

> ![Generic Node Sensor Edition](https://www.thethingsindustries.com/docs/hardware/devices/models/dragino-lht52/lht52.png) The Dragino LHT52 is a temperature &amp; …

Source: https://www.thethingsindustries.com/docs/hardware/devices/models/dragino-lht52/


![Generic Node Sensor Edition](https://www.thethingsindustries.com/docs/hardware/devices/models/dragino-lht52/lht52.png)


The Dragino [LHT52](https://www.dragino.com/products/temperature-humidity-sensor/item/199-lht52.html) is a temperature & humidity sensor. It features a Type-C port for connecting to accessories, such as an external temperature sensor for example.

## Provisioning Information

Provisioning information (the **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) can be found on a sticker inside the box.

![LHT52 provisioning information](https://www.thethingsindustries.com/docs/hardware/devices/models/dragino-lht52/lht52-prov-info.png)


> **Note:** The LHT52 does not support onboarding to {{% tts %}} using a QR code.


## Onboarding to The Things Stack

The LHT52 can be onboarded to The Things Stack using the **Device Repository** or by **manually** entering the device specifics.

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 800 end-device profiles, including the Dragino LHT52, which enables quick and easy onboarding to The Things Stack.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/#onboarding-devices-without-qr-codes) section of the [Adding Devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/) guide explains this procedure in detail. Following details are LHT52-specific:

- End device brand: **Dragino Technology Co., Limited**
- Model: **LHT52**
- Hardware Ver.: **Unknown ver.**
- Firmware Ver.: **1.0**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for registration through device repository](https://www.thethingsindustries.com/docs/hardware/devices/models/dragino-lht52/lht52-prov-info-stack.png)


If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/) and [Over the Air Activation (OTAA)](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/otaa/) guides explain this procedure in detail. Following details are specific to the LHT52:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for manual registration](https://www.thethingsindustries.com/docs/hardware/devices/models/dragino-lht52/manual-register.png)


