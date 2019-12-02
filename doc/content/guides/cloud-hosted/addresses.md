---
title: "Cloud Hosted Addresses"
description: ""
---

## Addresses

The addresses where you can reach your The Things Industries Cloud Hosted network consist of the tenant ID, the cluster ID and `cloud.thethings.industries`.

You can update the examples below with your tenant ID and cluster ID by filling them here.

<div class="field">
  <label class="label">Tenant ID</label>
  <div class="control">
    <input class="input" type="text" data-content="tenant-id" placeholder="tenant id">
  </div>
</div>
<div class="field">
  <label class="label">Cluster</label>
  <div class="control">
    <div class="select">
      <select data-content="cluster-id">
        <option value="eu1" selected>Europe 1 (Ireland)</option>
        <option value="nam1">North America 1 (California, USA)</option>
      </select>
    </div>
  </div>
</div>

### Account and OAuth

User accounts are stored in the `eu1` cluster. For registering users, logging in, changing your password and for performing OAuth flows, you need to use the following address:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries/oauth
</code>
</p>

### Console

Each cluster has its own Console, where you can manage gateways and end devices of that cluster. The address of the console includes both your tenant ID and the cluster ID:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries/console
</code>
</p>

To learn how to get started with the Console, see the [Console Getting Started Guide]({{< ref "/guides/getting-started/console" >}}).

### Command-line Interface

The Command-line Interface (CLI) needs to be congirued with the address of the OAuth server, and the gRPC addresses of the different servers. The addresses for OAuth and the Identity Server are always those of the `eu1` cluster. The other addresses are typically of the cluster of your choice.

Below are the contents of the configuration file <code><span data-content="tenant-id"></span>-config.yml</code>. You can point the CLI to this file with an environment variable (<code>export TTN_LW_CONFIG=/path/to/<span data-content="tenant-id"></span>-config.yml</code>) or a flag (<code>-c /path/to/<span data-content="tenant-id"></span>-config.yml</code>).

<pre>
<code>
oauth-server-address: 'https://<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries/oauth'
identity-server-grpc-address: '<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries:8884'
gateway-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
network-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
application-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
join-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
device-claiming-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
device-template-converter-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
qr-code-generator-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
credentials-id: '<span data-content="tenant-id"></span>'
</code>
</pre>

To learn how to get started with the CLI, see the [CLI Getting Started Guide]({{< ref "/guides/getting-started/cli" >}}). For more details on the configuration file, see the [Configuration Reference]({{< ref "/reference/configuration/cli" >}}).

<script>
var $tenantIDInput = document.querySelector('input[data-content="tenant-id"]');
var $clusterIDInput = document.querySelector('select[data-content="cluster-id"]');
var query = new URLSearchParams(window.location.search);
$tenantIDInput.value = query.has('tenant-id') ? query.get('tenant-id') : '';
if (query.has('cluster-id')) {
  $clusterIDInput.value = query.get('cluster-id');
}
var $tenantIDSpans = document.querySelectorAll('span[data-content="tenant-id"]');
var $clusterIDSpans = document.querySelectorAll('span[data-content="cluster-id"]');
function syncValue($input, defaultValue, $spans) {
  var value = $input.value ? $input.value : defaultValue;
  $spans.forEach(function($span){ $span.innerText = value; });
}
syncValue($tenantIDInput, '<tenant-id>', $tenantIDSpans);
syncValue($clusterIDInput, '<cluster-id>', $clusterIDSpans);
$tenantIDInput.addEventListener('keyup', function(e) {
  syncValue(e.target, '<tenant-id>', $tenantIDSpans);
});
$clusterIDInput.addEventListener('change', function(e) {
  syncValue(e.target, '<cluster-id>', $clusterIDSpans);
});
</script>
