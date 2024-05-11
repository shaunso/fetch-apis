// connecting to w3schools database and creating two tables (users, products). Insert data into both tables. Use various JOIN statements to join the customers table and products tables together 
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

  //////////////////////////
  // create the products & users table
  ////////////////////////////
  // const products = 'CREATE TABLE products ( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(125) NOT NULL, PRIMARY KEY(id) )';

  // const users = 'CREATE TABLE users ( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(90) NOT NULL, favourite_product INT NOT NULL, PRIMARY KEY(id), FOREIGN KEY(favourite_product) REFERENCES products (id) )';

  // mysqlconnection.query(products, (err, result) => {
  //   if (err) throw err;
  //   console.log('Table successfully created');
  // });
  // setting the starting value of the primary key to 154
  // const alterProductsTable = 'ALTER TABLE products RENAME COLUMN name to product AUTO_INCREMENT=157';
  // mysqlconnection.query(alterProductsTable, (err, result) => {
  //   if (err) throw err;
  //   console.log('Update complete!');
  // });

  // mysqlconnection.query(users, (err, result) => {
  //   if (err) throw err;
  //   console.log('Table successfully created');
  // });

  ////////////////////////////
  // insert data into the products & users table
  ////////////////////////////
  // const productsData = 'INSERT INTO products (name) VALUES ("Chocolate Heaven"), ("Tasty Lemons"), ("Vanilla Dreams")';
  // mysqlconnection.query(productsData, (err, result) => {
  //   if (err) throw err;
  //   console.log('Data successfully inserted into Products table')
  // });  
  
  // const usersData = 'INSERT INTO users (name, favourite_product) VALUES ("John", 154), ("Peter", 154), ("Amy", 155), ("Hannah", NULL), ("Michael", NULL)';
  // mysqlconnection.query(usersData, (err, result) => {
  //   if (err) throw err;
  //   console.log('Data successfully inserted into Users table')
  // });

  // inner join
  // const innerJoin = 'SELECT u.name AS User, p.product AS Favourite FROM users AS u JOIN products AS p ON u.favourite_product = p.id';
  // mysqlconnection.query(innerJoin, (err, result) => {
  //   if (err) throw err;
  //   console.log(result);
  // })

  // left join
  const leftJoin = 'SELECT u.name AS User, p.product AS Favourite FROM users AS u LEFT JOIN products AS p ON u.favourite_product = p.id';
  mysqlconnection.query(leftJoin, (err, result) => {
    if (err) throw err;
    console.log(result);
  });

    // right join
    const rightJoin = 'SELECT u.name AS User, p.product AS Favourite FROM users AS u RIGHT JOIN products AS p ON u.favourite_product = p.id';
    mysqlconnection.query(rightJoin, (err, result) => {
      if (err) throw err;
      console.log(result);
    });

});