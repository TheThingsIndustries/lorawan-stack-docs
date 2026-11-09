# Root Certificates

> This section contains links to common root SSL certificates used in The Things Stack, issued by trusted certificate authorities (CAs).

Source: https://www.thethingsindustries.com/docs/concepts/advanced/root-certificates/


This section contains links to common root SSL certificates used in The Things Stack, issued by trusted certificate authorities (CAs).

## Which Certificate Is Right For My Deployment?

The [complete certificate list](https://curl.haxx.se/ca/cacert.pem) contains all CA certificates trusted by modern browsers, so if you use certificates issued by a popular CA, you should be covered by this one.

The <a href="ca.pem" download>minimal certificate list</a> contains a tailored list of certificates used in standard The Things Stack deployments for devices which do not support the larger list due to memory constraints.

Unfortunately, some gateways do not support concatenated certificate lists at all. If your device will not connect using the complete or minimal certificate lists, you must use the specific certificate you use to configure TLS for your domain. If you use Let's Encrypt, use the [Let's Encrypt ISRG Root X1](#lets-encrypt).

## Complete Certificate List

This `.pem` file contains all common CA certificates trusted by Mozilla, and is extracted and hosted by [curl](https://curl.haxx.se/docs/caextract.html).

Download the complete certificate list from curl [here](https://curl.haxx.se/ca/cacert.pem).

## Minimal Certificate List for Common Installations

This `.pem` file contains certificates used in standard The Things Stack deployments, and is small enough to fit on memory constrained devices such as Gateways. This list includes the following CA certificates:

- ISRG Root X1
- Baltimore CyberTrust Root
- Amazon Root CA 1, 2, 3 and 4
- The Things Industries Root CA

Download the minimal certificate list <a href="ca.pem" download>here</a>.

## Let's Encrypt

### ISRG Root X1

Many The Things Stack deployments use the Let's Encrypt ISRG Root X1 Trust. If using Let's Encrypt to secure your domain, you may download the ISRG Root X1 Trust file [here](https://letsencrypt.org/certs/isrgrootx1.pem).

