# Crypto Operations APIs

> List of Crypto Operations APIs.

Source: https://www.thethingsindustries.com/docs/api/reference/grpc/crypto_operations/


List of Crypto Operations APIs.

## The `NetworkCryptoService` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>NetworkCryptoService.JoinRequestMIC</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        Calculate the join-request message MIC.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:CryptoServicePayloadRequest"><code>CryptoServicePayloadRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:CryptoServicePayloadResponse"><code>CryptoServicePayloadResponse</code></a>
        
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
        <code>NetworkCryptoService.JoinAcceptMIC</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        Calculate the join-accept message MIC.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:JoinAcceptMICRequest"><code>JoinAcceptMICRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:CryptoServicePayloadResponse"><code>CryptoServicePayloadResponse</code></a>
        
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
        <code>NetworkCryptoService.EncryptJoinAccept</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        Encrypt the join-accept payload.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:CryptoServicePayloadRequest"><code>CryptoServicePayloadRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:CryptoServicePayloadResponse"><code>CryptoServicePayloadResponse</code></a>
        
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
        <code>NetworkCryptoService.EncryptRejoinAccept</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        Encrypt the rejoin-accept payload.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:CryptoServicePayloadRequest"><code>CryptoServicePayloadRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:CryptoServicePayloadResponse"><code>CryptoServicePayloadResponse</code></a>
        
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
        <code>NetworkCryptoService.DeriveNwkSKeys</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        Derive network session keys (NwkSKey, or FNwkSKey, SNwkSKey and NwkSEncKey)
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:DeriveSessionKeysRequest"><code>DeriveSessionKeysRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:NwkSKeysResponse"><code>NwkSKeysResponse</code></a>
        
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
        <code>NetworkCryptoService.GetNwkKey</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        Get the NwkKey. Crypto Servers may return status code FAILED_PRECONDITION when root keys are not exposed.
      </td>
    </tr>
    <tr>
      <th>
        Request type
      </th>
      <td>
        <a href="#message:GetRootKeysRequest"><code>GetRootKeysRequest</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        Response type
      </th>
      <td>
        <a href="#message:KeyEnvelope"><code>KeyEnvelope</code></a>
        
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




<h3 id="message:CryptoServicePayloadRequest">Message <code>CryptoServicePayloadRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "lorawan_version": "MAC_UNKNOWN",
  "payload": "",
  "provisioner_id": "",
  "provisioning_data": {},
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
          <p>End device identifiers for the cryptographic operation.</p>
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
        <code>lorawan_version</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#enum:MACVersion">
  
  <code>
  
  MACVersion
  </code>
    
  </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>LoRaWAN version to use for the cryptographic operation.</p>
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
        <code>payload</code>
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
          <p>Raw input payload.</p>
          <p><code>max_len</code>: <code>256</code></p>
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
        <code>provisioner_id</code>
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
          <p>Provisioner that provisioned the end device.</p>
          <p><code>max_len</code>: <code>36</code></p>
          <p><code>pattern</code>: <code>^[a-z0-9](?:[-]?[a-z0-9]){2,}$|^$</code></p>
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
        <code>provisioning_data</code>
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
          <p>Provisioning data for the provisioner.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:CryptoServicePayloadResponse">Message <code>CryptoServicePayloadResponse</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "payload": "",
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
        <code>payload</code>
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
          <p>Raw output payload.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:DeriveSessionKeysRequest">Message <code>DeriveSessionKeysRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "lorawan_version": "MAC_UNKNOWN",
  "join_nonce": "",
  "dev_nonce": "",
  "net_id": "",
  "provisioner_id": "",
  "provisioning_data": {},
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
          <p>End device identifiers to use for key derivation.
The DevAddr must be set in this request. The DevEUI may need to be set, depending on the provisioner.</p>
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
        <code>lorawan_version</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#enum:MACVersion">
  
  <code>
  
  MACVersion
  </code>
    
  </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>LoRaWAN key derivation scheme.</p>
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
        <code>join_nonce</code>
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
          <p>LoRaWAN JoinNonce (or AppNonce).</p>
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
        <code>dev_nonce</code>
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
          <p>LoRaWAN DevNonce.</p>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>2</code></p>
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
          <p>LoRaWAN NetID.</p>
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
        <code>provisioner_id</code>
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
          <p>Provisioner that provisioned the end device.</p>
          <p><code>max_len</code>: <code>36</code></p>
          <p><code>pattern</code>: <code>^[a-z0-9](?:[-]?[a-z0-9]){2,}$|^$</code></p>
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
        <code>provisioning_data</code>
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
          <p>Provisioning data for the provisioner.</p>
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




<h3 id="message:JoinAcceptMICRequest">Message <code>JoinAcceptMICRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "payload_request": {},
  "join_request_type": "REJOIN_CONTEXT",
  "dev_nonce": "",
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
        <code>payload_request</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:CryptoServicePayloadRequest">
  
  <code>
    
    CryptoServicePayloadRequest
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>Request data for the cryptographic operation.</p>
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
        <code>join_request_type</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#enum:JoinRequestType">
  
  <code>
  
  JoinRequestType
  </code>
    
  </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>LoRaWAN join-request type.</p>
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
        <code>dev_nonce</code>
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
          <p>LoRaWAN DevNonce.</p>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>2</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:NwkSKeysResponse">Message <code>NwkSKeysResponse</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "f_nwk_s_int_key": {},
  "s_nwk_s_int_key": {},
  "nwk_s_enc_key": {},
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
        <code>f_nwk_s_int_key</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:KeyEnvelope">
  
  <code>
    
    KeyEnvelope
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The (encrypted) Forwarding Network Session Integrity Key (or Network Session Key in 1.0 compatibility mode).</p>
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
        <code>s_nwk_s_int_key</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:KeyEnvelope">
  
  <code>
    
    KeyEnvelope
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The (encrypted) Serving Network Session Integrity Key.</p>
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
        <code>nwk_s_enc_key</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
        
            
              
            
        
  
    
    <a href="#message:KeyEnvelope">
  
  <code>
    
    KeyEnvelope
  </code>
  
    </a>
  
</td>
    </tr>
    
    <tr>
      <th>
        Description
      </th>
      <td>
          <p>The (encrypted) Network Session Encryption Key.</p>
          <p><code>required</code></p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:GetRootKeysRequest">Message <code>GetRootKeysRequest</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "ids": {},
  "provisioner_id": "",
  "provisioning_data": {},
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
          <p>End device identifiers to request the root keys for.</p>
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
        <code>provisioner_id</code>
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
          <p>Provisioner that provisioned the end device.</p>
          <p><code>max_len</code>: <code>36</code></p>
          <p><code>pattern</code>: <code>^[a-z0-9](?:[-]?[a-z0-9]){2,}$|^$</code></p>
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
        <code>provisioning_data</code>
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
          <p>Provisioning data for the provisioner.</p>
      </td>
    </tr>
    
  </tbody>
</table>




<h3 id="message:KeyEnvelope">Message <code>KeyEnvelope</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "key": "",
  "kek_label": "",
  "encrypted_key": "",
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
        <code>key</code>
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
          <p>The unencrypted AES key.</p>
          <p><code>ignore_empty</code></p>
          <p><code>len</code>: <code>16</code></p>
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
        <code>kek_label</code>
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
          <p>The label of the RFC 3394 key-encryption-key (KEK) that was used to encrypt the key.</p>
          <p><code>max_len</code>: <code>2048</code></p>
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
        <code>encrypted_key</code>
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
          <p><code>max_len</code>: <code>1024</code></p>
      </td>
    </tr>
    
  </tbody>
</table>



## Enums



<h3 id="enum:JoinRequestType">Enum <code>JoinRequestType</code></h3>
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
      <td><code>REJOIN_CONTEXT</code></td>
      <td><code>0</code></td>
      <td> Resets DevAddr, Session Keys, Frame Counters, Radio Parameters.</td>
    </tr>
    <tr>
      <td><code>REJOIN_SESSION</code></td>
      <td><code>1</code></td>
      <td> Equivalent to the initial JoinRequest.</td>
    </tr>
    <tr>
      <td><code>REJOIN_KEYS</code></td>
      <td><code>2</code></td>
      <td> Resets DevAddr, Session Keys, Frame Counters, while keeping the Radio Parameters.</td>
    </tr>
    <tr>
      <td><code>JOIN</code></td>
      <td><code>255</code></td>
      <td> Normal join-request.</td>
    </tr>
  </tbody>
</table>




<h3 id="enum:MACVersion">Enum <code>MACVersion</code></h3>
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
      <td><code>MAC_UNKNOWN</code></td>
      <td><code>0</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>MAC_V1_0</code></td>
      <td><code>1</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>MAC_V1_0_1</code></td>
      <td><code>2</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>MAC_V1_0_2</code></td>
      <td><code>3</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>MAC_V1_1</code></td>
      <td><code>4</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>MAC_V1_0_3</code></td>
      <td><code>5</code></td>
      <td> </td>
    </tr>
    <tr>
      <td><code>MAC_V1_0_4</code></td>
      <td><code>6</code></td>
      <td> </td>
    </tr>
  </tbody>
</table>






	

	

	

	

	

	

	

	

	


