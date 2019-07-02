## Response Format

Upon a successful or failed requests or if an error condition is triggered,
the API service responds back with a payload in JSON format with a MIME type
of  `application/json`. Specifically, JSON response is based on the
[JSend](https://github.com/omniti-labs/jsend) specification for its simplicity.

All API service responses will include a status key with either `success`,
`fail` or `error` as its value. See the following sections for more information.

### Success

For successful responses, a `success` status will be returned and the response
object will be returned as part of the `data` key.

#### Example Response

```json
{
    "status": "success",
    "data": {
        "component": "payload"
    }
}
```

In addition to the JSON response being returned in the response body, a status
code of `200` will be returned in the HTTP header(s).

### Fail

For responses that fail due to issues with the user input or where a requested
object cannot be located, a `fail` status will be returned with a reason
included in the `data` key.

#### Example Response

```json
{
    "status": "fail",
    "data": {
        "component": "message"
    }
}
```

In addition to the JSON response being returned in the response body, a status
code of `404` will be returned when a requested object cannot be located.
Other fail conditions will return a `400`.

### Error

For responses that fail during the processing of the request, an `error` status
will be returned and a description of the error will be returned within the
`message` key.

#### Example Response

```json
{
    "status": "error",
    "message": "message"
}
```

In addition to the JSON response being returned in the response body, a status
code of `500` will be returned when an error occurs.