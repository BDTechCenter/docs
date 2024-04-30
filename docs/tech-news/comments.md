---
sidebar_position: 2
---

# COMMENTS: ✍

### POST comment:
Endpoint: `/comments/{newsId}`

Type: Json

Attributes: 
    - comment: String


### GET comments:
Obs: always returning base on upVotes (relevance)

Endpoint: `/comments/{newsId}`

Return:
```json
{
    "id": long
    "newsId": "uuid"
    "author": <String>
    "publicationDate": <String>
    "comment": <String>
    "upVotes": int
    "alreadyUpVoted": boolean
}
```

### PATCH upVote for comments
Endpoint `/comments/{id}/upvote`

Type: Header

    Authorization: Bearer token (azure)