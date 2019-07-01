## Location

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request show locations and their corresponding information.

### List locations

List all show locations, sorted by state, city and venue name

```endpoint
GET /v1.0/locations
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/locations
```

```python
location.retrieve_all(database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "locations": [
            {
                "id": 139,
                "city": "Fairbanks",
                "state": "AK",
                "venue": "Davis Concert Hall"
            },
            {
                "id": 127,
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

List all show locations along with their recordings, sorted by state, city, venue name and recording date

```endpoint
GET /v1.0/locations/recordings
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/locations/recordings
```

```python
location.retrieve_all_recordings(database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "locations": [
            {
                "id": 139,
                "city": "Fairbanks",
                "state": "AK",
                "venue": "Davis Concert Hall",
                "recordings": [
                    {
                        "show_id": 706,
                        "date": "2011-08-13",
                        "best_of": false,
                        "repeat_show": false
                    }
                ]
            },
            {
                "id": 127,
                "city": "Birmingham",
                "state": "AL",
                "venue": "Samford University Wright Center",
                "recordings": [
                    {
                        "show_id": 506,
                        "date": "2008-03-01",
                        "best_of": false,
                        "repeat_show": false
                    }
                ]
            },
            ...
        ]
    }
}
```

### Retrieve a location

Get information for a specific show location using the location's database ID

```endpoint
GET https://api.wwdt.me/v1.0/locations/{location_id}
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/locations/{location_id}
```

```python
location.retrieve_by_id(location_id=2, database_connection=database_connection)
```

#### Example response

```json
{
    "status": "success",
    "data": {
        "location": {
            "id": 2,
            "city": "Chicago",
            "state": "IL",
            "venue": "Chase Auditorium"
        }
    }
}
```

### Retrieve a location with list of recordings

Get show recordings for a specific show location using the location's database ID, sorted by recording date

```endpoint
GET https://api.wwdt.me/v1.0/locations/{location_id}/recordings
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/locations/{location_id}/recordings
```

```python
location.retrieve_recordings_by_id(location_id=2, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "location": {
            "id": 2,
            "city": "Chicago",
            "state": "IL",
            "venue": "Chase Auditorium",
            "recordings": [
                {
                    "show_id": 165,
                    "date": "2004-02-28",
                    "best_of": false,
                    "repeat_show": false
                },
                {
                    "show_id": 170,
                    "date": "2004-04-03",
                    "best_of": false,
                    "repeat_show": false
                },
                ...
            ]
        }
    }
}
```
