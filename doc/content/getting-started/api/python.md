---
title: "Python Code Examples"
description: ""
weight:
---

[Python](https://www.python.org/) is a powerful scripting language that runs everywhere and is very ease to learn and use. This section presents example Python code for working with the HTTP API of {{% tts %}}.

<!-- more -->

## Dependencies

The code examples below use Python 3 (but should work with Python 2.7), and use the well-known [`requests`](https://requests.readthedocs.io/en/master/) library for making HTTP requests to {{% tts %}}.

## Documentation

A complete list of API endpoints is available in the [API Reference]({{< ref "reference/api" >}}). There, you can also find detailed information about [Authentication]({{< ref "reference/api/authentication" >}}) and [Field Masks]({{< ref "reference/api/field-mask" >}}).

## Get End Device

```python
#!/usr/bin/env python3
# get_end_device.py

import requests
import json

base_url = 'https://thethings.example.com/api/v3'
api_key = 'NNSXS.XXXXXXXXXXXXXXXXXXXXXXXXXX.YYYYYYYYYYYYYYYY'

app_id = 'app1'
dev_id = 'dev1'


def get_end_device(app_id, dev_id):
    url = '{}/applications/{}/devices/{}'.format(base_url, app_id, dev_id)
    response = requests.get(url, headers={
        'authorization': 'Bearer {}'.format(api_key),
        'accept': 'application/json',
        'user-agent': 'my-python-integration/integration-version',
    }, params={
        'field_mask': 'name,description',  # querystring parameters
    })

    if response.status_code != 200:
        print('Error {}:\n{}'.format(response.status_code, response.text))
        return {}

    device = response.json()
    return device


if __name__ == '__main__':
    dev = get_end_device(app_id, dev_id)

    # Fields with zero values (e.g. empty strings) will not be present in the
    # JSON response, so we use dev.get('name') instead of dev['name']
    print('Device ID:', dev['ids']['device_id'])
    print('Device name:', dev.get('name'))
    print('Device description:'), dev.get('description'))

```

You can run the code example with:

```bash
$ ./get_end_device.py

Device ID: dev1
Device name: my device name
Device description: my device description
```

## Streaming responses

It is also possible to work with streaming responses (`text/event-stream`). To get a stream of events for device `dev1` of application `app1`:

```python
#!/usr/bin/env python3
# subscribe_to_device_events.py

import requests
import json

base_url = 'https://thethings.example.com/api/v3'
api_key = 'NNSXS.XXXXXXXXXXXXXXXXXXXXXXXXXX.YYYYYYYYYYYYYYYY'

app_id = 'app1'
dev_id = 'dev1'


def subscribe_to_device_events(app_id, dev_id):
    url = '{}/events'.format(base_url)
    response = requests.post(
        url,
        headers={
            'authorization': 'Bearer {}'.format(api_key),
            'content-type': 'application/json',
            'accept': 'text/event-stream',  # enable long streaming responses
            'user-agent': 'my-python-integration/integration-version',
        },
        json={
            'identifiers': [{
                'device_ids': {
                    'application_ids': {'application_id': app_id},
                    'device_id': dev_id,
                },
            }],
        },
        stream=True,  # set stream to True, so that the response is read in chunks
    )

    if response.status_code != 200:
        print('Error {}:\n{}'.format(response.status_code, response.text))
        return {}

    for line in response.iter_lines():
        # Consecutive responses are separated by a double new-line ('\n\n'), so
        # we ignore empty lines
        if not line:
            continue

        event_data = json.loads(line)
        print('New event:', event_data['result']['name'])


if __name__ == '__main__':
    subscribe_to_device_events(app_id, dev_id)

```

```
$ ./subscribe_to_device_events.py

New event: events.stream.start
...
```
