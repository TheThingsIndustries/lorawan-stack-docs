# Elsys ERS Lite

> ![ELSYS ERS Lite](https://www.thethingsindustries.com/docs/hardware/devices/models/elsys-ers-lite/ers-lite.png) The Elsys ERS Lite is an indoor environment …

Source: https://www.thethingsindustries.com/docs/hardware/devices/models/elsys-ers-lite/


![ELSYS ERS Lite](https://www.thethingsindustries.com/docs/hardware/devices/models/elsys-ers-lite/ers-lite.png)


The [Elsys ERS Lite](https://www.elsys.se/en/ers-lite/) is an indoor environment sensor for measuring temperature and humidity.

## Provisioning Information

The provisioning information, **DevEUI**, can be found on the back of the device. You can use all zeros as the **JoinEUI**. The **AppKey** is provided through an email when you purchase the device.

![Elsys ERS Lite provisioning information](https://www.thethingsindustries.com/docs/hardware/devices/models/elsys-ers-lite/ers-lite-back.png)


> **Note:** Elsys ERS Lite cannot be onboarded to {{% tts %}} using QR code.


## Onboarding to The Things Stack

You can onboard your Elsys ERS Lite using the **LoRaWAN Device Repository** or **manually** option.

If you prefer onboarding with the **LoRaWAN Device Repository**, in the **End device type** section, under **Input method**, select the **Select the end device in the LoRaWAN Device Repository** option.

The [Onboarding devices without QR codes](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/#onboarding-devices-without-qr-codes) section of the [Adding Devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/) guide explains this procedure in detail. Following details are Elsys ERS Lite-specific:

- End device brand: **Elsys**
- Model: **ERS Lite indoor environment monitoring**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for registration through device repository](https://www.thethingsindustries.com/docs/hardware/devices/models/elsys-ers-lite/ers-lite-repository.png)


If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/) and [Over the Air Activation (OTAA)](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/otaa/) guides explain this procedure in detail. Following details are Elsys ERS Lite-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for manual registration](https://www.thethingsindustries.com/docs/hardware/devices/models/elsys-ers-lite/ers-lite-manually.png)


