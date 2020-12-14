DROP DATABASE IF EXISTS index_suggestions;


CREATE DATABASE index_suggestions;
-- USE suggestions;
\c index_suggestions;

CREATE TABLE shoes  (
  id SERIAL PRIMARY KEY,
  shoeUrl VARCHAR(100),
  series VARCHAR(50),
  shoe_type VARCHAR(50),
  price SMALLINT,
  salePrice SMALLINT
);

CREATE TABLE suggestions (
  mainId INT,
  suggestionId INT,
  FOREIGN KEY (mainId) REFERENCES shoes(id),
  FOREIGN KEY(suggestionId) REFERENCES shoes(id)
);

\timing

COPY shoes(shoeUrl, series, shoe_type, price, salePrice)
FROM '/home/ubuntu/storageSuggestionsData.csv'
WITH CSV HEADER DELIMITER ',';

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData1.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData2.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData3.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData4.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData5.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData6.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData7.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData8.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData9.csv'
WITH CSV HEADER;

COPY suggestions(mainId, suggestionId)
FROM '/home/ubuntu/storageProductsData10.csv'
WITH CSV HEADER;

create index mainshoeid_indx on suggestions(mainId);
\timing

-- id = 5 ====================================
explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 5 AND suggestions.suggestionId = shoes.id;

explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 5 AND suggestions.suggestionId = shoes.id;

explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 5 AND suggestions.suggestionId = shoes.id;

-- id = 5,000,123 ===================================
explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 5000123 AND suggestions.suggestionId = shoes.id;

explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 5000123 AND suggestions.suggestionId = shoes.id;

explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 5000123 AND suggestions.suggestionId = shoes.id;

-- id = 9,000,976 ===================================
explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 9000976 AND suggestions.suggestionId = shoes.id;

explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 9000976 AND suggestions.suggestionId = shoes.id;

explain analyze select shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice from shoes inner join suggestions on suggestions.mainId = 9000976 AND suggestions.suggestionId = shoes.id;