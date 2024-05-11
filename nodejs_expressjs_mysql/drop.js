// connecting to w3schools database and using DROP statement, & the DROP statement with IF EXISTS, to delete the customers table
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

  // drop
  // const sqlQuery = 'DROP TABLE customers;';
  // mysqlconnection.query(sqlQuery, (err, result) => {
  //   if (err) throw err;
  //   console.log(`Table deleted!`);
  //   });

  // drop only IF EXISTS
  const sqlQuery2 = 'DROP TABLE IF EXISTS customers;';
  mysqlconnection.query(sqlQuery2, (err, result) => {
    if (err) throw err;
    console.log(result)
    });
});