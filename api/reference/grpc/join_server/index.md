# Join Server APIs

> List of Join Server APIs.

Source: https://www.thethingsindustries.com/docs/api/reference/grpc/join_server/


List of Join Server APIs.

## The `Js` service




<table class="api">
  <tbody>
    <tr>
      <th style="width: 150px">
        Method
      </th>
      <td>
        <code>Js.GetJoinEUIPrefixes</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        Request the JoinEUI prefixes that are configured for this Join Server.
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
        <a href="#message:JoinEUIPrefixes"><code>JoinEUIPrefixes</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/js/join_eui_prefixes</code></p>
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
        <code>Js.GetDefaultJoinEUI</code>
      </td>
    </tr>
    <tr>
      <th>
        Description
      </th>
      <td>
        Request the default JoinEUI that is configured for this Join Server.
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
        <a href="#message:GetDefaultJoinEUIResponse"><code>GetDefaultJoinEUIResponse</code></a>
        
      </td>
    </tr>
    <tr>
      <th>
        HTTP bindings
      </th>
      <td>
        <p><code>GET</code> <code>/api/v3/js/default_join_eui</code></p>
      </td>
    </tr>
  </tbody>
</table>


## Messages


<h3 id="message:JoinEUIPrefix">Message <code>JoinEUIPrefix</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "join_eui": "",
  "length": 0,
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
        <code>length</code>
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




<h3 id="message:JoinEUIPrefixes">Message <code>JoinEUIPrefixes</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "prefixes": [],
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
        <code>prefixes</code>
      </td>
    </tr>
    <tr>
      <th>
        Type
      </th>
      <td>
        
          
              
                
              
          
        
        repeated 
  
    
    <a href="#message:JoinEUIPrefix">
  
  <code>
    
    JoinEUIPrefix
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




<h3 id="message:GetDefaultJoinEUIResponse">Message <code>GetDefaultJoinEUIResponse</code></h3>

<details><summary>Show object example</summary>
<pre><code>{
  "join_eui": "",
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



## Enums





	


