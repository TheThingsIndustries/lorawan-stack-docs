---
title: "Sample ingress controllers"
description: ""
weight: 1
aliases: [
  /getting-started/kubernetes/self-managed/prerequisites/sample-ingress-controllers,
  /the-things-stack/host/kubernetes/generic/prerequisites/sample-ingress-controllers,
  ]
---

The following are examples of ingress controller configurations for {{% tts %}} deployment on Kubernetes.

<!--more-->

## Traefik

Example of a Traefik configuration. More info about the Helm chart can be found [here](https://github.com/traefik/traefik-helm-chart).

{{% tts %}} Helm chart ingress configuration:

```yaml
global:
  ingress:
    controller: "traefik"
    tls:
      secretName: "ingress-tls-cert"
    annotations:
      grpc:
        traefik.ingress.kubernetes.io/router.entrypoints: grpcsecure
        traefik.ingress.kubernetes.io/router.tls: "true"
      http:
        traefik.ingress.kubernetes.io/router.entrypoints: websecure
      semtechws:
        traefik.ingress.kubernetes.io/router.entrypoints: semtechwssecure,semtechws
        traefik.ingress.kubernetes.io/router.tls: "true"
    serviceAnnotations:
      traefik.ingress.kubernetes.io/service.serversscheme: h2c
```

Traefik Helm chart port mapping configuration:

```yaml
deployment:
  kind: "Deployment"
  replicas: 1
ports:
  web:
    protocol: "TCP"
    port: 1885
    expose:
      default: true
    exposedPort: 80
    redirectTo:
      port: "websecure"
  websecure:
    protocol: "TCP"
    port: 8885
    expose:
      default: true
    exposedPort: 443
  grpc:
    protocol: "TCP"
    port: 1884
    expose:
      default: true
    exposedPort: 1884
  grpcsecure:
    protocol: "TCP"
    port: 8884
    expose:
      default: true
    exposedPort: 8884
  gtwmqttv2:
    protocol: "TCP"
    port: 1881
    expose:
      default: true
    exposedPort: 1881
  gtwmqttv2secure:
    protocol: "TCP"
    port: 8881
    expose:
      default: true
    exposedPort: 8881
  gtwmqttv3:
    protocol: "TCP"
    port: 1882
    expose:
      default: true
    exposedPort: 1882
  gtwmqttv3secure:
    protocol: "TCP"
    port: 8882
    expose:
      default: true
    exposedPort: 8882
  semtechws:
    protocol: "TCP"
    port: 1887
    expose:
      default: true
    exposedPort: 1887
  semtechwssecure:
    protocol: "TCP"
    port: 8887
    expose:
      default: true
    exposedPort: 8887
  appmqtt:
    protocol: "TCP"
    port: 1883
    expose:
      default: true
    exposedPort: 1883
  appmqttsecure:
    protocol: "TCP"
    port: 8883
    expose:
      default: true
    exposedPort: 8883
  ttigw:
    protocol: "TCP"
    port: 1889
    expose:
      default: true
    exposedPort: 1889
  ttigwsecure:
    protocol: "TCP"
    port: 8889
    expose:
      default: true
    exposedPort: 8889
  udp:
    protocol: "UDP"
    port: 1700
    expose:
      default: true
    exposedPort: 1700
  interop:
    protocol: "TCP"
    port: 8886
    expose:
      default: true
    exposedPort: 8886
```

UDP Packet Forwarder Traefik UDP Ingress Route for gateway connections:

```yaml
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRouteUDP
metadata:
  name: tts-gs-udp-packet-forwarder
  namespace: <tts-namespace> # Set this to the namespace where TTS is deployed.
spec:
  entryPoints:
    - udp
  routes:
  - services:
    - name: tts-gs # Set prefix to helm chart release name.
      port: 1700
```

MQTT Traefik TCP Ingress Route for app integrations:

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: tts-as-mqtt
  namespace: <tts-namespace> # Set this to the namespace where TTS is deployed.
spec:
  entryPoints:
    - appmqtt
  routes:
  - match: HostSNI(`*`)
    services:
      - name: tts-as # Set prefix to helm chart release name.
        port: 1883
---
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: tts-app-mqtt-secure
  namespace: <tts-namespace> # Set this to the namespace where TTS is deployed.
spec:
  entryPoints:
    - appmqttsecure
  routes:
  - match: HostSNI(`*`)
    services:
      - name: tts-as
        port: 1883
  tls:
    secretName: dev-ingress-tls-secret
```

## Ingress-Nginx Controller

Example of an Ingress-Nginx Controller configuration. More info about the Helm chart can be found [here](https://kubernetes.github.io/ingress-nginx/).

{{% tts %}} Helm chart ingress configuration:

```yaml
global:
  ingress:
    controller: "nginx"
    tls:
      secretName: "ingress-tls-cert"
    annotations:
      grpc:
        nginx.ingress.kubernetes.io/backend-protocol: GRPC
        nginx.ingress.kubernetes.io/use-http2: "true"
      http:
        nginx.ingress.kubernetes.io/backend-protocol: HTTP
        nginx.ingress.kubernetes.io/use-http2: "true"
      semtechws: {}
      ttigw: {}
    serviceAnnotations: {}
```

To expose TCP and UDP ports with Ingress-Nginx, two config maps have to be applied to the k8s cluster, one with TCP services and one with UDP services. More information [here](https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/).

```yaml
# Example config map for TCP services to use with ingress-nginx.
apiVersion: v1
kind: ConfigMap
metadata:
  name: tcp-services
  namespace: ingress-nginx-controller # Make sure to set this to the namespace of Ingress-Nginx.
data:
	# Non-TLS ports.
  1881: "tts/the-things-stack-gs:1881"
  1882: "tts/the-things-stack-gs:1882"
  1883: "tts/the-things-stack-as:1883"
  1887: "tts/the-things-stack-gs:1887"
  1889: "tts/the-things-stack-gs:1889"
  # TLS ports.
  8881: "tts/the-things-stack-gs:8881"
  8882: "tts/the-things-stack-gs:8882"
  8883: "tts/the-things-stack-as:8883"
  8887: "tts/the-things-stack-gs:8887"
  8889: "tts/the-things-stack-gs:8889"

# Example config map for UDP services to use with ingress-nginx.
apiVersion: v1
kind: ConfigMap
metadata:
  name: udp-services
  namespace: ingress-nginx-controller # Make sure to set this to the namespace of Ingress-Nginx
data:
  1700: "tts/the-things-stack-gs:1700"
```

Ingress-Nginx Helm chart port mapping configuration:

```yaml
controller:
  config:
    default-ssl-certificate: <tls-certificate-secret-namespace>/<tls-certificate-secret-name> # Make sure to set this.
    strict-validate-path-type: false
    use-http2: true
  extraArgs:
    tcp-services-configmap: ingress-nginx-controller/tcp-services # This must match the previous TCP config map
    udp-services-configmap: ingress-nginx-controller/udp-services # This must match the previous UDP config map
tcp:
  "1881": tts/the-things-stack-gs:1881
  "1882": tts/the-things-stack-gs:1882
  "1883": tts/the-things-stack-as:1883
  "1887": tts/the-things-stack-gs:1887
  "1889": tts/the-things-stack-gs:1889
  "8881": tts/the-things-stack-gs:8881
  "8882": tts/the-things-stack-gs:8882
  "8883": tts/the-things-stack-as:8883
  "8887": tts/the-things-stack-gs:8887
  "8889": tts/the-things-stack-gs:8889
udp:
  "1700": tts/the-things-stack-gs:1700
```
