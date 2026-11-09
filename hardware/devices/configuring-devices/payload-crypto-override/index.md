# Payload Crypto Override

> LoRaWAN frames are encrypted on the application layer using the AppSKey. Once the end device is registered, you can choose to enforce or skip payload …

Source: https://www.thethingsindustries.com/docs/hardware/devices/configuring-devices/payload-crypto-override/


LoRaWAN frames are encrypted on the application layer using the AppSKey. Once the end device is registered, you can choose to enforce or skip payload encryption. Skipping payload encryption will cause the Application Server to forward messages to integrations without any processing, for example it will neglect [payload formatters](https://www.thethingsindustries.com/docs/integrations/payload-formatters/). If you choose to skip payload encryption, integrations will be responsible for processing the message in order to understand it.

To configure these settings, navigate to your end device's **General settings** tab in the Console and scroll down to the **Application layer** section.

Skipping payload encryption and decryption option is also available on an [application level](https://www.thethingsindustries.com/docs/integrations/adding-applications/#payload-encryption-and-decryption), so if you want the end device to inherit this setting from its application, choose **Use application default**.

Otherwise, choose to **Enforce skipping payload crypto** or to **Enforce payload crypto** for a single device only.

![Skip payload encryption and decryption](https://www.thethingsindustries.com/docs/hardware/devices/configuring-devices/payload-crypto-override/skip-payload-crypto.png)


