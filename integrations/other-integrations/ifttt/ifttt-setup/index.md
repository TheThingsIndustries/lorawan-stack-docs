# IFTTT Setup

> Create an applet on IFTTT and prepare the setup by following the steps below.

Source: https://www.thethingsindustries.com/docs/integrations/other-integrations/ifttt/ifttt-setup/


Create an applet on IFTTT and prepare the setup by following the steps below.

Log in to your IFTTT user account.

Select the **Create** button in the upper right.

Click the **+ This** button.

Search for and choose **Webhooks** as the service.

![Choosing Webhooks as a service](https://www.thethingsindustries.com/docs/integrations/other-integrations/ifttt/ifttt-setup/choosing-a-service.png)


Select **Receive a web request** as a trigger.

Give a name to the trigger event and click the **Create trigger** button.

![Naming a trigger event](https://www.thethingsindustries.com/docs/integrations/other-integrations/ifttt/ifttt-setup/naming-trigger.png)


Next, click the **+ That** button.

There are many action services to choose from. In this guide, we will use the **Android SMS** action service to trigger an SMS when a LoRaWAN® `Join accept` message is sent from The Things Stack.

![Choosing Android SMS action service](https://www.thethingsindustries.com/docs/integrations/other-integrations/ifttt/ifttt-setup/choosing-action-service.png)


You also need to specify the action within the action service. For the **Android SMS** action service, choose **Send an SMS** as an action.

Complete the action fields by entering the phone number and SMS body, then click the **Create action** button.

You may also pass the decoded payload values from The Things Stack as `value1`, `value2` and `value3`. Learn how to implement this by following the [Node-RED Setup](https://www.thethingsindustries.com/docs/integrations/other-integrations/ifttt/node-red-setup/) section.

![Completing the action fields](https://www.thethingsindustries.com/docs/integrations/other-integrations/ifttt/ifttt-setup/completing-action-fields.png)


Review your applet and select **Finish**.

After you have created your applet, make sure that its status is set to **Connected**.

Next, navigate to the [Webhooks service page](https://ifttt.com/maker_webhooks) and click the **Documentation** button in the upper right.

Here you will find the URL you will be sending the HTTP POST request to. Replace the **{event}** field with the name of your trigger event, then select and copy this URL.

![Webhooks service documentation page](https://www.thethingsindustries.com/docs/integrations/other-integrations/ifttt/ifttt-setup/webhooks-documentation-page.png)


You can test the action service by triggering it manually with the **Test It** button on the bottom of this page.

