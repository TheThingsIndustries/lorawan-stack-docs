# Application Pub/Sub APIs

> List of Application Pub/Sub APIs.

Source: https://www.thethingsindustries.com/docs/api/reference/grpc/application_pub_sub/


List of Application Pub/Sub APIs.

## The `ApplicationPubSubRegistry` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>ApplicationPubSubRegistry.GetFormats</code>
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
        <a href="#message:ApplicationPubSubFormats"><code>ApplicationPubSubFormats</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/pubsub-formats</code></p>
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
        <code>ApplicationPubSubRegistry.Set</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:SetApplicationPubSubRequest"><code>SetApplicationPubSubRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPubSub"><code>ApplicationPubSub</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>PUT</code> <code>/api/v3/as/pubsub/{pubsub.ids.application_ids.application_id}/{pubsub.ids.pub_sub_id}</code></p>
        <p><code>POST</code> <code>/api/v3/as/pubsub/{pubsub.ids.application_ids.application_id}</code></p>
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
        <code>ApplicationPubSubRegistry.Get</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetApplicationPubSubRequest"><code>GetApplicationPubSubRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPubSub"><code>ApplicationPubSub</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/pubsub/{ids.application_ids.application_id}/{ids.pub_sub_id}</code></p>
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
        <code>ApplicationPubSubRegistry.List</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ListApplicationPubSubsRequest"><code>ListApplicationPubSubsRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:ApplicationPubSubs"><code>ApplicationPubSubs</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/as/pubsub/{application_ids.application_id}</code></p>
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
        <code>ApplicationPubSubRegistry.Delete</code>
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:ApplicationPubSubIdentifiers"><code>ApplicationPubSubIdentifiers</code></a>
        
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
        <p><code>DELETE</code> <code>/api/v3/as/pubsub/{application_ids.application_id}/{pub_sub_id}</code></p>
      </td>
    </tr>
  </tbody>
</table>


## Messages


<h3 id="message:ApplicationPubSub">Message <code>ApplicationPubSub</code></h3>
<b>Restrictions:</b>
<ul>
  <li>Only one of <code>nats</code>, <code>mqtt</code>, <code>aws_iot</code> can be set.</li>
</ul>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "0001-01-01T00:00:00Z",
  "format": "",
  "nats": {},
  "mqtt": {},
  "aws_iot": {},
  "base_topic": "",
  "downlink_push": {},
  "downlink_replace": {},
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSubIdentifiers">
  
  <code>
    
    ApplicationPubSubIdentifiers
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
        <code>nats</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.NATSProvider">
  
  <code>
    
    ApplicationPubSub.NATSProvider
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
        <code>mqtt</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.MQTTProvider">
  
  <code>
    
    ApplicationPubSub.MQTTProvider
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
        <code>aws_iot</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.AWSIoTProvider">
  
  <code>
    
    ApplicationPubSub.AWSIoTProvider
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
        <code>base_topic</code>
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
          <p>Base topic name to which the messages topic is appended.</p>
          <p><code>max_len</code>: <code>100</code></p>
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
        <code>downlink_push</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The topic to which the Application Server subscribes for downlink queue push operations.</p>
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
        <code>downlink_replace</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The topic to which the Application Server subscribes for downlink queue replace operations.</p>
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.Message">
  
  <code>
    
    ApplicationPubSub.Message
  </code>
  
    </a>
  
</td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationPubSub.Message">Message <code>ApplicationPubSub.Message</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "topic": "",
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
        <code>topic</code>
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
          <p>The topic on which the Application Server publishes or receives the messages.</p>
          <p><code>max_len</code>: <code>100</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationPubSub.MQTTProvider">Message <code>ApplicationPubSub.MQTTProvider</code></h3>
<p>The MQTT provider settings.</p>

<details><summary>Show object example</summary>
<pre><code>{
  "server_url": "",
  "client_id": "",
  "username": "",
  "password": "",
  "subscribe_qos": "AT_MOST_ONCE",
  "publish_qos": "AT_MOST_ONCE",
  "use_tls": false,
  "tls_ca": "",
  "tls_client_cert": "",
  "tls_client_key": "",
  "headers": {},
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
        <code>server_url</code>
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
        <code>client_id</code>
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
          <p><code>max_len</code>: <code>23</code></p>
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
        <code>username</code>
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
          <p><code>max_len</code>: <code>100</code></p>
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
        <code>password</code>
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
          <p><code>max_len</code>: <code>100</code></p>
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
        <code>subscribe_qos</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#enum:ApplicationPubSub.MQTTProvider.QoS">
  
  <code>
  
  ApplicationPubSub.MQTTProvider.QoS
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
        <code>publish_qos</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#enum:ApplicationPubSub.MQTTProvider.QoS">
  
  <code>
  
  ApplicationPubSub.MQTTProvider.QoS
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
        <code>use_tls</code>
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
    
  </tbody>
</table>

<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Field
      </th>
      <td>
        <code>tls_ca</code>
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
          <p>The server Root CA certificate. PEM formatted.</p>
          <p><code>max_len</code>: <code>8192</code></p>
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
        <code>tls_client_cert</code>
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
          <p>The client certificate. PEM formatted.</p>
          <p><code>max_len</code>: <code>8192</code></p>
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
        <code>tls_client_key</code>
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
          <p>The client private key. PEM formatted.</p>
          <p><code>max_len</code>: <code>8192</code></p>
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
          <p>HTTP headers to use on MQTT-over-Websocket connections.</p>
        
        
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationPubSub.NATSProvider">Message <code>ApplicationPubSub.NATSProvider</code></h3>
<p>The NATS provider settings.</p>

<details><summary>Show object example</summary>
<pre><code>{
  "server_url": "",
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
        <code>server_url</code>
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
          <p>The server connection URL.</p>
          <p><code>uri</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationPubSubFormats">Message <code>ApplicationPubSubFormats</code></h3>

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




<h3 id="message:ApplicationPubSubIdentifiers">Message <code>ApplicationPubSubIdentifiers</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "application_ids": {},
  "pub_sub_id": "",
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
        <code>pub_sub_id</code>
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




<h3 id="message:ApplicationPubSubs">Message <code>ApplicationPubSubs</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "pubsubs": [],
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
        <code>pubsubs</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
                
              
          
        
        repeated 
  
    
    <a href="#message:ApplicationPubSub">
  
  <code>
    
    ApplicationPubSub
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




<h3 id="message:GetApplicationPubSubRequest">Message <code>GetApplicationPubSubRequest</code></h3>

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
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSubIdentifiers">
  
  <code>
    
    ApplicationPubSubIdentifiers
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




<h3 id="message:ListApplicationPubSubsRequest">Message <code>ListApplicationPubSubsRequest</code></h3>

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




<h3 id="message:SetApplicationPubSubRequest">Message <code>SetApplicationPubSubRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "pubsub": {},
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
        <code>pubsub</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub">
  
  <code>
    
    ApplicationPubSub
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




<h3 id="message:ApplicationPubSub.AWSIoTProvider">Message <code>ApplicationPubSub.AWSIoTProvider</code></h3>
<b>Restrictions:</b>
<ul>
  <li>Only one of <code>default</code> can be set.</li>
</ul>

<details><summary>Show object example</summary>
<pre><code>{
  "region": "",
  "access_key": {},
  "assume_role": {},
  "endpoint_address": "",
  "default": {},
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
        <code>region</code>
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
          <p>The AWS region.</p>
          <p><code>in</code>: <code>[af-south-1 ap-east-1 ap-northeast-1 ap-northeast-2 ap-south-1 ap-southeast-1 ap-southeast-2 ca-central-1 eu-central-1 eu-north-1 eu-south-1 eu-west-1 eu-west-2 eu-west-3 me-south-1 sa-east-1 us-east-1 us-east-2 us-west-1 us-west-2]</code></p>
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
        <code>access_key</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.AWSIoTProvider.AccessKey">
  
  <code>
    
    ApplicationPubSub.AWSIoTProvider.AccessKey
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>If set, the integration will use an AWS access key.</p>
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
        <code>assume_role</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.AWSIoTProvider.AssumeRole">
  
  <code>
    
    ApplicationPubSub.AWSIoTProvider.AssumeRole
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>If set, the integration will assume the given role during operation.</p>
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
        <code>endpoint_address</code>
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
          <p>The endpoint address to connect to. If the endpoint address is left empty,
the integration will try to discover it.</p>
          <p><code>max_len</code>: <code>128</code></p>
          <p><code>pattern</code>: <code>^((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])|)$</code></p>
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
        <code>default</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:ApplicationPubSub.AWSIoTProvider.DefaultIntegration">
  
  <code>
    
    ApplicationPubSub.AWSIoTProvider.DefaultIntegration
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Enable the default integration. This overrides custom base topic and message topics of the pub/sub integration.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationPubSub.AWSIoTProvider.AccessKey">Message <code>ApplicationPubSub.AWSIoTProvider.AccessKey</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "access_key_id": "",
  "secret_access_key": "",
  "session_token": "",
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
        <code>access_key_id</code>
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
          <p><code>max_len</code>: <code>128</code></p>
          <p><code>min_len</code>: <code>16</code></p>
          <p><code>pattern</code>: <code>^[\w]*$</code></p>
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
        <code>secret_access_key</code>
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
          <p><code>max_len</code>: <code>40</code></p>
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
        <code>session_token</code>
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
          <p><code>max_len</code>: <code>256</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:ApplicationPubSub.AWSIoTProvider.AssumeRole">Message <code>ApplicationPubSub.AWSIoTProvider.AssumeRole</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "arn": "",
  "external_id": "",
  "session_duration": "0s",
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
        <code>arn</code>
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
          <p><code>pattern</code>: <code>^arn:aws:iam::[0-9]{12}:role\/[A-Za-z0-9_&#43;=,.@-]&#43;$</code></p>
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
        <code>external_id</code>
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
          <p><code>max_len</code>: <code>1224</code></p>
          <p><code>pattern</code>: <code>^[\w&#43;=,.@:\/-]*$</code></p>
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
        <code>session_duration</code>
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




<h3 id="message:ApplicationPubSub.AWSIoTProvider.DefaultIntegration">Message <code>ApplicationPubSub.AWSIoTProvider.DefaultIntegration</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "stack_name": "",
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
        <code>stack_name</code>
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
          <p>The stack name that is associated with the CloudFormation deployment of The Things Stack Enterprise integration.</p>
          <p><code>max_len</code>: <code>128</code></p>
          <p><code>pattern</code>: <code>^[A-Za-z][A-Za-z0-9\-]*$</code></p>
      </td>
    </tr>
    
  </tbody>
</table>



## Enums



<h3 id="enum:ApplicationPubSub.MQTTProvider.QoS">Enum <code>ApplicationPubSub.MQTTProvider.QoS</code></h3>
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
      <td><code>AT_MOST_ONCE</code></td>
      <td><code>0</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>AT_LEAST_ONCE</code></td>
      <td><code>1</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>EXACTLY_ONCE</code></td>
      <td><code>2</code></td>
      <td> </td>
    </tr>
  </tbody>
</table>






	

	

	

	

	

	

	

	

	

	

	

	

	

	


