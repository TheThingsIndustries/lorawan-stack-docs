# Certificates

> The Things Stack has built in support for Transport Layer Security (TLS) and HTTPS. This requires a TLS certificate and a corresponding key. For using The …

Source: https://www.thethingsindustries.com/docs/enterprise/docker/certificates/


The Things Stack has built in support for Transport Layer Security (TLS) and HTTPS. This requires a TLS certificate and a corresponding key. For using The Things Stack behind an external proxy that can terminate TLS see the [proxy](https://www.thethingsindustries.com/docs/enterprise/docker/proxy/) section.

In this guide, we request a free, trusted certificate from [Let's Encrypt](https://letsencrypt.org/getting-started/), using the built in ACME support, but if you already have a certificate (`cert.pem`) and a corresponding key (`key.pem`), you can also use those.

If you are deploying using ACME, move to the [Automatic Certificate Management](#automatic-certificate-management) section.

If you already have CA certificates, move to the [Using Custom Certificates](#using-custom-certificates) section.

If you are deploying locally you can set up your own Certificate Authority and issue a certificate-key pair. Move to the [Custom Certificate Authority](#custom-certificate-authority) section.

## Automatic Certificate Management

The Things Stack can be configured to automatically retrieve and update Let's Encrypt certificates. Assuming you followed the [configuration](https://www.thethingsindustries.com/docs/enterprise/docker/configuration/) steps, create an `acme` directory where The Things Stack can store the certificate data:

```bash
mkdir ./acme
sudo chown 886:886 ./acme
```

> **Warning:** `886` is the `UID` and the `GID` of the user that runs The Things Stack in the Docker container. If you don't set these permissions, you may encounter an error resembling `open /var/lib/acme/acme_account+key<...>: permission denied`.


The directory hierarchy should look like this:

```bash
acme/
docker-compose.yml          # defines Docker services for running The Things Stack
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for The Things Stack
```

If you are using Let's Encrypt in a multi-tenant The Things Stack environment, make sure you specify all tenant addresses in the TLS configuration of `ttn-lw-stack-docker.yml`. Read more in the [TLS section](https://www.thethingsindustries.com/docs/enterprise/docker/configuration/#tls).

Certificates will automatically be requested the first time you access The Things Stack. You will notice that the page takes some time to load while certificates are obtained in the background.

Once you have created the `acme` folder and given it appropriate permissions, move on to [run The Things Stack](https://www.thethingsindustries.com/docs/enterprise/docker/running-the-stack/)!

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

> **Note:** Remember to replace `thethings.example.com` with your server address!


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
docker-compose.yml          # defines Docker services for running The Things Stack
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for The Things Stack
```

Be sure to configure `docker-compose.yml` and `ttn-lw-stack-docker.yml` for your custom certificates, as shown in [using custom certificates](#using-custom-certificates).

## Using Custom Certificates

To use CA certificates you already have or [self-signed certificates](#custom-certificate-authority), you will need to specify the custom certificates section of `docker-compose.yml`:

```yaml
# If using custom certificates:
    secrets:
      - ca.pem
      - cert.pem
      - key.pem

# If using custom certificates:
secrets:
  ca.pem:
    file: ./ca.pem
  cert.pem:
    file: ./cert.pem
  key.pem:
    file: ./key.pem
```


You will also need to comment out the Let's Encrypt section of `ttn-lw-stack-docker.yml`:

```yaml
# Let's encrypt for "thethings.example.com"
# tls:
#   source: acme
#   acme:
#     enable: true
#     dir: /var/lib/acme
#     email: "you@thethings.example.com"
#     hosts: ["thethings.example.com"]
```


And uncomment the custom certificates section:

```yaml
# If using custom certificates:
tls:
  source: file
  root-ca: /run/secrets/ca.pem
  certificate: /run/secrets/cert.pem
  key: /run/secrets/key.pem
```


In order to use the certificate (`cert.pem`) and key (`key.pem`), you also need to set these permissions:

```bash
sudo chown 886:886 ./cert.pem ./key.pem
```

> **Warning:** If you don't set these permissions, you may encounter an error resembling `/run/secrets/key.pem: permission denied`.


The directory hierarchy should look like this:

```bash
cert.pem
key.pem
docker-compose.yml          # defines Docker services for running The Things Stack
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for The Things Stack
```

Make sure you have configured `docker-compose.yml` and `ttn-lw-stack-docker.yml` for your custom certificates, as shown in [using custom certificates](#using-custom-certificates).

Now that the permissions have been set you can move on to [run The Things Stack](https://www.thethingsindustries.com/docs/enterprise/docker/running-the-stack/)!

