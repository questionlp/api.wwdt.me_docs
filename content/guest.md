## Guest

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request Not My Job guests and their corresponding information.

### List guests

List all Not My Job guests, sorted by guest name

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

### List guest details

List all Not My Job guests along with their appearances and scores, sorted by guest name and appearance date

```endpoint
GET /v1.0/guests/details
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/guests/details
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

Get information for a specific Not My Job guest using the guest's database ID

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

Get information and appearances for a specific Not My Job guest using the guest's database ID, sorted by appearance date

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

Get information for a specific Not My Job guest using the guest's slug string

```endpoint
GET https://api.wwdt.me/v1.0/guests/slug/{guest_slug}
```

#### Example request

```curl
$ curl https://api.wwdt.me/v1.0/guests/slug/{guest_slug}
```

#### Example response

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

### Retrieve guest details by slug string

Get information and appearances for a specific Not My Job guest using the guest's slug string, sorted by appearance date

```endpoint
GET https://api.wwdt.me/v1.0/guests/slug/{guest_slug}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/guests/slug/{guest_slug}/details
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