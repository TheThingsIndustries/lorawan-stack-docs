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
      http:
        traefik.ingress.kubernetes.io/router.entrypoints: web,websecure
        traefik.ingress.kubernetes.io/router.tls: "true"
      grpc:
        traefik.ingress.kubernetes.io/router.entrypoints: grpc,grpcsecure
        traefik.ingress.kubernetes.io/router.tls: "true"
      semtechws:
        traefik.ingress.kubernetes.io/router.entrypoints: semtechws,semtechwssecure
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
    redirections:
      to: websecure
      scheme: https
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
```

UDP Ingress Route for the UDP Packet Forwarder:

{{< warning "The UDP Packet Forwarder requires session affinity to work properly. Traefik does not support session affinity for UDP. Session affinity can usually be set up on the Load Balancer of the cluster. We recommend using the newer {{% lbs %}} instead of the UDP Packet Forwarder." />}}

```yaml
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRouteUDP
metadata:
  name: tts-gs-udp-packet-forwarder
  namespace: tts # Set this to the namespace where TTS is deployed.
spec:
  entryPoints:
    - udp
  routes:
  - services:
    - name: tts-gs # <helm-chart-release-name>-gs
      port: 1700
```

TCP Ingress Route for MQTT application integration:

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: tts-as-mqtt
  namespace: tts # Set this to the namespace where TTS is deployed.
spec:
  entryPoints:
    - appmqtt
  routes:
  - match: HostSNI(`*`)
    services:
      - name: tts-as # <helm-chart-release-name>-as
        port: 1883
---
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: tts-app-mqtt-secure
  namespace: tts # Set this to the namespace where TTS is deployed.
spec:
  entryPoints:
    - appmqttsecure
  routes:
  - match: HostSNI(`*`)
    services:
      - name: tts-as # <helm-chart-release-name>-as
        port: 1883
  tls:
    secretName: ingress-tls-secret
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

Ingress-Nginx Helm chart port mapping configuration:

{{< note "When using Ingress-Nginx, enable the TLS ports in the Helm chart (v0.0.13 and above)." />}}

```yaml
controller:
  config:
    use-http2: true
    strict-validate-path-type: false # This is needed to allow gRPC paths that contain dots.
    default-ssl-certificate: <tls-certificate-secret-namespace>/<tls-certificate-secret-name> # Make sure to set this.
tcp:
  # Plain-text ports.
  "1881": tts/the-things-stack-gs:1881 # <namespace>/<helm-chart-release-name>-gs:1881
  "1882": tts/the-things-stack-gs:1882
  "1883": tts/the-things-stack-as:1883
  "1887": tts/the-things-stack-gs:1887
  "1889": tts/the-things-stack-gs:1889
  # TLS ports.
  "8881": tts/the-things-stack-gs:8881
  "8882": tts/the-things-stack-gs:8882
  "8883": tts/the-things-stack-as:8883
  "8887": tts/the-things-stack-gs:8887
  "8889": tts/the-things-stack-gs:8889
udp:
  "1700": tts/the-things-stack-gs:1700
```
