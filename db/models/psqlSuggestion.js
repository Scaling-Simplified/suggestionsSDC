const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  database: 'suggestions',
  port: 5432,
  // user: 'postgres',
  // password: 'password',
});

pool.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});

module.exports = pool;
