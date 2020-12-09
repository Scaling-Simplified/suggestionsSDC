## Terrence's SDC Database Queries

### Primary: PostgrSQL
* Table:
suggestionlist - 160 million data points.

### Secondary: Apeche Cassandra
* Table:
suggestions_by_shoe_id - 160 data points

## Queries:
* Primary - PostgreSQL:
```text
  Request:
  SELECT * FROM suggestionlist WHERE mainshoeid=5;

  Response:
   mainshoeid |                         shoeurl                         |      series      |           shoe_type           | price | saleprice
------------+---------------------------------------------------------+------------------+-------------------------------+-------+-----------
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//3.jpg'  | 'Running'        | 'ULTRABOOST ST SHOES'         |   130 |        85
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//10.jpg' | 'Clean Classics' | 'NMD_R1 V2 SHOES'             |   220 |         0
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//11.jpg' | 'undefined'      | 'NMD_R1 SHOES'                |   150 |       112
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//5.jpg'  | 'Essentials'     | 'ULTRABOOST WINTER.RDY SHOES' |   175 |       110
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//8.jpg'  | 'Workout'        | 'ZX 2K BOOST SHOES'           |   155 |         0
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//11.jpg' | 'undefined'      | 'NMD_R1 SHOES'                |   150 |       112
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//14.jpg' | 'undefined'      | 'ULTRABOOST DNA SHOES'        |   180 |        90
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//11.jpg' | 'undefined'      | 'NMD_R1 SHOES'                |   150 |       112
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//12.jpg' | 'undefined'      | 'ULTRABOOST SHOES'            |   140 |       104
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//11.jpg' | 'undefined'      | 'NMD_R1 SHOES'                |   150 |       112
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//18.jpg' | 'Running'        | 'ZX 2K BOOST SHOES'           |   155 |         0
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//18.jpg' | 'Running'        | 'ZX 2K BOOST SHOES'           |   155 |         0
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//13.jpg' | 'undefined'      | 'ULTRABOOST ST SHOES'         |   130 |        85
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//17.jpg' | 'Performance'    | 'NIZZA TREFOIL SHOES'         |   165 |       131
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//18.jpg' | 'Running'        | 'ZX 2K BOOST SHOES'           |   155 |         0
    9000976 | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//20.jpg' | 'Essentials'     | 'NMD_R1 V2 SHOES'             |   220 |         0
(16 rows)
```

* Secondary - Cassandra:
```text
  Request:
  SELECT * FROM suggestions.suggestions_by_shoe_id WHERE mainShoeId=1 ALLOW FILTERING;

  Response:
 id        | mainshoeid | price | saleprice | series           | type                          | url
-----------+------------+-------+-----------+------------------+-------------------------------+---------------------------------------------------------
 1 |    1 |   180 |        90 |         'Hiking' |        'ULTRABOOST DNA SHOES' |  'https://sdc-adidas.s3-us-west-1.amazonaws.com//4.jpg'
 2 |    1 |   220 |         0 | 'Clean Classics' |             'NMD_R1 V2 SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//10.jpg'
 3 |    1 |   155 |         0 |        'Workout' |           'ZX 2K BOOST SHOES' |  'https://sdc-adidas.s3-us-west-1.amazonaws.com//8.jpg'
  4 |    1 |   150 |       112 |      'Lifestyle' |                'NMD_R1 SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//21.jpg'
  5 |    1 |   220 |         0 | 'Clean Classics' |             'NMD_R1 V2 SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//10.jpg'
   6 |     1 |   200 |       122 |      'Originals' |          'BUSENITZ PRO SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//16.jpg'
   7 |     1 |   200 |       122 |      'Lifestyle' |          'BUSENITZ PRO SHOES' |  'https://sdc-adidas.s3-us-west-1.amazonaws.com//6.jpg'
  8 |    1 |   155 |         0 |        'Running' |           'ZX 2K BOOST SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//18.jpg'
 9 |    1 |   140 |       104 |     'Basketball' |            'ULTRABOOST SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//22.jpg'
  10 |    1 |   175 |       110 |     'Essentials' | 'ULTRABOOST WINTER.RDY SHOES' |  'https://sdc-adidas.s3-us-west-1.amazonaws.com//5.jpg'
  11 |    1 |   185 |         0 |            'Gym' |               'OZWEEGO SHOES' |  'https://sdc-adidas.s3-us-west-1.amazonaws.com//9.jpg'
  12 |    1 |   140 |       104 |      'undefined' |            'ULTRABOOST SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//12.jpg'
  13 |    1 |   140 |       104 |      'undefined' |            'ULTRABOOST SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//12.jpg'
  14 |    1 |   155 |         0 |        'Running' |           'ZX 2K BOOST SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//18.jpg'
 15 |    1 |   155 |         0 |        'Running' |           'ZX 2K BOOST SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//18.jpg'
  16 |    1 |   130 |        85 |      'undefined' |         'ULTRABOOST ST SHOES' | 'https://sdc-adidas.s3-us-west-1.amazonaws.com//13.jpg'


```