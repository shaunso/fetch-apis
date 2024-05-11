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

  // insert multiple records
  //   // insert multiple records by making an array containing values, and insert a question mark '?' in the sql, which will be replaced by the value array:
  const sqlQuery = 'INSERT INTO customers (name, address) VALUES ?';
  const recordValues = [
    ['Delta Corporation Limited','Sable House, Northridge Park Close, Northridge Park Borrowdale, Harare Zimbabwe'],
    ['FBC Holdings',' 6th Floor, FBC Centre, 45 Nelson Mandela, Harare, Zimbabwe'],
    ['Nampak Zimbabwe','68 Birmingham Road, Southerton, Harare, Zimbabwe'],
    ['Zimplow Holdings','36 Birmingham Road, Southerton, Harare, Zimbabwe'],
    ['National Tyre Services','167 Samora Machel Avenue. Harare, Zimbabwe'],
    ['RioZim Limited','No. 1 Kenilworth Road, Newlands, Harare, Zimbabwe'],
    ['African Sun Limited','Bally House, Mount Pleasant Business Park, Cnr. Norfolk Road/870 Endeavor Crescent, Harare Zimbabwe'],
    ['First Mutual Properties','2nd Floor, ZB Centre Cnr 1st and Kwame Nkrumah Avenue,Harare, Zimbabwe'],
    ['OK Zimbabwe','OK House, 7 Ramon Road, Graniteside, Harare, Zimbabwe'],
    ['Mashonaland Holdings','12th Floor ZB Towers, 77 Jason Moyo Avenue, Harare,Zimbabwe'],
    ['Edgars Zimbabwe','ZB LIFE TOWERS | 15th FLOOR - 77 JASON MOYO AVE | CNR SAM NUJOMA & SPEKE AVE, HARARE, ZIMBABWE'],
    ['Simbisa Brands','Edward Building Corner 1st Street /Nelson Mandela Avenue Harare, Zimbabwe'],
    ['Innscor Africa','Edward Building Corner 1st Street /Nelson Mandela Avenue Harare, Zimbabwe'],
    ['CBZ Holings','3rd Floor, Union House, 60 Kwame Nkrumah, Harare, Zimbabwe']
  ];

  mysqlconnection.query(sqlQuery, [recordValues], (err, result) => {
    if (err) throw err;
    console.log(`No. of records inserted: ${result.affectedRows}`);
  });
});