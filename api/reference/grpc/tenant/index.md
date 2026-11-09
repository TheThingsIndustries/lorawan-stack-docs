# Tenant APIs

> List of Tenant APIs.

Source: https://www.thethingsindustries.com/docs/api/reference/grpc/tenant/


List of Tenant APIs.

## Authentication

Unlike the other services, the tenant services do **not** accept API keys or OAuth access tokens. Instead, authentication is done with a "tenant admin key" that is [configured in the Identity Server](https://www.thethingsindustries.com/docs/enterprise/management/configuration/identity-server/#tenant-administration-options)

- Usage with HTTP `Authorization` Header: `TenantAdminKey XXXXX`
- Usage with gRPC [call credentials](https://grpc.io/docs/guides/auth.html#authentication-api) (in the `authorization` header): `TenantAdminKey XXXXX`

## The `TenantRegistry` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.Create</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:CreateTenantRequest"><code>CreateTenantRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:Tenant"><code>Tenant</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>POST</code> <code>/api/v3/tenants</code></p>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.Get</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetTenantRequest"><code>GetTenantRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:Tenant"><code>Tenant</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/tenants/{tenant_ids.tenant_id}</code></p>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.GetIdentifiersForEndDeviceEUIs</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetTenantIdentifiersForEndDeviceEUIsRequest"><code>GetTenantIdentifiersForEndDeviceEUIsRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:TenantIdentifiers"><code>TenantIdentifiers</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.GetIdentifiersForGatewayEUI</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetTenantIdentifiersForGatewayEUIRequest"><code>GetTenantIdentifiersForGatewayEUIRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:TenantIdentifiers"><code>TenantIdentifiers</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.GetIdentifiersForBillingIdentifiers</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetTenantIdentifiersForBillingIdentifiersRequest"><code>GetTenantIdentifiersForBillingIdentifiersRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:TenantIdentifiers"><code>TenantIdentifiers</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.GetRegistryTotals</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetTenantRegistryTotalsRequest"><code>GetTenantRegistryTotalsRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:TenantRegistryTotals"><code>TenantRegistryTotals</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/tenants/{tenant_ids.tenant_id}/registry-totals</code></p>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.BatchGetRegistryTotals</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:BatchGetTenantRegistryTotalsRequest"><code>BatchGetTenantRegistryTotalsRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:BatchGetTenantRegistryTotalsResponse"><code>BatchGetTenantRegistryTotalsResponse</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>POST</code> <code>/api/v3/tenants/registry-totals</code></p>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.List</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ListTenantsRequest"><code>ListTenantsRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:Tenants"><code>Tenants</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/tenants</code></p>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.Update</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:UpdateTenantRequest"><code>UpdateTenantRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:Tenant"><code>Tenant</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>PUT</code> <code>/api/v3/tenants/{tenant.ids.tenant_id}</code></p>
      </td>
    </tr>
  </tbody>
</table>





<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>TenantRegistry.Delete</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:TenantIdentifiers"><code>TenantIdentifiers</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <code>google.protobuf.Empty</code>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>DELETE</code> <code>/api/v3/tenants/{tenant_id}</code></p>
      </td>
    </tr>
  </tbody>
</table>


## The `EntityRegistrySearch` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>EntityRegistrySearch.SearchTenants</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:SearchTenantsRequest"><code>SearchTenantsRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:Tenants"><code>Tenants</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/search/tenants</code></p>
      </td>
    </tr>
  </tbody>
</table>


## The `Tbs` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>Tbs.Report</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:MeteringData"><code>MeteringData</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <code>google.protobuf.Empty</code>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>POST</code> <code>/api/v3/tbs/report</code></p>
      </td>
    </tr>
  </tbody>
</table>


## Messages


<h3 id="message:BatchGetTenantRegistryTotalsRequest">Message <code>BatchGetTenantRegistryTotalsRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenant_ids": [],
  "field_mask": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenant_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
                
              
          
        
        repeated 
  
    
    <a href="#message:TenantIdentifiers">
  
  <code>
    
    TenantIdentifiers
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
        
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>field_mask</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    FieldMask
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.AlertRoutingServer">Message <code>Configuration.Cluster.AlertRoutingServer</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "routing": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>routing</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.AlertRoutingServer.Routing">
  
  <code>
    
    Configuration.Cluster.AlertRoutingServer.Routing
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.AlertRoutingServer.Routing">Message <code>Configuration.Cluster.AlertRoutingServer.Routing</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "enabled": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>enabled</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.ApplicationLimits">Message <code>Configuration.Cluster.IdentityServer.ApplicationLimits</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "end_devices": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>end_devices</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.OrganizationLimits">Message <code>Configuration.Cluster.IdentityServer.OrganizationLimits</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "applications": null,
  "clients": null,
  "gateways": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>applications</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>clients</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>gateways</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.UserLimits">Message <code>Configuration.Cluster.IdentityServer.UserLimits</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "applications": null,
  "clients": null,
  "gateways": null,
  "organizations": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>applications</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>clients</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>gateways</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>organizations</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Tenant">Message <code>Tenant</code></h3>
<p>Tenant is the message that defines a Tenant in the network.</p>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "0001-01-01T00:00:00Z",
  "name": "",
  "description": "",
  "attributes": {},
  "contact_info": [],
  "max_applications": null,
  "max_clients": null,
  "max_end_devices": null,
  "max_gateways": null,
  "max_organizations": null,
  "max_users": null,
  "state": "STATE_REQUESTED",
  "state_description": "",
  "capabilities": {},
  "configuration": {},
  "billing": {},
  "billing_identifiers": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:TenantIdentifiers">
  
  <code>
    
    TenantIdentifiers
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>required</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>created_at</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    Timestamp
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>updated_at</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    Timestamp
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>name</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>max_len</code>: <code>50</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>description</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>max_len</code>: <code>2000</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>attributes</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        map of 
  <code>string</code>
 to 
  <code>string</code>
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>contact_info</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
          
        
        repeated 
  
  <code>
    
      ttn.lorawan.v3.
    
    ContactInfo
  </code>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
        
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>max_applications</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>If set, restricts the maximum number of applications that can be created.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>max_clients</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>If set, restricts the maximum number of clients that can be created.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>max_end_devices</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>If set, restricts the maximum number of end_devices that can be created.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>max_gateways</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>If set, restricts the maximum number of gateways that can be created.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>max_organizations</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>If set, restricts the maximum number of organizations that can be created.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>max_users</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt64Value
  </code>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>If set, restricts the maximum number of users that can be created.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>state</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
  
  ttn.lorawan.v3.
  
  State
  </code>
    
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The reviewing state of the tenant.
This field can only be modified by tenant admins.
If state_description is not updated when updating state, state_description is cleared.</p>
          <p><code>defined_only</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>state_description</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>A description for the state field.
This field can only be modified by admins, and should typically only be updated
when also updating <code>state</code>.</p>
          <p><code>max_len</code>: <code>128</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>capabilities</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    Struct
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>configuration</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration">
  
  <code>
    
    Configuration
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>billing</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Billing">
  
  <code>
    
    Billing
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>billing_identifiers</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:BillingIdentifiers">
  
  <code>
    
    BillingIdentifiers
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:TenantIdentifiers">Message <code>TenantIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenant_id": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenant_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>max_len</code>: <code>36</code></p>
          <p><code>pattern</code>: <code>^[a-z0-9](?:[-]?[a-z0-9]){2,}$</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Tenants">Message <code>Tenants</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenants": [],
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenants</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
                
              
          
        
        repeated 
  
    
    <a href="#message:Tenant">
  
  <code>
    
    Tenant
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
        
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:CreateTenantRequest">Message <code>CreateTenantRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenant": {},
  "initial_user": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenant</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Tenant">
  
  <code>
    
    Tenant
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>required</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>initial_user</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      ttn.lorawan.v3.
    
    User
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetTenantRequest">Message <code>GetTenantRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenant_ids": {},
  "field_mask": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenant_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:TenantIdentifiers">
  
  <code>
    
    TenantIdentifiers
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>required</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>field_mask</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    FieldMask
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetTenantIdentifiersForEndDeviceEUIsRequest">Message <code>GetTenantIdentifiersForEndDeviceEUIsRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "join_eui": "",
  "dev_eui": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>join_eui</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>bytes</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>8</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>dev_eui</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>bytes</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>8</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetTenantIdentifiersForGatewayEUIRequest">Message <code>GetTenantIdentifiersForGatewayEUIRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "eui": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>eui</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>bytes</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>8</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetTenantIdentifiersForBillingIdentifiersRequest">Message <code>GetTenantIdentifiersForBillingIdentifiersRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:BillingIdentifiers">
  
  <code>
    
    BillingIdentifiers
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>required</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetTenantRegistryTotalsRequest">Message <code>GetTenantRegistryTotalsRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenant_ids": {},
  "field_mask": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenant_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:TenantIdentifiers">
  
  <code>
    
    TenantIdentifiers
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>field_mask</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    FieldMask
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:TenantRegistryTotals">Message <code>TenantRegistryTotals</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "applications": 0,
  "clients": 0,
  "end_devices": 0,
  "activated_end_devices": 0,
  "gateways": 0,
  "organizations": 0,
  "users": 0,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>applications</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint64</code>
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>clients</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint64</code>
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>end_devices</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint64</code>
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>activated_end_devices</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint64</code>
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>gateways</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint64</code>
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>organizations</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint64</code>
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>users</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint64</code>
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ListTenantsRequest">Message <code>ListTenantsRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "field_mask": {},
  "order": "",
  "limit": 0,
  "page": 0,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>field_mask</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    FieldMask
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>order</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Order the results by this field path (must be present in the field mask).
Default ordering is by ID. Prepend with a minus (-) to reverse the order.</p>
          <p><code>in</code>: <code>[ tenant_id -tenant_id name -name created_at -created_at]</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>limit</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint32</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Limit the number of results per page.</p>
          <p><code>lte</code>: <code>1000</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>page</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint32</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Page number for pagination. 0 is interpreted as 1.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:MeteringData">Message <code>MeteringData</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenants": [],
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenants</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
                
              
          
        
        repeated 
  
    
    <a href="#message:MeteringData.TenantMeteringData">
  
  <code>
    
    MeteringData.TenantMeteringData
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
        
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:MeteringData.TenantMeteringData">Message <code>MeteringData.TenantMeteringData</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenant_id": {},
  "totals": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenant_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:TenantIdentifiers">
  
  <code>
    
    TenantIdentifiers
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>totals</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:TenantRegistryTotals">
  
  <code>
    
    TenantRegistryTotals
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:UpdateTenantRequest">Message <code>UpdateTenantRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "tenant": {},
  "field_mask": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tenant</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Tenant">
  
  <code>
    
    Tenant
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>required</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>field_mask</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    FieldMask
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration">Message <code>Configuration</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "default_cluster": {},
  "clusters": {},
  "pb": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>default_cluster</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster">
  
  <code>
    
    Configuration.Cluster
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Default cluster configuration.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>clusters</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        map of 
  <code>string</code>
 to 
  
    
    <a href="#message:Configuration.Cluster">
  
  <code>
    
    Configuration.Cluster
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Configuration per cluster (by ID).</p>
        
        
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>pb</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.PacketBroker">
  
  <code>
    
    Configuration.PacketBroker
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Packet Broker configuration.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Billing">Message <code>Billing</code></h3>
<b>Restrictions:</b>
<ul>
  <li>Only one of <code>stripe</code>, <code>aws_saas_marketplace</code> can be set.</li>
</ul>

<details><summary>Show object example</summary>
<pre><code>{
  "counting": {},
  "stripe": {},
  "aws_saas_marketplace": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>counting</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:EntityCounting">
  
  <code>
    
    EntityCounting
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>stripe</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Billing.Stripe">
  
  <code>
    
    Billing.Stripe
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>aws_saas_marketplace</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Billing.AWSSaaSMarketplace">
  
  <code>
    
    Billing.AWSSaaSMarketplace
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:BillingIdentifiers">Message <code>BillingIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "billing_id": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>billing_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>max_len</code>: <code>250</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster">Message <code>Configuration.Cluster</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ui": {},
  "is": {},
  "gs": {},
  "ns": {},
  "as": {},
  "js": {},
  "noc": {},
  "ars": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>ui</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.UI">
  
  <code>
    
    Configuration.UI
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>is</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer">
  
  <code>
    
    Configuration.Cluster.IdentityServer
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Identity Server configuration.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>gs</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.GatewayServer">
  
  <code>
    
    Configuration.Cluster.GatewayServer
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Gateway Server configuration.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>ns</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.NetworkServer">
  
  <code>
    
    Configuration.Cluster.NetworkServer
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>as</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.ApplicationServer">
  
  <code>
    
    Configuration.Cluster.ApplicationServer
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>js</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.JoinServer">
  
  <code>
    
    Configuration.Cluster.JoinServer
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Join Server configuration.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>noc</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.NetworkOperationsCenter">
  
  <code>
    
    Configuration.Cluster.NetworkOperationsCenter
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Network Operations Center configuration.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>ars</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.AlertRoutingServer">
  
  <code>
    
    Configuration.Cluster.AlertRoutingServer
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Alert Routing Server configuration.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.PacketBroker">Message <code>Configuration.PacketBroker</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "listed": false,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>listed</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>bool</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Indicates whether the Home Network is publicly listed.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Billing.Stripe">Message <code>Billing.Stripe</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "customer_id": "",
  "plan_id": "",
  "subscription_id": "",
  "subscription_item_id": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>customer_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>min_len</code>: <code>1</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>plan_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>min_len</code>: <code>1</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>subscription_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>min_len</code>: <code>1</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>subscription_item_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>min_len</code>: <code>1</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Billing.AWSSaaSMarketplace">Message <code>Billing.AWSSaaSMarketplace</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "customer_identifier": "",
  "product_code": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>customer_identifier</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>min_len</code>: <code>1</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>product_code</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>min_len</code>: <code>1</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.UI">Message <code>Configuration.UI</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "branding_base_url": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>branding_base_url</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.ApplicationServer">Message <code>Configuration.Cluster.ApplicationServer</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "webhooks": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>webhooks</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.ApplicationServer.Webhooks">
  
  <code>
    
    Configuration.Cluster.ApplicationServer.Webhooks
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.ApplicationServer.Webhooks">Message <code>Configuration.Cluster.ApplicationServer.Webhooks</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "queue": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>queue</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.ApplicationServer.Webhooks.Queue">
  
  <code>
    
    Configuration.Cluster.ApplicationServer.Webhooks.Queue
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.ApplicationServer.Webhooks.Queue">Message <code>Configuration.Cluster.ApplicationServer.Webhooks.Queue</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "enabled": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>enabled</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.GatewayServer">Message <code>Configuration.Cluster.GatewayServer</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "mtls_authentication": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>mtls_authentication</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.GatewayServer.MTLSAuthentication">
  
  <code>
    
    Configuration.Cluster.GatewayServer.MTLSAuthentication
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.GatewayServer.MTLSAuthentication">Message <code>Configuration.Cluster.GatewayServer.MTLSAuthentication</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "client_ca_pool": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>client_ca_pool</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>bytes</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>PEM encoded pool of X.509 root certificates to trust for verifying the presented TLS client certificate.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer">Message <code>Configuration.Cluster.IdentityServer</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "user_registration": {},
  "profile_picture": {},
  "end_device_picture": {},
  "user_rights": {},
  "admin_rights": {},
  "user_login": {},
  "email": {},
  "application_limits": {},
  "organization_limits": {},
  "user_limits": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>user_registration</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.UserRegistration">
  
  <code>
    
    Configuration.Cluster.IdentityServer.UserRegistration
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>profile_picture</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.ProfilePicture">
  
  <code>
    
    Configuration.Cluster.IdentityServer.ProfilePicture
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>end_device_picture</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.EndDevicePicture">
  
  <code>
    
    Configuration.Cluster.IdentityServer.EndDevicePicture
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>user_rights</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.UserRights">
  
  <code>
    
    Configuration.Cluster.IdentityServer.UserRights
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>admin_rights</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.AdminRights">
  
  <code>
    
    Configuration.Cluster.IdentityServer.AdminRights
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>user_login</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.UserLogin">
  
  <code>
    
    Configuration.Cluster.IdentityServer.UserLogin
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>email</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.Email">
  
  <code>
    
    Configuration.Cluster.IdentityServer.Email
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>application_limits</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.ApplicationLimits">
  
  <code>
    
    Configuration.Cluster.IdentityServer.ApplicationLimits
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The default limits set on newly created applications.
Note that these limits do not override the limits of the tenant or the license.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>organization_limits</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.OrganizationLimits">
  
  <code>
    
    Configuration.Cluster.IdentityServer.OrganizationLimits
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The default limits set on newly created organizations.
Note that these limits do not override the limits of the tenant or the license.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>user_limits</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.UserLimits">
  
  <code>
    
    Configuration.Cluster.IdentityServer.UserLimits
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The default limits set on newly created users.
Note that these limits do not override the limits of the tenant or the license.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.UserRegistration">Message <code>Configuration.Cluster.IdentityServer.UserRegistration</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "invitation": {},
  "contact_info_validation": {},
  "admin_approval": {},
  "password_requirements": {},
  "enabled": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>invitation</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.UserRegistration.Invitation">
  
  <code>
    
    Configuration.Cluster.IdentityServer.UserRegistration.Invitation
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>contact_info_validation</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.UserRegistration.ContactInfoValidation">
  
  <code>
    
    Configuration.Cluster.IdentityServer.UserRegistration.ContactInfoValidation
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>admin_approval</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.UserRegistration.AdminApproval">
  
  <code>
    
    Configuration.Cluster.IdentityServer.UserRegistration.AdminApproval
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>password_requirements</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.UserRegistration.PasswordRequirements">
  
  <code>
    
    Configuration.Cluster.IdentityServer.UserRegistration.PasswordRequirements
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>enabled</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.UserRegistration.Invitation">Message <code>Configuration.Cluster.IdentityServer.UserRegistration.Invitation</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "required": null,
  "token_ttl": "0s",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>required</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>token_ttl</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    Duration
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.UserRegistration.ContactInfoValidation">Message <code>Configuration.Cluster.IdentityServer.UserRegistration.ContactInfoValidation</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "required": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>required</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.UserRegistration.AdminApproval">Message <code>Configuration.Cluster.IdentityServer.UserRegistration.AdminApproval</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "required": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>required</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.UserRegistration.PasswordRequirements">Message <code>Configuration.Cluster.IdentityServer.UserRegistration.PasswordRequirements</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "min_length": null,
  "max_length": null,
  "min_uppercase": null,
  "min_digits": null,
  "min_special": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>min_length</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt32Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>max_length</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt32Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>min_uppercase</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt32Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>min_digits</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt32Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>min_special</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    UInt32Value
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.ProfilePicture">Message <code>Configuration.Cluster.IdentityServer.ProfilePicture</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "disable_upload": null,
  "use_gravatar": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>disable_upload</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>use_gravatar</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.UserLogin">Message <code>Configuration.Cluster.IdentityServer.UserLogin</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "disable_credentials_login": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>disable_credentials_login</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.Email">Message <code>Configuration.Cluster.IdentityServer.Email</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "network": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>network</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.IdentityServer.Email.Network">
  
  <code>
    
    Configuration.Cluster.IdentityServer.Email.Network
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.Email.Network">Message <code>Configuration.Cluster.IdentityServer.Email.Network</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "branding_base_url": "",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>branding_base_url</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.EndDevicePicture">Message <code>Configuration.Cluster.IdentityServer.EndDevicePicture</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "disable_upload": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>disable_upload</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.UserRights">Message <code>Configuration.Cluster.IdentityServer.UserRights</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "create_applications": null,
  "create_clients": null,
  "create_gateways": null,
  "create_organizations": null,
  "update_primary_email_address": null,
  "update_name": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>create_applications</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>create_clients</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>create_gateways</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>create_organizations</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>update_primary_email_address</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>update_name</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.IdentityServer.AdminRights">Message <code>Configuration.Cluster.IdentityServer.AdminRights</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "all": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>all</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.JoinServer">Message <code>Configuration.Cluster.JoinServer</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "join_eui_prefixes": [],
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>join_eui_prefixes</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
        
        repeated 
  <code>bytes</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
            <p><code>len</code>: <code>9</code></p>
        
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.NetworkServer">Message <code>Configuration.Cluster.NetworkServer</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "net_id": "",
  "ns_id": "",
  "dev_addr_prefixes": [],
  "deduplication_window": "0s",
  "cooldown_window": "0s",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>net_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>bytes</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>3</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>ns_id</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>bytes</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>8</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>dev_addr_prefixes</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
        
        repeated 
  <code>bytes</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
            <p><code>len</code>: <code>5</code></p>
        
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>deduplication_window</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    Duration
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>cooldown_window</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    Duration
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.NetworkOperationsCenter">Message <code>Configuration.Cluster.NetworkOperationsCenter</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "access": {},
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>access</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:Configuration.Cluster.NetworkOperationsCenter.Access">
  
  <code>
    
    Configuration.Cluster.NetworkOperationsCenter.Access
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:Configuration.Cluster.NetworkOperationsCenter.Access">Message <code>Configuration.Cluster.NetworkOperationsCenter.Access</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "extended": null,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>extended</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    BoolValue
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:EntityCounting">Message <code>EntityCounting</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "end_devices": "ALL",
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>end_devices</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#enum:EntityCounting.EntityCountingType">
  
  <code>
  
  EntityCounting.EntityCountingType
  </code>
    
  </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:SearchTenantsRequest">Message <code>SearchTenantsRequest</code></h3>
<p>This message is used for finding tenants in the EntityRegistrySearch service.</p>

<details><summary>Show object example</summary>
<pre><code>{
  "id_contains": "",
  "name_contains": "",
  "description_contains": "",
  "attributes_contain": {},
  "state": [],
  "field_mask": {},
  "order": "",
  "limit": 0,
  "page": 0,
  "deleted": false,
}</code></pre>
</details>

<p><b>Fields:</b></p>
<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>id_contains</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Find tenants where the ID contains this substring.</p>
          <p><code>max_len</code>: <code>50</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>name_contains</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Find tenants where the name contains this substring.</p>
          <p><code>max_len</code>: <code>50</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>description_contains</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Find tenants where the description contains this substring.</p>
          <p><code>max_len</code>: <code>50</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>attributes_contain</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        map of 
  <code>string</code>
 to 
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Find tenants where the given attributes contain these substrings.</p>
          <p><code>max_pairs</code>: <code>10</code></p>
            <p><code>max_len</code> (key): <code>36</code></p>
            <p><code>pattern</code> (key): <code>^[a-z0-9](?:[-]?[a-z0-9]){2,}$</code></p>
        
            <p><code>max_len</code> (value): <code>50</code></p>
        
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>state</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
          
        
        repeated 
  
  <code>
  
  ttn.lorawan.v3.
  
  State
  </code>
    
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Find tenants where the state is any of these states.</p>
        
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>field_mask</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
        
  
  <code>
    
      google.protobuf.
    
    FieldMask
  </code>
  
</td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>order</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>string</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Order the results by this field path (must be present in the field mask).
Default ordering is by ID. Prepend with a minus (-) to reverse the order.</p>
          <p><code>in</code>: <code>[ tenant_id -tenant_id name -name created_at -created_at]</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>limit</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint32</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Limit the number of results per page.</p>
          <p><code>lte</code>: <code>1000</code></p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>page</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>uint32</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Page number for pagination. 0 is interpreted as 1.</p>
      </td>
    </tr>
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>deleted</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
  <code>bool</code>
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Only return recently deleted tenants.</p>
      </td>
    </tr>
    
  </tbody>
</table>



## Enums



<h3 id="enum:EntityCounting.EntityCountingType">Enum <code>EntityCounting.EntityCountingType</code></h3>
<table class="api">
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ALL</code></td>
      <td><code>0</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>ONLY_ACTIVATED</code></td>
      <td><code>1</code></td>
      <td> </td>
    </tr>
  </tbody>
</table>






	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	


