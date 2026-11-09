# Managing Application Packages using the CLI

> To interact with the available application packages, you can use The Things Stack CLI.

Source: https://www.thethingsindustries.com/docs/integrations/application-packages/using-the-cli/


To interact with the available application packages, you can use [The Things Stack CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/).

> **Note:** This section considers default associations only. However, all of the commands for managing associations and default associations are symmetric, and may be switched one with another. Check `ttn-lw-cli applications packages` for more info.


<div class="notification is-info">
  <p class="title">Command-line interface only</p>
  <p>The instructions below use the command-line interface (CLI).</p>
  
  
  <div class="buttons">
    <a class="button is-primary is-outlined" href="https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/">Learn how to install the CLI</a>
  </div>
</div>


We first define some user parameters used below:

```bash
APP_ID="app1"
DEVICE_ID="dev1"
```

Make sure to modify these according to your setup.

## Listing the Available Packages

The application packages available for a given device `dev1` of application `app1` can be obtained as follows:

```bash
ttn-lw-cli applications packages list $APP_ID $DEVICE_ID
```

This gives the result in the JSON format:

```json
{
  "packages": [
    {
      "name": "test-package",
      "default_f_port": 20
    }
  ]
}
```

## Creating and Updating an Association

In order to associate a given application package to a FPort of an application, you can use the `default-associations set` command:

```bash
F_PORT=25
APP_PACKAGE_NAME="test-package"
ttn-lw-cli applications packages default-associations set $APP_ID $F_PORT --package-name $APP_PACKAGE_NAME
```

This will associate FPort `25` of application `app1` with the application package `test-package`, as shown by the command output:

```json
{
  "ids": {
    "application_ids": {
      "application_id": "app1"
    },
    "f_port": 25
  },
  "created_at": "2019-12-18T21:28:12.775879582Z",
  "updated_at": "2019-12-18T21:29:08.445380588Z",
  "package_name": "test-package"
}
```

Some application packages are stateful, and as such their state can be updated using the `data-*` parameters:

```bash
# Create a JSON formatted file containing package data
echo '{ "api_key": "AQEA8+q0v..." }' > package-data.json
# Update the association with the new package data
ttn-lw-cli applications packages default-associations set $APP_ID $F_PORT --data-local-file package-data.json
```

This will update the association to use the given `api_key`:

```json
{
  "ids": {
    "application_ids": {
      "application_id": "app1"
    },
    "f_port": 25
  },
  "created_at": "2019-12-18T21:28:12.775879582Z",
  "updated_at": "2019-12-18T21:37:16.470742803Z",
  "package_name": "test-package",
  "data": {
    "api_key": "AQEA8+q0v..."
  }
}
```

## Listing the Associations

The package associations of a given device can be listed using the `default-associations list` command:

```bash
ttn-lw-cli applications packages default-associations list $APP_ID
```

<details><summary>Output</summary>

```json
{
  "associations": [
    {
      "ids": {
        "application_ids": {
          "application_id": "app1"
        },
        "f_port": 25
      },
      "created_at": "2019-12-18T21:28:12.775879582Z",
      "updated_at": "2019-12-18T21:29:08.445380588Z",
      "package_name": "test-package"
    }
  ]
}
```

</details>

## Retrieving an Association

The associations can be retrieved using the `default-associations get` command:

```bash
ttn-lw-cli applications packages default-associations get $APP_ID $F_PORT --data
```

<details><summary>Output</summary>

```json
{
  "ids": {
    "application_ids": {
      "application_id": "app1"
    },
    "f_port": 25
  },
  "created_at": "2019-12-18T21:28:12.775879582Z",
  "updated_at": "2019-12-18T21:37:16.470742803Z",
  "package_name": "test-package",
  "data": {
    "api_key": "AQEA8+q0v..."
  }
}
```

</details>

## Deleting an Association

The associations can be deleted using the `default-associations delete` command:

```bash
ttn-lw-cli applications packages associations delete $APP_ID $F_PORT
```

