# Frequency Plans

> Frequency plans

Source: https://www.thethingsindustries.com/docs/concepts/features/lorawan/frequency-plans/


This reference contains Frequency Plans that are officially supported by The Things Stack. This list is populated from the [`lorawan-frequency-plans` Github repository](https://github.com/TheThingsNetwork/lorawan-frequency-plans/).

Deployments may also have custom frequency plans configured.

Read more about [Frequency Plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/) and see a list of [Frequency Plans by Country](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country/).

<!-- terms come from /data/frequency-plans. -->


<div class="has-vertical-space">
  <h3 id="eu_863_870">Europe 863-870 MHz (SF12 for RX2)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>EU_863_870</code></td>
        <td><code>EU_863_870</code></td>
        <td><code>868</code></td>
        <td> Default frequency plan for Europe</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="eu_863_870_ttn">Europe 863-870 MHz (SF9 for RX2 - recommended)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>EU_863_870_TTN</code></td>
        <td><code>EU_863_870</code></td>
        <td><code>868</code></td>
        <td> TTN Community Network frequency plan for Europe, using SF9 for RX2</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="eu_863_870_roaming_draft">Europe 863-870 MHz, 6 channels for roaming (Draft)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>EU_863_870_ROAMING_DRAFT</code></td>
        <td><code>EU_863_870</code></td>
        <td><code>868</code></td>
        <td> European 6 channel plan used by major operators to support LoRaWAN Passive Roaming</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="eu_868_1">Europe 868.1 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>EU_868_1</code></td>
        <td><code>EU_863_870</code></td>
        <td><code>868</code></td>
        <td> Single channel frequency plan for Europe (experimental)</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="eu_433">Europe 433 MHz (ITU region 1)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>EU_433</code></td>
        <td><code>EU_433</code></td>
        <td><code>433</code></td>
        <td> Default frequency plan for worldwide 433MHz</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_902_928_fsb_1">United States 902-928 MHz, FSB 1</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_902_928_FSB_1</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for the United States and Canada, using sub-band 1</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_902_928_fsb_2">United States 902-928 MHz, FSB 2 (used by TTN)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_902_928_FSB_2</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for the United States and Canada, using sub-band 2</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_902_928_fsb_3">United States 902-928 MHz, FSB 3</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_902_928_FSB_3</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for the United States and Canada, using sub-band 3</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_902_928_fsb_4">United States 902-928 MHz, FSB 4</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_902_928_FSB_4</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for the United States and Canada, using sub-band 4</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_902_928_fsb_5">United States 902-928 MHz, FSB 5</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_902_928_FSB_5</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for the United States and Canada, using sub-band 5</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_902_928_fsb_6">United States 902-928 MHz, FSB 6</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_902_928_FSB_6</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for the United States and Canada, using sub-band 6</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_902_928_fsb_7">United States 902-928 MHz, FSB 7</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_902_928_FSB_7</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for the United States and Canada, using sub-band 7</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_902_928_fsb_8">United States 902-928 MHz, FSB 8</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_902_928_FSB_8</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for the United States and Canada, using sub-band 8</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="us_903_0">United States 903.0 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>US_903_0</code></td>
        <td><code>US_902_928</code></td>
        <td><code>915</code></td>
        <td> Single channel frequency plan for United States (experimental)</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="au_915_928_fsb_1">Australia 915-928 MHz, FSB 1</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AU_915_928_FSB_1</code></td>
        <td><code>AU_915_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for Australia, using sub-band 1</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="au_915_928_fsb_2">Australia 915-928 MHz, FSB 2 (used by TTN)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AU_915_928_FSB_2</code></td>
        <td><code>AU_915_928</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Australia, using sub-band 2</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="au_915_928_fsb_3">Australia 915-928 MHz, FSB 3</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AU_915_928_FSB_3</code></td>
        <td><code>AU_915_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for Australia, using sub-band 3</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="au_915_928_fsb_4">Australia 915-928 MHz, FSB 4</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AU_915_928_FSB_4</code></td>
        <td><code>AU_915_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for Australia, using sub-band 4</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="au_915_928_fsb_5">Australia 915-928 MHz, FSB 5</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AU_915_928_FSB_5</code></td>
        <td><code>AU_915_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for Australia, using sub-band 5</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="au_915_928_fsb_6">Australia 915-928 MHz, FSB 6</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AU_915_928_FSB_6</code></td>
        <td><code>AU_915_928</code></td>
        <td><code>915</code></td>
        <td> Frequency plan for Australia, using sub-band 6, which overlaps with Asia 923-925 MHz</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="au_915_928_fsb_7">Australia 915-928 MHz, FSB 7</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AU_915_928_FSB_7</code></td>
        <td><code>AU_915_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for Australia, using sub-band 7</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="au_915_928_fsb_8">Australia 915-928 MHz, FSB 8</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AU_915_928_FSB_8</code></td>
        <td><code>AU_915_928</code></td>
        <td><code>915</code></td>
        <td> Default frequency plan for Australia, using sub-band 8</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="cn_470_510_fsb_1">China 470-510 MHz, FSB 1</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>CN_470_510_FSB_1</code></td>
        <td><code>CN_470_510</code></td>
        <td><code>470</code></td>
        <td> Default frequency plan for China, using sub-band 1</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="cn_470_510_fsb_11">China 470-510 MHz, FSB 11 (used by TTN)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>CN_470_510_FSB_11</code></td>
        <td><code>CN_470_510</code></td>
        <td><code>470</code></td>
        <td> TTN Community Network frequency plan for China, using sub-band 11</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_920_923">Asia 920-923 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_920_923</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Asian countries, using frequencies ≤ 923 MHz</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_920_923_lbt">Asia 920-923 MHz with LBT</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_920_923_LBT</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Asian countries, using frequencies ≤ 923 MHz with listen-before-talk</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_920_923_ttn_jp_1">Japan 920-923 MHz with LBT (channels 31-38)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_920_923_TTN_JP_1</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Frequency plan for Japan, using continuous frequencies up to 923.4MHz with LBT.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_920_923_ttn_jp_1_land_mobile">Japan 920-923 MHz with LBT (channels 31-38), Max EIRP 27 dBm</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_920_923_TTN_JP_1_LAND_MOBILE</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Frequency plan for Japanese land mobile station, using continuous frequencies up to 923.4MHz with MAX EIRP 27 dBm and LBT.
(note) A user who installs land mobile station in Japan must apply to Japanese Ministry of Internal Affairs and Communications.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_920_923_ttn_jp_2">Japan 920-923 MHz with LBT (channels 24-27 and 35-38)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_920_923_TTN_JP_2</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Frequency plan for Japan, using top and bottom frequencies ≤ 923.4 MHz with LBT.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_920_923_ttn_jp_3">Japan 920-923 MHz with LBT (channels 24-31)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_920_923_TTN_JP_3</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Frequency plan for Japan (16 channels), using continuous frequencies from 920.6 MHz, expected to be used with AS_920_923_TTN_JP_1.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_920_923_ttn_jp_3_land_mobile">Japan 920-923 MHz with LBT (channels 24-31), Max EIRP 27 dBm</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_920_923_TTN_JP_3_LAND_MOBILE</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Frequency plan for Japanese land mobile station (16 channels), using continuous frequencies from 920.6 MHz with MAX EIRP 27 dBm and LBT, expected to be used with AS_920_923_TTN_JP_1.
(note) A user who installs land mobile station in Japan must apply to Japanese Ministry of Internal Affairs and Communications.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923">Asia 915-928 MHz (AS923 Group 1) with only default channels</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 923.0-923.5 MHz sub-band</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_2">Asia 920-923 MHz (AS923 Group 2) with only default channels</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_2</code></td>
        <td><code>AS_923_2</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 921.4-922.0 MHz sub-band</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_3">Asia 915-921 MHz (AS923 Group 3) with only default channels</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_3</code></td>
        <td><code>AS_923_3</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 916.5-917.0 MHz sub-band</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_4">Asia 917-920 MHz (AS923 Group 4) with only default channels</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_4</code></td>
        <td><code>AS_923_4</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 917.3-917.5 MHz sub-band</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_ndt">Asia 915-928 MHz (AS923 Group 1) with only default channels and dwell time disabled</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_NDT</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 923.0-923.5 MHz sub-band and dwell time disabled</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_dt">Asia 915-928 MHz (AS923 Group 1) with only default channels and dwell time enabled</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_DT</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 923.0-923.5 MHz sub-band and dwell time enabled</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_2_ndt">Asia 920-923 MHz (AS923 Group 2) with only default channels and dwell time disabled</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_2_NDT</code></td>
        <td><code>AS_923_2</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 921.4-922.0 MHz sub-band and dwell time disabled</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_2_dt">Asia 920-923 MHz (AS923 Group 2) with only default channels and dwell time enabled</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_2_DT</code></td>
        <td><code>AS_923_2</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 921.4-922.0 MHz sub-band and dwell time enabled</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_3_ndt">Asia 920-923 MHz (AS923 Group 3) with only default channels and dwell time disabled</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_3_NDT</code></td>
        <td><code>AS_923_3</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 921.4-922.0 MHz sub-band and dwell time disabled</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_3_dt">Asia 920-923 MHz (AS923 Group 3) with only default channels and dwell time enabled</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_3_DT</code></td>
        <td><code>AS_923_3</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 921.4-922.0 MHz sub-band and dwell time enabled</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_4_ndt">Asia 920-923 MHz (AS923 Group 4) with only default channels and dwell time disabled</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_4_NDT</code></td>
        <td><code>AS_923_4</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 921.4-922.0 MHz sub-band and dwell time disabled</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_4_dt">Asia 920-923 MHz (AS923 Group 4) with only default channels and dwell time enabled</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_4_DT</code></td>
        <td><code>AS_923_4</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Asian countries with common channels in the 921.4-922.0 MHz sub-band and dwell time enabled</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_925">Asia 923-925 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_925</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Asian countries, using frequencies ≥ 923 MHz</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_925_lbt">Asia 923-925 MHz with LBT</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_925_LBT</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Asian countries, using frequencies ≥ 923 MHz with listen-before-talk</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_920_923_ttn_au">Asia 920-923 MHz (used by TTN Australia)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_920_923_TTN_AU</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Asia 920-923 MHz in Australia</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="as_923_925_ttn_au">Asia 923-925 MHz (used by TTN Australia - secondary channels)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>AS_923_925_TTN_AU</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Asia 923-925 MHz in Australia. Secondary channels for 16 channel gateways.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="kr_920_923_ttn">South Korea 920-923 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>KR_920_923_TTN</code></td>
        <td><code>KR_920_923</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for South Korea</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="ma_869_870_draft">Morocco 869-870 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>MA_869_870_DRAFT</code></td>
        <td><code>MA_869_870_DRAFT</code></td>
        <td><code>868</code></td>
        <td> Draft frequency plan for Morocco, with 4 channels</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="in_865_867">India 865-867 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>IN_865_867</code></td>
        <td><code>IN_865_867</code></td>
        <td><code>868</code></td>
        <td> Default frequency plan for India</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="ru_864_870_ttn">Russia 864-870 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>RU_864_870_TTN</code></td>
        <td><code>RU_864_870</code></td>
        <td><code>868</code></td>
        <td> TTN Community Network frequency plan for Russia</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="ism_2400_3ch_draft2">LoRa 2.4 GHz with 3 channels (Draft 2)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>ISM_2400_3CH_DRAFT2</code></td>
        <td><code>ISM_2400</code></td>
        <td><code>2450</code></td>
        <td> Global 3 channel plan for LoRa 2.4 GHz (Draft 2)</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="il_917_920_ttn">Israel 917-920 MHz (channels 1-4 and 11-14)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>IL_917_920_TTN</code></td>
        <td><code>AS_923_4</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Israel using channels 1 to 4 and 11 to 14.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="il_917_920_ttn_2">Israel 917-920 MHz (channels 1-7 and 9)</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>IL_917_920_TTN_2</code></td>
        <td><code>AS_923_4</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Israel using channels 1 to 7 and channel 9.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="sg_920_923_ttn">Singapore 920-923 MHz</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>SG_920_923_TTN</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> TTN Community Network frequency plan for Singapore</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <h3 id="uz_923_1">Uzbekistan 915-928 MHz with only default channels</h3>
  <table class="fixed">
    <thead>
      <col width="10px" />
      <col width="10px" />
      <col width="10px" />
      <col width="20px" />
      <tr>
        <th>ID</th>
        <th>LoRaWAN Band ID</th>
        <th>Base Frequency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>UZ_923_1</code></td>
        <td><code>AS_923</code></td>
        <td><code>915</code></td>
        <td> Compatibility frequency plan for Uzbekistan with common channels in the 926.2-926.8 MHz sub-band</td>
      </tr>
    </tbody>
  </table>
</div>



## Pages in this section

- [Adding Frequency Plans](https://www.thethingsindustries.com/docs/concepts/features/lorawan/frequency-plans/adding-frequency-plans/index.md): The Things Stack uses frequency plans from the lorawan-frequency-plans Github repository. To add frequency plans, you may open a pull request on the …

