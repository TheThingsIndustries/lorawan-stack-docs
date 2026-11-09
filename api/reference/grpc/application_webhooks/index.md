# Application Webhook APIs

> List of Application Webhook APIs.

Source: https://www.thethingsindustries.com/docs/api/reference/grpc/application_webhooks/


List of Application Webhook APIs.

## The `ApplicationWebhookRegistry` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>ApplicationWebhookRegistry.Get</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetApplicationWebhookRequest"><code>GetApplicationWebhookRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationWebhook"><code>ApplicationWebhook</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/webhooks/{ids.application_ids.application_id}/{ids.webhook_id}</code></p>
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
        <code>ApplicationWebhookRegistry.GetFormats</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <code>google.protobuf.Empty</code>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationWebhookFormats"><code>ApplicationWebhookFormats</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/webhook-formats</code></p>
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
        <code>ApplicationWebhookRegistry.GetTemplate</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetApplicationWebhookTemplateRequest"><code>GetApplicationWebhookTemplateRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationWebhookTemplate"><code>ApplicationWebhookTemplate</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/webhook-templates/{ids.template_id}</code></p>
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
        <code>ApplicationWebhookRegistry.Set</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:SetApplicationWebhookRequest"><code>SetApplicationWebhookRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationWebhook"><code>ApplicationWebhook</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>PUT</code> <code>/api/v3/as/webhooks/{webhook.ids.application_ids.application_id}/{webhook.ids.webhook_id}</code></p>
        <p><code>POST</code> <code>/api/v3/as/webhooks/{webhook.ids.application_ids.application_id}</code></p>
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
        <code>ApplicationWebhookRegistry.List</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ListApplicationWebhooksRequest"><code>ListApplicationWebhooksRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationWebhooks"><code>ApplicationWebhooks</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/webhooks/{application_ids.application_id}</code></p>
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
        <code>ApplicationWebhookRegistry.ListTemplates</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ListApplicationWebhookTemplatesRequest"><code>ListApplicationWebhookTemplatesRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationWebhookTemplates"><code>ApplicationWebhookTemplates</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/webhook-templates</code></p>
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
        <code>ApplicationWebhookRegistry.Delete</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ApplicationWebhookIdentifiers"><code>ApplicationWebhookIdentifiers</code></a>
        
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
        <p><code>DELETE</code> <code>/api/v3/as/webhooks/{application_ids.application_id}/{webhook_id}</code></p>
      </td>
    </tr>
  </tbody>
</table>


## Messages


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




<h3 id="message:ApplicationWebhook">Message <code>ApplicationWebhook</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "0001-01-01T00:00:00Z",
  "base_url": "",
  "headers": {},
  "format": "",
  "template_ids": {},
  "template_fields": {},
  "downlink_api_key": "",
  "uplink_message": {},
  "uplink_normalized": {},
  "join_accept": {},
  "downlink_ack": {},
  "downlink_nack": {},
  "downlink_sent": {},
  "downlink_failed": {},
  "downlink_queued": {},
  "downlink_queue_invalidated": {},
  "location_solved": {},
  "service_data": {},
  "health_status": {},
  "field_mask": {},
  "queue": {},
  "paused": false,
  "custom_ca": "",
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhookIdentifiers">
  
  <code>
    
    ApplicationWebhookIdentifiers
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
        <code>base_url</code>
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
          <p>Base URL to which the message&rsquo;s path is appended.</p>
          <p><code>uri</code></p>
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
        <code>headers</code>
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
          <p>HTTP headers to use.</p>
          <p><code>max_pairs</code>: <code>50</code></p>
            <p><code>max_len</code> (key): <code>64</code></p>
        
            <p><code>max_len</code> (value): <code>4096</code></p>
        
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
        <code>format</code>
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
          <p>The format to use for the body.
Supported values depend on the Application Server configuration.</p>
          <p><code>max_len</code>: <code>20</code></p>
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
        <code>template_ids</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhookTemplateIdentifiers">
  
  <code>
    
    ApplicationWebhookTemplateIdentifiers
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The ID of the template that was used to create the Webhook.</p>
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
        <code>template_fields</code>
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
          <p>The value of the fields used by the template. Maps field.id to the value.</p>
        
        
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
        <code>downlink_api_key</code>
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
          <p>The API key to be used for downlink queue operations.
The field is provided for convenience reasons, and can contain API keys with additional rights (albeit this is discouraged).</p>
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
        <code>uplink_message</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>uplink_normalized</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>join_accept</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>downlink_ack</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>downlink_nack</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>downlink_sent</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>downlink_failed</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>downlink_queued</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>downlink_queue_invalidated</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>location_solved</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>service_data</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook.Message">
  
  <code>
    
    ApplicationWebhook.Message
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
        <code>health_status</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhookHealth">
  
  <code>
    
    ApplicationWebhookHealth
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhookQueue">
  
  <code>
    
    ApplicationWebhookQueue
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
        <code>paused</code>
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
          <p>Set to temporarily pause forwarding uplink data to this end point and receiving downlinks from this end point.</p>
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
        <code>custom_ca</code>
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
          <p>Custom CA certificate for the server where the webhooks are sent to. PEM formatted.</p>
          <p><code>max_len</code>: <code>8192</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationWebhook.Message">Message <code>ApplicationWebhook.Message</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "path": "",
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
        <code>path</code>
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
          <p>Path to append to the base URL.</p>
          <p><code>max_len</code>: <code>64</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationWebhookFormats">Message <code>ApplicationWebhookFormats</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "formats": {},
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
        <code>formats</code>
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
          <p>Format and description.</p>
        
        
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationWebhookHealth">Message <code>ApplicationWebhookHealth</code></h3>
<b>Restrictions:</b>
<ul>
  <li>Only one of <code>healthy</code>, <code>unhealthy</code> can be set.</li>
</ul>

<details><summary>Show object example</summary>
<pre><code>{
  "healthy": {},
  "unhealthy": {},
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
        <code>healthy</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhookHealth.WebhookHealthStatusHealthy">
  
  <code>
    
    ApplicationWebhookHealth.WebhookHealthStatusHealthy
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
        <code>unhealthy</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhookHealth.WebhookHealthStatusUnhealthy">
  
  <code>
    
    ApplicationWebhookHealth.WebhookHealthStatusUnhealthy
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationWebhookHealth.WebhookHealthStatusUnhealthy">Message <code>ApplicationWebhookHealth.WebhookHealthStatusUnhealthy</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "failed_attempts": 0,
  "last_failed_attempt_at": "0001-01-01T00:00:00Z",
  "last_failed_attempt_details": {},
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
        <code>failed_attempts</code>
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
        <code>last_failed_attempt_at</code>
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
        <code>last_failed_attempt_details</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ErrorDetails">
  
  <code>
    
    ErrorDetails
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationWebhookHealth.WebhookHealthStatusHealthy">Message <code>ApplicationWebhookHealth.WebhookHealthStatusHealthy</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
}</code></pre>
</details>

<p><b>Fields:</b></p>



<h3 id="message:ApplicationWebhookIdentifiers">Message <code>ApplicationWebhookIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "application_ids": {},
  "webhook_id": "",
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
        <code>webhook_id</code>
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




<h3 id="message:ApplicationWebhookQueue">Message <code>ApplicationWebhookQueue</code></h3>

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




<h3 id="message:ApplicationWebhooks">Message <code>ApplicationWebhooks</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "webhooks": [],
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
        
          
              
                
              
          
        
        repeated 
  
    
    <a href="#message:ApplicationWebhook">
  
  <code>
    
    ApplicationWebhook
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




<h3 id="message:ApplicationWebhookTemplateIdentifiers">Message <code>ApplicationWebhookTemplateIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "template_id": "",
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
        <code>template_id</code>
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




<h3 id="message:ErrorDetails">Message <code>ErrorDetails</code></h3>
<p>Error details that are communicated over gRPC (and HTTP) APIs.
The messages (for translation) are stored as &ldquo;error:<namespace>:<name>&rdquo;.</p>

<details><summary>Show object example</summary>
<pre><code>{
  "namespace": "",
  "name": "",
  "message_format": "",
  "attributes": {},
  "correlation_id": "",
  "cause": {},
  "code": 0,
  "details": [],
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
        <code>namespace</code>
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
          <p>Namespace of the error (typically the package name in The Things Stack).</p>
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
          <p>Name of the error.</p>
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
        <code>message_format</code>
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
          <p>The default (fallback) message format that should be used for the error.
This is also used if the client does not have a translation for the error.</p>
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
          <p>Attributes that should be filled into the message format. Any extra attributes
can be displayed as error details.</p>
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
        <code>correlation_id</code>
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
          <p>The correlation ID of the error can be used to correlate the error to stack
traces the network may (or may not) store about recent errors.</p>
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
        <code>cause</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ErrorDetails">
  
  <code>
    
    ErrorDetails
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The error that caused this error.</p>
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
        <code>code</code>
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
          <p>The status code of the error.</p>
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
        <code>details</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
          
        
        repeated 
  
  <code>
    
      google.protobuf.
    
    Any
  </code>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The details of the error.</p>
        
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetApplicationWebhookRequest">Message <code>GetApplicationWebhookRequest</code></h3>

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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhookIdentifiers">
  
  <code>
    
    ApplicationWebhookIdentifiers
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




<h3 id="message:GetApplicationWebhookTemplateRequest">Message <code>GetApplicationWebhookTemplateRequest</code></h3>

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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhookTemplateIdentifiers">
  
  <code>
    
    ApplicationWebhookTemplateIdentifiers
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




<h3 id="message:ListApplicationWebhooksRequest">Message <code>ListApplicationWebhooksRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "application_ids": {},
  "field_mask": {},
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
    
  </tbody>
</table>




<h3 id="message:ListApplicationWebhookTemplatesRequest">Message <code>ListApplicationWebhookTemplatesRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
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




<h3 id="message:SetApplicationWebhookRequest">Message <code>SetApplicationWebhookRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "webhook": {},
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
        <code>webhook</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationWebhook">
  
  <code>
    
    ApplicationWebhook
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







	

	

	

	

	

	

	

	

	

	

	

	

	

	

	


