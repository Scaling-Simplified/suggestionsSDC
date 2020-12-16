const { Pool } = require('pg');

const pool = new Pool({
  host: '54.153.86.120',
  database: 'index_suggestions',
  port: 5432,
  user: 'postgres',
  password: 'password',
});

pool.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});

module.exports = pool;
