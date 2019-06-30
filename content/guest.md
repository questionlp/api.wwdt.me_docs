## Guest

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request Not My Job guests and guest information.

### List guests

List all Not My Job guests

```endpoint
GET /v1.0/guests
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/guests
```

#### Example response

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
            ...
        ]
    }
}
```

### List guest details

List all Not My Job guests along with their appearances and scores

```endpoint
GET /v1.0/guests/details
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/guests/details
```

### Example response

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
            ...
        ]
    }
}
```

### Retrieve a guest

Get information for a specific Not My Job guest

```endpoint
GET https://api.wwdt.me/v1.0/guests/{guest_id}
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/guests/{guest_id}
```

#### Example response

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

### Retrieve guest details

Get information and appearances for a specific Not My Job guest

```endpoint
GET https://api.wwdt.me/v1.0/guests/{guest_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/guests/{guest_id}/details
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
                    ...
                ]
            }
        }
    }
}
```