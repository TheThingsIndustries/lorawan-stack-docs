# Adding Devices

> This section contains instructions for adding LoRaWAN® devices in The Things Stack.

Source: https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/


This section contains instructions for adding LoRaWAN® devices in The Things Stack.

End devices in The Things Stack are managed under **Applications**.
An application is a logical collection of devices that can be used to collect devices by function or geographical area. Before proceeding with this guide, [create an application](https://www.thethingsindustries.com/docs/integrations/adding-applications/) first.

This guide assumes that your device is in the [LoRaWAN® Device Repository](https://github.com/TheThingsNetwork/lorawan-devices/) and that you're using the Console. If your device is not in the LoRaWAN® Device Repository or if you want to use The Things Stack CLI, see [Manually adding devices ](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/).

To create a device, first open the application you wish to add the device in. Go to **End devices** in the left menu and click on **+Register end device** to reach the end device registration page.

![Application overview](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/application-end-devices.png)


You will be presented with options to easily onboard your device using its QR code (if you have it), and to register your end device from the [LoRaWAN® Device Repository](https://github.com/TheThingsNetwork/lorawan-devices/) or manually.

![Options to register devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/register-devices-option.png)


**With QR Code:**

## Onboarding devices using QR codes

If your device has a [TR005 LoRaWAN® Device Identification QR Code](https://lora-alliance.org/resource_hub/tr005-lorawan-device-identification-qr-codes/), adding a device is a simple process.
Note not all QR codes on the physical device are scannable. Only TR005 LoRaWAN® Device Identification QR Codes, are supported for this method.

Click the **Scan end device QR code** button and allow The Things Stack to use your camera.
Now just bring your device's QR code closer to your camera. A window with data found from the QR code will appear, containing your device's **Claim authentication code**, **JoinEUI**, **DevEUI** and **Brand**.

![Found QR data](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/qr-data-found.png)


If the data is correct, click **Apply**.

Now proceed to choose the **Input Method** under the **End device type** section below.

Choose the **Select the end device in the LoRaWAN Device Repository** input method. Then, select the **End device brand**, **Model**, **Hardware Version**, **Software Version**, and **Profile (Region)** for your device.

![Creating a new device with the Device Repository](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/device-repo.png)


Choose a **Frequency plan** appropriate for your region. Your device and gateway must use the same [frequency plan](https://www.thethingsindustries.com/docs/concepts/features/lorawan/frequency-plans/) to communicate.

![Choosing a frequency plan](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/fp.png)




**Without QR Code:**

## Onboarding devices without QR codes

If your device doesn't have a standard [TR005 LoRaWAN® Device Identification QR Code](https://lora-alliance.org/resource_hub/tr005-lorawan-device-identification-qr-codes/), or has a vendor specific QR code, then the device identification and keys have to be entered manually.

First choose the **Select the end device in the LoRaWAN Device Repository** input method. Then, select the **End device brand**, **Model**, **Hardware Version**, **Software Version**, and **Profile (Region)** for your device.

![Creating a new device with the Device Repository](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/select-dr-non-qr.png)


Choose a **Frequency plan** appropriate for your region. Your device and gateway must use the same [frequency plan](https://www.thethingsindustries.com/docs/concepts/features/lorawan/frequency-plans/) to communicate. This example uses `Europe 863-870 MHz (SF9 for RX2 - recommended)`.

![Choosing a frequency plan](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/fp-non-qr.png)


Enter a **JoinEUI/AppEUI** if provided by your manufacturer and click **Confirm**. If it is not provided by the manufacturer and your device is programmable, you can generate a random one in accordance with the test ranges defined by the [IEEE 802 standards](https://ieee802.org/) or use all zeros, just make sure to program the same value into your device.

![Set the Join EUI](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/non-qr-join-eui.png)


Now enter your **DevEUI**. This should be provided by your manufacturer for commercial devices. If your device is programmable, you may generate an EUI using the **Generate** button, and program it in your device.

For LoRaWAN version 1.0.x devices, you will see an **AppKey** field, and for LoRaWAN version 1.1.x devices you will also see a **NwkKey** field. If these keys are provided by your manufacturer, enter them. Otherwise, use the **Generate** button to create them, and program them into your device.

![Set the Device EUI and Device Keys](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/non-qr-all-set.png)


Finally, enter an **End device ID**. Advisable is doing it in the format `eui-{Device EUI}`. You can edit this field and give the device a unique identifier. See [ID and EUI constraints](https://www.thethingsindustries.com/docs/concepts/architecture/id-eui-constraints/) for guidelines about choosing a unique ID.

Now verify that all the fields are filled and click the **Register end device** button to create the end device.

The device is now registered, and will appear as connected in The Things Stack once it sends an uplink.


## Pages in this section

- [Manually adding devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/index.md): If your devices are not yet part of the LoRaWAN® Device Repository or you want to set advanced fields, you can add devices manually in The Things Stack.
- [Adding devices in bulk](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/index.md): Instead of adding devices one by one, The Things Stack supports multiple methods of adding multiple end devices at once. Adding multiple devices is also …
- [Adding devices with ATECC608 Secure Elements](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/atecc608a/index.md): The Things Industries and Microchip developed a security solution for LoRaWAN® that enables secure key provisioning and secure cryptographic operations using …

