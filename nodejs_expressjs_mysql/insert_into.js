// connecting to mysql database and inserting data into the table
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

  // insert one record
  const sqlQuery = 'INSERT INTO customers (name, address) VALUES ("Padenga Holdings", "121 Borrowdale Road, Gunhill, Harare, Zimbabwe")';
  mysqlconnection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log("New record created");
  });
});