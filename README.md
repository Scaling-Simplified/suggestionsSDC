## System Design Capstone
_Frontend Owner: Amelia Yeoh (ameyeoh)_
<br />
_Backend Owner: Terrence Wong (twong0088)_

### Create
* Method: POST
* Endpoint: /add
* Request Body Example:

```text
{
  "list":[
    {
    "id": STRING,
    "shoeUrl": STRING,
    "series": STRING,
    "type": STRING,
    "price": INT,
    "salePrice": INT,
    }
  ]
}
```
* Response Object: HTTP Status Code 201

### Read:
* Method: GET
* Endpoint: /api/products/:id/suggestions
* Request Body: none
* Response Object Example:
```text
[
  {
    "_id": STRING,
    "shoeID": INT,
    "list":[
      {
        "id": INT,
        "shoeUrl": STRING,
        "series": STRING,
        "type": STRING,
        "price": INT,
        "salePrice": INT,
      }
    ],
    "__v":0
  }
]
```
### Update:
* Method: PUT
* Endpoint: /update/:id
* Request Body Example:
```text
{
  "list":[
    {
      "shoeUrl": STRING,
      "series": STRING,
      "type": STRING,
      "price": INT,
      "salePrice": INT,
    }
  ]
}
```
* Response Object: HTTP Status Code 200

### Delete:
* Method: DELETE
* Endpoint: /delete/:id
* Request Body: none
* Response Object: HTTP Status Code 200
