## Host

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request show hosts and their corresponding information.

### List hosts

Returns an array of host objects, each containing their database ID, name, slug
string and gender.

```endpoint
GET /v1.0/hosts
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/hosts
```

```python
host.retrieve_all(database_connection=database_connection)
```

#### Example Response

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

### List hosts with details

Returns an array of host objects, each containing their database ID, name,
slug string, gender and an array of their appearances.

The array is sorted by host name and host apperances are sorted by show date.

```endpoint
GET /v1.0/hosts/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/details
```

```python
host.retrieve_all_details(database_connection=database_connection)
```

#### Example Response

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

Returns a host object containing their name, slug string and gender.

```endpoint
GET https://api.wwdt.me/v1.0/hosts/{host_id}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/{host_id}
```

```python
host.retrieve_by_id(host_id=2, database_connection=database_connection)
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
            "gender": "M"
        }
    }
}
```

### Retrieve a host with details

Returns a host object containing their name, slug string, gender, and an
array of their appearances. Host appearances are sorted by show date.

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

Returns a host object containing their database ID, name and gender.

```endpoint
GET https://api.wwdt.me/v1.0/hosts/slug/{host_slug}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/hosts/slug/{host_slug}
```

```python
host.retrieve_by_slug(host_slug="tom-hanks", database_connection=database_connection)
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
            "gender": "M"
        }
    }
}
```

### Retrieve a host with details by slug string

Returns a host object containing their database ID, name, gender and an array
of their appearances. Host appearances are sorted by show date.

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