CREATE KEYSPACE suggestions WITH replication = {'class': 'SimpleStrategy', replication: 1}

CREATE TABLE suggestions_by_shoe_id (
  shoe_id TEXT,
  suggestion_url TEXT,
  suggestion_series TEXT,
  suggestion_type TEXT,
  suggestion_price INT,
  suggestion_sales_price INT,
  PRIMARY KEY(shoe_id)
);