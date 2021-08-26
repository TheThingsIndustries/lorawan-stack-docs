---
title: "Scheduled tasks"
description: ""
weight: 5
distributions: ["Cloud", "Enterprise"]
---

This is the reference for all scheduled task run from the The Things Industries account server.

{{< tasks/method name="check_support_plans" interval="every day" description="All cloud hosted are required to have at least the `do it yourself` support plan (`price` in stripe). Enterprise customer have at least `enterprise standard` included. Without a support plan set customers can not upgrade or add support from the customer dashboard. This task checks all subscriptions and then creates either a `add_cloud_support_none` or `add_enterprise_support_none` task if required." >}}
