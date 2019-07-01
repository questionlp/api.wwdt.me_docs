## Host

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request hosts and their corresponding information.

### List hosts

List all show hosts

```endpoint
GET /v1.0/hosts
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/hosts
```

#### Example response

```json

```

### List host details

List all show hosts along with their appearances and scores

```endpoint
GET /v1.0/hosts/details
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/details
```

### Example response

```json

```

### Retrieve a host

Get information for a specific show host using the host's database ID

```endpoint
GET https://api.wwdt.me/v1.0/hosts/{host_id}
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/{host_id}
```

#### Example response

```json

```

### Retrieve host details

Get information and appearances for a specific show host using the host's database ID

```endpoint
GET https://api.wwdt.me/v1.0/hosts/{host_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/{host_id}/details
```

#### Example Response

```json

```

### Retrieve a host by slug string

Get information for a specific show host using the host's slug string

```endpoint
GET https://api.wwdt.me/v1.0/hosts/slug/{host_slug}
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/slug/{host_slug}
```

#### Example response

```json

```

### Retrieve host details by slug string

Get information and appearances for a specific show host using the host's slug string

```endpoint
GET https://api.wwdt.me/v1.0/hosts/slug/{host_slug}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/slug/{host_slug}/details
```

#### Example Response

```json

```