DROP KEYSPACE IF EXISTS suggestions;

CREATE KEYSPACE suggestions
  WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 1
  };

CREATE TABLE suggestions.suggestions_by_shoe_id (
  id INT,
  mainShoeId INT,
  url TEXT,
  series TEXT,
  type TEXT,
  price INT,
  salePrice INT,
  PRIMARY KEY(id)
);

COPY suggestions.suggestions_by_shoe_id (id,mainShoeId, url, series, type, price, salePrice) FROM '/Users/caijiaxin/Documents/Hack_Reactor/SDC/suggestionsSDC/10Mdata.csv' WITH DELIMITER=',' AND HEADER=TRUE;

