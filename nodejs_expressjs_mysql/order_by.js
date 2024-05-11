// connecting to mysql database and using ORDER By statement to sort the records
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

  // sort the results
  const sqlQuery = 'SELECT * FROM customers ORDER BY name DESC';
  mysqlconnection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});