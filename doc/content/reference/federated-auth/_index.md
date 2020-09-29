---
title: "Federated Authentication"
description: ""
---

{{< new-in-version "3.10" >}}

Federated Authentication allow network administrators to use already existing identity providers in order to authenticate users, instead of manually creating and managing accounts in {{% tts %}}.

<!--more-->

This is the reference for Federated Authentication.

It covers the available providers and how to configure them.

## Who is it for?

Federated Authentication is targeted at network operators that would like to use external authentication services.

### Typical use cases

1. Managing user access in an external identity provider.
2. Maintaining a unique identity registry, as opposed to having to manually manage users in {{% tts %}}.

## How does it work?

Federated Authentication delegates the task of authenticating the user to an external Authentication Provider, allowing the user to present an identity token back to the Identity Server after the procedure is done. The Identity Server then checks the validity of the token with the Authentication Provider and if the token is deemed valid, allows the user to login in {{% tts %}}.
