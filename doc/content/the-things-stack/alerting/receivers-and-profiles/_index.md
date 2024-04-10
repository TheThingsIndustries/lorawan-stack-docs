---
title: "Receiving alert notifications"
description: ""
distributions: ["Enterprise", "Cloud"]
new_in_version: "3.30.0"
weight: 2
---

This section explains how alert notification receivers and profiles work in {{% tts %}}.

<!--more-->

Alert notifications are dispatched by {{% tts %}} using _alert notification receivers_ and _alert notification profiles_. The receivers and profiles can be managed only by {{% tts %}} network admins, but individual users with access to entities can choose which profile should be used to dispatch alert notifications.

## Alert Notification Receivers

Alert notification receivers represent endpoints to which {{% tts %}} sends alert notifications. An endpoint in this case can be an email address, a phone number or an URL. The receivers can be managed via the Console, using the **Alerting** section of the **Admin Panel**.

{{< figure src="receivers-landing.png" alt="Alert Notification Receivers overview" >}}

By clicking on **Add an alert receiver** one can create a new alert notification receiver. Fill in the details and click on **Save changes** in order to save your newly created receiver.

{{< figure src="add-receiver.png" alt="Add Alert Notification Receiver" >}}

## Alert Notification Profiles

Once the alert notifications receivers are setup, we can create alert notification profiles. Alert notification profiles are bundles of alert notification receivers which can be attached to entities in order to dispatch alert notifications to multiple endpoints. It is also possible to set a default alert notification profile which is used for entities without an explicit profile set.

The profiles can be managed also via the Console, by switching to the the **Alert Profiles** tab in the **Alerting** section of the **Admin Panel**.

{{< figure src="profiles-landing.png" alt="Alert Notification Profiles overview" >}}

By clicking on *Add an alert profile** one can create a new alert notification profile. Fill in the details and click on **Save changes** in order to save your newly created profile. It is also possible to mark this profile as the default profile in this page.

{{< figure src="add-profile.png" alt="Add Alert Notification Profile" >}}
