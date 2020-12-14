const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  database: 'index_suggestions',
  port: 5432,
});

pool.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});

module.exports = pool;
