# Sensative Strips

> ![Generic Node Sensor Edition](https://www.thethingsindustries.com/docs/hardware/devices/models/sensative-strips/strip.png) The Sensative Strips is a family of …

Source: https://www.thethingsindustries.com/docs/hardware/devices/models/sensative-strips/


![Generic Node Sensor Edition](https://www.thethingsindustries.com/docs/hardware/devices/models/sensative-strips/strip.png)


The Sensative [Strips](https://sensative.com/sensors/strips-sensors-for-lorawan/) is a family of sensors with multiple purposes. It contains devices such as humidity, temperature, light (lux), and magnetic open/close sensor.

## Provisioning Information

Provisioning information (the **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) can be found on a sticker inside the box.

![Strips provisioning information](https://www.thethingsindustries.com/docs/hardware/devices/models/sensative-strips/strips-prov-info.png)


> **Note:** The Strips does not support onboarding with a QR code. You can onboard it in the section below.


## Onboarding to The Things Stack

The device can be onboarded using the **Device Repository** or by **manually** entering the specific information.

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 800 end-device profiles, including the Sensative Strips, which enables quick and easy registration with The Things Stack.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/#onboarding-devices-without-qr-codes) section of the [Adding Devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/) guide explains this procedure in detail. Following details are Strips-specific:

- End device brand: **Sensative AB**
- Model: **Strips - Multisensor**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for registration through device repository](https://www.thethingsindustries.com/docs/hardware/devices/models/sensative-strips/strips-prov-info-stack.png)


If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/) and [Over the Air Activation (OTAA)](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/otaa/) guides explain this procedure in detail. Following details are specific to the Strips:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for manual registration](https://www.thethingsindustries.com/docs/hardware/devices/models/sensative-strips/manual-register.png)


## Turning on the device

When you receive the Strips it comes in "transport mode", and the device will be off. When you remove the magnets for the first time, the device will automatically send a join request.

If you have removed the magnets, and you need to manually join the device, take one of the magnets and slowly move it close to the round edge (Magnet sensor 2) of the strips **3 times**, so that the green LED next to the Sensative logo blinks 3 times. This will trigger the device to send a join request.

![Moving magnet to the end of the strips](https://www.thethingsindustries.com/docs/hardware/devices/models/sensative-strips/strips-joining.png)


> **Note:** **One long green LED blink** signals the device has successfully joined to The Things Stack.
> 
> **5 red blinks** means the device failed to join to the network.


