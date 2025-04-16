---
title: "Step 4: Collect and visualize data"
description: ""
weight: 4
---

This guide walks you through different options available for you to collect and visualize your LoRaWAN data.

<!--more-->

{{% tts %}} has a built in database to store uplink messages so that they can be retrieved later.

To enable this, navigate to **Message storage** page in the application overview. This is disabled by default.

{{< figure src="storage-disabled.png" alt="Message storage disabled" >}}

Enable it by selecting the checkbox. At this point, there is not data stored since the feature wasn't enabled.

{{< figure src="storage-enabled.png" alt="Message storage enabled" >}}

Click the button on the end device once, wait for 2-3 seconds and refresh this page. There will be one entry with the latest uplink message that's retrieved from the database.

Wait for 5 mins and click the button again and repeat. You'll see two entries retrieved.

{{< warning "Sending lots of uplinks may result in draining the battery quickly" />}}

{{< figure src="storage-filled.png" alt="First stored messages" >}}

If this integration is kept on, all future messages will be stored and retained upto a certain amount of time (this is based on your {{% tts %}} Cloud subscription)

At this point, this guide offers two mutually exclusive options to further collect/visualize this data.

1. Create a dashboard using an external IoT platform.
2. (Advanced) Retrieve data on your local machine using ngrok.

{{< tabs/container "Create a dashboard" "Retrieve data locally (Advanced)" >}}

{{< tabs/tab "Create a dashboard" >}}

{{% tts %}} does not support building dashboards as they are very specific to the use case and are meant to be very customizable.

Instead, there are many IoT platforms out there on the market which provide various dashboard options. For this example, we are going to use one such platfrom called [Datacake](https://app.datacake.de/login).

#### Datacake

1. Create an account on the [Datacake](https://app.datacake.de/login) platform and login.
2. Select **Add Device** and choose the **LoRaWAN** option.

{{< figure src="lorawan-device.png" alt="LoRaWAN Device" >}}

3. In the search bar after **Device Template**, search for `mClimate Multipurpose Button`. Select **Next**.

{{< figure src="mclimate-button.png" alt="mClimate button" >}}

4. In the **Network Server** tab select, `The Things Stack v3` and click **Next**.

{{< figure src="tts.png" alt="The Things Stack" >}}

5. In the **Add Devices** section, choose **Manual** and enter the Device EUI of the end device. You can find this on the overview page of your device on {{% tts %}} console.

{{< figure src="device-details.png" alt="Device Details" >}}

6. Choose the free plan to proceed.

7. Head over to the **Configuration** tab of your end device and scroll down to the **LoRaWAN** section.

8. Click **Show setup instructions** and copy the URL that starts with `https://api.datacake.co` and save it somewhere.

#### {{% tts %}}

Now head back to {{% tts %}} console and go to your application.

1. Click on the **Webhooks** option from the side panel.

2. Click **Add webhook**. Choose **Custom webhook**.

3. Enter the webhook details

- **Wehbook ID**: An identifier for your Webhook. This cannot be changed later.
- **Webhook format**: Keep this as `JSON`.
- **Base URL**: Enter the URL from Datacake's LoRaWAN tab that you copied earlier. This starts with `https://api.datacake.co`.
- The rest of the fields below can be left as it is for now.

{{< figure src="wh-general-settings.png" alt="Webhook general settings" >}}

4. Head down to the **Enabled event types** tab and check **Uplink message** and **Join request**. You can also choose to enable all the message types.

{{< figure src="wh-event-types.png" alt="Webhook event types" >}}

5. The newly created webhook will have the `pending` status.

{{< figure src="wh-created.png" alt="Webhook created" >}}

6.  Click the button on your end device. The uplink message should now be successfully transmitted to the {{% tts %}} and it will be sent to Datacake. If you now refresh the webhooks page, the webhook will be marked as `healthy`.

{{< figure src="wh-healthy.png" alt="Webhook healthy" >}}

> TODO: Add Datacake examples

{{< /tabs/tab >}}

{{< tabs/tab "Retrieve data locally (Advanced)" >}}

In this guide, we will use [ngrok](https://ngrok.com/) and some Python code to pipe the data to our local terminal. This guide is meant for users who are already comfortable with using a terminal.

#### Prerequisites

1. [ngrok](https://ngrok.com/) free tier account.
2. [ngrok agent command line tool](https://dashboard.ngrok.com/get-started/setup)
3. [Python](https://www.python.org/)
4. [Pip](https://pypi.org/project/pip/) package manager.

#### Build a Simple HTTP Server Using Python

##### Setup

1. Create Project Structure

First, create a new directory for your project and set up the required files:

```bash
mkdir python-http-server
cd python-http-server
touch server.py requirements.txt .env
```

2. Install Dependencies

Add the following to your `requirements.txt` file:

```
flask==2.3.3
python-dotenv==1.0.0
```

Then install the dependencies:

```bash
pip install -r requirements.txt
```

3. Generate a random authentication token. One option is to use `openssl`.

```bash
$ openssl rand -hex 16
33f9bf794b0aed47bb04f0a1832159db
```

4. Configure Environment Variables

Create a `.env` file with the following configuration.

The following example sets the server port to 3000 and provides an authentication token. Adapt it for your case.

```
export SERVER_PORT=3000
export AUTH_TOKEN=<token from above>
```

##### Server Implementation

1. Import Libraries and Setup

Create the `server.py` file and add the necessary imports:

```python
import os
import json
import logging
from functools import wraps
from flask import Flask, request, jsonify
from dotenv import load_dotenv
```

These imports provide:

- Access to environment variables and file system
- JSON handling capabilities
- Logging functionality
- Decorator utilities
- Flask web framework components
- Environment variable loading from .env files

2. Initialize Environment and Logging

Add the following code to set up logging and load environment variables:

```python
# Load environment variables from .env file
load_dotenv()

# Configure basic logging
logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s : %(message)s'
)
logger = logging.getLogger(__name__)

# Read configuration from environment variables
PORT = int(os.environ.get("SERVER_PORT", 3000))
AUTH_TOKEN = os.environ.get("AUTH_TOKEN")

# Validate required environment variables
if not AUTH_TOKEN:
    logger.error("ERROR: AUTH_TOKEN environment variable is required")
    exit(1)
```

This section:

- Loads variables from the `.env` file
- Sets up logging with INFO level
- Retrieves environment variables with fallback values
- Validates that required authentication token exists

3. Create the Flask Application

Initialize the Flask application:

```python
app = Flask(__name__)
```

4. Implement Authentication. Since we are exposing the server to the internet, this adds some basic security.

Add a decorator function to handle token-based authentication:

```python
def require_bearer_token(f):
    """Decorator to validate bearer token from Authorization header"""
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get('Authorization')

        # Check if Authorization header exists and has correct format
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({"error": "Unauthorized. Bearer token required"}), 401

        # Extract and validate token
        token = auth_header.split(' ')[1]
        if token != AUTH_TOKEN:
            return jsonify({"error": "Forbidden. Invalid token"}), 403

        return f(*args, **kwargs)
    return decorated
```

This decorator:

- Checks if the Authorization header is present and properly formatted
- Extracts the token from the header
- Compares the token against the expected value
- Returns appropriate error responses for invalid tokens

5. Implement JSON Validation since {{% tts %}} sends JSON webhooks.

Add a helper function to validate JSON requests:

```python
def validate_json():
    """Validate that the request has the correct content type header and a valid JSON body"""
    if not request.is_json:
        return jsonify({"error": "Unsupported Media Type. Expected application/json"}), 415

    try:
        # This will raise an exception if the body is not valid JSON
        request.get_json()
        return None
    except Exception:
        return jsonify({"error": "Bad Request. Invalid JSON format"}), 400
```

This function:

- Checks if the Content-Type header indicates JSON
- Validates that the body contains properly formatted JSON
- Returns appropriate error responses for invalid requests

6. Define the root endpoint. This is where `ngrok` will forward the webhook.

Create the routes for handling HTTP requests:

```python
@app.route('/', methods=['POST'])
@require_bearer_token
def handle_post():
    # Validate JSON content type and format
    error_response = validate_json()
    if error_response:
        return error_response

    # Get and print the JSON data
    json_data = request.get_json()
    logger.info("Received device data")
    logger.info(json.dumps(json_data, indent=2))

    # Return success response
    return jsonify({
        "message": "data received successfully",
    }), 200
```

This route:

- Accepts only POST requests to the root URL
- Requires valid authentication via the decorator
- Validates the request contains proper JSON
- Logs the received data
- Returns a success message

7. Define Error Handling for Other Methods

Add a catch-all route for unsupported HTTP methods:

```python
@app.route('/', methods=['GET', 'PUT', 'DELETE', 'PATCH'])
def method_not_allowed():
    return jsonify({"error": "Method Not Allowed"}), 405
```

This explicitly returns a 405 error for all HTTP methods except POST.

8. Start the Server

Finally, add the code to run the server:

```python
if __name__ == "__main__":
    # Log server startup information
    token_preview = AUTH_TOKEN[:3] + "..." + AUTH_TOKEN[-3:]
    logger.info(f"Server running at http://localhost:{PORT}/")
    logger.info(f"Using auth token: {token_preview}")

    # Start the server
    app.run(host='localhost', port=PORT)
```

This server now runs on `http://localhost:<PORT>`

#### Expose the Server using ngrok

1. On the [ngrok dashboard](https://dashboard.ngrok.com), scroll down to the **Deploy your app online** and claim a free **Static Domain**. This is the end point that {{% tts %}} will send the webhooks to.
2. On your local machine, configure the auth token for ngrok agent. This token will be available on the `ngrok` dashboard.

```bash
$ ngrok config add-authtoken <token>
```

3. Start the `ngrok` agent and set it to forward traffic to the local HTTP Server.

```bash
$ ngrok http --url=<your-static-domain> <PORT>
```

#### Testing

Send an HTTP POST request to your static domain to check if the request gets forwarded to your local webserver.

```bash
curl -H "Authorization: Bearer <AUTH_TOKEN>" -H "Content-Type: application/json" https://<your-static-domain>  -d '{"test":"value"}'
{"message":"data received successfully"}
```

This request should be successful and the local server should log the JSON.

```bash
 * Running on http://localhost:3000
INFO : Press CTRL+C to quit
INFO : Received device data
INFO : {
  "test": "value"
}
```

#### Configure a Webhook on {{% tts %}}

1. In the {{% tts %}} Console, click on your application and navigate to the webhooks section.
2. Select **Add Webhook** and select `Custom webhook`.
3. Enter the webhook details.

- **Wehbook ID**: An identifier for your Webhook (ex: `my-server-ngrok`). This cannot be changed later.
- **Webhook format**: Keep this as `JSON`.
- **Base URL**: Enter your static domain URL from `ngrok`.

4. Select **Add header entry** in the additional header section.

- Key: `Authorization`
- Value: `Bearer <your-auth-token>`

{{< figure src="ngrok-webhook.png" alt="Webhook settings for ngrok" >}}

5. In **Enabled event types** select `Uplink message` and `Join request`. You can also select all message types.

6. Click **Add webhook**.

#### Sending Uplinks

If all the previous steps were successful, you now have a local HTTP server to which {{% tts %}} will forward uplink data via Webhooks. To test this, press the button on your end device. The HTTP Server will log this uplink JSON. An example is shown below.

```bash
INFO : Received device data
INFO : {
  "end_device_ids": {
    "device_id": "eui-70b3d52dd600035a",
    "application_ids": {
      "application_id": "starter-kit"
    },
    "dev_eui": "70B3D52DD600035A",
    "join_eui": "EC656E0000000001",
    "dev_addr": "27FE87F6"
  },
  "correlation_ids": [
    "gs:uplink:01JRZ767CVCHBZW1Y8YG9PZ3TS"
  ],
  "received_at": "2025-04-16T11:54:13.995136483Z",
  "uplink_message": {
    "session_key_id": "aAixKtmNZUKQXd4GqpHDsw==",
    "f_port": 2,
    "f_cnt": 14,
    "frm_payload": "sQAAEAHlANcB",
    "decoded_payload": {
      "batteryVoltage": 3.4,
      "pressEvent": 1,
      "sensorTemperature": 21.5,
      "singlePressEventCounter": 16,
      "thermistorProperlyConnected": true
    },
    "rx_metadata": [
      {
        "gateway_ids": {
          "gateway_id": "ttig-52ec",
          "eui": "58A0CBFFFE8052EC"
        },
        "time": "2025-04-16T11:54:13.697237014Z",
        "timestamp": 1276394164,
        "rssi": -31,
        "channel_rssi": -31,
        "snr": 9.5,
        "uplink_token": "ChcKFQoJdHRpZy01MmVjEghYoMv//oBS7BC09dDgBBoMCOW0/r8GEO6mnPcCIKCelfiSJQ==",
        "received_at": "2025-04-16T11:54:13.758247461Z"
      }
    ],
    "settings": {
      "data_rate": {
        "lora": {
          "bandwidth": 125000,
          "spreading_factor": 7,
          "coding_rate": "4/5"
        }
      },
      "frequency": "867700000",
      "timestamp": 1276394164,
      "time": "2025-04-16T11:54:13.697237014Z"
    },
    "received_at": "2025-04-16T11:54:13.787593298Z",
    "confirmed": true,
    "consumed_airtime": "0.061696s",
    "version_ids": {
      "brand_id": "mclimate",
      "model_id": "mc-button",
      "hardware_version": "1.2",
      "firmware_version": "1.2",
      "band_id": "EU_863_870"
    },
    "network_ids": {
      "net_id": "000013",
      "ns_id": "EC656E000010181D",
      "tenant_id": "docs-test-account",
      "cluster_id": "eu1",
      "cluster_address": "eu1.cloud.thethings.industries",
      "tenant_address": "docs-test-account.eu1.cloud.thethings.industries"
    },
    "last_battery_percentage": {
      "f_cnt": 14,
      "value": 90.118576,
      "received_at": "2025-04-16T11:54:13.787593298Z"
    }
  }
}
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

Now that we have experimented with different methods of collecting uplinks, let's use {{% tts %}} to send downlink messages to the end device.
