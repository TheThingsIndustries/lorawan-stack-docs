---
title: "Template Changelog"
aliases: [/getting-started/aws/ecs/changelog]
---

# Upgrading

All meaningful changes to templates are documented in this file.

## Unreleased

## 3.28.2

### Proxy

- Add Network Operations Center Grafana WebSocket paths support.

### `4-2b-configuration-rate-limiting`

- Add OAuth server and Account app rate limiting.
- Add Azure IoT Hub and Central rate limiting overrides.

### `5-9a-sqs`

- Add new optional template for AWD SQS.

## 3.28.1

### Proxy

- Add Console events paths.

### `4-2b-configuration-rate-limiting`

- Add Console events request rate limiting.

## 3.28.0

### `2-3-db-redis`

- The `r7g` family of machines is now available for hosting.

### `4-2a-configuration`

- Add `EventsBatchingEnabled`, `EventsBatchingTargetSize`, `EventsBatchingDelay` parameters.
- Add correlation IDs ignored methods to the gRPC server configuration.
- Add Identity Server NS-ID configuration.

## 3.27.2

### `5-4-ecs-services`

- The default NOC Grafana image has been updated to `ghcr.io/thethingsindustries/lorawan-stack-noc-grafana:3.27.2`. This upgrades Grafana to version 10.1.0 and disables the news feed.

## 3.27.1

### `2-5-db-timescale`

- The instance initialization scripts now automatically terminates the instance if the initialization fails.

### `4-2a-configuration`

- Added the `CollaboratorRightsSetOthersAsContacts` parameter.

## 3.27.0

### `5-4-ecs-services`

- The default number of desired instances for the Gateway Configuration Server, Network Operations Center and Network Operations Center Grafana services has been increased to 2. We recommend that production deployments consider deploying extra replicas in order to ensure high availability.

## 3.26.2

### `5-2-ecs-ops`

- Add `GOGCValue` parameter which controls the Go garbage collector target. Sets the `GOGC` environment variable for stack components. Defaults to 100, which is also the default value in the absence of the environment variable.

### `5-3a-ecs-is-service`

- Add `GOGCValue` parameter which controls the Go garbage collector target. Sets the `GOGC` environment variable for stack components. Defaults to 100, which is also the default value in the absence of the environment variable.

### `5-3c-tbs-service`

- Add `GOGCValue` parameter which controls the Go garbage collector target. Sets the `GOGC` environment variable for stack components. Defaults to 100, which is also the default value in the absence of the environment variable.

### `5-4-ecs-services`

- Grafana alerting is now disabled by default, as it is not usable in the current setup.
- Add `GOGCValue` parameter which controls the Go garbage collector target. Sets the `GOGC` environment variable for stack components. Defaults to 100, which is also the default value in the absence of the environment variable.

## 3.26.1

### ECS Templates

- This release adds support for large (8 and 16 vCPU) task sizes. These large tasks are [supported](https://aws.amazon.com/about-aws/whats-new/2022/09/aws-fargate-increases-compute-memory-resource-configurations-4x/) by AWS Fargate. Please note that due to limitations to the EC2 launch type, the 16 vCPU tasks [may not be used](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) with the EC2 launch type.

### `5-3a-ecs-is-service`

- Add support for 8 and 16 vCPUs tasks.

### `5-3b-ecs-external-is-proxy`

- Add support for 8 and 16 vCPUs tasks.

### `5-3c-tbs-service`

- Add support for 8 and 16 vCPUs tasks.

### `5-4-ecs-services`

- Add support for 8 and 16 vCPUs tasks.

### `5-5-ecs-monitoring`

- Add support for 8 and 16 vCPUs tasks.

### `5-6-ecs-proxy`

- Add support for 8 and 16 vCPUs tasks.

## 3.26.0

### ECS templates

- The UDP Gateway Server service has been removed. Historically this service has been used in order to work around various limitations that AWS Network Load Balancer had with UDP traffic. The service is problematic as it runs as a daemon service on each available ECS host machine, and does not support rolling updates. As the support for UDP traffic has improved in the AWS Network Load Balancer, we have decided to remove this service and have UDP traffic be served by the replica Gateway Server service.

### Upgrade procedure

- As this version upgrade removes certain resources, the standard upgrade procedure which follows the template numbering order cannot be followed directly.
- The configuration of the `5-4-ecs-services` template needs to be updated such that the `EnableUDPGSRateLimiting` and `IncludeUDPGatewayServer` parameters are set to `false`. The template does not have to be updated yet, only the configuration. This will remove the UDP Gateway Server service instances.
- The standard upgrade procedure can commence after the template has been upgraded.
- While upgrading the `5-4-ecs-services` template, consider increasing the number of tasks, or allocated resources, for the Gateway Server service.

### `1-2-bastion`

- UDP Gateway Server references have been removed.

### `3-2-load-balancer-rules`

- The UDP target group target type has been changed from `instance` to `ip`.

### `4-2b-configuration-rate-limiting`

- The UDP Gateway Server rate limiting configuration has been marked as deprecated. The configuration will be removed in a future version.
- Add NOC rate limiting configuration.

### `5-4-ecs-services`

- The UDP Gateway Server service has been removed. The UDP traffic will now be served by the existing Gateway Server service.
- The default NOC Grafana image has been updated to `ghcr.io/thethingsindustries/lorawan-stack-noc-grafana:3.26.0`.
- Add NOC rate limiting.

### `5-5-ecs-monitoring`

- UDP Gateway Server references have been removed.

## 3.25.2

### Proxy

- Upgraded to Envoy 1.26.0.

### `2-5-db-timescale`

- Updated the default `node_exporter` version to 1.5.0.
- Replica updates now always maintain at least one instance during the upgrade.
- Postgres custom settings are now re-created on every master instance provisioning.

### `5-4-ecs-cluster`

- Updated the default `node_exporter` version to 1.5.0.

### `5-5-ecs-monitoring`

- Prometheus has been upgraded to version 2.43.0.

## 3.25.1

### `2-4b-routing-s3`

- Added `PluginsConfigBucket`.

### Proxy

- The Network Operations Center routes now have a 30 second timeout.

### `3-2-load-balancer-rules`

- The Basic Station and Tabs Hubs target groups now have a deregistration delay of zero.

### `5-3a-ecs-is-service`

- Service deployment configuration `MinimumHealthyPercent` is now applied only to EC2 services.

### `5-3b-ecs-external-is-proxy`

- Service deployment configuration `MinimumHealthyPercent` is now applied only to EC2 services.

### `5-3c-tbs-service`

- Service deployment configuration `MinimumHealthyPercent` is now applied only to EC2 services.

### `5-4-ecs-services`

- Grafana `gzip` encoding is now enabled.
- Service deployment configuration `MinimumHealthyPercent` is now applied only to EC2 services.
- The default NOC Grafana image has been updated to `ghcr.io/thethingsindustries/lorawan-stack-noc-grafana:3.25.1`.

### `5-6-ecs-proxy`

- Service deployment configuration `MinimumHealthyPercent` is now applied only to EC2 services.

## 3.25.0

### Proxy

- The NOC API is now exposed by the proxy.

### `2-5-db-timescale`

- Added TimescaleDB 2.10.1 support.

### `2-3-db-redis`

- The `r4g` family of machines is now available for hosting.

### `4-2a-configuration`

- Added the NOC API paths.
- Added `RestrictAdminManagedFieldUpdates` parameter.

## 3.24.2

### `1-2-bastion`

- AWS Graviton instances can now be used as bastion hosts.

### `2-5-db-timescale`

- Added TimescaleDB 2.10.0 support.

## 3.24.1

### `4-2a-configuration`

- Added `RedisConnectionPoolMaxLifetime` parameter.

### `2-5-db-timescale`

- Added support for Postgres engine version 15 and TimescaleDB 2.9.3.

### `4-2a-configuration`

- Added `KeyVaultCacheSize`, `KeyVaultCacheTTL`, `KeyVaultCacheErrorTTL` parameters.

## 3.24.0

### ECS templates

- Support for TLS mutual authentication terminated by The Things Stack has been removed. TLS authentication is now only terminated by the Network Load Balancer or Envoy Proxy.
- Support for LoRaWAN® Backend Interfaces interoperability with the Join Server has been removed.
- Crypto Server deployment has been removed.

### Upgrade procedure

- As this version upgrade removes certain resources, the standard upgrade procedure which follows the template numbering order cannot be followed directly.
- The `5-7a-certs-le` template needs to be upgraded first.
- The `5-3a-ecs-is-service` template needs to be upgraded next, and have `InteropEnabled` set to `disabled`. The value may be enabled again after every other template has been upgraded.
- The standard upgrade procedure can commence after these two templates have been upgraded.

### `3-2-load-balancer-rules`

- Changed `InteropEnabled` to a boolean since TLS mutual authentication is no longer terminated by The Things Stack.
  - If you were using `server-authentication` or `mutual-authentication`, select `true`;
  - If you were using `disabled`, select `false`.

### `4-1-secrets`

- Removed `InteropTLSSecret` and output `InteropTLSSecretID`.

### `4-2a-configuration`

- Removed `InteropEnabled` parameter.
- Removed `CryptoServerDNSName` parameter.
- Added `CertificateAuthorityARN` parameter.

### `5-2-ecs-ops`

- Added `UseCertificateAuthorityARN` parameter.

### `5-3a-ecs-is-service`

- Changed `InteropEnabledIS` to a boolean since TLS mutual authentication is no longer terminated by The Things Stack.
  - If you were using `server-authentication` or `mutual-authentication`, select `true`;
  - If you were using `disabled`, select `false`.
- Added `UseCertificateAuthorityARN` parameter.

### `5-3c-ecs-tbs-service`

- Added `UseCertificateAuthorityARN` parameter.

### `5-4-ecs-services`

- Removed `InteropEnabledJS` parameter.
- Added `UseCertificateAuthorityARN` parameter.

### `5-7a-certs-le`

- Removed configuration for storing certificates for interoperability.

### `200-1-crypto`

- This template has been removed and can be undeployed.

## 3.23.2

## 3.23.1

## `1-2-bastion`

- The volumes used by the bastion hosts now use `gp3` volumes.

## `2-5-db-timescale`

- The volumes used by the TimescaleDB hosts now use `gp3` volumes.

### `3-2-load-balancer-rules`

- UDP target groups now automatically kill active flows to deregistered targets. This enables the replacement of the ECS EC2 machines without having the UDP traffic blackhole in the NLB.

### `4-2a-configuration`

- Add configuration option for `HomeNSID` for the DCS config object.

### `5-1-ecs-cluster`

- The volumes used by the EC2 machines used by ECS now use `gp3` volumes. Note that this will not apply retroactively to existing instances.

### `5-5-ecs-monitoring`

- Prometheus has been upgraded to version 2.40.5.
- Thanos default image has been upgraded to version 0.29.0.

### `AMI/BYOL` template

- Fix RDS PostgreSQL 13 and 14 support for new deployments.
- The volumes used by the EC2 machine and by the RDS database are now `gp3` volumes.
- Fix Network Operation Center initialization for new deployments.

### Proxy

- Upgraded to Envoy 1.24.1.

## 3.23.0

For mTLS termination, check the upgrading guide at https://thethingsindustries.com/docs/the-things-stack/host/aws/ecs/mutual-tls/.

## `1-2-bastion`

- The local Redis client has been upgraded to version `6.x` from `4.0`.

### `certbot`

- Support storing TLS credentials in AWS Secrets Manager.

### `2-4c-mtls-s3`

- Create S3 buckets to store CA certificates.

### `3-2-load-balancer-rules`

- Update rules to terminate TLS in Envoy (if `SupportProxyTLS` is enabled).

### `4-1-secrets`

- Add new secret to store server TLS credentials.
- Add new KeyVault IDs for Gateway Tokens.

### `4-2a-configuration`

- Add Configuration options for Gateway Tokens.
- Add `/` to the ignored logging HTTP request paths.
- The default values of `PubSubProviderMQTT` and `PubSubProviderNATS` are changed to `disabled`.

### `5-4-ecs-services`

- Add options to use Gateway Tokens.
- Add Device Repository peer settings to Device Claiming Server.

### `5-6-ecs-proxy`

- Add options to support mTLS termination.

### `5-7a-certs-le`

- Store server TLS credentials in AWS Secrets Manager if `SupportProxyTLS` is enabled.

### `proxy`

- Support mTLS cert forwarding and hot reloading certificates.

## 3.22.2

### `2-5-db-timescale`

- Add two new parameters: `DBEngineVersion`, which controls the PostgreSQL engine major version, and `DBTimescaleDBExtensionVersion`, which controls the TimescaleDB extension version.
  - By default, `DBEngineVersion` is `12`, and `DBTimescaleDBExtensionVersion` is `2.7.0`.
  - Major upgrades require manual migration via `pg_upgrade`.
  
## 3.22.1

### `2-4b-routing-s3`

Add versioning to S3 buckets. Versioning is enabled by default.

### `4-2a-configuration`

- The `pkg/networkserver:duplicate_uplink` and `pkg/networkserver:device_not_found` errors of the `/ttn.lorawan.v3.GsNs/HandleUplink` RPC are now ignored.

## 3.22.0

### `2-3-db-redis`

- Clusters are now marked as `MultiAZEnabled` enabled when the `RedisMultiAZ` parameter is enabled.
  - Previously the `RedisMultiAZ` parameter would control the `AutomaticFailoverEnabled` attribute only, but now it implies `MultiAZEnabled` as well.
- The `t4g` family of machines is now available for hosting, and the default machine size has been promoted to `cache.m6g.large`.

### `2-1-db-aurora-master`, `2-2-db-aurora-replica`

- The `t4g` family of machines is now available for hosting, and the default machine size has been promoted to `db.t4g.medium`.

### `2-5-db-timescale`

- Updated the default `node_exporter` version to 1.4.0.

### `4-2a-configuration`

- Add Console `dtc` target address.

### `5-4-ecs-cluster`

- Updated the default `node_exporter` version to 1.4.0.

### `AMI/BYOL` template

- The `t4g` family of machines is now available for ElastiCache, and the default machine size has been promoted to `cache.t4g.small`.
- The `t4g` family of machines is now available for RDS, and the default machine size has been promoted to `db.t4g.small`.
- Add Console `dtc` target address.

## 3.21.2

## 3.21.1

## 3.21.0

### `4-2a-configuration`
- Added new `EntityLimits` parameters.

### `5-4-ecs-services`

- Fixed the connection of the Device Claiming Server to the QR Code Generator.

## 3.20.2

### Prometheus

- The `node_exporter` alerts now contain the instance ID and instance name.

## 3.20.1

## Prometheus

- The `node_exporter` metrics are now tagged with the EC2 instance ID and instance name.

## 3.20.0

### `2-5-db-timescale`
- Increased backup and redeployment timeout

### `4-2a-configuration`
- Added new parameters `EventsRedisPublishQueueSize`, `EventsRedisPublishMaxWorkers`, `PacketBrokerHomeNetworkWorkerCountLimit`, `PacketBrokerForwarderWorkerCountLimit`

### `5-5-ecs-monitoring`
- Added alerts for TimescaleDB running out of storage

### `AMI/BYOL` template
- Added new parameters `TLSCertificate`, `TLSCertificateCA`, `TLSCertificateKey`

### Proxy
- Added Notification Service routes.
- Added account invitations routes.

## 3.19.2

### `1-1-vpc`
- Added a hosted zone for internal use

### `2-5-db-timescale`
- Added new parameter `NumReplicas`
- Added new parameter `DeploymentName`
- Before updating this template, please remove non-default records from the `${NetworkName}.${Environment}.${Cluster}.db.as.local` hosted zone and turn off the Application Server Storage Integration

### `4-1-secrets`
- Added new parameters `IncludeNOC`, `NOCGrafanaAdminPassword`, `NOCOAuthClientIDValue`, `NOCOAuthClientSecretValue`

### `4-2a-configuration`
- Added new parameters `ConsoleURLForNOC`, `IncludeNetworkOperationsCenter`, `NOCMaxIdleConnections`, `NOCMaxOpenConnections`, `NOCRawDataRetention`, `NOCTargetInsertBatchSize`, `NOCTargetInsertBatchWindow`
- Added `is.email.assets-base-url` and `is.email.branding-base-url`. These options are set to the values of the existing parameters.

### `5-2-ecs-ops`
- Added new parameters `IncludeNetworkOperationsCenter`, `NOCTimescaleDBDeploymentName`, `ApplicationServerStorageTimescaleDBDeploymentName`, `ApplicationServerStorageReplicaEnabled`

### `5-4-ecs-services`
- Added new parameter `ApplicationServerStorageTimescaleDBDeploymentName`, `ApplicationServerStorageReplicaEnabled`
- Added new parameters `IncludeNetworkOperationsCenter`, `NOCTimescaleDBDeploymentName`, `NetworkOperationsCenter*`, `NetworkOperationsCenterGrafana*`

### `5-5-ecs-monitoring`
- Added new parameter `IncludeNetworkOperationsCenter`

### `5-6-ecs-proxy`
- Added new parameter `IncludeNetworkOperationsCenter`

## 3.19.1

## 3.19.0

### `4-2a-configuration`
- Added new parameter `ConsoleStatusPageBaseURL`
- Added new parameter `UserRightsUpdatePrimaryEmailAddress`
- Added new parameter `UserRightsUpdateName`
- Added the `RedisConnectionPoolSize` and `RedisConnectionPoolIdleTimeout` parameters to control the Redis connection pool of each component
- Added new parameter `ClusterIDAddressTemplate`. For single-cluster deployments this should be equal to `Domain`

### Prometheus
- Added the `ttn_lw_workerpootl_queue_latency_seconds_bucket_rate:by_pool` aggregation, which aggregates the time spent by items in the worker pool queues

## 3.18.2

### `2-1-db-aurora-master`

- It is now allowed to specify your own database password, instead of using the autogenerated one. This is done via the `AuroraPassword` parameter. If you're upgrading from a previous version, keep this parameter empty in order to keep your old, autogenerated password

### `2-4b-routing-s3`

- Added new bucket for DCS configuration files.  Create a `config.yml` file at the root of this bucket. This can be left empty if claiming via an external Join Server is not necessary.

### `4-2a-configuration`

- Add new config items for the DCS service.

### `5-4-ecs-services`

- Add policy and environment for the DCS service.

## 3.18.1

### AMI templates
- Redis upgraded to version 6.2

## 3.18.0

### `1-2-bastion`
- Connect to the RDS database using TLS

### `2-1-db-aurora-master`
- The database now expects TLS connections
- Added support for Aurora Postgres 12 and 13

### `2-2-db-aurora-replica`
- Added support for Aurora Postgres 12 and 13

### `2-3-db-redis`
- Upgraded Redis to version 6.2

### `4-2a-configuration`
- Added the `WebhooksUnhealthyAttemptsThreshold` and `WebhooksUnhealthyRetryInterval` parameters.
- Added the `DatabaseMaxIdleConns` and `DatabaseMaxOpenConns` to control the database connection pool of the Identity Server.

### `4-2b-configuration-rate-limiting`
- Fixed rate limiting keys of AS RPCs.

### `5-1-ecs-cluster`
- New export that is required by other stacks

### `5-2-ecs-ops`
- Fixed an issue where The Things Stack wouldn't connect to Redis when using password
- Increased CPU/Memory used by the ops task

### `5-3a-is-ecs-service`
- Fixed an issue where The Things Stack wouldn't connect to Redis when using password
- Updated IAM role
- Added missing `ExternalIdentityServer` parameter

### `5-3c-ecs-tbs-service`
- Fixed an issue where The Things Stack wouldn't connect to Redis when using password
- Updated IAM role

### `5-4-ecs-services`
- Fixed an issue where The Things Stack wouldn't connect to Redis when using password
- Updated IAM role

### `5-5-monitoring`
- Updated IAM role

### `200-1-crypto`
- Updated IAM role

## 3.17.2

### Various templates
- Templates that define ECS services now got the `*RuntimePlatform` parameter. This parameter can be used to run ARM64 images using AWS Graviton2. Depending on particular use case, performance might be better or worse.

### `1-2-bastion`
- Machine now supports connection from AWS Session Manager. Added parameter `SessionManagerLogGroup`

### `2-5-db-timescale`
- Machine now supports connection from AWS Session Manager. Added parameter `SessionManagerLogGroup`

### `5-1-ecs-cluster`
- Machines now support connection from AWS Session Manager. Added parameter `SessionManagerLogGroup`. You need to manually update the SSM Agent using `yum update amazon-ssm-agent`

### `5-6-ecs-proxy`
- Added parameters `EnableTLSListeners` and `EnableNonTLSListeners`

### `PAYG/BYOL`
- Fixed `RedisMultiAZSupport`. Previously the parameter was always read as `false`. Before update please read the description of the new `RedisSnapshottingClusterID` parameter.

## 3.17.1

## 3.17.0

### `3-2-load-balancer-rules`
- The `InteropEnabled` parameter has different values. Deployments that used value `false` should now choose `disabled`. Deployments that used value `true` should now choose `mutual-authentication`. `server-only-authentication` is a new option, please refer to documentation: https://www.thethingsindustries.com/docs/the-things-stack/host/aws/ecs/interop/

### `5-3a-ecs-is-service`
- `InteropEnabled` parameter renamed to `InteropEnabledIS`. Deployments that used value `identity-server` should now choose `mutual-authentication`, otherwise `disable`.

### `5-4-ecs-service`
- `InteropEnabled` parameter renamed to `InteropEnabledJS`. Deployments that used value `join-server` should now choose `mutual-authentication`, otherwise `disable`.

### `PAYG`/`BYOL`
- Added the `CidrBlock` parameter to specify the CIDR block used by the VPC

## 3.16.3

## 3.16.2

### All

- All templates now have an output `VersionTag`, which contains template version. Normally, CloudFormation rejects updates that don't contain changes to Resources and Outputs, but contain changes to Parameters. Having this allows CloudFormation to accept all updates, even if changes are only in the Parameters section. It is important to keep stacks up to date.

- Added ARM-based RDS and ElastiCache instance types.

### `2-1-db-aurora-master` and `2-2-db-aurora-replica`
- Added missing `db.r5` instances.

### `2-3-db-redis`
- Added `RedisKMSKeyID` parameter to specify key for at-rest encryption. Non-empty value forces replacement

### `5-1-ecs-cluster`
- ECS Container Insights may now be enabled using the `ContainerInsights` parameter

### `2-3-db-redis`
- Removed `RedisPrimary*` and `RedisReplica*` parameters in the `Alerting` group, added `Redis*` parameters instead

### `PAYG/BYOL`
- Added `RedisKmsKeyId` and `RedisPassword` parameters for at-rest and in-transit encryption

### Prometheus
- Added recording rules for tenant fetcher metrics
- Added recording rules for Application Server metadata store and caches

## 3.16.1

### `1-2-bastion`
- Updated UserData to handle TLS connection to redis

### `2-3-db-redis`
- Added `RedisTLS` parameter

### `3-2-load-balancer-rules`
- Added new `EnableNonTLSListeners` parameter

### `5-2-ecs-ops`
- Added `GeneralRedisTLS`, `CacheRedisTLS`, `EventsRedisTLS` parameters

### `5-3a-ecs-is-service`
- Added `GeneralRedisTLS`, `CacheRedisTLS`, `EventsRedisTLS` parameters

### `5-3c-ecs-tbs-service`
- Added `GeneralRedisTLS`, `CacheRedisTLS`, `EventsRedisTLS` parameters

### `5-4-ecs-services`
- Added `GeneralRedisTLS`, `CacheRedisTLS`, `EventsRedisTLS` parameters

### `5-5-ecs-monitoring`
- Added the `ProbeHTTP` parameter

### Proxy
- Fixed routing of authentication providers and external users API.
- Updated `Strict-Transport-Security` header, increasing max-age to 2 years, including subdomains and enabling pre-loading.
- Added custom static and error responses.

### Prometheus
- Added recording rules for gRPC server/client stream messages sent/received.

## 3.16.0

### `1-1-vpc`
- Added new parameter `PeerRequesterAccountId`. Use empty value if you're not deploying external CryptoServer

### `3-2-load-balancer-rules`
- Added new  `SSLPolicy` parameter
- Added new parameter `InteropEnabled`

### `4-1-secrets`
- Added new resource `InteropTLSSecret`. This resource is a placeholder for certbot to upload TLS certificates

### `4-2a-configuration`
- Added the `ForwardOnlyOwnedDevAddrs` parameter
- Added the `InteropEnabled`, `InteropPacketBrokerEnabled`, `InteropPacketBrokerTokenIssuer` and `CryptoServerDNSName` parameters.
- Added the `PacketBrokerMapper` parameter

### `5-3a-ecs-is-service`
- Added the `InteropEnabled` parameter

### `5-4-ecs-services`
- Added the `InteropEnabled` parameter

### `5-7a-certs-le`
- Now certbot will upload the TLS certificate to AWS Secrets Manager

### `6-1-vpc-peering`
- New template. Deploy only if you use external CryptoServer

### `200-1-crypto`
- New template for CryptoServer

## 3.15.3

### Prometheus
- Added metrics for the number of currently running subscription sets, and for subscription set publishing rates.
- Added metrics for the number dropped gateway status messages.
- Added metrics for the number of receive/forwarded/dropped gateway transmission acknowledgements.

## 3.15.2

### `4-2-configuration`
- Added the `UDPConnectionExpires` and `UDPConnectionErrorExpires` parameters, which control the UDP gateway connection (error) timeouts.
- Added the `ExperimentalFeatures` parameter, which can be used to enable experimental features of The Things Stack.
- Added the `UserCredentialsLoginDisabled` parameter, which disables user login with credentials, so that The Things Stack only lets users login with an external OpenID Connect provider.
- Removed the `PacketBrokerClusterID` parameter. Now `Domain` is used instead

### Proxy
- Fixed routing of "related events" API.

## 3.15.1

## 3.15.0

### `1-2-bastion`
- Added `EBSKmsKeyId` parameter to choose EBS boot volume encryption key. From now on, EBS boot volumes are encrypted.

### `2-5-db-timescale`
- Created a hosted zone for internal use
- This template has been reworked so that updates are now possible. Before updating make a backup of the volume. For more information, please refer to the documentation at https://www.thethingsindustries.com/docs/the-things-stack/host/aws/ecs/updating/#2-5-db-timescale
- Added `EBSKmsKeyId` parameter to choose EBS volume encryption key. From now on, EBS volumes are encrypted. Previously only data volume would be encrypted using the default key. Encrypting boot drive does not significantly increase security, and is mainly targeted towards compliance with regulations. If you wish to encrypt your boot drive, please:
  1. Change the `ApplicationServerStorageEnabled` parameter in `5-2-ocs-ops` and `5-4-ecs-services` to `false`.
  2. Create a snapshot of the TimescaleDB EBS volume.
  3. Download your existing `2-5-db-timescale` stack template, remove the `Instance`, `StorageVolume`, `StorageVolumeLifecyclePolicy` and `VolumeLifecycleRole` resources along with the `Outputs` section. Update the stack, the change set should remove these resources.
  4. Update the `2-5-db-timescale` stack with new template to create the EC2 instance and volume again. Do not forget to specify EBS volume snapshot.
  5. Change the `ApplicationServerStorageEnabled` parameter in `5-2-ocs-ops` and `5-4-ecs-services` back to `true`.
  6. For more complex use cases, like changing encryption key, refer to AWS documentation.

### `4-2-configuration`
- Added `ISSupportLink` parameter
- Added `UplinkTasksNumConsumers` and `DownlinkTasksNumConsumers` parameters to the Network Server tasks, which allow the number of task consumers to be configured.
- Added `SkipVersionCheck` parameter to omit version checks
- `NetworkServerClusterID` has been renamed to `ClusterID`, as now it's a parameter accessed by all services. Make sure you enter the old value.

### `4-2c-configuration-resource-limiting`
- Added a new template for resource limiting

### `5-2-ecs-ops`
- This template now imports TimescaleDB address in a different way.

### `5-4-ecs-services`
- This template now imports TimescaleDB address in a different way.

### Prometheus
- Added recording rules for Gateway Server transmission success / failure
- Added recording rules for Application Server worker pools, webhooks and application packages

## 3.14.2

### `2-1-db-aurora-master`

- Allowed any string matching the `((10)|(11))\.\d+` regex as Aurora version so that RDS with up-to-date minor version can be deployed.

### Proxy

- Headers with underscores are now dropped, instead of rejecting the whole request.

### Prometheus

- Upgraded to v2.29.2.

## 3.14.1

### `5-4-ecs-services`
- Added `IncludeSemtechRJSConfiguration` parameter to include/exclude Semtech RJS configuration. This is a bugfix, as previous version failed to deploy when Semtech RJS secrets weren't available.

### Proxy

- Fixed generated `is-proxy` configuration.
- Allow more concurrent requests (mostly event streams) to the Console.

### Prometheus

- Added recording rule for JavaScript payload formatters latency metric.

## 3.14.0

Certain templates have different default values for machine types/memory/CPU in order to better reflect a typical deployment. These changes have no impact on functionalities, and do not affect existing users.

### `2-1-db-aurora-master`
- Allowed encryption of the Aurora database. In order to encrypt existing database:
  1. Remove the `5-3a-ecs-is-service`, `5-2-ecs-ops` and `2-2-db-aurora-replica` (NOT `master`) stacks.
  2. Create a snapshot of the database for backup purposes.
  3. Log into the bastion, and perform an SQL dump of the database. Refer to the `/usr/bin/db-ro` command, which is a bash script, for help how to connect to the database.
  4. Update the `2-1-db-aurora-master` template to include encryption. Do NOT specify the snapshot, as then the encryption parameter will be ignored.
  5. Log into the bastion, and restore the SQL dump.
  6. Recreate the `2-2-db-aurora-replica`, `5-2-ecs-ops` and `5-3a-ecs-is-service` stacks as needed.

### `3-2-load-balancer-rules`
- Added alternative certificates support for all TLS listeners.

### `4-2a-configuration`
- Changed log format to JSON.
- Added `NetworkServerClusterID` which identifies cluster in the Network Server for informative purposes. Suggested value the same as `PacketBrokerClusterID`.
- Updated `ttnv2` config. This change is not backwards compatible. This needs to be deployed before updating GS services to `v3.14` or higher.
- Add `DevEUIBlockEnabled` and `DevEUIBlockApplicationLimit` to Console configuration.
- Add `ApplicationPackagesWorkerCount` and `ApplicationPackagesWorkerCount` to the Application Server configuration.

### `5-4-ecs-services`
- Make execution and task policies conditional. This is compatible with existing deployments.

### `5-5-monitoring`
- Better control on what services Prometheus should expect to find, and what shouldn't. This change is mainly targeted to non-standard deployments. Added `Include*` parameters which tell whether given component should be expected. Please note that by default both `IncludeIdentityServer` and `IncludeIdentityServerProxy` are `true`, while actually it's one of these that is used.

### `5-7a-certs-le`

- Added option to skip automatically fetching wildcard certificates for the sub domain.

### Certbot

- Added option to skip automatically fetching wildcard certificates for the sub domain.

### Prometheus

- Upgraded image to Prometheus v2.28.1.
- Added discovery of Gateway Configuration Server and Device Claiming Server.

### Proxy

- Upgraded image to Envoy v1.19.0.
- Change log format to JSON.
- Add keep-alive with HTTP/2 PING.
- Add routes for tenant search API.

## 3.13.3

### Prometheus

- Added recording rules for latency metrics.

## 3.13.2

### `3-1-security-group-rules`

- Fixed naming of security group rules for Basic Station and Interop.
- Added Basic Station port 1887. This is needed when a TLS-terminating load balancer preserves Client IP addresses.

### Proxy

- Added route for `ttn.lorawan.v3.Events` gRPC service.

### Prometheus

- Added alert for the Cluster Proxy reaching its file descriptor limit and dropping new connections.

## 3.13.1

### Proxy

- Added `Strict-Transport-Security` header when using HTTPS.

### Prometheus

- Upgraded image to Prometheus v2.27.1.
- Add recording rule for v3.13.1 `ttn_lw_log_messages_total` metric. The recording rule for the old `ttn_lw_log_messages_rate` is also still present.

### `3-2-load-balancer-rules`

- Added client IP preservation to the Gateway Server MQTTv2, Gateway Server MQTTv3, Gateway Server BasicStation, GatewayServer TabsHubs and Application Server MQTT target groups. Deployments which set the Application Server MQTT connection rate limits to high values to avoid throttling should consider reverting the rate limit to the default value.

### `4-2b-configuration-rate-limiting`

- Updated the default Gateway Server uplink rate to 100 uplinks per second (6000 per minute).

## 3.13.0

### build
- Support injecting Rate Limiting configuration in docker containers.

### `2-3-db-redis`
- Fixes for `cache` and `events` purposes. This requires replacement of redis replication groups of these purposes but does NOT affect the `general` purpose.

### `4-2-configuration`

- Modifications in `GlobalConfiguration`, no replacement
- Added temporary and experimental support for offloading traffic to legacy (v2) deployments.
- Added `SLAApplies`, `SupportPlanApplies`, `SLAInformationURL`, `FairUsePolicyInformationURL`, `SupportPlanInformationURL`, `ClusterPickerURL` parameters, update of Console, IS and DCS configuration
- This is now renamed as `4-2a-configuration`.
- Added `EventsStorageEnabled` parameter to enable storage of event history in Redis.
- Added `DevEUIBlockEnabled`, `DevEUIBlockApplicationLimit`, `DevEUIBlockPrefix` and `DevEUIBlockInitCounter` parameters

### `4-2b-configuration-rate-limiting`

- Added new Rate Limiting Configuration definitions. Rate Limiting can be enabled/disabled independently for each service.

### `5-2-ecs-ops`

- Add references to a default rate limiting config stub. No functional changes.

### `5-3a-ecs-is-service`

- Support Rate Limiting. If Rate Limiting is enabled, the corresponding configuration should be enabled in `4-2b-configuration-rate-limiting`.

### `5-3c-ecs-tbs-service`

- Support Rate Limiting. If Rate Limiting is enabled, the corresponding configuration should be enabled in `4-2b-configuration-rate-limiting`.

### `5-4-ecs-services`

- Support Rate Limiting. If Rate Limiting is enabled for a service, the corresponding configuration for that service should be enabled in `4-2b-configuration-rate-limiting`.

## 3.12.2

### `4-1-secrets`

- Added `IncludeConsole` parameter (default value `true` valid for current deployments)

### `4-2-configuration`

- Added `IncludeConsole` parameter (default value `true` valid for current deployments)
- Changed Packet Broker domains from `*.packetbroker.org` to `*.packetbroker.net`
- Set `IncludeGatewayConfigurationServer` to `true` by default. `false` is not compatible with existing deployments where a GCS is required in the cluster.
- Change `PacketBrokerEnabled` parameter to `IncludePacketBrokerAgent` for consistency. The default value of `true` is compatible with existing deployments. Set to `false` to disable PBA.
- Changed Console configuration (no change in parameters)

### `5-1-ecs-cluster`
- Added LifecycleHook for service draining when ECS EC2 machines are terminated. Added resources `ECSAutoScalingGroupDraining*`, replacement of `ECSLaunchConfiguration`, update of `ECSAutoScalingGroup` - here it says `Conditional` replacement due to update of `LaunchConfigurationName`, but in reality there is no replacement

### `5-3a-ecs-is-service`

- MinimumHealthyPercent set to 50 (CloudFormation doesn't update this setting in ECS, might require manual update)

### `5-3b-ecs-external-is-proxy`

- MinimumHealthyPercent set to 50 (CloudFormation doesn't update this setting in ECS, might require manual update)

### `5-3c-ecs-tbs-service`

- MinimumHealthyPercent set to 50 (CloudFormation doesn't update this setting in ECS, might require manual update)

### `5-3d-ecs-gcs-service`

- MinimumHealthyPercent set to 50 (CloudFormation doesn't update this setting in ECS, might require manual update)
- This template has been removed. To conditionally deploy the `gcs` and `console` services, use `5-4-ecs-services`.

### `5-4-ecs-services`

- MinimumHealthyPercent set to 50 (CloudFormation doesn't update this setting in ECS, might require manual update)
- Added Gateway Configuration Server Service.
- Added `Include<Service>` parameter for each service (default value `true` valid for current deployments)`.
- Fixed combined alarms to switch on included services.
- Changed `PacketBrokerEnabled` to `IncludePacketBroker` for consistency. The value of the former is applicable to the latter.

### `5-6-ecs-proxy`

- MinimumHealthyPercent set to 50 (CloudFormation doesn't update this setting in ECS, might require manual update)
- Set `IncludeGatewayConfigurationServer` to `true` by default. `false` is not compatible with existing deployments where a GCS is required in the cluster.

### Prometheus

- Added alerts for CPU, Memory and Disk issues on VMs.
- New `EnableVirtualHostWithTenantSubdomain` and `EnableVirtualHostWithoutTenantSubdomain` parameters to enable/disable virtual hosts with or without tenant subdomain.
- New `RedirectToDomain` parameter to redirect catch-all requests to a different domain (than the cluster domain).
  - In multi-cluster deployments this should typically be set to the domain of the cluster picker.

### Proxy

- Removed GCS routes from the GS Service.

## 3.12.1

## [3.12.0](https://github.com/TheThingsIndustries/lorawan-stack-aws/compare/01cd9ef...b60a758)

### `5-4-ecs-services`

- Added `ApplicationServerDesiredCount` parameter (ApplicationServer is not multi-instance)
- Added Device Claiming Server task definition and service.
  - The default values of the Device Claiming Server parameters are fully compatible with existing deployments. Since a new service is added, capacity adjustments may be necessary if the existing cluster is low on resources.

### `5-5-ecs-monitoring`

- Added Device Claiming Server to list of services to be scraped. This change is fully compatible with existing deployments.

### `5-6-ecs-proxy`

- Added Device Claiming Server to list of services to be scraped.
  - Make sure to use the docker image version v3.12 (`thethingsindustries/lorawan-stack:3.12-aws-proxy`) and above.

### `4-2-configuration`

- Added Packet Broker routing clusters `nam` and `apac`.
- Added `PacketBrokerControlPlane` parameter. This must be `cp.packetbroker.org:443` for all non-testing deployments.
- Added `PacketBrokerPacketBrokerForwarderIncludeGatewayEUI`, `PacketBrokerForwarderIncludeGatewayID` and `PacketBrokerForwarderHashGatewayID`.
  - For The Things Stack Cloud: do not include gateway EUI, do include the gateway ID, and enable hashing the ID
  - For The Things Network: include gateway EUI and ID, and disable hashing the ID
- Removed `PubSubProviderAWSIoT` parameter.
- Added Device Claiming Server Configuration.
  - No new parameters are added and this change is fully compatible with existing deployments.

## Prometheus

- Upgrade Prometheus to v2.26.0

## Proxy

- Added Device Claiming Server routes/servers.

## [3.11.3](https://github.com/TheThingsIndustries/lorawan-stack-aws/compare/e668d0c...01cd9ef)

### `1-1-vpc`

- Added `LoadBalancerAccessLoggingEnabled` and `LoadBalancerLogsBucketName` parameters
- Added `LoadBalancerLogsBucket` and `LoadBalancerLogsBucketPolicy` resources
- Modified attributes of LoadBalancer to allow logging

### `4-1-configuration`
- Added `UDPAddrChangeBlock`, `UDPDownlinkPathExpires` and `UDPPacketHandlers` parameters.
- Added environment name to Sentry configuration.

### `5-5-ecs-monitoring`

- Increased Prometheus retention.
- Disabled Thanos by default.

### Proxy

- Upgraded Envoy to v1.17.1.
- Changed configuration for changes in Envoy v1.17.
- Modified overload handling to degrade service more gracefully.

### Prometheus

- Added recording and alerting rules for Cluster Proxy.

## [3.11.2](https://github.com/TheThingsIndustries/lorawan-stack-aws/compare/474a95c...e668d0c)

### Certbot

- Added TTI Root CA Support
- Made Certbot image consistent with other Docker Images. Use `thethingsindustries/lorawan-stack:3.x.x-aws-certbot` images.

### Proxy

- Added GCS routes to HTTP listener.
- Fixed wrong delimiter for GS gRPC cluster definition.

### `3-1-security-group-rules`

- Added config to enable ingress ports conditionally.
    - The default values of new parameters are compatible with existing deployments, i.e., no new parameter values are needed for existing deployments to work.

### `3-2-load-balancer-rules`

- Added support for overriding certificates for all listeners.
- Added alternative Certificate chain support for HTTPS and Basic Station listeners.
    - The default values of new parameters are compatible with existing deployments, i.e., no new parameter values are needed for existing deployments to work.
- Added option to select load balancer listeners and target groups.
    - The default values of new parameters are compatible with existing deployments, i.e., no new parameter values are needed for existing deployments to work.

### `4-2-configuration`

- Made per-service configuration selectable.
    - The default values of new parameters are compatible with existing deployments, i.e., no new parameter values are needed for existing deployments to work.

### `5-3d-ecs-gcs-service`

- Added new optional template for a standalone Gateway Configuration Service.

### `5-6-ecs-proxy`

- Added option to select services exposed on the proxy.

### `5-7a-certs-le`

- Changed template to support one certificate per CFN stack.
    - Delete the existing `5-7b-ecs-certbot-scheduled-task` stack before updating this template.
    - When deploying `5-7a-certs-le` make sure to unset the `ExistingCertArn` parameter. This preserves existing certificates as backup if there are issues while querying new certificates.

### `5-7b-ecs-certbot-scheduled-task`

- Changed template to support one certificate per CFN stack. Use the exported Task Definition ARN from `5-7a-certs-le` to renew a particular certificate.


## [3.11.1](https://github.com/TheThingsIndustries/lorawan-stack-aws/compare/7c4683c...474a95c)

### `3-1-security-group-rules`

- Changed descriptions of security group ingress rules; no functional changes.

### Proxy

- Added Basic Station routes to HTTP listener.
- Added gRPC API routes to HTTP listener.

## [3.11.0](https://github.com/TheThingsIndustries/lorawan-stack-aws/compare/e69f9ef...7c4683c)

### `2-3-db-redis`

- Changed Redis engine compatibility version to `6.x`

### `4-2-configuration`

- Added `PacketBrokerTenantID` parameter back
- Added optional `ConsoleURLForAccountApp` parameter
- Changed frequency plans directory to `/srv/ttn-lorawan/lorawan-frequency-plans` and webhook templates directory to `/srv/ttn-lorawan/lorawan-webhook-templates`.
- Added search path for Device Repository store.
- Relaxed Stripe pricing plans IDs validation

### `5-4-ecs-services`

- Removed `MaximumPercent, MinimumHealthyPercent` from NetworkServer service
- Added NetworkServerDesiredCount
- Changed ApplicationServerTaskDefinition to also start Device Repository component

### `5-7a-certs-le`
- Changes to certbot task definition, removed `CertbotTaskDefinitionArn` output

### `5-7b-ecs-certbot-scheduled-task`
- Changed default execution frequency to 2 days
- Removed ExecutionRole
- Added RuleRole
- General fixes to the Rule

### Proxy

- Added routes for Device Repository APIs.

### Prometheus
- Update base image


## [3.10.7](https://github.com/TheThingsIndustries/lorawan-stack-aws/compare/251f9c5...e69f9ef)

no changes

## [3.10.6](https://github.com/TheThingsIndustries/lorawan-stack-aws/compare/86656ab...251f9c5)


### `1-2-bastion`
- Added InstanceProfile to the EC2 machine, changed its UserData

### `2-5-db-timescale`
- Added LifecyclePolicy to the EC2 machine's volume

### `4-1-secrets`
- Added Packet Broker Agent API key ID and secret key parameters, PacketBrokerAgentSecrets
- Removed Packet Broker Agent TLS client certificate

### `4-2-configuration`
- Added AdminRightsAll, PacketBrokerIAM parameters
- Removed PacketBrokerTenantID, PacketBrokerDevAddrPrefix, parameters
- Changed PacketBrokerAddress parameter allowed values
- Changed ISConfiguration and PBAConfiguration contents

### `5-4-ecs-services`
- Changed PacketBrokerAgent TaskDefinition: added a secret
- Changed tasks' execution role: added access to packet borker's secret

### `5-7a-certs-le`
- Chagned certbot task's environment (RenewBeforeExpiry) and execution role (detailed access to existing certificate)
- Added RenewBeforeExpiry parameter
- Removed EFS filesystem and mount targets

### `BYOL` and `PAYG`
- Changed EC2 machine's UserData

### `cloud/3-1-single-instance-cluster`
- Changed EC2 machine's UserData

### Prometheus
- New metrics and alerts

### Certbot
- Added a check if certificate needs a renewal
