# Gateway Round Trip Times

> Gateway RTT

Source: https://www.thethingsindustries.com/docs/hardware/gateways/concepts/gateway-rtt/


The Things Stack records Round Trip Times (RTT) between the Gateway Server and Gateways which act as a measure of latency.

This section explains how The Things Stack records and uses these values.

## Background

Since The Things Stack communicates with gateways over the internet, a latency of transmitted messages is expected. This latency is not an issue for uplinks, but for downlinks, since the Rx windows are at specific intervals, the The Things Stack needs to be aware of network latency.

For UDP gateways, the RTT is the time difference between the moment a downlink message was **sent** and the moment when a corresponding valid Tx ACK was **received**.

For LoRa Basics™ Station gateways, the `RefTime` parameter that is sent on the Tx Confirmation message is used as the RTT. There are safeguards in place to make sure that a misbehaving gateway doesn't skew the RTT measurement. If the `RefTime` value is greater than 10 seconds, it is considered invalid.

## Downlink Scheduling

The Gateway Server uses RTT values to adjust downlink time when scheduling downlinks. The Things Stack by default stores a maximum of 20 recent RTT entries. Also, only those that were recorded within the the last 30 mins are considered.

When scheduling downlinks, if there are 5 or more RTT values that have been recorded in the last 30 mins, The Things Stack gets the 90th percentile value of these entries and uses that as the RTT. This value is then offset with either the gateway timestamp or the gateway absolute time (if the gateway has GPS) on the downlink that is scheduled.

If there are are lesser than 5 RTT entries in the past 30 mins, the downlink is scheduled **without** offsetting the RTT.

## Querying RTT values

To query the RTT Values for each gateway can be found in the Gateway Connection stats.

<div class="notification is-info">
  <p class="title">Command-line interface only</p>
  <p>The instructions below use the command-line interface (CLI).</p>
  
  
  <div class="buttons">
    <a class="button is-primary is-outlined" href="https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/">Learn how to install the CLI</a>
  </div>
</div>


```bash
ttn-lw-cli gateways get-connection-stats <gateway-id>
```

The following is an example:

```json
{
  "round_trip_times": {
    "min": "3.788374514s",
    "max": "3.788374514s",
    "median": "3.788374514s",
    "count": 1
  }
}
```

## Troubleshooting

If the RTT values are high (ex: 5 seconds or more), check that the internet connection on the gateway is working properly. High RTT values are typically observed in Gateways with an LTE backhaul.

