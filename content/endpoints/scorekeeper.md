## Scorekeeper

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request scorekeepers and their corresponding information.

### List scorekeepers

Returns an array of scorekeeper objects, each containing their database ID,
name, slug string and gender.

```endpoint
GET /v1.0/scorekeepers
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers
```

```python
scorekeeper.info.retrieve_all(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "scorekeepers": [
            {
                "id": 11,
                "name": "Bill Kurtis",
                "slug": "bill-kurtis",
                "gender": "M"
            },
            {
                "id": 10,
                "name": "Bob Garfield",
                "slug": "bob-garfield",
                "gender": "M"
            },
            ...
        ]
    }
}
```

### List scorekeepers with details

Returns an array of scorekeeper objects, each containing their database ID,
name, slug string, gender and an array of their appearances.

The array is sorted by scorekeeper name and scorekeeper apperances are sorted
by show date.

```endpoint
GET /v1.0/scorekeepers/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/details
```

```python
scorekeeper.details.retrieve_all(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "scorekeepers": [
            {
                "id": 11,
                "name": "Bill Kurtis",
                "slug": "bill-kurtis",
                "gender": "M",
                "appearances": {
                    "count": {
                        "regular_shows": 226,
                        "all_shows": 278
                    },
                    "shows": [
                        {
                            "show_id": 760,
                            "date": "2012-08-18",
                            "best_of": false,
                            "repeat_show": false,
                            "guest": true,
                            "description": "Legendary Anchorman"
                        },
                        {
                            "show_id": 763,
                            "date": "2012-09-08",
                            "best_of": false,
                            "repeat_show": false,
                            "guest": true,
                            "description": "Legendary Anchorman"
                        },
                        ...
                    ]
                }
            },
            {
                "id": 10,
                "name": "Bob Garfield",
                "slug": "bob-garfield",
                "gender": "M",
                "appearances": {
                    "count": {
                        "regular_shows": 1,
                        "all_shows": 1
                    },
                    "shows": [
                        {
                            "show_id": 328,
                            "date": "1998-08-22",
                            "best_of": false,
                            "repeat_show": false,
                            "guest": true,
                            "description": null
                        }
                    ]
                }
            },
            ...
        ]
    }
}
```

### Retrieve a scorekeeper

Returns a scorekeeper object containing their name, slug string and gender.

```endpoint
GET https://api.wwdt.me/v1.0/scorekeepers/{scorekeeper_id}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/{scorekeeper_id}
```

```python
scorekeeper.info.retrieve_by_id(host_id=11, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "scorekeeper": {
            "id": 11,
            "name": "Bill Kurtis",
            "slug": "bill-kurtis",
            "gender": "M"
        }
    }
}
```

### Retrieve a scorekeeper with details

Returns a scorekeeper object containing their name, slug string, gender, and an
array of their appearances. Scorekeeper appearances are sorted by show date.

```endpoint
GET https://api.wwdt.me/v1.0/scorekeepers/{scorekeeper_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/{scorekeeper_id}/details
```

```python
scorekeeper.details.retrieve_by_id(scorekeeper_id=11, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "scorekeeper": {
            "id": 11,
            "name": "Bill Kurtis",
            "slug": "bill-kurtis",
            "gender": "M",
            "appearances": {
                "count": {
                    "regular_shows": 226,
                    "all_shows": 278
                },
                "shows": [
                    {
                        "show_id": 760,
                        "date": "2012-08-18",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true,
                        "description": "Legendary Anchorman"
                    },
                    {
                        "show_id": 763,
                        "date": "2012-09-08",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true,
                        "description": "Legendary Anchorman"
                    },
                    ...
                ]
            }
        }
    }
}
```

### Retrieve a scorekeeper by slug string

Returns a scorekeeper object containing their database ID, name, and gender.

```endpoint
GET https://api.wwdt.me/v1.0/scorekeepers/slug/{scorekeeper_slug}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/slug/{scorekeeper_slug}
```

```python
scorekeeper.info.retrieve_by_slug(scorekeeper_slug="korva-coleman", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "scorekeeper": {
            "id": 2,
            "name": "Korva Coleman",
            "slug": "korva-coleman",
            "gender": "F"
        }
    }
}
```

### Retrieve a scorekeeper with details by slug string

Returns a scorekeeper object containing their database ID, name, gender and an
array of their appearances. Scorekeeper appearances are sorted by show date.

```endpoint
GET https://api.wwdt.me/v1.0/scorekeepers/slug/{scorekeeper_slug}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/slug/{scorekeeper_slug}/details
```

```python
scorekeeper.details.retrieve_by_slug(scorekeeper_slug="korva-coleman", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "scorekeeper": {
            "id": 2,
            "name": "Korva Coleman",
            "slug": "korva-coleman",
            "gender": "F",
            "appearances": {
                "count": {
                    "regular_shows": 14,
                    "all_shows": 14
                },
                "shows": [
                    {
                        "show_id": 75,
                        "date": "2006-02-04",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true,
                        "description": null
                    },
                    {
                        "show_id": 74,
                        "date": "2006-02-11",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true,
                        "description": null
                    },
                    ...
                ]
            }
        }
    }
}
```