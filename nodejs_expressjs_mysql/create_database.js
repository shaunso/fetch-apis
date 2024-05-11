// connecting to mysql server & creating a database
const mysql = require('mysql2');
require("dotenv").config();

const dbPassword = process.env.DB_PASSWORD;

const mysqlconnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: dbPassword
});

// connecting
mysqlconnection.connect( (err) => {
  if (err) throw err;
  console.log('Connected & ready to create a new database...');

  // create
  mysqlconnection.query('CREATE DATABASE w3schools_db', (err, result) => {
    if (err) throw err;
    console.log('Database created');
  });
});