const express = require('express');
const session = require('express-session');

const app = express();

app.use(session ({
  'secret': 'kj343hlh4344df',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.send("<h1 style='color: red'>Sawubona!!</h1>");
  console.log(req.session);
}).listen(3000, () => console.log(`feds listening on port: ${3000}`));