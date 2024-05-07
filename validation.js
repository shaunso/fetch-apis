const express = require('express');
const { check, validationResult } = require('express-validator');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send();
})


app.post('/submit-form', 
[
  check('name').isLength({min:3}),
  check('email').isEmail(),
  check('age').isNumeric()
],
(req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({error: errors.array()})
  }
  console.log('received');
  const name = req.body.name
  const email = req.body.email
  const age = req.body.age
})

app.listen(port, console.log(`port: --${port}-- is live!!`));