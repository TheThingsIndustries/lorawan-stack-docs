---
title: "Building an End-to-End LoRaWAN Application with The Things Stack"
description: ""
weight: 
---

In this project, we will show how to build an end-to-end solution with {{% tts %}} to control the [Kuando Busylight](https://busylight.com/busylight-iot/) with the [Generic Node Sensor Edition](https://www.thethingsshop.com/products/generic-node-sensor-edition). 

# About {{% tts %}}

{{% tts %}} is a robust LoRaWAN Network Server which allows you to set up and monitor network components for any type of Internet of Things (IoT) application. It offers various deployment options to meet the needs of your specific use case. [Learn more about which deployment option fits you better](https://www.thethingsindustries.com/news/which-lorawan-network-server-to-choose/).

# Registering The Things Indoor gateway

The Things Indoor Gateway (TTIG) is designed to be a fully compliant, ultra low-cost LoRaWAN gateway, with WiFi as the backhaul. It is an 8-channel LoRaWAN gateway based on SX1308 with build-in ESP8266 WiFi connectivity. With multiple versions and various power outlets available, it satisfies a wide range of applications requiring dynamic coverage.

{{< figure src="ttig.png" alt="" >}}

With {{% tts %}} Console, a gateway can be registered using the **Register gateway** view:

- In {{% tts %}} Console, select **Gateways**.
- On the **Register gateway** page, fill in the **Gateway EUI** and select the **Confirm** button (The gateway EUI is a unique 64-bit identifier represented in hexadecimal that can be found on the back of the gateway).
- Then enter the following mandatory information:
  - **Gateway ID:** Type a unique name for your gateway. Eg. _ttig-workshop-yourname_
  - **Frequency plan:** The frequency plan must match the frequency of your gateway. Eg. _If you are in Europe, select Europe 863-870 MHz (SF9 for RX2 - recommended)_.
- Select the **Register gateway** button.
- Once registered you will be forwarded to the **overview** page of the gateway that we just created.
- Power your gateway through the USB Type-C connector or the wall plug. The full instructions on how to connect The Things Indoor gateway to a WiFi network can be found [here](https://www.thethingsindustries.com/docs/gateways/models/thethingsindoorgateway/).
- The gateway status (Connect gateway, Receive gateway status, etc) can be found in the **Live data** section of your gateway **overview** page. 

{{< figure src="gateway-live-data.png" alt="" >}}

- Your gateway is ready to receive uplinks and send downlinks after connecting.

# Creating an Application

Before onboarding end devices to your network you must create at least one application with {{% tts %}}:
- In {{% tts %}} **Console** select **Applications**.
- Select the **Create application** button.
- On the **Create application** page provide the following information:
  - **Application ID:** A unique identification for your application. Eg. _yourname-climate-tracker_
  - **Application name:** Any descriptive name. Eg. _[Your Name]'s Room Climate Tracker_
- Select the **Create application** button.

{{< figure src="create-application.png" alt="" >}}

- Once created you will be forwarded to the **overview** page of the application you just created.

# Onboarding Generic Node SE

Generic Node Sensor Edition is a hardware platform that simplifies building LoRaWAN® end-devices for various use cases. It provides a fast development lifecycle from concept to production with its reference hardware design files and source-available firmware.

{{< figure src="generic-node-se.png" alt="" >}}

An end device can be added to {{% tts %}} through [manual onboarding](https://www.thethingsindustries.com/docs/devices/adding-devices/#manually-registering-an-end-device), [device repository](https://www.thethingsindustries.com/docs/devices/adding-devices/#using-the-lorawan-device-repository), or [scanning a QR code](https://www.thethingsindustries.com/docs/devices/adding-devices/#onboarding-devices-using-qr-codes).

In this project, we will add the Generic Node to {{% tts %}} by scanning its QR code. The QR code for claiming the Generic Node is located on the back of its enclosure. For complete steps on how to claim a device using a QR code, please refer to the instructions available [here](https://www.thethingsindustries.com/docs/devices/adding-devices/#onboarding-devices-using-qr-codes).

{{< figure src="generic-node-qr-code.png" alt="" >}}

Once claimed you will be forwarded to the **View registered end device** page.

{{< note "Your Generic Node Sensor Edition comes pre-programmed with a [vanilla](https://www.genericnode.com/docs/applications/se-vanilla/) application that can be used with this project. The full instructions on how to program Generic Node SE can be found [here](https://www.genericnode.com/docs/getting-started/se-sw/)." />}}
 
- Go to the **Live data** tab.
- Power cycle your Generic Node by either pressing the reset button or removing and re-inserting its batteries.
- Once power cycled, you can immediately see the activity status such as **Accept join-request** and **Forward join-accept messages** in the **Live data** section.
- Now press the user button on top of the Generic Node.
- In the **Live data** section, you can see an uplink data message received by {{% tts %}} application. 
- Select the uplink message. You can see the detailed view of your message in the **Event details** window. Scroll down and see what’s in the **frm_payload** (frame payload) field. The payload is encoded which is not useful until it is decoded.

{{< figure src="frm-payload.png" alt="" >}}

# Using Payload Formatters

To decode the encoded payload you will need a payload formatter that helps you to extract individual data.
Select the **Payload formatters** tab and then select the **Uplink** tab. 

- Enter the following information:
  - **Formatter type:** choose **Custom Javascript formatter**.
  - Paste the script below in the **Formatter code** window:

```
function decodeUplink(input){
  var data = {};
  data.batt_volt = (input.bytes[0]/10)
  data.temperature = (((input.bytes[1] <<8) + input.bytes[2]) - 500)/10;
  data.humidity = ((input.bytes[3] << 8) + input.bytes[4])/10;
  data.button_press = input.bytes[5]

  return {
    data: data,
  };
}
```

{{< figure src="javascript-payload-formatter.png" alt="" >}}

- Let’s test the JavaScript payload formatter. Go back to the **Live data** tab and copy the **MAC payload** of a **Forward uplink data message**.

{{< figure src="mac-payload.png" alt="" >}}

- Then paste it in the **Byte payload** field. Then select the **Test decoder** button. The payload gets decoded and the result will be displayed in the **Decoded test payload** box.

{{< figure src="decoded-payload.png" alt="" >}}

- Select the **Save changes** button.
- Now go back to the **Live data** tab and press the user button on the Generic Node. The payload of the uplink data message gets decoded as shown in the event preview.

{{< figure src="decoded-payload-live.png" alt="" >}}

# Creating an Integration using Webhooks

{{% tts %}} application can be integrated with third-party custom applications and IoT platforms in many ways: MQTT, Webhooks, Storage integration, AWS IoT, Azure IoT Hub, and LoRa Cloud.

Let’s choose webhooks to integrate our data with the custom application we will be writing in the next section. A webhook helps you to send data from one application to another whenever a given event occurs. For example, {{% tts %}} application can send the temperature received by a sensor to a third-party application through a webhook to display on a chart for visualization.

- Select **Integrations** on the left side menu.
- Select **Webhooks**.
- On the **Choose webhook template** page select **Custom webhook**.
- On the **Add webhook** page configure your webhook as follows:
  - **Webhook ID:** type in a name for your webhook. Eg. climate-tracker-webhook
  - **Webhook format:** JSON
  - **Base URL:** the URL of your server application and the webhook endpoint. Eg. _http://root.yourhost.com:3000/webhooks_

  {{< figure src="add-webhook-1.png" alt="" >}}

  - Select **Enabled** under the **Uplink message**. This configures your webhook to send the payloads of the uplink messages to your custom application whenever they are received.

    {{< figure src="add-webhook-2.png" alt="" >}}

- Select the **Add webhook** button.
- You will be directed to a page containing a list of webhooks you created.

# Node.js Application

Let’s write a simple Node.js application that exposes an HTTP server that takes the temperature and humidity data received through the webhook and displays it on a chart for visualization.

- Install [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)). Installation instructions for each software can be found on their respective websites.
- Run yarn install or yarn to install dependencies.
- Go to this [GitHub repository](https://github.com/kschiffer/tts-demo-app) and clone the project to your computer:
  - `git clone git@github.com:kschiffer/ttn-webhook-node-app.git`
- Create a file named `config.env` inside the **tts-demo-app** directory: 
  - `cd tts-demo-app` 
  - `vim config.env`

- Write the following content `[insert]`:

```
export TTN_APP_ID=yourname-climate-tracker
export API_KEY=
export TTN_WEBHOOK_ID=
export TTN_DEVICE_ID=
```

- After editing your configuration file looks something like this:

{{< figure src="config-file-1.png" alt="" >}}

- Save the file: `[esc][:wq][enter]`
- Source the configuration file: `source config.env`
- Start the server: `node index.js`
- Open `index.js` file to edit the webhook **endpoint** if you want (line 48).

```
app.post('/webhooks', (req, res) => {
  // Update chart
  const value = req.body.uplink_message.decoded_payload
  values.push(value)
  io.emit('data', value)
```

- Open a web browser and go to the address your server is exposing. The address is something like this: http://yourhost.com:3000

{{< figure src="chart-1.png" alt="" >}}

- Now press the button on the Generic Node. The current temperature and humidity will be immediately plotted on the chart.

{{< figure src="chart-2.png" alt="" >}}

- Press the push button a few more times and see what your chart looks like:

{{< figure src="chart-3.png" alt="" >}}

# Onboarding Kuando Busylight

Let's onboard our second end-device, the **Kuando Busylight** to {{% tts %}}. Kuando busylight is a light that you can control using LoRaWAN. It is a Class C end device that opens continuous receive windows so it is capable of receiving downlinks anytime.

  {{< figure src="busylight.png" alt="" >}}

- In {{% tts %}} Console, choose the application you created earlier and then select **Registered device**. Since this end device is not part of the device repository yet, we will use the **Manual** option for onboarding it.
- On the **Register end device** page, in the **End device type** section, under **Input method**,  select the **Enter end device specifics manually** option.
- Then select the following parameters from the drop-downs (these parameters can be found in the datasheet of your product):
  - **Frequency plan:** frequency plan of your Busylight, for example, _Europe 863-870 MHz (SF9 for RX2 - recommended)_.
  - **LoRaWAN version:** LoRaWAN Specification 1.0.3
- Select **Show advanced activation, LoRaWAN class and cluster settings** to expand the advanced settings section and then select **Class C (Continuous)** from the **Additional LoRaWAN class capabilities** drop-down.
- In the **Provisioning information** section enter the **JoinEUI** of your Busylight in the **JoinEUI** text box. Then select the **Confirm** button.
- Enter the following information:
  - **DevEUI:** refer to the datasheet
  - **AppKey:** refer to the datasheet
  - **End device ID:** _busylight_
- Select the **Register end device** button.
- You will be forwarded to the **View registered end device** page.
- Power on your Busylight. It will connect to {{% tts %}} within a few seconds. See the **Live data** section for its status.

{{< figure src="add-busylight.png" alt="" >}}

# Sending Downlink Messages to Kuando Busylight from {{% tts %}} Application

Let’s see how to schedule downlink messages from {{% tts %}} application to control the Busylight.

- In {{% tts %}} Console select the Messaging tab and then select the **Downlink** tab.
- Configure the downlink as follows:
  - **Insert Mode:** replace downlink queue
  - **FPort:** 15 (as per the datasheet)
  - **Payload type:** Bytes
  - **Payload:** Type in **FF FF FF FF 00** that makes the Busylight solid white (no blinking). Here is the payload structure of a downlink message consisting of 5 bytes:

{{< figure src="busylight-payload-structure.png" alt="" >}}

  - Select the **Schedule downlink** button. The Busylight will turn on solid white.
  - If you want to turn off the Busylight, type in **FF FF FF 00 FF** in the **Payload** text box and then select the **Schedule downlink** button again. The Busylight will turn off immediately.


# Going Further

Let’s edit the `config.env` file to enable our custom application to read the button press event from an uplink message and then compose and send a downlink message through the webhook to on or off the Busylight accordingly.

Here is the code snippet (line 54) that is used to compose the downlink message according to the button press event.

```
// Switch busylight
  if (API_KEY && value && value.button_press) {
    isOn = !isOn
    const payload = Buffer.from(isOn ? new Uint8Array([255, 255, 255, 255, 0]) : new Uint8Array([255, 255, 255, 0, 255])).toString('base64')

    axios({
      method: 'post',
      url: webhookUri,
      headers: { Authorization: `Bearer ${API_KEY}` },
      data: {
        downlinks: [{
          frm_payload: payload,
          f_port: 15
```

- Stop your custom application server: `[Ctrl + C]`
- Open the configuration file again: `vim config.env`
- In {{% tts %}} Console, under your application, select **API keys**.
- Select the **Add API key** button.
- On the **Add API key** page, under **Rights**, select **Grant individual rights** and then select **Write downlink application traffic**.
- Select the **Create API key** button.

{{< figure src="api-key-1.png" alt="" >}}

- Copy the API key by selecting the **Copy** button.
- Select **I have copied the key** button.

{{< figure src="api-key-2.png" alt="" >}}

- Go back to the configuration file and then paste your API key here:
`export API_KEY=your API key`
- Copy the Webhook ID from the Edit webhook page and then paste it here:
`export TTN_WEBHOOK_ID=your webhook id`
- Copy the Busylight’s device id from the device overview page and then paste it here:
`Export TTN_DEVICE_ID=busylight`
- After editing your configuration file looks something like this:

{{< figure src="config-file-2.png" alt="" >}}

- Save the configuration file: `[esc][:wq][enter]`
- Source the new configuration: `source config.env`
- Start the server again: `node index.js`
- Now press the push button on the Generic Node. The Busylight will turn on. Press the push button again. The Busylight will turn off.

This solution can be customized to meet your specific needs and ideas, such as changing the Busylight's color to red when the temperature exceeds a set threshold.
