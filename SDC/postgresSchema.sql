DROP DATABASE IF EXISTS suggestions;


CREATE DATABASE suggestions;
-- USE suggestions;
\c suggestions;

CREATE TABLE productlist (
  id SERIAL PRIMARY KEY,
  suggestions INT[16]
);
CREATE TABLE suggestionlist (
  id SERIAL PRIMARY KEY,
  shoeUrl VARCHAR(100),
  series VARCHAR(50),
  shoe_type VARCHAR(50),
  price INT,
  salePrice INT
);

\timing
COPY productlist(suggestions)
FROM '/Users/caijiaxin/Documents/Hack_Reactor/SDC/suggestionsSDC/postgresProduct.csv'
WITH CSV HEADER;


COPY suggestionlist(shoeUrl, series, shoe_type, price, salePrice)
FROM '/Users/caijiaxin/Documents/Hack_Reactor/SDC/suggestionsSDC/postgresSuggestions.csv'
WITH CSV HEADER DELIMITER ',';
\timing
-- SELECT * FROM suggestions.suggestionlist

-- SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 1 AND suggestionlist.id=ANY(productlist.suggestions);
-- id = 5 ====================================
EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 5 AND suggestionlist.id=ANY(productlist.suggestions);

EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 5 AND suggestionlist.id=ANY(productlist.suggestions);

EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 5 AND suggestionlist.id=ANY(productlist.suggestions);

-- id = 5,000,123 ===================================
EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 5000123 AND suggestionlist.id=ANY(productlist.suggestions);

EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 5000123 AND suggestionlist.id=ANY(productlist.suggestions);

EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 5000123 AND suggestionlist.id=ANY(productlist.suggestions);

-- id = 9,000,976 ===================================
EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 9000976 AND suggestionlist.id=ANY(productlist.suggestions);

EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 9000976 AND suggestionlist.id=ANY(productlist.suggestions);

EXPLAIN ANALYZE SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = 9000976 AND suggestionlist.id=ANY(productlist.suggestions);

-- original method ===============================
-- DROP DATABASE suggestions;
-- DROP TABLE IF EXISTS suggestionlist;
-- DROP TABLE IF EXISTS merchandise;

-- CREATE DATABASE suggestions;

-- CREATE TABLE merchandise (
--   shoeID serial PRIMARY KEY,
--   name VARCHAR(50)
-- );

-- CREATE TABLE suggestionlist (
--   id serial PRIMARY KEY,
--   shoeUrl VARCHAR(50),
--   series VARCHAR(50),
--   type VARCHAR(50),
--   price INT,
--   salePrice INT,
--   shoeID INT,
--   FOREIGN KEY (shoeID)
--     REFERENCES merchandise(shoeID)
-- );

-- SCHEMA METHOD ==============================
-- DROP SCHEMA suggestions CASCADE;
-- CREATE SCHEMA suggestions;

-- CREATE TABLE suggestions.merchandise (
--   shoeID serial PRIMARY KEY,
--   name VARCHAR(50)
-- );

-- CREATE TABLE suggestions.suggestionlist (
--   id serial PRIMARY KEY,
--   shoeUrl VARCHAR(50),
--   series VARCHAR(50),
--   type VARCHAR(50),
--   price INT,
--   salePrice INT,
--   shoeID INT,
--   FOREIGN KEY (shoeID)
--     REFERENCES merchandise(shoeID)
-- );
