const { Client } = require('pg');

const client = new Client({
  host: '127.0.0.1',
  database: 'index_suggestions',
  port: 5432,
});

client.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});

module.exports = client;
