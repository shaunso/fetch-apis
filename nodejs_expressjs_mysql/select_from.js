// connecting to mysql database and selecting records from the table
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

  // selecting all records from the table
  const sqlQuery = 'SELECT * FROM  customers';
  // selecting only the name and adress fields from the table
  // const sqlQuery2 = 'SELECT name AS "Company name", address AS "Registered address" FROM customers';
  mysqlconnection.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    // console.log(result);
    // console.log(result[2]['Registered address']);
    // console.log(result[12].address);
    console.log('///////////////////');
    console.log(fields);
    console.log(fields[2].name);
  });
});