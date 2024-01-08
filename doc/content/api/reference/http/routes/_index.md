---
title: "Routes"
description: "Reference of HTTP routes"
weight: 1
---

This page contains a full list of all routes supported by {{% tts %}} HTTP (REST) API, sorted by services.

<!--more-->

- All routes are prepended with `/api/v3`, except where noted.

- Set the `User-Agent` HTTP header containing the name and version of the client. That way, a network operator can help finding out potential issues using the logs.

<br>

{{< openapi/openapi file="tts.swagger" >}}
