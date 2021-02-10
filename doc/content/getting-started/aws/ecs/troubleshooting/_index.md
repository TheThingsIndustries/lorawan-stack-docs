---
title: "Troubleshooting AWS ECS Deployment"
description: ""
weight: 7
---

This section contains information to troubleshoot {{% tts %}} ECS deployment.

### UDP gateways are not connected after an update.

Cross check the below operations

  - Before the version update, complete the database migration.
  
  - If `default` is set to the `DefaultTenantId` in the configuration file, unset the `DefaultTenantId` parameter
  
  ```
  tenancy:
        default-id: 'default'
  ```
  Unset the `DefaultTenantId` as below
  
  ```
  tenancy:
        default-id: ''
  ```

Apply the configurations and restart the `gs` task.

## Professional Support

Additional paid support for this deployment is offered by The Things Industries. You can contact us by visiting [our support page](https://www.thethingsindustries.com/support/).
