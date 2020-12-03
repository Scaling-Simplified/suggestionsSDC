# Project Name

> Project description

## Related Projects

  - https://github.com/true-barracudas/suggestions-service
  - https://github.com/true-barracudas/reviews-service
  - https://github.com/true-barracudas/trackpinch-service
  - https://github.com/true-barracudas/sizepicker-service


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development
For seeding database:

```sh
npm run seed-database
```

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g eslint
npm install
```

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
    {"_id":"5fc837da0e65af1c0c5b2455","id":51702,"shoeUrl":"https://fec-ay.s3-us-west-1.amazonaws.com/s39.jpg","series":"Performance","type":"ULTRABOOST SHOES","price":140,"salePrice":104,"recycledMaterials":false}
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
    {"_id":"5fc837da0e65af1c0c5b2455","id":51702,"shoeUrl":"https://fec-ay.s3-us-west-1.amazonaws.com/s39.jpg","series":"Performance","type":"ULTRABOOST SHOES","price":140,"salePrice":104,"recycledMaterials":false}
  ]
}
```
* Response Object: HTTP Status Code 200

### Delete:
* Method: DELETE
* Endpoint: /delete/:id
* Request Body: none
* Response Object: HTTP Status Code 200