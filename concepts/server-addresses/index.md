# Server Addresses

> This section contains information about addresses for different The Things Stack deployments.

Source: https://www.thethingsindustries.com/docs/concepts/server-addresses/


This section contains information about addresses for different The Things Stack deployments.

To access the [Console](https://www.thethingsindustries.com/docs/concepts/features/console/), register a [command line client](https://www.thethingsindustries.com/docs/concepts/features/cli/), [connect gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/), or schedule uplinks via [webhooks](https://www.thethingsindustries.com/docs/integrations/webhooks/), it is necessary to know the server address of your The Things Stack instance.

Deployments of The Things Stack in a single cluster use the same server address for all components.

Distributed deployments, like The Things Stack Cloud and The Things Stack Sandbox, use different addresses per region for routing components, while the address of global components (like Identity Server) is always the same. Enterprise and Open Source deployments may be in a single cluster, or distributed over multiple clusters with multiple addresses.
The server addresses for the different The Things Stack deployments are listed below.

You can update the examples below with your tenant ID and cluster ID by filling them here. The `<tenant-id>` will be replaced with the provided tenant ID.

## Your The Things Stack Addresses

<div class="field">
  <label class="label">Base Domain</label>
  <div class="control">
    <input class="input" type="text" data-content="base-domain" placeholder="base domain">
  </div>
</div>
<div class="field">
  <label class="label">Cluster ID (only for multi-cluster deployments)</label>
  <div class="control">
    <input class="input" type="text" data-content="cluster-id" placeholder="cluster (ex: eu1, nam1)">
  </div>
</div>
<div class="field">
  <label class="label">Tenant ID (only for multi-tenant deployments)</label>
  <div class="control">
    <input class="input" type="text" data-content="tenant-id" placeholder="tenant id">
  </div>
</div>

<script>
window.addEventListener('load', function() {
  var $tenantIDInput = document.querySelector('input[data-content="tenant-id"]');
  var $clusterIDInput = document.querySelector('input[data-content="cluster-id"]');
  var $baseDomainInput = document.querySelector('input[data-content="base-domain"]');
  var $clusterAddressCode = document.querySelector('code[data-content="cluster-address"]');

  var query = new URLSearchParams(window.location.search);

  $tenantIDInput.value = query.has('tenant-id') ? query.get('tenant-id') : '';
  $clusterIDInput.value = query.has('cluster-id') ? query.get('cluster-id') : '';
  $baseDomainInput.value = query.has('base-domain') ? query.get('base-domain') : '';

  function updateClusterAddress() {
    var tenantID = $tenantIDInput.value;
    var clusterID = $clusterIDInput.value;
    var baseDomain = $baseDomainInput.value || '<base-domain>';

    
    var clusterAddress = baseDomain;

    if (clusterID) {
      clusterAddress = `${clusterID}.${clusterAddress}`;
    }

    if (tenantID) {
      clusterAddress = `${tenantID}.${clusterAddress}`;
    }

    $clusterAddressCode.innerText = clusterAddress;
  }

  
  updateClusterAddress();

  
  $tenantIDInput.addEventListener('keyup', updateClusterAddress);
  $clusterIDInput.addEventListener('keyup', updateClusterAddress);
  $baseDomainInput.addEventListener('keyup', updateClusterAddress);
});
</script>

Your cluster address is:

<p>
<code data-content="cluster-address">
<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.<span data-content="base-domain"></span>
</code>
</p>

### Console

To access the Console, simply enter the [server address of your deployment](#deployments) in a browser.

**Example 1**: To access the <code data-content="cluster-address"><span data-content="cluster-id"></span></code> The Things Stack Sandbox Console, enter <code data-content="cluster-address"> https://<span data-content="cluster-id"></span>.cloud.thethings.network</code> in your browser.

**Example 2**: To access the <code data-content="cluster-address"><span data-content="cluster-id"></span></code> Cloud Console, enter <code data-content="cluster-address"> https://<span data-content="tenant-id"></span>.<span  data-content="cluster-id"></span>.cloud.thethings.industries</code>.

**Example 3**: If you installed The Things Stack Enterprise or Open Source, access the Console at the domain you used in place of `https://thethings.example.com`.

### LNS

The LNS gateway address is a combination of the **protocol** (wss), the **server address**, and the **port** (8887).

**Example 1**: The <code data-content="cluster-address"><span data-content="cluster-id"></span></code> The Things Stack Sandbox LNS address is <code data-content="cluster-address">wss://<span data-content="cluster-id"></span>.cloud.thethings.network:8887</code>.

**Example 2**: The LNS address for a <code data-content="cluster-address"><span data-content="cluster-id"></span></code> Cloud tenant is <code data-content="cluster-address">wss://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8887</code>.

**Example 3**: If you installed The Things Stack Enterprise or Open Source, the LNS address is the domain you used in configuration, for example `wss://thethings.example.com:8887`.

### CUPS

The CUPS gateway address is a combination of the **protocol** (https), the **server address**, and the **port** (443).

**Example 1**: The <code data-content="cluster-address"><span data-content="cluster-id"></span></code> The Things Stack Sandbox CUPS address is <code data-content="cluster-address">https://<span data-content="cluster-id"></span>.cloud.thethings.network:443</code>.

**Example 2**: The CUPS address for a <code data-content="cluster-address"><span data-content="cluster-id"></span></code> Cloud tenant is <code data-content="cluster-address">https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:443</code>.

**Example 3**: If you installed The Things Stack Enterprise or Open Source, the CUPS address is the domain you used in configuration, for example `https://thethings.example.com:443`.

### The Things Kickstarter Gateway Account Server

The The Things Kickstarter Gateway Account Server address is a combination of the **scheme** (https) and the **server address**. The port is inferred from the scheme.

**Example 1**: For the <code data-content="cluster-address"><span data-content="cluster-id"></span></code> The Things Stack Sandbox cluster, the value is <code data-content="cluster-address">https://<span data-content="cluster-id"></span>.cloud.thethings.network</code>.

**Example 2**: For The Things Stack Cloud cluster <code data-content="cluster-address"><span data-content="cluster-id"></span></code> with tenant <code data-content="cluster-address"><span data-content="tenant-id"></span></code>, the value is <code data-content="cluster-address">https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries</code>.

**Example 3**: If you installed The Things Stack Enterprise or Open Source, the address is the domain you used in configuration, for example `https://thethings.example.com`.

