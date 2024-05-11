// connecting to w3schools database and using the UPDATE statement to update a record in the customers table
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

  // update
  const sqlQuery = 'UPDATE customers SET address = "43 Nortei Abababio Street, Accra, Ghana" WHERE id = 8 OR address LIKE "%Borrowdale%"';
  mysqlconnection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log(`${result.affectedRows} record(s) updated`);
  });
});