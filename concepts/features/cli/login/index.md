# Login with the CLI

> This section explains how to login to The Things Stack using the command-line interface.

Source: https://www.thethingsindustries.com/docs/concepts/features/cli/login/


This section explains how to login to The Things Stack using the command-line interface.

The CLI needs to be logged on in order to create gateways, applications, devices and API keys. With The Things Stack running, login with the following command:

**Cloud, Sandbox, and Open Source:**

```bash
ttn-lw-cli login
```

or on Windows:

```bash
ttn-lw-cli.exe login
```




**Enterprise:**

```bash
tti-lw-cli login
```

or on Windows:

```bash
tti-lw-cli.exe login
```


This will open a browser window with the OAuth login page where you can login with your credentials. This is also where you can create a new account if you do not already have one.

During the login procedure, the CLI starts a webserver on `localhost` in order to receive the OAuth callback after login. If you are running the CLI on a machine that is not `localhost`, you can pass the `--callback=false` flag. This will allow you to perform part of the OAuth flow on a different machine, and copy-paste a code back into the CLI.

