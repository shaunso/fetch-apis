// connecting to mysql database and using WHERE statement to filter out records
const mysql = require('mysql2');
require("dotenv").config();

const dbPassword = process.env.DB_PASSWORD;

const mysqlconnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'w3schools_db',
  password: dbPassword
});

// connect
mysqlconnection.connect( (err) => {
  if (err) throw err;
  console.log('Connected...');

  // select records with filter applied
  const sqlQuery = 'SELECT * FROM customers WHERE address LIKE "%Southerton%"';
  mysqlconnection.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });

  // using escaping query values
  const name = 'Padenga%';
  const address = '%Borrowdale%';
  const sqlQuery2 = ' SELECT * FROM customers WHERE name LIKE ? OR address LIKE ?';
  mysqlconnection.query(sqlQuery2, [name, address], (err, result) => {
    if (err) throw err;
    console.log(result);
  })
});