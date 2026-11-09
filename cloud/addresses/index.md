# Server Addresses

> This page provides configuration details and guidance for accessing and managing The Things Stack Cloud clusters, including Console, API endpoints, OAuth, CLI …

Source: https://www.thethingsindustries.com/docs/cloud/addresses/


This page provides configuration details and guidance for accessing and managing The Things Stack Cloud clusters, including Console, API endpoints, OAuth, CLI setup, and IP address considerations.

Enter your **tenant ID** and choose a **cluster** from the dropdown. This will update the rest of the page with that address so you can get easily copyable links.


<div class="field">
  <label class="label" for="tenant-cluster-selector-1-tenant-id">Tenant ID</label>
  <div class="control">
    <input class="input" type="text" id="tenant-cluster-selector-1-tenant-id" data-content="tenant-id" placeholder="tenant id">
  </div>
</div>
<div class="field">
  <label class="label" for="tenant-cluster-selector-1-cluster-id">Cluster</label>
  <div class="control">
    <div class="select">
      <select id="tenant-cluster-selector-1-cluster-id" data-content="cluster-id">
        <option value="eu1" selected>Europe 1 (Ireland)</option>
        <option value="eu2">Europe 2 (UK)</option>
        <option value="nam1">North America 1 (California, USA)</option>
        <option value="au1">Australia 1 (Sydney, Australia)</option>
        <option value="as1">Asia 1 (Tokyo, Japan)</option>
      </select>
    </div>
  </div>
</div>

<script>
  window.addEventListener('load', function(e) {
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
  });
</script>


Your cluster address is:

<p>
<code data-content="cluster-address">
<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries
</code>
</p>

### Console

To learn how to get started with the Console, see the [Console Getting Started Guide](https://www.thethingsindustries.com/docs/concepts/features/console/).

Each cluster has a Console where you can manage gateways and end devices of that cluster. You can use any cluster with your Cloud account.

The address of the Console for the **routing cluster** includes both your tenant ID and the cluster ID:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries/console
</code>
</p>

### API Endpoints

The Application Server, Join Server and Network Server APIs are all available in your routing cluster.

<p>
<code data-content="cluster-address">
<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries
</code>
</p>

However, the Identity Server APIs (`/api/is/*`) are only available in the `eu1` cluster. This is because `eu1` is the central cluster where entity registrations are stored.

<p>
<code data-content="cluster-address">
<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries
</code>
</p>

> **Warning:** End-Device Registry API requests or other Identity Server API requests to any cluster other than `eu1` will fail.


### Account and OAuth

User accounts are stored in the `eu1` cluster. For registering users, logging in, changing your password and for performing OAuth flows, you need to use the following address:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries/oauth
</code>
</p>

### Command-line Interface

The Command-line Interface (CLI) needs to be configured with the address of the OAuth server and the gRPC addresses of the different servers. The addresses for OAuth and the Identity Server are always those of the `eu1` cluster. The other addresses are typically of the cluster of your choice.

Here you find the contents of the CLI configuration file for the cluster:

<pre>
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
</pre>

See the [CLI Getting Started Guide](https://www.thethingsindustries.com/docs/concepts/features/cli/) to learn how to get started with the CLI and working with configuration files.

### IP Addresses

The Things Stack Cloud runs on AWS. See the [AWS IP address range documentation](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html) for IP addresses of Cloud clusters.

> **Note:** IP addresses of Cloud clusters are not static, and may change over time. We recommend whitelisting the DNS address of your Cloud cluster if possible.


