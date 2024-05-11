// connecting to w3schools database and using the LIMIT statement to limit the number of records return by the query
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

  // limit the query
  const sqlQuery = 'SELECT name AS "Company name" FROM customers WHERE name LIKE "%Holdings" ORDER BY name DESC LIMIT 2 OFFSET 1';
  mysqlconnection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
  })
});