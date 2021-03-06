## Panelist

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request panelists and their corresponding information.

### List panelists

Returns an array of panelist objects, each containing their database ID, name,
slug string and gender.

The array is sorted by panelist name.

```endpoint
GET /v1.0/panelists
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists
```

```python
panelist.info.retrieve_all(database_connection=database_connection)
```

#### Example Response

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

Returns an array of panelist objects, each containing their database ID, name,
slug string, gender, statistics and an array of their appearances.

The array is sorted by panelist name and panelist apperances are sorted by
show date.

```endpoint
GET /v1.0/panelists/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/details
```

```python
panelist.details.retrieve_all(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "panelists": [
            {
                "id": 6,
                "name": "Aamer Haleem",
                "slug": "aamer-haleem",
                "gender": "M",
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
                "bluffs": {
                    "chosen": 0,
                    "correct": 1
                },
                "appearances": {
                    "milestones": {
                        "first": {
                            "show_id": 35,
                            "show_date": "2005-03-19"
                        },
                        "most_recent": {
                            "show_id": 122,
                            "show_date": "2006-11-11"
                        }
                    },
                    "count": {
                        "regular_shows": 7,
                        "all_shows": 9,
                        "shows_with_scores": 7
                    },
                    "shows": [
                        {
                            "show_id": 122,
                            "date": "2005-03-19",
                            "best_of": false,
                            "repeat_show": false,
                            "lightning_round_start": null,
                            "lightning_round_correct": null,
                            "score": 12,
                            "rank": "3"
                        },
                        {
                            "show_id": 119,
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

Returns a panelist object containing their name, slug string and gender.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}
```

```python
panelist.info.retrieve_by_id(panelist_id=14, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "panelist": {
            "id": 14,
            "name": "Luke Burbank",
            "slug": "luke-burbank",
            "gender": "M"
        }
    }
}
```

### Retrieve a panelist with details

Returns a panelist object containing their name, slug string, gender and an
array of their appearances. Panelist appearances are sorted by show date.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/details
```

```python
panelist.details.retrieve_by_id(panelist_id=14, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "panelist": {
            "id": 14,
            "name": "Luke Burbank",
            "slug": "luke-burbank",
            "gender": "M",
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
            "bluffs": {
                "chosen": 16,
                "correct": 29
            },
            "appearances": {
                "milestones": {
                    "first": {
                        "show_id": 3,
                        "show_date": "2006-07-01"
                    },
                    "most_recent": {
                        "show_id": 1119,
                        "show_date": "2019-06-29"
                    }
                },
                "count": {
                    "regular_shows": 73,
                    "all_shows": 129,
                    "shows_with_scores": 72
                },
                "shows": [
                    {
                        "show_id": 54,
                        "date": "2006-07-01",
                        "best_of": false,
                        "repeat_show": false,
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": 15,
                        "rank": "1"
                    },
                    {
                        "show_id": 50,
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

Returns a panelist object containing their database ID, name and gender.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/slug/{panelist_slug}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/slug/{panelist_slug}
```

```python
panelist.info.retrieve_by_slug(panelist_slug="faith-salie", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "panelist": {
            "id": 30,
            "name": "Faith Salie",
            "slug": "faith-salie",
            "gender": "F"
        }
    }
}
```

### Retrieve a panelist with details by slug string

Returns a panelist object containing their database ID, name, gender and an
array of their appearances. Panelist appearances are sorted by show date.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/slug/{panelist_slug}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/slug/{panelist_slug}/details
```

```python
panelist.details.retrieve_by_slug(panelist_slug="faith-salie", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "panelist": {
            "id": 30,
            "name": "Faith Salie",
            "slug": "faith-salie",
            "gender": "F",
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
            "bluffs": {
                "chosen": 27,
                "correct": 35
            },
            "appearances": {
                "milestones": {
                    "first": {
                        "show_id": 611,
                        "show_date": "2009-10-17"
                    },
                    "most_recent": {
                        "show_id": 1133,
                        "show_date": "2019-10-05"
                    }
                },
                "count": {
                    "regular_shows": 87,
                    "all_shows": 139,
                    "shows_with_scores": 86
                },
                "shows": [
                    {
                        "show_id": 611,
                        "date": "2009-10-17",
                        "best_of": false,
                        "repeat_show": false,
                        "lightning_round_start": 2,
                        "lightning_round_correct": 6,
                        "score": 14,
                        "rank": "3"
                    },
                    {
                        "show_id": 616,
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

### Retrieve panelist scores as arrays

Return a scores object containing an array of appearances and an array of
scores corresponding to each appearance for a panelist.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores
```

```python
panelist.info.retrieve_scores_list_by_id(panelist_id=14, database_connection=database_connection)
```
#### Example Response

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

Return a scores object containing an array of ordered pairs corresponding to
each appearance and score.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores/ordered-pair
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores/ordered-pair
```

```python
panelist.info.retrieve_scores_ordered_pair_by_id(panelist_id=14, database_connection=database_connection)
```
#### Example Response

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

### Retrieve panelist scores as arrays by slug string

Return a scores object containing an array of appearances and an array of
scores corresponding to each appearance for a panelist.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores
```

```python
panelist.info.retrieve_scores_list_by_id(panelist_slug="faith-salie", database_connection=database_connection)
```
#### Example Response

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

Return a scores object containing an array of ordered pairs corresponding to
each appearance and score.

```endpoint
GET https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores/ordered-pair
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/panelists/{panelist_id}/scores/ordered-pair
```

```python
panelist.info.retrieve_scores_ordered_pair_by_id(panelist_slug="faith-salie", database_connection=database_connection)
```
#### Example Response

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
