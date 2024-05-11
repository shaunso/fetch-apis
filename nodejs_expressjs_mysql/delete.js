// connecting to w3schools database and using DELETE statement to delete a record from the customers table
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

  // delete
  const sqlQuery = 'DELETE FROM customers WHERE id BETWEEN 1 AND 2';
  mysqlconnection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(`No. of records deleted: ${result.affectedRows}`);
  });
});