---
sidebar_position: 1
---
# QUADRANT

___
### Obs:
Quadrant is represented by an Enum:

    - [ FIRST_QUADRANT, SECOND_QUADRANT, THIRD_QUADRANT, FOURTH_QUADRANT ]

Ring is represented by an Enum:

    - [ HOLD, OBSERVE, TRIAL, ADOPT ]

Expectation is represented by an Enum:

    - [ UNKNOWN("-"), ZERO_TWO("0 - 2"), TWO_FIVE("2 - 5"), FIVE_TEN("5 - 10") ]
___

### POST quadrant ( ADMIN ):
Endpoint: `/quadrants/create`

Type: JSON

Attributes:

Unique: [ quadrant, title, name, position ]

```json
{
    "quadrant": "FIRST_QUADRANT",
    "title": "Platforms & Operations",
    "name": "platforms-and-operations", 
    "color": "...",
    "txtColor": "...",
    "position": 1,
    "description": "..."
}
```

Return:
```json
{
    "id": "first-quadrant",
    "name": "platforms-and-operations",
    "title": "Platforms & Operations",
    "color": "...",
    "txtColor": "...",
    "position": 1,
    "description": "..."
}
```


### GET quadrants ( USER / BDUSER / ADMIN ):
Endpoint: `/quadrants`

Return:
```json
[
    {
        "name": "platforms-and-operations",
        "title": "Platform & Operations",
        "color": "...",
        "txtColor": "...",
        "position": 1,
        "description": "..."
    }
]
```


### PATCH update quadrant ( ADMIN ):
Endpoint: `/quadrants/< String:quadrantId >`

Attributes:
```json
{
    "title": "Platform & Operations UP",
    "name": "platforms-and-operations UP", 
    "color": "up",
    "txtColor": "up",
    "position": 2,
    "description": "up"
}
```

Return:
```json
{
    "id": "first-quadrant",
    "name": "platforms-and-operations UP",
    "title": "Platform & Operations UP",
    "color": "up",
    "txtColor": "up",
    "position": 2,
    "description": "up"
}
```