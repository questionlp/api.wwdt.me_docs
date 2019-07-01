## Host

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request hosts and their corresponding information.

### List hosts

List all show hosts, sorted by host name

```endpoint
GET /v1.0/hosts
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/hosts
```

```python
host.retrieve_all(database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "hosts": [
            {
                "id": 3,
                "name": "Adam Felber",
                "slug": "adam-felber",
                "gender": "M"
            },
            {
                "id": 7,
                "name": "Bill Radke",
                "slug": "bill-radke",
                "gender": "M"
            },
            ...
        ]
    }
}
```

### List host details

List all show hosts along with their appearances and scores, sorted by host name and appearance date

```endpoint
GET /v1.0/hosts/details
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/details
```

```python
host.retrieve_all_details(database_connection=database_connection)
```

### Example response

```json
{
    "status": "success",
    "data": {
        "hosts": [
            {
                "id": 3,
                "name": "Adam Felber",
                "slug": "adam-felber",
                "gender": "M",
                "appearances": {
                    "count": {
                        "regular_shows": 6,
                        "all_shows": 6
                    },
                    "shows": [
                        {
                            "date": "2000-08-19",
                            "best_of": false,
                            "repeat_show": false,
                            "guest": true
                        },
                        {
                            "date": "2001-08-25",
                            "best_of": false,
                            "repeat_show": false,
                            "guest": true
                        },
                        ...
                    ]
                }
            },
            ...
        ]
    }
}
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

```python
host.retrieve_by_id(host_id=2, database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "host": {
            "id": 2,
            "name": "Luke Burbank",
            "slug": "luke-burbank",
            "gender": "M"
        }
    }
}
```

### Retrieve host details

Get information and appearances for a specific show host using the host's database ID, sorted by appearance date

```endpoint
GET https://api.wwdt.me/v1.0/hosts/{host_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/{host_id}/details
```

```python
host.retrieve_details_by_id(host_id=2, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "host": {
            "id": 2,
            "name": "Luke Burbank",
            "slug": "luke-burbank",
            "gender": "M",
            "appearances": {
                "count": {
                    "regular_shows": 5,
                    "all_shows": 5
                },
                "shows": [
                    {
                        "date": "2006-08-12",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true
                    },
                    {
                        "date": "2006-08-19",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true
                    },
                    ...
                ]
            }
        }
    }
}
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

```python
host.retrieve_by_slug(host_slug="tom-hanks", database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "host": {
            "id": 15,
            "name": "Tom Hanks",
            "slug": "tom-hanks",
            "gender": "M"
        }
    }
}
```

### Retrieve host details by slug string

Get information and appearances for a specific show host using the host's slug string, sorted by appearance date

```endpoint
GET https://api.wwdt.me/v1.0/hosts/slug/{host_slug}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/slug/{host_slug}/details
```

```python
host.retrieve_details_by_slug(host_slug="tom-hanks", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "host": {
            "id": 15,
            "name": "Tom Hanks",
            "slug": "tom-hanks",
            "gender": "M",
            "appearances": {
                "count": {
                    "regular_shows": 1,
                    "all_shows": 2
                },
                "shows": [
                    {
                        "date": "2017-01-14",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true
                    },
                    {
                        "date": "2017-08-26",
                        "best_of": false,
                        "repeat_show": true,
                        "guest": true
                    }
                ]
            }
        }
    }
}
```