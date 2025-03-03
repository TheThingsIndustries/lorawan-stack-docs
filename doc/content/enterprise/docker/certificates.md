---
title: "Certificates"
description: ""
weight: 2
aliases:
  [
    /getting-started/installation/certificates,
    /the-things-stack/host/docker/certificates,
  ]
---

{{% tts %}} has built in support for Transport Layer Security (TLS) and HTTPS. This requires a TLS certificate and a corresponding key. For using {{% tts %}} behind an external proxy that can terminate TLS see the [proxy]({{< relref "proxy" >}}) section.

<!--more-->

In this guide, we request a free, trusted certificate from [Let's Encrypt](https://letsencrypt.org/getting-started/), using the built in ACME support, but if you already have a certificate (`cert.pem`) and a corresponding key (`key.pem`), you can also use those.

If you are deploying using ACME, move to the [Automatic Certificate Management](#automatic-certificate-management) section.

If you already have CA certificates, move to the [Using Custom Certificates](#using-custom-certificates) section.

If you are deploying locally you can set up your own Certificate Authority and issue a certificate-key pair. Move to the [Custom Certificate Authority](#custom-certificate-authority) section.

## Automatic Certificate Management

{{% tts %}} can be configured to automatically retrieve and update Let's Encrypt certificates. Assuming you followed the [configuration]({{< relref "configuration" >}}) steps, create an `acme` directory where {{% tts %}} can store the certificate data:

```bash
mkdir ./acme
sudo chown 886:886 ./acme
```

{{< warning >}} `886` is the `UID` and the `GID` of the user that runs {{% tts %}} in the Docker container. If you don't set these permissions, you may encounter an error resembling `open /var/lib/acme/acme_account+key<...>: permission denied`. {{</ warning >}}

The directory hierarchy should look like this:

```bash
acme/
docker-compose.yml          # defines Docker services for running {{% tts %}}
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for {{% tts %}}
```

If you are using Let's Encrypt in a multi-tenant {{% tts %}} environment, make sure you specify all tenant addresses in the TLS configuration of `ttn-lw-stack-docker.yml`. Read more in the [TLS section]({{< ref "/enterprise/docker/configuration#tls" >}}).

Certificates will automatically be requested the first time you access {{% tts %}}. You will notice that the page takes some time to load while certificates are obtained in the background.

Once you have created the `acme` folder and given it appropriate permissions, move on to [run {{% tts %}}]({{< ref "/enterprise/docker/running-the-stack" >}})!

## Custom Certificate Authority

To use TLS on a local or offline deployment, you can use your own Certificate Authority. In order to set that up, you can use `cfssl`, CloudFlare's PKI/TLS toolkit. The `cfssl` installation instructions can be found [here](https://github.com/cloudflare/cfssl#installation).

Create a `ca.json` file and write the following configuration to it:

```json
{
  "names": [
    {
      "C": "NL",
      "ST": "Noord-Holland",
      "L": "Amsterdam",
      "O": "The Things Demo"
    }
  ]
}
```

Then use the following command to generate the CA key and certificate:

```bash
cfssl genkey -initca ca.json | cfssljson -bare ca
```

Now write the configuration for your certificate to `cert.json`:

```json
{
  "hosts": ["thethings.example.com"],
  "names": [
    {
      "C": "NL",
      "ST": "Noord-Holland",
      "L": "Amsterdam",
      "O": "The Things Demo"
    }
  ]
}
```

{{< note >}} Remember to replace `thethings.example.com` with your server address! {{</ note >}}

Then, run the following command to generate the server key and certificate:

```bash
cfssl gencert -ca ca.pem -ca-key ca-key.pem cert.json | cfssljson -bare cert
```

The next steps assume the certificate key is called `key.pem`, so you'll need to rename `cert-key.pem` to `key.pem`.

At the end, your directory should look like this:

```bash
cert.pem
key.pem
ca.pem
docker-compose.yml          # defines Docker services for running {{% tts %}}
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for {{% tts %}}
```

Be sure to configure `docker-compose.yml` and `ttn-lw-stack-docker.yml` for your custom certificates, as shown in [using custom certificates](#using-custom-certificates).

## Using Custom Certificates

To use CA certificates you already have or [self-signed certificates](#custom-certificate-authority), you will need to specify the custom certificates section of `docker-compose.yml`:

{{< highlight yaml "linenos=table,linenostart=67" >}}
{{< readfile path="/content/enterprise/docker/configuration/docker-compose-custom-certificates.yml" from=67 to=80 >}}
{{< /highlight >}}

You will also need to comment out the Let's Encrypt section of `ttn-lw-stack-docker.yml`:

{{< highlight yaml "linenos=table,linenostart=48" >}}
{{< readfile path="/content/enterprise/docker/configuration/ttn-lw-stack-docker-custom-certificates.yml" from=48 to=55 >}}
{{< /highlight >}}

And uncomment the custom certificates section:

{{< highlight yaml "linenos=table,linenostart=41" >}}
{{< readfile path="/content/enterprise/docker/configuration/ttn-lw-stack-docker-custom-certificates.yml" from=41 to=46 >}}
{{< /highlight >}}

In order to use the certificate (`cert.pem`) and key (`key.pem`), you also need to set these permissions:

```bash
sudo chown 886:886 ./cert.pem ./key.pem
```

{{< warning >}} If you don't set these permissions, you may encounter an error resembling `/run/secrets/key.pem: permission denied`. {{</ warning >}}

The directory hierarchy should look like this:

```bash
cert.pem
key.pem
docker-compose.yml          # defines Docker services for running {{% tts %}}
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for {{% tts %}}
```

Make sure you have configured `docker-compose.yml` and `ttn-lw-stack-docker.yml` for your custom certificates, as shown in [using custom certificates](#using-custom-certificates).

Now that the permissions have been set you can move on to [run {{% tts %}}]({{< ref "/enterprise/docker/running-the-stack" >}})!
