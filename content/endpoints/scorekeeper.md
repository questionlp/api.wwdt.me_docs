## Scorekeeper

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request scorekeepers and their corresponding information.

### List scorekeepers

List all show scorekeepers, sorted by scorekeeper name

```endpoint
GET /v1.0/scorekeepers
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers
```

```python
scorekeeper.retrieve_all(database_connection=database_connection)
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

List all scorekeepers along with their appearances and, if available, description, sorted by scorekeeper name and appearance date

```endpoint
GET /v1.0/scorekeepers/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/details
```

```python
scorekeeper.retrieve_all_details(database_connection=database_connection)
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
                            "date": "2012-08-18",
                            "best_of": false,
                            "repeat_show": false,
                            "guest": true,
                            "description": "Legendary Anchorman"
                        },
                        {
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

Get information for a specific scorekeepers using the scorekeeper's database ID

```endpoint
GET https://api.wwdt.me/v1.0/scorekeepers/{scorekeeper_id}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/{scorekeeper_id}
```

```python
scorekeeper.retrieve_by_id(host_id=11, database_connection=database_connection)
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

Get appearances and, if available, description for a specific scorekeeper using the scorekeeper's database ID, sorted by appearance date

```endpoint
GET https://api.wwdt.me/v1.0/scorekeepers/{scorekeeper_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/{scorekeeper_id}/details
```

```python
scorekeeper.retrieve_details_by_id(scorekeeper_id=11, database_connection=database_connection)
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
                        "date": "2012-08-18",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true,
                        "description": "Legendary Anchorman"
                    },
                    {
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

Get information for a specific scorekeeper using the scorekeeper's slug string

```endpoint
GET https://api.wwdt.me/v1.0/scorekeepers/slug/{scorekeeper_slug}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/slug/{scorekeeper_slug}
```

```python
scorekeeper.retrieve_by_slug(scorekeeper_slug="korva-coleman", database_connection=database_connection)
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

Get information and, if available, description for a specific scorekeeper using the scorekeeper's slug string, sorted by appearance date

```endpoint
GET https://api.wwdt.me/v1.0/scorekeepers/slug/{scorekeeper_slug}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/scorekeepers/slug/{scorekeeper_slug}/details
```

```python
scorekeeper.retrieve_details_by_slug(scorekeeper_slug="korva-coleman", database_connection=database_connection)
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
                        "date": "2006-02-04",
                        "best_of": false,
                        "repeat_show": false,
                        "guest": true,
                        "description": null
                    },
                    {
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