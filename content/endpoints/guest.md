## Guest

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to
request Not My Job guests and their corresponding information.

### List guests

Returns an array of guest objects, each containing their database ID, name and
slug string.

The array is sorted by guest name.

```endpoint
GET /v1.0/guests
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/guests
```

```python
guest.info.retrieve_all(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "guests": [
            {
                "id": 452,
                "name": "\"Dr. Phil\" McGraw",
                "slug": "dr-phil-mcgraw"
            },
            {
                "id": 25,
                "name": "\"Weird Al\" Yankovic",
                "slug": "weird-al-yankovic"
            },
            ...
        ]
    }
}
```

### List guests with details

Returns an array of guest objects, each containing their database ID, name,
slug string and an array of their appearances.

The array is sorted by guest name and guest apperances are sorted by show date.

```endpoint
GET /v1.0/guests/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/guests/details
```

```python
guest.details.retrieve_all(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "guests": [
            {
                "id": 452,
                "name": "\"Dr. Phil\" McGraw",
                "slug": "dr-phil-mcgraw",
                "appearances": {
                    "count": {
                        "regular_shows": 1,
                        "all_shows": 1
                    },
                    "shows": [
                        {
                            "date": "2008-10-04",
                            "best_of": false,
                            "repeat_show": false,
                            "score": 1,
                            "score_exception": false
                        }
                    ]
                }
            },
            {
                "id": 25,
                "name": "\"Weird Al\" Yankovic",
                "slug": "weird-al-yankovic",
                "appearances": {
                    "count": {
                        "regular_shows": 1,
                        "all_shows": 1
                    },
                    "shows": [
                        {
                            "date": "2007-01-20",
                            "best_of": false,
                            "repeat_show": false,
                            "score": 2,
                            "score_exception": false
                        }
                    ]
                }
            },
            ...
        ]
    }
}
```

### Retrieve a guest

Returns a guest object containing their name and slug string.

```endpoint
GET https://api.wwdt.me/v1.0/guests/{guest_id}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/guests/{guest_id}
```

```python
guest.info.retrieve_by_id(guest_id=2, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "guest": {
            "id": 2,
            "name": "Stephen Breyer",
            "slug": "stephen-breyer"
        }
    }
}
```

### Retrieve a guest with details

Returns a guest object containing their name, slug string and an array of their
appearances. Guest appearances are sorted by show date.

```endpoint
GET https://api.wwdt.me/v1.0/guests/{guest_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/guests/{guest_id}/details
```

```python
guest.details.retrieve_by_id(guest_id=2, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "guest": {
            "id": 2,
            "name": "Stephen Breyer",
            "slug": "stephen-breyer",
            "appearances": {
                "count": {
                    "regular_shows": 1,
                    "all_shows": 4
                },
                "shows": [
                    {
                        "date": "2007-03-24",
                        "best_of": false,
                        "repeat_show": false,
                        "score": 0,
                        "score_exception": false
                    },
                    {
                        "date": "2007-07-07",
                        "best_of": true,
                        "repeat_show": false,
                        "score": 0,
                        "score_exception": false
                    },
                    ...
                ]
            }
        }
    }
}
```

### Retrieve a guest by slug string

Returns a guest object containing their database ID and name.

```endpoint
GET https://api.wwdt.me/v1.0/guests/slug/{guest_slug}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/guests/slug/{guest_slug}
```

```python
guest.info.retrieve_by_slug(guest_slug="drew-carey", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "guest": {
            "id": 198,
            "name": "Drew Carey",
            "slug": "drew-carey"
        }
    }
}
```

### Retrieve a guest with details by slug string

Returns a guest object containing their database ID, name and an array of their
appearances. Guest appearances are sorted by show date.

```endpoint
GET https://api.wwdt.me/v1.0/guests/slug/{guest_slug}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/guests/slug/{guest_slug}/details
```

```python
guest.details.retrieve_by_slug(guest_slug="drew-carey", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "guest": {
            "id": 198,
            "name": "Drew Carey",
            "slug": "drew-carey",
            "appearances": {
                "count": {
                    "regular_shows": 2,
                    "all_shows": 3
                },
                "shows": [
                    {
                        "date": "2008-02-23",
                        "best_of": false,
                        "repeat_show": false,
                        "score": 2,
                        "score_exception": false
                    },
                    {
                        "date": "2009-02-14",
                        "best_of": true,
                        "repeat_show": false,
                        "score": 2,
                        "score_exception": false
                    },
                    ...
                ]
            }
        }
    }
}
```
