# Milesight EM300-TH

> ![Milesight EM300-TH](https://www.thethingsindustries.com/docs/hardware/devices/models/milesight-em300-th/milesight-EM300-TH.png) The Milesight EM300-TH is an …

Source: https://www.thethingsindustries.com/docs/hardware/devices/models/milesight-em300-th/


![Milesight EM300-TH](https://www.thethingsindustries.com/docs/hardware/devices/models/milesight-em300-th/milesight-EM300-TH.png)


The [Milesight EM300-TH](https://www.milesight.com/iot/product/lorawan-sensor/em300-th) is an environment sensor suitable for monitoring indoor and outdoor temperature and humidity. It can be widely used in office areas, greenhouses and other environments.

## Provisioning Information

For the provisioning information:

- **DevEUI**: Can be found on the back of the device.
- **JoinEUI**: `24E124C0002A0001`.
- **AppKey**: Will be received through an email after purchasing the device.

![EM300-TH provisioning information](https://www.thethingsindustries.com/docs/hardware/devices/models/milesight-em300-th/milesight-EM300-TH-back.png)


> **Note:** The Milesight EM300-TH cannot be onboarded to {{% tts %}} using QR code.


## Onboarding to The Things Stack

You can onboard your EM300-TH using the **LoRaWAN Device Repository** or **manually** option.

If you prefer onboarding with the **LoRaWAN Device Repository**, in the **End device type** section, under **Input method**, select the **Select the end device in the LoRaWAN Device Repository** option.

The [Onboarding devices without QR codes](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/#onboarding-devices-without-qr-codes) section of the [Adding Devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/) guide explains this procedure in detail. Following details are EM300-TH-specific:

- End device brand: **Milesight IoT Co., Ltd**
- Model: **EM300-TH**
- Hardware Ver.: **V2.2**
- Firmware Ver.: **1.15**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for registration through device repository](https://www.thethingsindustries.com/docs/hardware/devices/models/milesight-em300-th/em300-th-repo.png)


If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/) and [Over the Air Activation (OTAA)](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/otaa/) guides explain this procedure in detail. Following details are EM300-TH-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

![Settings for manual registration](https://www.thethingsindustries.com/docs/hardware/devices/models/milesight-em300-th/em300-th-manually.png)


