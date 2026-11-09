# Application Package APIs

> List of Application Package APIs.

Source: https://www.thethingsindustries.com/docs/api/reference/grpc/application_packages/


List of Application Package APIs.

## The `ApplicationPackageRegistry` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>ApplicationPackageRegistry.List</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        List returns the available packages for the end device.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:EndDeviceIdentifiers"><code>EndDeviceIdentifiers</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPackages"><code>ApplicationPackages</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/applications/{application_ids.application_id}/devices/{device_id}/packages</code></p>
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
        <code>ApplicationPackageRegistry.GetAssociation</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        GetAssociation returns the association registered on the FPort of the end device.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetApplicationPackageAssociationRequest"><code>GetApplicationPackageAssociationRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPackageAssociation"><code>ApplicationPackageAssociation</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/applications/{ids.end_device_ids.application_ids.application_id}/devices/{ids.end_device_ids.device_id}/packages/associations/{ids.f_port}</code></p>
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
        <code>ApplicationPackageRegistry.ListAssociations</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        ListAssociations returns all of the associations of the end device.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ListApplicationPackageAssociationRequest"><code>ListApplicationPackageAssociationRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPackageAssociations"><code>ApplicationPackageAssociations</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/applications/{ids.application_ids.application_id}/devices/{ids.device_id}/packages/associations</code></p>
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
        <code>ApplicationPackageRegistry.SetAssociation</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        SetAssociation updates or creates the association on the FPort of the end device.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:SetApplicationPackageAssociationRequest"><code>SetApplicationPackageAssociationRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPackageAssociation"><code>ApplicationPackageAssociation</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>PUT</code> <code>/api/v3/as/applications/{association.ids.end_device_ids.application_ids.application_id}/devices/{association.ids.end_device_ids.device_id}/packages/associations/{association.ids.f_port}</code></p>
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
        <code>ApplicationPackageRegistry.DeleteAssociation</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        DeleteAssociation removes the association on the FPort of the end device.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ApplicationPackageAssociationIdentifiers"><code>ApplicationPackageAssociationIdentifiers</code></a>
        
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
        <p><code>DELETE</code> <code>/api/v3/as/applications/{end_device_ids.application_ids.application_id}/devices/{end_device_ids.device_id}/packages/associations/{f_port}</code></p>
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
        <code>ApplicationPackageRegistry.GetDefaultAssociation</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        GetDefaultAssociation returns the default association registered on the FPort of the application.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetApplicationPackageDefaultAssociationRequest"><code>GetApplicationPackageDefaultAssociationRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPackageDefaultAssociation"><code>ApplicationPackageDefaultAssociation</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/applications/{ids.application_ids.application_id}/packages/associations/{ids.f_port}</code></p>
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
        <code>ApplicationPackageRegistry.ListDefaultAssociations</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        ListDefaultAssociations returns all of the default associations of the application.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ListApplicationPackageDefaultAssociationRequest"><code>ListApplicationPackageDefaultAssociationRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPackageDefaultAssociations"><code>ApplicationPackageDefaultAssociations</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/applications/{ids.application_id}/packages/associations</code></p>
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
        <code>ApplicationPackageRegistry.SetDefaultAssociation</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        SetDefaultAssociation updates or creates the default association on the FPort of the application.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:SetApplicationPackageDefaultAssociationRequest"><code>SetApplicationPackageDefaultAssociationRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPackageDefaultAssociation"><code>ApplicationPackageDefaultAssociation</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>PUT</code> <code>/api/v3/as/applications/{default.ids.application_ids.application_id}/packages/associations/{default.ids.f_port}</code></p>
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
        <code>ApplicationPackageRegistry.DeleteDefaultAssociation</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        DeleteDefaultAssociation removes the default association on the FPort of the application.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ApplicationPackageDefaultAssociationIdentifiers"><code>ApplicationPackageDefaultAssociationIdentifiers</code></a>
        
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
        <p><code>DELETE</code> <code>/api/v3/as/applications/{application_ids.application_id}/packages/associations/{f_port}</code></p>
      </td>
    </tr>
  </tbody>
</table>


## The `AzureIoTHubService` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>AzureIoTHubService.Submit</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:AzureIoTHubEvents"><code>AzureIoTHubEvents</code></a>
        
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
        <p><code>POST</code> <code>/api/v3/as/applications/{application_ids.application_id}/packages/azureiothub/events</code></p>
      </td>
    </tr>
  </tbody>
</table>


## Messages


<h3 id="message:AzureIoTHubEvent">Message <code>AzureIoTHubEvent</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "end_device_ids": {},
  "body": {},
  "properties": {},
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
        <code>end_device_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:EndDeviceIdentifiers">
  
  <code>
    
    EndDeviceIdentifiers
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
        <code>body</code>
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
        <code>properties</code>
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




<h3 id="message:AzureIoTHubEvents">Message <code>AzureIoTHubEvents</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "application_ids": {},
  "events": [],
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
        <code>application_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationIdentifiers">
  
  <code>
    
    ApplicationIdentifiers
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
        <code>events</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
                
              
          
        
        repeated 
  
    
    <a href="#message:AzureIoTHubEvent">
  
  <code>
    
    AzureIoTHubEvent
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p><code>min_items</code>: <code>1</code></p>
        
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:EndDeviceIdentifiers">Message <code>EndDeviceIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "device_id": "",
  "application_ids": {},
  "dev_eui": "",
  "join_eui": "",
  "dev_addr": "",
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
        <code>device_id</code>
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

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>application_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationIdentifiers">
  
  <code>
    
    ApplicationIdentifiers
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
          <p>The LoRaWAN DevEUI.</p>
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
          <p>The LoRaWAN JoinEUI (AppEUI until LoRaWAN 1.0.3 end devices).</p>
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
        <code>dev_addr</code>
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
          <p>The LoRaWAN DevAddr.</p>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>4</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetApplicationPackageAssociationRequest">Message <code>GetApplicationPackageAssociationRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
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
        <code>ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPackageAssociationIdentifiers">
  
  <code>
    
    ApplicationPackageAssociationIdentifiers
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




<h3 id="message:SetApplicationPackageAssociationRequest">Message <code>SetApplicationPackageAssociationRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "association": {},
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
        <code>association</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPackageAssociation">
  
  <code>
    
    ApplicationPackageAssociation
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




<h3 id="message:ApplicationPackageAssociationIdentifiers">Message <code>ApplicationPackageAssociationIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "end_device_ids": {},
  "f_port": 0,
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
        <code>end_device_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:EndDeviceIdentifiers">
  
  <code>
    
    EndDeviceIdentifiers
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
        <code>f_port</code>
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
          <p><code>gte</code>: <code>1</code></p>
          <p><code>lte</code>: <code>255</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetApplicationPackageDefaultAssociationRequest">Message <code>GetApplicationPackageDefaultAssociationRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
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
        <code>ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPackageDefaultAssociationIdentifiers">
  
  <code>
    
    ApplicationPackageDefaultAssociationIdentifiers
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




<h3 id="message:ListApplicationPackageDefaultAssociationRequest">Message <code>ListApplicationPackageDefaultAssociationRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "limit": 0,
  "page": 0,
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
        <code>ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationIdentifiers">
  
  <code>
    
    ApplicationIdentifiers
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
          <p>Limit the number of results per page.
Each page is ordered by the FPort.</p>
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




<h3 id="message:SetApplicationPackageDefaultAssociationRequest">Message <code>SetApplicationPackageDefaultAssociationRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "default": {},
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
        <code>default</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPackageDefaultAssociation">
  
  <code>
    
    ApplicationPackageDefaultAssociation
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




<h3 id="message:ApplicationPackageDefaultAssociationIdentifiers">Message <code>ApplicationPackageDefaultAssociationIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "application_ids": {},
  "f_port": 0,
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
        <code>application_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationIdentifiers">
  
  <code>
    
    ApplicationIdentifiers
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
        <code>f_port</code>
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
          <p><code>gte</code>: <code>1</code></p>
          <p><code>lte</code>: <code>255</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationIdentifiers">Message <code>ApplicationIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "application_id": "",
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
        <code>application_id</code>
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




<h3 id="message:ApplicationPackageAssociation">Message <code>ApplicationPackageAssociation</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "0001-01-01T00:00:00Z",
  "package_name": "",
  "data": {},
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPackageAssociationIdentifiers">
  
  <code>
    
    ApplicationPackageAssociationIdentifiers
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
        <code>package_name</code>
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

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>data</code>
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




<h3 id="message:ApplicationPackageDefaultAssociation">Message <code>ApplicationPackageDefaultAssociation</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "0001-01-01T00:00:00Z",
  "package_name": "",
  "data": {},
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPackageDefaultAssociationIdentifiers">
  
  <code>
    
    ApplicationPackageDefaultAssociationIdentifiers
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
        <code>package_name</code>
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

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>data</code>
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




<h3 id="message:ListApplicationPackageAssociationRequest">Message <code>ListApplicationPackageAssociationRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "limit": 0,
  "page": 0,
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
        <code>ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:EndDeviceIdentifiers">
  
  <code>
    
    EndDeviceIdentifiers
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
          <p>Limit the number of results per page.
Each page is ordered by the FPort.</p>
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







	

	

	

	

	

	

	

	

	

	

	

	

	

	


