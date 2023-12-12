---
title: "Browan TBMS100"
description: ""
weight: 
---

{{< figure src="tbms100.png" alt="Generic Node Sensor Edition" class="float plain" >}}

The Browan [TBMS100](https://www.browan.com/product/motion-sensor-pir/detail) is a PIR motion sensor designed to detect occupancy or movement in homes or buildings for security and efficient facility management. It helps optimize the use of spaces like desks, conference rooms, and bathrooms, ensuring better utilization.

# Finding the Provisioning Information

The provisioning information, such as **JoinEUI** and **DevEUI**, can be found on the back of the device. 

{{< figure src="tbms100-back.png" alt="TBMS100 provisioning information" >}}

{{< note "The **AppKey**, which is sensitive information, is provided within an Excel sheet." />}}

# Onboarding to {{% tts %}}

The TBMS100 doesn't support onboarding with a QR code. You must proceed directly to the options **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually**.

## Using the LoRaWAN Device Repository

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Browan TBMS100, which requires less information for registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select **Select the end device in the LoRaWAN Device Repository** option. Then select/enter the following parameters/settings:

- End device brand: **Browan Communication Incorp.**
- Model: **Motion Sensor**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0.1**
- Profile (Region): choose **EU_863_870** for Europe or **US_902_928** for United States
- Frequency plan: choose the correct frequency plan for your TBMS100, **Europe 863-870 MHz (SF9 for RX2 - recommended)**, for example.

{{< figure src="tbms100-device-repository-1.png" alt="Settings for registration through device repository" >}}

In the **Provisioning information** section, enter the **JoinEUI** of the Join Server where the device has been pre-provisioned and then select the **Confirm** button.

Enter the **DevEUI** and **AppKey** into the relevant fields.

Enter a new ID for your TBMS100 as the **End device ID** if you want to use a different one than the pre-filled End device ID.

Select the **Register end device** button.

{{< figure src="tbms100-device-repository-2.png" alt="Settings for registration through device repository" >}}

## Manually

The TBMS100 also supports manual registration, but make sure all parameters/settings are selected/entered correctly.

In the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. Then select/enter the following parameters/settings:

- Frequency plan: choose the correct frequency plan for your TBMS100, **Europe 863-870 MHz (SF9 for RX2 - recommended)**, for example.
- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

Select **Show advanced activation, LoRaWAN class and cluster settings** to expand the section. Ensure that the default selection is **Over the Air Activation (OTAA)**.

{{< figure src="tbms100-manual-registration-1.png" alt="Settings for manual registration" >}}

In the **Provisioning information** section, enter the **JoinEUI** of the Join Server where the device has been pre-provisioned and then select the **Confirm** button.

Enter the **DevEUI** and **AppKey** into the relevant fields.

Enter a new ID for your TBMS100 as the **End device ID** if you want to use a different one than the pre-filled End device ID.

Select the **Register end device** button.

{{< figure src="tbms100-manual-registration-p2.png" alt="Settings for manual registration " >}}

# Viewing Live Data

In both registration options, after registering the device, you will be redirected to the **Overview** tab of the **End devices** page.

{{< figure src="tbms100-overview-tab.png" alt="Overview tab" >}}

Then, select the **Live Data** tab to view all messages exchanged between the end device and the network server.

{{< figure src="tbms100-live-data.png" alt="Live data tab" >}}
