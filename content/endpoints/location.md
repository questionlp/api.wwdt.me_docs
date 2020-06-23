## Location

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request show locations and their corresponding information.

### List locations

Returns an array of location objects, each containing the database ID, city,
state and venue.

The array is ordered by city, state and then venue name.

```endpoint
GET /v1.0/locations
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/locations
```

```python
location.info.retrieve_all(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "locations": [
            {
                "id": 139,
                "slug": "davis-concert-hall-fairbanks-ak",
                "city": "Fairbanks",
                "state": "AK",
                "venue": "Davis Concert Hall"
            },
            {
                "id": 127,
                "slug": "samford-university-wright-center-birmingham-al",
                "city": "Birmingham",
                "state": "AL",
                "venue": "Samford University Wright Center"
            },
            ...
        ]
    }
}
```

### List locations and recordings

Returns an array of location objects, each containing the database ID, city,
state, venue and an array of recordings.

The array is ordered by city, state and then venue name.

```endpoint
GET /v1.0/locations/recordings
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/locations/recordings
```

```python
location.details.retrieve_all_recordings(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "locations": [
            {
                "id": 139,
                "slug": "davis-concert-hall-fairbanks-ak",
                "city": "Fairbanks",
                "state": "AK",
                "venue": "Davis Concert Hall",
                "recordings": {
                    "count": {
                        "regular_shows": 1,
                        "all_shows": 1
                    },
                    "shows": [
                        {
                            "show_id": 706,
                            "date": "2011-08-13",
                            "best_of": false,
                            "repeat_show": false
                        }
                    ]
                }
            },
            {
                "id": 127,
                "slug": "samford-university-wright-center-birmingham-al",
                "city": "Birmingham",
                "state": "AL",
                "venue": "Samford University Wright Center",
                "recordings": {
                    "count": {
                        "regular_shows": 1,
                        "all_shows": 1
                    },
                    "shows": [
                        {
                            "show_id": 506,
                            "date": "2008-03-01",
                            "best_of": false,
                            "repeat_show": false
                        }
                    ]
                }
            },
            ...
        ]
    }
}
```

### Retrieve a location

Returns a location object containing the database ID, city, state and venue.

```endpoint
GET https://api.wwdt.me/v1.0/locations/{location_id}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/locations/{location_id}
```

```python
location.info.retrieve_by_id(location_id=2, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "location": {
            "id": 2,
            "slug": "chase-auditorium-chicago-il",
            "city": "Chicago",
            "state": "IL",
            "venue": "Chase Auditorium"
        }
    }
}
```

### Retrieve a location with list of recordings

Returns a location object containing the database ID, city, state, venue and
an array of recordings.

```endpoint
GET https://api.wwdt.me/v1.0/locations/{location_id}/recordings
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/locations/{location_id}/recordings
```

```python
location.details.retrieve_recordings_by_id(location_id=2, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "location": {
            "id": 2,
            "slug": "chase-auditorium-chicago-il",
            "city": "Chicago",
            "state": "IL",
            "venue": "Chase Auditorium",
            "recordings": {
                "count": {
                    "regular_shows": 481,
                    "all_shows": 573
                },
                "shows": [
                    {
                        "show_id": 157,
                        "date": "2004-01-03",
                        "best_of": false,
                        "repeat_show": false
                    },
                    {
                        "show_id": 165,
                        "date": "2004-02-28",
                        "best_of": false,
                        "repeat_show": false
                    },
                    ...
                ]
            }
        }
    }
}
```
