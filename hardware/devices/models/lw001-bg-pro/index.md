# Moko Smart LW001-BG Pro

> ![Moko Smart LW001-BG Pro](https://www.thethingsindustries.com/docs/hardware/devices/models/lw001-bg-pro/lw001-bg-pro.png) The Moko Smart LW001-BG Pro is a …

Source: https://www.thethingsindustries.com/docs/hardware/devices/models/lw001-bg-pro/


![Moko Smart LW001-BG Pro](https://www.thethingsindustries.com/docs/hardware/devices/models/lw001-bg-pro/lw001-bg-pro.png)


The Moko Smart [LW001-BG Pro](https://www.mokosmart.com/lorawan-tracker-lw001-bg-pro/) is a LoRaWAN tracker. It integrates GPS positioning, Bluetooth positioning and WiFi positioning and supports multiple detection methods, such as anti-demolition alarm, motion detection and vibration detection.

The device supports a variety of working modes as well and is suitable for most tracking applications.

## Turning on the device

To access the provisioning information (the **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) you need to turn on the device first and connect to it. Before continuing make sure to download the **MKLoRa** app on the [Play Store](https://play.google.com/store/apps/details?id=com.moko.mklora) or the [App Store](https://apps.apple.com/us/app/mklora/id1562806152).

To turn on the device, **approach the Hall sensor area with a magnet and quickly move it away 3 times.**
When the power indicator lights up **solid green for 3 seconds**, the device is turned on. The image below illustrates this process.

![Turning on the LW001-BG Pro](https://www.thethingsindustries.com/docs/hardware/devices/models/lw001-bg-pro/lw001-bg-pro-turn-on.jpg)


> **Note:** It may take a few tries for the device to properly register the magnet and turn on. Keep swiping the magnet until the LED stays on for 3 seconds.


## Provisioning Information

Open the **MKLoRa** app, select device type (in this case, the LW001-BG PRO) and you should then see the device show up. If not, click on the refresh icon in the top right and make sure that Bluetooth on your phone is on.

Click on **connect** and enter the default password: `Moko4321`.

![Device showing up inside of the app](https://www.thethingsindustries.com/docs/hardware/devices/models/lw001-bg-pro/moko-app-list.png)


Once you're on the main page, click on **Connection Settings**. Here you can find the provisioning information and configure other LoRa-related settings. The **DevEUI, AppEUI and AppKey** are needed in the next step when onboarding the device to The Things Stack.

![Provisioning information inside app](https://www.thethingsindustries.com/docs/hardware/devices/models/lw001-bg-pro/moko-app-connection.png)


## Onboarding to The Things Stack

The device can be onboarded using the **Device Repository** or **manually**.

> **Note:** The LW001-BG Pro does not support onboarding with a QR code.


The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 800 end-device profiles, including the Moko Smart LW001-BG Pro, which enables quick and easy registration with The Things Stack.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/#onboarding-devices-without-qr-codes) section of the [Adding Devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/) guide explains this procedure in detail. Following details are LW001-BG Pro-specific:

- End device brand: **Moko Technology Ltd**
- Model: **LW001-BGPRO**
- Hardware Ver.: **2.4**
- Firmware Ver.: **1.0.7**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for registration through device repository](https://www.thethingsindustries.com/docs/hardware/devices/models/lw001-bg-pro/lw001-bg-pro-prov-info-stack.png)


If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/) and [Over the Air Activation (OTAA)](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/otaa/) guides explain this procedure in detail. Following details are specific to the LW001-BG Pro:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for manual registration](https://www.thethingsindustries.com/docs/hardware/devices/models/lw001-bg-pro/manual-register.png)


