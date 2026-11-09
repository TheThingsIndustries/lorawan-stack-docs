# Addresses

> The addresses where you can reach The Things Stack Sandbox consist of the cluster ID and cloud.thethings.network. You can update the examples below with your …

Source: https://www.thethingsindustries.com/docs/concepts/ttn/addresses/


The addresses where you can reach The Things Stack Sandbox consist of the cluster ID and `cloud.thethings.network`.

You can update the examples below with your cluster ID by filling it here.


<div class="field">
  <label class="label" for="cluster-selector-1-cluster-id">Cluster</label>
  <div class="control">
    <div class="select">
      <select id="cluster-selector-1-cluster-id" data-content="cluster-id">
        <option value="eu1" selected>Europe 1 (Ireland)</option>
        <option value="nam1">North America 1 (California, USA)</option>
        <option value="au1">Australia 1 (Sydney, Australia)</option>
      </select>
    </div>
  </div>
</div>

<script>
  window.addEventListener('load', function(e) {
    var $clusterIDInput = document.querySelector('select[data-content="cluster-id"]');
    var query = new URLSearchParams(window.location.search);
    if (query.has('cluster-id')) {
      $clusterIDInput.value = query.get('cluster-id');
    }
    var $clusterIDSpans = document.querySelectorAll('span[data-content="cluster-id"]');
    function syncValue($input, defaultValue, $spans) {
      var value = $input.value ? $input.value : defaultValue;
      $spans.forEach(function($span){ $span.innerText = value; });
    }
    syncValue($clusterIDInput, '<cluster-id>', $clusterIDSpans);
    $clusterIDInput.addEventListener('change', function(e) {
      syncValue(e.target, '<cluster-id>', $clusterIDSpans);
    });
  });
</script>


## Console

To learn how to get started with the Console, see the [Console Getting Started Guide](https://www.thethingsindustries.com/docs/concepts/features/console/).

Each cluster has a Console where you can manage gateways and end devices of that cluster. You can use any cluster with your Cloud account.

The address of the Console is:

<p>
<code data-content="cluster-address">
https://<span data-content="cluster-id"></span>.cloud.thethings.network/console
</code>
</p>

## API Endpoints

The Application Server, Join Server, and Network Server APIs are all available in your regional cluster:

<p>
<code data-content="cluster-address">
<span data-content="cluster-id"></span>.cloud.thethings.network
</code>
</p>

However, the Identity Server APIs are only available in the `eu1` cluster:

<p>
<code data-content="cluster-address">
eu1.cloud.thethings.network
</code>
</p>

> **Warning:** End-Device Registry API requests or other Identity Server API requests to any cluster other than `eu1` will fail.


## Account and OAuth

User accounts are stored in the `eu1` cluster. For registering users, logging in, changing your password and for performing OAuth flows, you need to use the following address:

<p>
<code data-content="cluster-address">
https://eu1.cloud.thethings.network/oauth
</code>
</p>

## Command-line Interface

The Command-line Interface (CLI) needs to be configured with the address of the OAuth server and the gRPC addresses of the different servers. The addresses for OAuth and the Identity Server are always those of the `eu1` cluster. The other addresses are typically of the cluster of your choice.

Here you find the contents of the CLI configuration file for the cluster:

<pre>
oauth-server-address: 'https://eu1.cloud.thethings.network/oauth'
identity-server-grpc-address: 'eu1.cloud.thethings.network:8884'

gateway-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
network-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
application-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
join-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
device-claiming-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
device-template-converter-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
qr-code-generator-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
</pre>

See the [CLI Getting Started Guide](https://www.thethingsindustries.com/docs/concepts/features/cli/) to learn how to get started with the CLI and working with configuration files.

