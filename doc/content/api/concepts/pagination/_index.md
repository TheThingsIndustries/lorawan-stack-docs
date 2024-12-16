---
title: "Pagination"
description: ""
weight: 3
---

{{% tts %}} supports pagination which is used to control the amount of data returned to the client for a request.

<!--more-->

This section explains how pagination works with HTTP (REST) APIs. For other APIs (ex: gRPC), check the individual sections.

{{% tts %}} supports page based pagination. Clients can use the following two fields (supplied as params) to control the quantity of returned objects.

1. `limit`: The number of objects returned per page (at a time).
2. `page`: The number of the page. A value of `0` is interpreted as the first page.

{{< note "If the request does not set a `limit` value, the default limit set for the RPC is used." />}}

In the following example, there are 10 gateways accessible by the `admin` user in a {{% tts %}} cluster.

Let's list these gateways with a limit of 2 per page.

```bash
 curl -v -H "Authorization: Bearer $API_KEY" https://thethings.example.com/api/v3/users/admin/gateways\?limit\=2\&page\=1
...
< X-Total-Count: 10
...
{"gateways":[{"ids":{"gateway_id":"test-0001","eui":"1111111111111111"},"created_at":"2023-11-24T10:59:39.318638Z","updated_at":"2023-11-24T10:59:39.318639Z"},{"ids":{"gateway_id":"test-0002","eui":"1111111111111112"},"created_at":"2023-11-24T10:59:46.117823Z","updated_at":"2023-11-24T10:59:46.117824Z"}]}
```

The server returns the first two gateways. It also returns an important HTTP header `X-Total-Count`. This is the total count of objects that are accessible for this user with this API.

The client can use `X-Total-Count` and `limit` to calculate the number of pages needed to read all the objects. In this example, it's `X-Total-Count`/`limit` (10/2) = 5 pages.

Now let's get the next page and the last page (5).

```bash
curl -H "Authorization: Bearer $API_KEY" https://thethings.example.com/api/v3/users/admin/gateways\?limit\=2\&page\=2
{"gateways":[{"ids":{"gateway_id":"test-0003","eui":"1111111111111113"},"created_at":"2023-11-24T10:59:52.305276Z","updated_at":"2023-11-24T10:59:52.305276Z"},{"ids":{"gateway_id":"test-0004","eui":"1111111111111114"},"created_at":"2023-11-24T10:59:58.839680Z","updated_at":"2023-11-24T10:59:58.839680Z"}]}
```

```bash
curl -H "Authorization: Bearer $API_KEY" https://thethings.example.com/api/v3/users/admin/gateways\?limit\=2\&page\=5
{"gateways":[{"ids":{"gateway_id":"test-0009","eui":"1111111111111119"},"created_at":"2023-11-24T11:00:26.054201Z","updated_at":"2023-11-24T11:00:26.054202Z"},{"ids":{"gateway_id":"test-000a","eui":"111111111111111A"},"created_at":"2023-11-24T11:00:42.299342Z","updated_at":"2023-11-24T11:00:42.299342Z"}]}
```

Since there are only 5 pages for the `limit` of 2, any page number above 5 will return an empty object.

```bash
curl -H "Authorization: Bearer $API_KEY" https://thethings.example.com/api/v3/users/admin/gateways\?limit\=2\&page\=6
{}
```

Next, we look at the errors that the {{% tts %}} API can return.
