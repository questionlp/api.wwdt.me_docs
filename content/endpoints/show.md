## Show

This set of Wait Wait... Don't Tell Me! Stats API endpoints can be used to request shows and their corresponding information.

### List Shows

Returns an array of show objects, each containing the database ID, date and
whether the show is a best of show and/or a repeat show.

```endpoint
GET https://api.wwdt.me/v1.0/shows/
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/
```

```python
show.retrieve_all(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "shows": [
            {
                "id": 552,
                "date": "1998-01-03",
                "best_of": false,
                "repeat_show": false
            },
            {
                "id": 553,
                "date": "1998-01-10",
                "best_of": false,
                "repeat_show": false
            },
            ...
        ]
    }
}
```

### List Shows with Details

Returns an array of show objects, each containing the database ID, date,
whether the show is a best of show and/or a repeat show and more detailed
show information.

```endpoint
GET https://api.wwdt.me/v1.0/shows/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/details
```

```python
show.retrieve_all_details(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "show": [
            {
                "id": 552,
                "date": "1998-01-03",
                "best_of": false,
                "repeat_show": false,
                "location": {
                    "city": "Chicago",
                    "state": "IL",
                    "venue": "Chicago Public Radio/WBEZ"
                },
                "description": "Lightning True or False, Gossip, Rumor & Innuendo, Why Should We Know Who You Are?, Double Point Bonus Round, Four Degrees of Separation, Wait Wait I'm Pontificating",
                "notes": null,
                "host": {
                    "id": 10,
                    "name": "Dan Coffey",
                    "slug": "dan-coffey",
                    "guest": false
                },
                "scorekeeper": {
                    "id": 1,
                    "name": "Carl Kasell",
                    "slug": "carl-kasell",
                    "guest": false,
                    "description": null
                },
                "panelists": [
                    {
                        "id": 1,
                        "name": "Roy Blount, Jr.",
                        "slug": "roy-blount-jr",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 13,
                        "name": "Roxanne Roberts",
                        "slug": "roxanne-roberts",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 26,
                        "name": "Peter Sagal",
                        "slug": "peter-sagal",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    }
                ],
                "bluff": {
                    "chosen_panelist": null,
                    "correct_panelist": null
                },
                "guests": null
            },
            {
                "id": 553,
                "date": "1998-01-10",
                "best_of": false,
                "repeat_show": false,
                "location": {
                    "city": "Chicago",
                    "state": "IL",
                    "venue": "Chicago Public Radio/WBEZ"
                },
                "description": "Lightning True or False, Gossip, Rumor & Innuendo, Why Should We Know Who You Are?, Double Point Bonus Round, Radio Photographs, Wait Wait I'm Pontificating",
                "notes": null,
                "host": {
                    "id": 10,
                    "name": "Dan Coffey",
                    "slug": "dan-coffey",
                    "guest": false
                },
                "scorekeeper": {
                    "id": 1,
                    "name": "Carl Kasell",
                    "slug": "carl-kasell",
                    "guest": false,
                    "description": null
                },
                "panelists": [
                    {
                        "id": 13,
                        "name": "Roxanne Roberts",
                        "slug": "roxanne-roberts",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 26,
                        "name": "Peter Sagal",
                        "slug": "peter-sagal",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 19,
                        "name": "Margo Kaufman",
                        "slug": "margo-kaufman",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    }
                ],
                "bluff": {
                    "chosen_panelist": null,
                    "correct_panelist": null
                },
                "guests": null
            },
            ...
        ]
    }
}
```

### Retrieve a show

Returns a show object containing the database ID, date and whether the show is
a best of show and/or a repeat show.

```endpoint
GET https://api.wwdt.me/v1.0/shows/{show_id}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/{show_id}
```

```python
show.retrieve_by_id(show_id=42, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "show": {
            "id": 47,
            "date": "2006-08-19",
            "best_of": false,
            "repeat_show": false
        }
    }
}
```

### Retrieve a show by year, month and day

Returns a show object containing the database ID, date and whether the show is
a best of show and/or a repeat show.

The year value must be a four-digit year.

```endpoint
GET https://api.wwdt.me/v1.0/shows/date/{year}/{month}/{day}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/date/{year}/{month}/{day}
```

```python
show.retrieve_by_date(show_year=2018, show_month=10, show_day=27, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "show": {
            "id": 1083,
            "date": "2018-10-27",
            "best_of": false,
            "repeat_show": false
        }
    }
}
```

### Retrieve a show by ISO date string

Returns a show object containing the database ID, date and whether the show is
a best of show and/or a repeat show.

The ISO date string must be in `YYYY-MM-DD` format.

```endpoint
GET https://api.wwdt.me/v1.0/shows/date/iso/{iso_date}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/date/iso/{iso_date}
```

```python
show.retrieve_by_date_string(show_date='2006-08-19', database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "show": {
            "id": 47,
            "date": "2006-08-19",
            "best_of": false,
            "repeat_show": false
        }
    }
}
```

### Retrieve a show with details

Returns a show object containing the database ID, date, whether the show is a
best of show and/or a repeat show and more detailed show information.

```endpoint
GET https://api.wwdt.me/v1.0/shows/{show_id}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/{show_id}/details
```

```python
show.retrieve_details_by_id(show_id=47, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "show": {
            "id": 47,
            "date": "2006-08-19",
            "best_of": false,
            "repeat_show": false,
            "location": {
                "city": "Chicago",
                "state": "IL",
                "venue": "Chase Auditorium"
            },
            "description": "Who's Carl This Time?, Bluff the Listener about corporate overlords, Not My Job about Mrs. Duke Cunningham, Who's Carl This Time? Round II, Panelist Predictions: what new object will be called a planet?",
            "notes": "Continuation of audience chanting \"Luuuuuuke\", in which Paula retorts Luke's comment of \"...explaining that's people saying my name, not boo-ing\" with \"It's good that you think that... he's got an indomitable spirit, doesn't he? Little fella.\"; Paula stumbles on a question regarding NPR by not knowing who \"Stamberg\" is; the panelists and a listener ended up turning the beginning of Who's Carl This Time? Round II into \"Beauty Chat\" with more chanting of \"Luuuuuuke\".\r\n\r\nPaula answered a Lightning Fill-in-the-Blank question about a certain computer manufacturer's \"exploding\" laptop, which was mentioned in Who's Carl This Time?, Round II by Tom Bodett, which Paula enthusiastically answered with \"Dell!!!\"; in the same round, Paula was asked about Chicagoan's last chance to eat a certain food before a ban takes effect with \"Ahh, heroin!\", in which hilarity ensued.",
            "host": {
                "id": 2,
                "name": "Luke Burbank",
                "slug": "luke-burbank",
                "guest": true
            },
            "scorekeeper": {
                "id": 1,
                "name": "Carl Kasell",
                "slug": "carl-kasell",
                "guest": false,
                "description": null
            },
            "panelists": [
                {
                    "id": 10,
                    "name": "Paula Poundstone",
                    "slug": "paula-poundstone",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": 11,
                    "rank": "1"
                },
                {
                    "id": 2,
                    "name": "Tom Bodett",
                    "slug": "tom-bodett",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": 10,
                    "rank": "2t"
                },
                {
                    "id": 1,
                    "name": "Roy Blount, Jr.",
                    "slug": "roy-blount-jr",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": 10,
                    "rank": "2t"
                }
            ],
            "bluff": {
                "chosen_panelist": null,
                "correct_panelist": null
            },
            "guests": [
                {
                    "id": 51,
                    "name": "Soledad O'Brien",
                    "slug": "soledad-o-brien",
                    "score": 2,
                    "score_exception": false
                }
            ]
        }
    }
}
```

### Retrieve a show with details by year, month and day

Returns a show object containing the database ID, date, whether the show is a
best of show and/or a repeat show and more detailed show information.

The year value must be a four-digit year.

```endpoint
GET https://api.wwdt.me/v1.0/shows/date/{year}/{month}/{day}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/date/{year}/{month}/{day}/details
```

```python
show.retrieve_details_by_date(show_year=2018, show_month=10, show_day=27, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "show": {
            "id": 1083,
            "date": "2018-10-27",
            "best_of": false,
            "repeat_show": false,
            "location": {
                "city": "Chicago",
                "state": "IL",
                "venue": "The Chicago Theatre"
            },
            "description": "Who's Bill This Time?, Bluff the Listener about a science scandal in the news, Not My Job about seagulls and tote bags, Listener Limerick Challenge, Scorekeeper Predictions: what will be the big story on our 40th anniversary show?",
            "notes": "This show is the special 20th anniversary show that was recorded at The Chicago Theatre in downtown Chicago, Illinois and featured a rotating set of panels throughout the show.\n\nFor the Lightning Fill-in-the-Blank segment, the panelists were split into three teams and had Paula Poundstone, Maz Jobrani and Brian Babylon as team captains. Although each panelist on each team got to answer one question during that segment, the score was aggregated at the team level. Since this is not a standard method for scoring, I have assigned the announced score and ranking to the team captain.\n\nMore detail about each panelist's performance on the show will be published at https://blog.wwdt.me/",
            "host": {
                "id": 1,
                "name": "Peter Sagal",
                "slug": "peter-sagal",
                "guest": false
            },
            "scorekeeper": {
                "id": 11,
                "name": "Bill Kurtis",
                "slug": "bill-kurtis",
                "guest": false,
                "description": "Open up your anniversary card everybody. There's a crisp dollar Bill in there for you"
            },
            "panelists": [
                {
                    "id": 35,
                    "name": "Brian Babylon",
                    "slug": "brian-babylon",
                    "lightning_round_start": 0,
                    "lightning_round_correct": 4,
                    "score": 8,
                    "rank": "1"
                },
                {
                    "id": 33,
                    "name": "Maz Jobrani",
                    "slug": "maz-jobrani",
                    "lightning_round_start": 0,
                    "lightning_round_correct": 3,
                    "score": 6,
                    "rank": "2"
                },
                {
                    "id": 10,
                    "name": "Paula Poundstone",
                    "slug": "paula-poundstone",
                    "lightning_round_start": 0,
                    "lightning_round_correct": 1,
                    "score": 2,
                    "rank": "3"
                },
                {
                    "id": 32,
                    "name": "Peter Grosz",
                    "slug": "peter-grosz",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 1,
                    "name": "Roy Blount, Jr.",
                    "slug": "roy-blount-jr",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 2,
                    "name": "Tom Bodett",
                    "slug": "tom-bodett",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 13,
                    "name": "Roxanne Roberts",
                    "slug": "roxanne-roberts",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 3,
                    "name": "Amy Dickinson",
                    "slug": "amy-dickinson",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 15,
                    "name": "Mo Rocca",
                    "slug": "mo-rocca",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 30,
                    "name": "Faith Salie",
                    "slug": "faith-salie",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 55,
                    "name": "Adam Burke",
                    "slug": "adam-burke",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 60,
                    "name": "Negin Farsad",
                    "slug": "negin-farsad",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 5,
                    "name": "Adam Felber",
                    "slug": "adam-felber",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 70,
                    "name": "Tara Clancy",
                    "slug": "tara-clancy",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                },
                {
                    "id": 14,
                    "name": "Luke Burbank",
                    "slug": "luke-burbank",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": null,
                    "rank": null
                }
            ],
            "bluff": {
                "chosen_panelist": {
                    "id": 3,
                    "name": "Amy Dickinson",
                    "slug": "amy-dickinson"
                },
                "correct_panelist": {
                    "id": 3,
                    "name": "Amy Dickinson",
                    "slug": "amy-dickinson"
                }
            },
            "guests": [
                {
                    "id": 870,
                    "name": "Nina Totenberg and Robert Siegel",
                    "slug": "nina-totenberg-and-robert-siegel",
                    "score": 2,
                    "score_exception": false
                }
            ]
        }
    }
}
```

### Retrieve a show with details by ISO date string

Returns a show object containing the database ID, date, whether the show is a
best of show and/or a repeat show and more detailed show information.

The ISO date string must be in `YYYY-MM-DD` format.

```endpoint
GET https://api.wwdt.me/v1.0/shows/date/iso/{iso_date}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/date/iso/{iso_date}/details
```

```python
show.retrieve_details_by_date_string(show_date="2006-08-19", database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "show": {
            "id": 47,
            "date": "2006-08-19",
            "best_of": false,
            "repeat_show": false,
            "location": {
                "city": "Chicago",
                "state": "IL",
                "venue": "Chase Auditorium"
            },
            "description": "Who's Carl This Time?, Bluff the Listener about corporate overlords, Not My Job about Mrs. Duke Cunningham, Who's Carl This Time? Round II, Panelist Predictions: what new object will be called a planet?",
            "notes": "Continuation of audience chanting \"Luuuuuuke\", in which Paula retorts Luke's comment of \"...explaining that's people saying my name, not boo-ing\" with \"It's good that you think that... he's got an indomitable spirit, doesn't he? Little fella.\"; Paula stumbles on a question regarding NPR by not knowing who \"Stamberg\" is; the panelists and a listener ended up turning the beginning of Who's Carl This Time? Round II into \"Beauty Chat\" with more chanting of \"Luuuuuuke\".\r\n\r\nPaula answered a Lightning Fill-in-the-Blank question about a certain computer manufacturer's \"exploding\" laptop, which was mentioned in Who's Carl This Time?, Round II by Tom Bodett, which Paula enthusiastically answered with \"Dell!!!\"; in the same round, Paula was asked about Chicagoan's last chance to eat a certain food before a ban takes effect with \"Ahh, heroin!\", in which hilarity ensued.",
            "host": {
                "id": 2,
                "name": "Luke Burbank",
                "slug": "luke-burbank",
                "guest": true
            },
            "scorekeeper": {
                "id": 1,
                "name": "Carl Kasell",
                "slug": "carl-kasell",
                "guest": false,
                "description": null
            },
            "panelists": [
                {
                    "id": 10,
                    "name": "Paula Poundstone",
                    "slug": "paula-poundstone",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": 11,
                    "rank": "1"
                },
                {
                    "id": 2,
                    "name": "Tom Bodett",
                    "slug": "tom-bodett",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": 10,
                    "rank": "2t"
                },
                {
                    "id": 1,
                    "name": "Roy Blount, Jr.",
                    "slug": "roy-blount-jr",
                    "lightning_round_start": null,
                    "lightning_round_correct": null,
                    "score": 10,
                    "rank": "2t"
                }
            ],
            "bluff": {
                "chosen_panelist": null,
                "correct_panelist": null
            },
            "guests": [
                {
                    "id": 51,
                    "name": "Soledad O'Brien",
                    "slug": "soledad-o-brien",
                    "score": 2,
                    "score_exception": false
                }
            ]
        }
    }
}
```

### Retrieve shows by year

Returns an array of show objects, each containing the database ID, date and
whether the show is a best of show and/or a repeat show.

The year value must be a four-digit year.

```endpoint
GET https://api.wwdt.me/v1.0/shows/{year}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/{year}
```

```python
show.retrieve_by_year(show_year=2018, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "shows": [
            {
                "id": 1041,
                "date": "2018-01-06",
                "best_of": true,
                "repeat_show": false
            },
            {
                "id": 1042,
                "date": "2018-01-13",
                "best_of": false,
                "repeat_show": false
            },
            ...
        ]
    }
}
```

### Retrieve shows by year and month

Returns an array of show objects, each containing the database ID, date and
whether the show is a best of show and/or a repeat show.

The year value must be a four-digit year.

```endpoint
GET https://api.wwdt.me/v1.0/shows/{year}/{month}
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/{show_year}/{show_month}
```

```python
show.retrieve_by_year(show_year=2018, show_month=10, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "shows": [
            {
                "id": 1080,
                "date": "2018-10-06",
                "best_of": false,
                "repeat_show": false
            },
            {
                "id": 1081,
                "date": "2018-10-13",
                "best_of": true,
                "repeat_show": false
            },
            ...
        ]
    }
}
```

### Retrieve shows with details by year

Returns an array of show objects, each containing their database ID, date,
whether the show is a best of show and/or a repeat show and more detailed
show information.

The year value must be a four-digit year.

```endpoint
GET https://api.wwdt.me/v1.0/shows/{year}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/{year}/details
```

```python
show.retrieve_details_by_year(show_year=2018, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "shows": [
            {
                "id": 1041,
                "date": "2018-01-06",
                "best_of": true,
                "repeat_show": false,
                "location": {
                    "city": "Chicago",
                    "state": "IL",
                    "venue": "Chase Auditorium"
                },
                "description": "Best of Wait Wait... Don't Tell Me! with a look back at some favorite Not My Job interviews and previously un-aired material from the past year, part two",
                "notes": "Wait Wait... Don't Tell Me! taped two shows while in Seattle, Washington on November 30th and December 1st. The Bluff the Listener, Not My Job and App Store Game segments included on this Best Of show comes from the show that taped on December 1st.\n\nNormally, the chosen bluff and the correct bluff from Bluff the Listener segments re-aired on Best Of shows do not get noted in the Stats Page database. In this case, the Bluff the Listener segment was not aired as part of a regular Wait Wait show, I have noted the chosen and correct bluff information for this show.\n\nDue to technical difficulties with the phone system at the start of the December 1st taping, audience members were selected as the listener contestants for the Who's Bill This Time?, Bluff the Listener and Listener Limerick Challenge segments.",
                "host": {
                    "id": 1,
                    "name": "Peter Sagal",
                    "slug": "peter-sagal",
                    "guest": false
                },
                "scorekeeper": {
                    "id": 11,
                    "name": "Bill Kurtis",
                    "slug": "bill-kurtis",
                    "guest": false,
                    "description": "I'm the man with an aim that can be used for any number of comic puns. I'm adapta-Bill"
                },
                "panelists": [
                    {
                        "id": 13,
                        "name": "Roxanne Roberts",
                        "slug": "roxanne-roberts",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 15,
                        "name": "Mo Rocca",
                        "slug": "mo-rocca",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 5,
                        "name": "Adam Felber",
                        "slug": "adam-felber",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 57,
                        "name": "Helen Hong",
                        "slug": "helen-hong",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 34,
                        "name": "Alonzo Bodden",
                        "slug": "alonzo-bodden",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 30,
                        "name": "Faith Salie",
                        "slug": "faith-salie",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 55,
                        "name": "Adam Burke",
                        "slug": "adam-burke",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 65,
                        "name": "Patton Oswalt",
                        "slug": "patton-oswalt",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 10,
                        "name": "Paula Poundstone",
                        "slug": "paula-poundstone",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 1,
                        "name": "Roy Blount, Jr.",
                        "slug": "roy-blount-jr",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    }
                ],
                "bluff": {
                    "chosen_panelist": {
                        "id": 5,
                        "name": "Adam Felber",
                        "slug": "adam-felber"
                    },
                    "correct_panelist": {
                        "id": 5,
                        "name": "Adam Felber",
                        "slug": "adam-felber"
                    }
                },
                "guests": [
                    {
                        "id": 817,
                        "name": "Ryan Dempster",
                        "slug": "ryan-dempster",
                        "score": 2,
                        "score_exception": false
                    },
                    {
                        "id": 837,
                        "name": "Lindy West",
                        "slug": "lindy-west",
                        "score": 2,
                        "score_exception": false
                    },
                    {
                        "id": 819,
                        "name": "Jerry Rice",
                        "slug": "jerry-rice",
                        "score": 2,
                        "score_exception": false
                    }
                ]
            },
            {
                "id": 1042,
                "date": "2018-01-13",
                "best_of": false,
                "repeat_show": false,
                "location": {
                    "city": "Chicago",
                    "state": "IL",
                    "venue": "Chase Auditorium"
                },
                "description": "Who's Bill This Time?, Bluff the Listener about a retailer offering a surprising promotion to potential customers, Not My Job about \"Storage Wars\", Listener Limerick Challenge, Panelist Predictions: what will be the must-have gadget at the 2019 Consumer Electronics Show?",
                "notes": "The show had a recording of Robert Siegel, who recently retired from \"All Things Considered\", saying President Trump's \"shithole\" quote.\n\nThe second option for all three of the \"life hack\" panel questions were all written for laughs, leaving the first option being the correct one. Peter Sagal goofed by saying \"black women's maternity pants\" instead of \"women's black maternity pants\".\n\nBill Kurtis stated that it was the first time in three years that all three panelists were tied at the start of the Lightning Fill-in-the-Blank round; but, didn't state how many points they started with. The last time all three panelists were tied going into Lightning Fill-in-the-Blank was on the show that aired on 2016-06-11 in which Bill also didn't state how many points all three panelists had (which was also 3).",
                "host": {
                    "id": 1,
                    "name": "Peter Sagal",
                    "slug": "peter-sagal",
                    "guest": false
                },
                "scorekeeper": {
                    "id": 11,
                    "name": "Bill Kurtis",
                    "slug": "bill-kurtis",
                    "guest": false,
                    "description": "I'm not a stable genius. I'm a genius that's sta-Bill"
                },
                "panelists": [
                    {
                        "id": 57,
                        "name": "Helen Hong",
                        "slug": "helen-hong",
                        "lightning_round_start": 3,
                        "lightning_round_correct": 7,
                        "score": 17,
                        "rank": "1t"
                    },
                    {
                        "id": 1,
                        "name": "Roy Blount, Jr.",
                        "slug": "roy-blount-jr",
                        "lightning_round_start": 3,
                        "lightning_round_correct": 7,
                        "score": 17,
                        "rank": "1t"
                    },
                    {
                        "id": 5,
                        "name": "Adam Felber",
                        "slug": "adam-felber",
                        "lightning_round_start": 3,
                        "lightning_round_correct": 6,
                        "score": 15,
                        "rank": "3"
                    }
                ],
                "bluff": {
                    "chosen_panelist": {
                        "id": 57,
                        "name": "Helen Hong",
                        "slug": "helen-hong"
                    },
                    "correct_panelist": {
                        "id": 57,
                        "name": "Helen Hong",
                        "slug": "helen-hong"
                    }
                },
                "guests": [
                    {
                        "id": 838,
                        "name": "Rian Johnson",
                        "slug": "rian-johnson",
                        "score": 2,
                        "score_exception": false
                    }
                ]
            },
            ...
        ]
    }
}
```

### Retrieve shows with details by year and month

Returns an array of show objects, each containing their database ID, date,
whether the show is a best of show and/or a repeat show and more detailed
show information.

The year value must be a four-digit year.

```endpoint
GET https://api.wwdt.me/v1.0/shows/{year}/{month}/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/{year}/{month}/details
```

```python
show.retrieve_details_by_year_month(show_year=, show_month=, database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "shows": [
            {
                "id": 1080,
                "date": "2018-10-06",
                "best_of": false,
                "repeat_show": false,
                "location": {
                    "city": "Chicago",
                    "state": "IL",
                    "venue": "Chase Auditorium"
                },
                "description": "Who's Bill This Time?, Bluff the Listener about a parties going wrong, Not My Job about Jimmy Smits, Listener Limerick Challenge, Panelist Predictions: what will be the next text message sent to everyone in the United States?",
                "notes": null,
                "host": {
                    "id": 1,
                    "name": "Peter Sagal",
                    "slug": "peter-sagal",
                    "guest": false
                },
                "scorekeeper": {
                    "id": 11,
                    "name": "Bill Kurtis",
                    "slug": "bill-kurtis",
                    "guest": false,
                    "description": "I like Bill. I still like Bill. Sometimes I had too much Bill"
                },
                "panelists": [
                    {
                        "id": 13,
                        "name": "Roxanne Roberts",
                        "slug": "roxanne-roberts",
                        "lightning_round_start": 2,
                        "lightning_round_correct": 6,
                        "score": 14,
                        "rank": "1"
                    },
                    {
                        "id": 32,
                        "name": "Peter Grosz",
                        "slug": "peter-grosz",
                        "lightning_round_start": 4,
                        "lightning_round_correct": 4,
                        "score": 12,
                        "rank": "2"
                    },
                    {
                        "id": 10,
                        "name": "Paula Poundstone",
                        "slug": "paula-poundstone",
                        "lightning_round_start": 1,
                        "lightning_round_correct": 5,
                        "score": 11,
                        "rank": "3"
                    }
                ],
                "bluff": {
                    "chosen_panelist": {
                        "id": 32,
                        "name": "Peter Grosz",
                        "slug": "peter-grosz"
                    },
                    "correct_panelist": {
                        "id": 32,
                        "name": "Peter Grosz",
                        "slug": "peter-grosz"
                    }
                },
                "guests": [
                    {
                        "id": 868,
                        "name": "Ellie Kemper",
                        "slug": "ellie-kemper",
                        "score": 3,
                        "score_exception": false
                    }
                ]
            },
            {
                "id": 1081,
                "date": "2018-10-13",
                "best_of": true,
                "repeat_show": false,
                "location": {
                    "city": "Chicago",
                    "state": "IL",
                    "venue": "Chase Auditorium"
                },
                "description": "Best of Wait Wait... Don't Tell Me! featuring a few favorite Not My Job and panel segments from the past year",
                "notes": "The Austen Goolsbee Not My Job segment was from the 2018-03-10 show, not from his first Not My Job appearance on the 2011-09-03 show. The Bluff the Listener segment was from the 2018-05-26 show, in which Helen Hong was the guest host.",
                "host": {
                    "id": 1,
                    "name": "Peter Sagal",
                    "slug": "peter-sagal",
                    "guest": false
                },
                "scorekeeper": {
                    "id": 11,
                    "name": "Bill Kurtis",
                    "slug": "bill-kurtis",
                    "guest": false,
                    "description": "I'm a pile of thinly sliced beef covered in Velveeta. That's right. I'm your Billy Cheesesteak"
                },
                "panelists": [
                    {
                        "id": 57,
                        "name": "Helen Hong",
                        "slug": "helen-hong",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 30,
                        "name": "Faith Salie",
                        "slug": "faith-salie",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 34,
                        "name": "Alonzo Bodden",
                        "slug": "alonzo-bodden",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 13,
                        "name": "Roxanne Roberts",
                        "slug": "roxanne-roberts",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 2,
                        "name": "Tom Bodett",
                        "slug": "tom-bodett",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 5,
                        "name": "Adam Felber",
                        "slug": "adam-felber",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 10,
                        "name": "Paula Poundstone",
                        "slug": "paula-poundstone",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 66,
                        "name": "Hari Kondabolu",
                        "slug": "hari-kondabolu",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 70,
                        "name": "Tara Clancy",
                        "slug": "tara-clancy",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 33,
                        "name": "Maz Jobrani",
                        "slug": "maz-jobrani",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 15,
                        "name": "Mo Rocca",
                        "slug": "mo-rocca",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 1,
                        "name": "Roy Blount, Jr.",
                        "slug": "roy-blount-jr",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 32,
                        "name": "Peter Grosz",
                        "slug": "peter-grosz",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    }
                ],
                "bluff": {
                    "chosen_panelist": null,
                    "correct_panelist": null
                },
                "guests": [
                    {
                        "id": 828,
                        "name": "Scott Kelly",
                        "slug": "scott-kelly",
                        "score": 3,
                        "score_exception": false
                    },
                    {
                        "id": 575,
                        "name": "Austan Goolsbee",
                        "slug": "austan-goolsbee",
                        "score": 3,
                        "score_exception": false
                    },
                    {
                        "id": 849,
                        "name": "Edie Falco",
                        "slug": "edie-falco",
                        "score": 2,
                        "score_exception": false
                    },
                    {
                        "id": 847,
                        "name": "John Kasich",
                        "slug": "john-kasich",
                        "score": 2,
                        "score_exception": false
                    }
                ]
            },
            ...
        ]
    }
}
```

### Retrieve recent shows

Returns an array of show objects, each containing the database ID, date and
whether the show is a best of show and/or a repeat show.

```endpoint
GET https://api.wwdt.me/v1.0/shows/recent
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/recent
```

```python
show.retrieve_recent(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "shows": [
            {
                "id": 1115,
                "date": "2019-06-01",
                "best_of": true,
                "repeat_show": false
            },
            {
                "id": 1116,
                "date": "2019-06-08",
                "best_of": false,
                "repeat_show": false
            },
            ...
        ]
    }
}
```

### Retrieve recent shows with details

Returns an array of show objects, each containing their database ID, date,
whether the show is a best of show and/or a repeat show and more detailed
show information.

```endpoint
GET https://api.wwdt.me/v1.0/shows/recent/details
```

#### Example Request

```curl
$ curl https://api.wwdt.me/v1.0/shows/recent/details
```

```python
show.retrieve_recent_details(database_connection=database_connection)
```

#### Example Response

```json
{
    "status": "success",
    "data": {
        "shows": [
            {
                "id": 1115,
                "date": "2019-06-01",
                "best_of": true,
                "repeat_show": false,
                "location": {
                    "city": "Chicago",
                    "state": "IL",
                    "venue": "Chase Auditorium"
                },
                "description": "Best Of Wait Wait... Don't Tell Me! featuring favorite superhero-themed moments",
                "notes": null,
                "host": {
                    "id": 1,
                    "name": "Peter Sagal",
                    "slug": "peter-sagal",
                    "guest": false
                },
                "scorekeeper": {
                    "id": 11,
                    "name": "Bill Kurtis",
                    "slug": "bill-kurtis",
                    "guest": false,
                    "description": "Hey, everybody. Gather in front of me and prepare to salute; because, it's the Triumph of the Bill"
                },
                "panelists": [
                    {
                        "id": 5,
                        "name": "Adam Felber",
                        "slug": "adam-felber",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 13,
                        "name": "Roxanne Roberts",
                        "slug": "roxanne-roberts",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 32,
                        "name": "Peter Grosz",
                        "slug": "peter-grosz",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 10,
                        "name": "Paula Poundstone",
                        "slug": "paula-poundstone",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 38,
                        "name": "Bobcat Goldthwait",
                        "slug": "bobcat-goldthwait",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 14,
                        "name": "Luke Burbank",
                        "slug": "luke-burbank",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 55,
                        "name": "Adam Burke",
                        "slug": "adam-burke",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 68,
                        "name": "Bim Adewunmi",
                        "slug": "bim-adewunmi",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 3,
                        "name": "Amy Dickinson",
                        "slug": "amy-dickinson",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 60,
                        "name": "Negin Farsad",
                        "slug": "negin-farsad",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 15,
                        "name": "Mo Rocca",
                        "slug": "mo-rocca",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 30,
                        "name": "Faith Salie",
                        "slug": "faith-salie",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    },
                    {
                        "id": 2,
                        "name": "Tom Bodett",
                        "slug": "tom-bodett",
                        "lightning_round_start": null,
                        "lightning_round_correct": null,
                        "score": null,
                        "rank": null
                    }
                ],
                "bluff": {
                    "chosen_panelist": null,
                    "correct_panelist": null
                },
                "guests": [
                    {
                        "id": 886,
                        "name": "Ruth E. Carter",
                        "slug": "ruth-e-carter",
                        "score": 2,
                        "score_exception": false
                    },
                    {
                        "id": 881,
                        "name": "Charles \"Peanut\" Tillman",
                        "slug": "charles-peanut-tillman",
                        "score": 2,
                        "score_exception": false
                    },
                    {
                        "id": 887,
                        "name": "Aidy Bryant",
                        "slug": "aidy-bryant",
                        "score": 2,
                        "score_exception": false
                    },
                    {
                        "id": 885,
                        "name": "Aaron Sorkin",
                        "slug": "aaron-sorkin",
                        "score": 1,
                        "score_exception": false
                    },
                    {
                        "id": 883,
                        "name": "Stacey Abrams",
                        "slug": "stacey-abrams",
                        "score": 3,
                        "score_exception": false
                    }
                ]
            },
            {
                "id": 1116,
                "date": "2019-06-08",
                "best_of": false,
                "repeat_show": false,
                "location": {
                    "city": "Chicago",
                    "state": "IL",
                    "venue": "Chase Auditorium"
                },
                "description": "Who's Bill This Time?, Bluff the Listener about someone trying to improve their commute, Not My Job about Buffalo Wild Wings, Listener Limerick Challenge, Panelist Predictions: what will be the next surprising FBI file that gets released?",
                "notes": null,
                "host": {
                    "id": 1,
                    "name": "Peter Sagal",
                    "slug": "peter-sagal",
                    "guest": false
                },
                "scorekeeper": {
                    "id": 11,
                    "name": "Bill Kurtis",
                    "slug": "bill-kurtis",
                    "guest": false,
                    "description": "Hey, Steph Curry. Try spinning ol' basket-Bill on your finger"
                },
                "panelists": [
                    {
                        "id": 55,
                        "name": "Adam Burke",
                        "slug": "adam-burke",
                        "lightning_round_start": 4,
                        "lightning_round_correct": 4,
                        "score": 12,
                        "rank": "1t"
                    },
                    {
                        "id": 33,
                        "name": "Maz Jobrani",
                        "slug": "maz-jobrani",
                        "lightning_round_start": 2,
                        "lightning_round_correct": 5,
                        "score": 12,
                        "rank": "1t"
                    },
                    {
                        "id": 75,
                        "name": "Aida Rodriguez",
                        "slug": "aida-rodriguez",
                        "lightning_round_start": 0,
                        "lightning_round_correct": 3,
                        "score": 6,
                        "rank": "3"
                    }
                ],
                "bluff": {
                    "chosen_panelist": {
                        "id": 55,
                        "name": "Adam Burke",
                        "slug": "adam-burke"
                    },
                    "correct_panelist": {
                        "id": 33,
                        "name": "Maz Jobrani",
                        "slug": "maz-jobrani"
                    }
                },
                "guests": [
                    {
                        "id": 896,
                        "name": "Olivia Wilde",
                        "slug": "olivia-wilde",
                        "score": 2,
                        "score_exception": false
                    }
                ]
            },
            ...
        ]
    }
}
```
