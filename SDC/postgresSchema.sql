DROP DATABASE IF EXISTS suggestions;


CREATE DATABASE suggestions;
-- USE suggestions;
\c suggestions;
DROP TABLE IF EXISTS suggestionlist;
CREATE TABLE suggestionlist (
  id INT NOT NULL,
  mainShoeID INT NOT NULL,
  shoeUrl VARCHAR(100),
  series VARCHAR(50),
  shoe_type VARCHAR(50),
  price INT,
  salePrice INT
);

\timing
COPY suggestionlist(id, mainShoeID, shoeUrl, series, shoe_type, price, salePrice)
FROM '/Users/caijiaxin/Documents/Hack_Reactor/SDC/suggestionsSDC/data.csv'
WITH CSV HEADER DELIMITER ',';
\timing
-- SELECT * FROM suggestions.suggestionlist

EXPLAIN ANALYZE SELECT * FROM suggestionlist;
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
