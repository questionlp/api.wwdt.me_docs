## Panelist

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request panelists and their corresponding information.

### List panelists

List all panelists, sorted by panelists name

```endpoint
GET /v1.0/panelists
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/panelists
```

```python
panelist.retrieve_all(database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "panelists": [
            {
                "id": 6,
                "name": "Aamer Haleem",
                "slug": "aamer-haleem",
                "gender": "M"
            },
            {
                "id": 55,
                "name": "Adam Burke",
                "slug": "adam-burke",
                "gender": "M"
            },
            ...
        ]
    }
}
```

### List panelists with details

List all panelist along with their statistics, appearances and scores, sorted by panelists name and appearance date

```endpoint
GET /v1.0/panelists/details
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/details
```

```python
panelist.retrieve_all_details(database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "panelists": [
            {
                "id": 6,
                "name": "Aamer Haleem",
                "gender": "M",
                "slug": "aamer-haleem",
                "statistics": {
                    "scoring": {
                        "minimum": 7,
                        "maximum": 12,
                        "mean": 10.2857,
                        "median": 11,
                        "standard_deviation": 1.906,
                        "total": 72
                    },
                    "ranking": {
                        "rank": {
                            "first": 0,
                            "first_tied": 0,
                            "second": 0,
                            "second_tied": 1,
                            "third": 6
                        },
                        "percentage": {
                            "first": 0,
                            "first_tied": 0,
                            "second": 0,
                            "second_tied": 14.2857,
                            "third": 85.7143
                        }
                    }
                },
                "appearances": {
                    "count": {
                        "regular_shows": 7,
                        "all_shows": 9,
                        "shows_with_scores": 7
                    },
                    "shows": [
                        {
                            "date": "2005-03-19",
                            "best_of": false,
                            "repeat_show": false,
                            "lightning_round_start": null,
                            "lightning_round_correct": null,
                            "score": 12,
                            "rank": "3"
                        },
                        {
                            "date": "2005-04-09",
                            "best_of": false,
                            "repeat_show": false,
                            "lightning_round_start": null,
                            "lightning_round_correct": null,
                            "score": 12,
                            "rank": "3"
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

### Retrieve a panelist

Get information for a specific panelist using the panelists's database ID

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}
```

```python
panelist.retrieve_by_id(panelist_id=14, database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "panelist": {
            "id": 14,
            "name": "Luke Burbank",
            "gender": "M",
            "slug": "luke-burbank"
        }
    }
}
```

### Retrieve a panelist with details

Get statistics and appearances for a specific panelist using the panelist's database ID, sorted by appearance date

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/details
```

```python
panelist.retrieve_details_by_id(panelist_id=14, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "panelist": {
            "id": 14,
            "name": "Luke Burbank",
            "gender": "M",
            "slug": "luke-burbank",
            "statistics": {
                "scoring": {
                    "minimum": 8,
                    "maximum": 19,
                    "mean": 13.5,
                    "median": 14,
                    "standard_deviation": 2.4777,
                    "total": 972
                },
                "ranking": {
                    "rank": {
                        "first": 16,
                        "first_tied": 14,
                        "second": 20,
                        "second_tied": 4,
                        "third": 18
                    },
                    "percentage": {
                        "first": 22.2222,
                        "first_tied": 19.4444,
                        "second": 27.7778,
                        "second_tied": 5.5556,
                        "third": 25
                    }
                }
            },
            "appearances": {
                "count": {
                    "regular_shows": 73,
                    "all_shows": 129,
                    "shows_with_scores": 72
                },
                "shows": [
                    {
                        "date": "2006-07-01",
                        "best_of": false,
                        "repeat_show": false,
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": 15,
                        "rank": "1"
                    },
                    {
                        "date": "2006-07-29",
                        "best_of": false,
                        "repeat_show": false,
                        "lightning_round_start": 1,
                        "lightning_round_correct": 5,
                        "score": 11,
                        "rank": "3"
                    },
                    ...
                ]
            }
        }
    }
}
```

### Retrieve a panelist by slug string

Get information for a specific panelist using the panelist's slug string

```endpoint
GET https://api.wwdt.me/v1.0/panelists/slug/{panelist_slug}
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/slug/{panelist_slug}
```

```python
panelist.retrieve_by_slug(panelist_slug="faith-salie", database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "panelist": {
            "id": 30,
            "name": "Faith Salie",
            "gender": "F",
            "slug": "faith-salie"
        }
    }
}
```

### Retrieve a panelist with details by slug string

Get information and appearances for a specific panelist using the panelist's slug string, sorted by appearance date

```endpoint
GET https://api.wwdt.me/v1.0/panelists/slug/{panelist_slug}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/slug/{panelist_slug}/details
```

```python
panelist.retrieve_details_by_slug(panelist_slug="faith-salie", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "panelist": {
            "id": 30,
            "name": "Faith Salie",
            "gender": "F",
            "slug": "faith-salie",
            "statistics": {
                "scoring": {
                    "minimum": 9,
                    "maximum": 20,
                    "mean": 14.6047,
                    "median": 15,
                    "standard_deviation": 2.1036,
                    "total": 1256
                },
                "ranking": {
                    "rank": {
                        "first": 45,
                        "first_tied": 7,
                        "second": 21,
                        "second_tied": 3,
                        "third": 10
                    },
                    "percentage": {
                        "first": 52.3256,
                        "first_tied": 8.1395,
                        "second": 24.4186,
                        "second_tied": 3.4884,
                        "third": 11.6279
                    }
                }
            },
            "appearances": {
                "count": {
                    "regular_shows": 87,
                    "all_shows": 139,
                    "shows_with_scores": 86
                },
                "shows": [
                    {
                        "date": "2009-10-17",
                        "best_of": false,
                        "repeat_show": false,
                        "lightning_round_start": 2,
                        "lightning_round_correct": 6,
                        "score": 14,
                        "rank": "3"
                    },
                    {
                        "date": "2009-11-21",
                        "best_of": false,
                        "repeat_show": false,
                        "lightning_round_start": 3,
                        "lightning_round_correct": 6,
                        "score": 15,
                        "rank": "2"
                    },
                    ...
                ]
            }
        }
    }
}
```

### Retrieve panelist scores as lists

Get panelist scores from appearances as two lists, the first list contains panelist's appearance dates and the second list contains panelist's scores, using the panelist's database ID.

Each list is sorted by appearance date.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores
```

```python
panelist.retrieve_scores_list_by_id(panelist_id=14, database_connection=database_connection)
```
#### Example response

```json
{
    "status": "success",
    "data": {
        "scores": {
            "shows": [
                "2006-07-01",
                "2006-07-29",
                ...
            ],
            "scores": [
                15,
                11,
                ...
            ]
        }
    }
}
```

### Retrieve panelist scores as ordered pairs

Get panelist scores from appearances as a list of ordered pairs in the form of: `(show_date, score)`, using the panelist's database ID.

The list is sorted by appearance date.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores/ordered-pair
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores/ordered-pair
```

```python
panelist.retrieve_scores_ordered_pair_by_id(panelist_id=14, database_connection=database_connection)
```
#### Example response

```json
{
    "status": "success",
    "data": {
        "scores": [
            [
                "2006-07-01",
                15
            ],
            [
                "2006-07-29",
                11
            ],
            ...
        ]
    }
}
```

### Retrieve panelist scores as lists by slug string

Get panelist scores from appearances as two lists, the first list contains panelist's appearance dates and the second list contains panelist's scores, using the panelist's slug string.

Each list is sorted by appearance date.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores
```

```python
panelist.retrieve_scores_list_by_id(panelist_slug="faith-salie", database_connection=database_connection)
```
#### Example response

```json
{
    "status": "success",
    "data": {
        "scores": {
            "shows": [
                "2009-10-17",
                "2009-11-21",
                ...
            ],
            "scores": [
                14,
                15,
                ...
            ]
        }
    }
}
```

### Retrieve panelist scores as ordered pairs by slug string

Get panelist scores from appearances as a list of ordered pairs in the form of: `(show_date, score)`, using the panelist's slug string.

The list is sorted by appearance date.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores/ordered-pair
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores/ordered-pair
```

```python
panelist.retrieve_scores_ordered_pair_by_id(panelist_slug="faith-salie", database_connection=database_connection)
```
#### Example response

```json
{
    "status": "success",
    "data": {
        "scores": [
            [
                "2009-10-17",
                14
            ],
            [
                "2009-11-21",
                15
            ],
            ...
        ]
    }
}
```
