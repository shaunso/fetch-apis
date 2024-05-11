// connecting to mysql server and creating a table in database
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

  // create
  const sqlQuery = 'CREATE TABLE customers (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100) NOT NULL, address VARCHAR(255) NOT NULL, PRIMARY KEY(id));';
  // const sqlQuery2 = "ALTER TABLE customers ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY";
  mysqlconnection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log('Table created!');
  });
});

