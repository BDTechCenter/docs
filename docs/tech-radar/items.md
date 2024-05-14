---
sidebar_position: 2
---
# ITEMS

___
### Obs:

Unique attributes:
    - [ title ]
___

### POST item ( BDUSER / ADMIN ):
Endpoint: `/items/create`

Type: JSON

Attributes:

```json
{
    "isActive": false,
    "title": "Blockchain",
    "ring": "HOLD",
    "expectation": "FIVE_TEN",
    "quadrant": "FIRST_QUADRANT",
    "body": "..."
}
```

Return:
```json
{
    "id": "UUID",
    "flag": null,
    "isActive": false,
    "authorEmail": "networkuser@bosch.com",
    "revisions": [],
    "title": "Blockchain",
    "creationDate": "2024-04-23",
    "publicationDate": null,
    "updateDate": null,
    "ring": "HOLD",
    "expectation": "5 - 10",
    "quadrantId": "first-quadrant",
    "body": ""
}
```


### GET active items preview ( USER / BDUSER / ADMIN ):
Endpoint: `/items`

Return:
```json
[
  {
    "id": "UUID-1",
    "title": "title1",
    "ring": "TRIAL",
    "expectation": "5 - 10",
    "quadrantId": "first-quadrant",
    "isActive": true
  }
]
```


### GET all items ( USER / BDUSER / ADMIN ):
Endpoint: `/items/all`

Return:
```json
[
  {
    "id": "UUID-1",
    "title": "title1",
    "ring": "TRIAL",
    "expectation": "5 - 10",
    "quadrantId": "first-quadrant",
    "isActive": true
  },
  {
    "id": "UUID-2",
    "title": "title2",
    "ring": "HOLD",
    "expectation": "2 - 5",
    "quadrantId": "first-quadrant",
    "isActive": false
  }
]
```


### GET item detail ( USER / BDUSER / ADMIN ):
Endpoint: `/items/< UUID:itemId >/detail`

Return (< Item detail >):
```json
{
  "id": "UUID",
  "flag": null,
  "isActive": false,
  "authorEmail": "networkuser2@bosch.com",
  "revisions": [
    "networkuser1@bosch.com",
    "networkuser2@bosch.com"
  ],
  "title": "title",
  "creationDate": "YYYY-MM-DD",
  "publicationDate": null,
  "updateDate": "YYYY-MM-DD",
  "ring": "TRIAL",
  "expectation": "5 - 10",
  "quadrantId": "first-quadrant",
  "body": ""
}
```


### PATCH update item ( BDUSER / ADMIN ):
Endpoint: `/items/< UUID:itemId >`

Attributes:
```json
{
  "title": "title UP",
  "ring": "TRIAL",
  "expectation": "UNKNOWN",
  "quadrant": "SECOND_QUADRANT",
  "body": "up"
}
```

Return: < Item detail >


### PATCH publish item ( AUTHOR / ADMIN ):
Endpoint: `/items/< UUID:itemId >/publish`

Return: < Item detail >

If already publish, returns: 
```json
{
    "field": "item",
    "message": "Item already published!"
}
```


### PATCH archive item ( AUTHOR / ADMIN ):
Endpoint: `/items/< UUID:itemId >/archive`

Return: < Item detail >

If already archived, returns:
```json
{
    "field": "item",
    "message": "Item already archived!"
}
```