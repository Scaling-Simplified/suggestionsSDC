## System Design Capstone
_Frontend Owner: Amelia Yeoh (ameyeoh)_
<br />
_Backend Owner: Terrence Wong (twong0088)_

### Create
* Method: POST
* Endpoint: /add
* Request Body Example:

```json
{
  "list":[
    {"_id":"5fc837da0e65af1c0c5b2455",
    "id":51702,
    "shoeUrl":"https://fec-ay.s3-us-west-1.amazonaws.com/s39.jpg",
    "series":"Performance",
    "type":"ULTRABOOST SHOES",
    "price":140,
    "salePrice":104,
    "recycledMaterials":false
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
```json
[
  {
    "_id":"5fc874c746a8e0295751ce92",
    "shoeID":101,
    "list":[
      {
        "_id":"5fc837da0e65af1c0c5b2455",
        "id":51702,
        "shoeUrl":"https://fec-ay.s3-us-west-1.amazonaws.com/s39.jpg",
        "series":"Performance",
        "type":"ULTRABOOST SHOES",
        "price":140,
        "salePrice":104,
        "recycledMaterials":false
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
```json
{
  "list":[
    {
      "_id":"5fc837da0e65af1c0c5b2455",
      "id":51702,
      "shoeUrl":"https://fec-ay.s3-us-west-1.amazonaws.com/s39.jpg",
      "series":"Performance",
      "type":"ULTRABOOST SHOES",
      "price":140,
      "salePrice":104,
      "recycledMaterials":false
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