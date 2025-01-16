---
title: "Sample ingress controllers"
description: ""
weight: 1
aliases: [/getting-started/kubernetes/self-managed/prerequisites/sample-ingress-controllers]
---

The following are examples of ingress controllers for {{% tts %}} deployment on Kubernetes.

<!--more-->

## Traefik

Example of a Traefik configuration provided through the values of an Traefik Helm chart. More info about the Helm chart 
can be found [here](https://github.com/traefik/traefik-helm-chart).

```yaml
deployment:
  kind: "Deployment"
  replicas: 1
ingressRoute:
  dashboard:
    enabled: false
additionalArguments:
- "--entrypoints.udp.udp.timeout=90s"
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
  traefik:
    protocol: "TCP"
    port: 9000
    expose:
      default: false
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
  interop:
    protocol: "TCP"
    port: 8886
    expose:
      default: true
    exposedPort: 8886
```

## Ingress NGINX

Example of an Ingress NGINX configuration provided through the values of an Ingress NGINX Helm chart. More info about the 
Helm chart can be found [here](https://artifacthub.io/packages/helm/bitnami/nginx).

```yaml
fullnameOverride: "nginx"
namespaceOverride: "ingress-nginx"
kind: Deployment
replicaCount: '1'
config:
  # redirect port 80 to 443 for HTTP to HTTPS.
  ssl-redirect: "true"
  upstream-keepalive-timeout: '90s'
service:
  ports:
    http: 80
    https: 443
  extraPorts:
  - name: semtechws
    port: 1887
    targetPort: 1887
  nodePorts:
    tcp:
      # http
      "80": "1885"
      # https
      "443": "8885"
      # grpc
      "1884": "1884"
      # grpcsecure
      "8844": "8884"
      # gtwmqttv2
      "1881": "1881"
      # gtwmqttv2secure
      "8881": "8881"
      # gtwmqttv3
      "1882": "1882"
      # gtwmqttv3secure
      "8882": "8882"
      # semtechws
      "1887": "1887"
      # semtechwssecure
      "8887": "8887"
      # appmqtt
      "1883": "1883"
      # appmqttsecure
      "8883": "8883"
      # interop
      "8886": "8886"
      # ttigw
      "1889": "1889"
      # ttigwsecure
      "8889": "8889"
```
