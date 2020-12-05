DROP SCHEMA suggestions CASCADE;
CREATE SCHEMA suggestions;

CREATE TABLE suggestions.suggestionlist (
  id serial PRIMARY KEY,
  mainShoeID: INT,
  shoeUrl VARCHAR(50),
  series VARCHAR(50),
  type VARCHAR(50),
  price INT,
  salePrice INT,
);

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
