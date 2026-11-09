# Console

> The Things Stack Console is the management application of The Things Stack for LoRaWAN. It is a web application which can be used to register applications, end …

Source: https://www.thethingsindustries.com/docs/concepts/features/console/


The Things Stack Console is the management application of The Things Stack for LoRaWAN. It is a web application which can be used to register applications, end devices or gateways, monitor network traffic, or configure network related options, among other things.

![The Things Stack Console dashboard](https://www.thethingsindustries.com/docs/concepts/features/console/console.png)


## The Things Stack Cloud

If you are using The Things Stack Cloud, you can generate a direct link to the Console by entering your tenant ID choosing the required cluster.


<div class="field">
  <label class="label" for="tenant-cluster-selector-5-tenant-id">Tenant ID</label>
  <div class="control">
    <input class="input" type="text" id="tenant-cluster-selector-5-tenant-id" data-content="tenant-id" placeholder="tenant id">
  </div>
</div>
<div class="field">
  <label class="label" for="tenant-cluster-selector-5-cluster-id">Cluster</label>
  <div class="control">
    <div class="select">
      <select id="tenant-cluster-selector-5-cluster-id" data-content="cluster-id">
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


Copy the link below and paste it in a browser window.

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries
</code>
</p>

See [Cloud Addresses](https://www.thethingsindustries.com/docs/cloud/addresses/) for more information about cluster addresses.

## The Things Stack Sandbox

If you are using The Things Stack Sandbox, the Console is available at `cloud.thethings.network`.

Visit the addresses page for [The Things Stack Sandbox](https://www.thethingsindustries.com/docs/concepts/ttn/addresses/) for more information.

## The Things Stack Enterprise and Open Source

If you are hosting your own deployment, the Console is available at the address you host The Things Stack at.

See [Server Addresses](https://www.thethingsindustries.com/docs/concepts/server-addresses/) to learn more.

Once you have access to the Console, proceed to [Login](https://www.thethingsindustries.com/docs/concepts/features/console/login/).


## Pages in this section

- [Login](https://www.thethingsindustries.com/docs/concepts/features/console/login/index.md): The Console needs to be logged in to create gateways, applications, devices and API keys. In this section, learn how to login into the Console.
- [Personal Settings](https://www.thethingsindustries.com/docs/concepts/features/console/personal-settings/index.md): This section explains how to modify personal settings in The Things Stack Console.
- [Tenant Settings](https://www.thethingsindustries.com/docs/concepts/features/console/tenant-settings/index.md): This section explains how to modify tenant settings in The Things Stack Console.
- [Troubleshooting Console](https://www.thethingsindustries.com/docs/concepts/features/console/troubleshooting/index.md): This section provides help for common issues in The Things Stack Console.

