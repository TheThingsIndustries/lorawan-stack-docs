# Telemetry2U

> Telemetry2U is a complete IoT platform that requires little setup and configuration yet still provides advanced features, such as voice alerts, scheduled audit …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/telemetry2u/


[Telemetry2U](https://telemetry2u.com/) is a complete IoT platform that requires little setup and configuration yet still provides advanced features, such as voice alerts, scheduled audit reports, configurable real-time dashboards and even calibrations.

## Prerequisites

1. A [user account](https://telemetry2u.com/Identity/Account/Register) on Telemetry2U.
2. [Activated 14-day free trial](https://telemetry2u.com/Identity/Account/Manage/Subscriptions) or a PAYG plan on Telemetry2U.

## Setup Telemetry2U

First [login](https://telemetry2u.com/Identity/Account/Login) to your Telemetry2U account and navigate to **Node Maintenance** via **Admin** tab from the top menu.

Click the __Create New__ link in the top right corner to add a new LoRaWAN® device.

Next, you need to complete the device creation form.  The __Description__, __Profile__, __Device EUI__, __Network Provider__ and __Device Configuration__ are required fields. If your device is currently unsupported leave __Device Configuration__ at the default value.  Click the __Create__ button to finish.

![Add a device in Telemetry2U](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/telemetry2u/add-device.png)


## Configure the Integration on The Things Stack and Telemetry2U

From your Telemetry2U account, navigate to __Setup Integration__ via __Admin__ tab from the top menu. Select __The Things Network__ from the __Network Provider__ drop down menu and hit the __Add Integration__ button.

Select the __Region__ your The Things Stack account is registered under. 

Next, make a copy of the __Telemetry2U Token__ using the __Copy to clipboard__ button.

Retrieve The Things Stack application ID and enter it into the __Application ID__ field.

To obtain the **API Key**, you need to configure the integration on The Things Stack end first.

![Setup the integration](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/telemetry2u/setup-integration.png)


Log into The Things Stack and open your application. Using the left hand menu, navigate to __Webhooks__ under __Integrations__ on the left hand menu and click the __Add webhook__ button in the top right corner. Choose the **Telemetry2U** Webhook template.

Use `telemetry2u` as the **Webhook ID** and enter the **Telemetry2U Token** you copied to the clipboard in earlier steps.

![Telemetry2U webhook template](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/telemetry2u/telemetry2u-webhook-template.png)


When you have created the integration, use The Things Stack left hand menu to navigate to **API Keys**, select the downlink API key that was automatically created upon instantiating the Telemetry2U Webhook template and copy its **Key ID** .

![TTN API](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/telemetry2u/ttn-api.png)


Now go back to Telemetry2U and paste the key ID you copied into the **API Key** field in the integration configuration page.

Click the **Save** button to complete the integration. **Congratulations**! Your integration is now complete and once data has been received by The Things Stack, it should become available under the [Telemetry2U Reports Page](https://telemetry2u.com/Reports). 

> **Note:** If you're using an unsupported device on Telemetry2U, you can select **Raw Data** as the report type to confirm data is being received. You may then forward a copy of the device documentation including the payload format and device EUI to Telemetry2U support via [email](mailto:support@telemetry2u.com) and they will get your device's support added ASAP.


