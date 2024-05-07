const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.static('public'));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>This is the home page</h1>");
  console.log(req.headers);
});

app.get('/hello', (req, res) =>console.log(req.headers));

app.get('/mine', (req, res) => res.send("Hello to you too me -*-"));

app.get('/crazy', (req, res) => res.redirect("back"));

app.get('/uppercase/:theValue/hello', (req, res) => {
  console.log(req.params);
  res.send(req.params.theValue.toUpperCase());
})

app.get('/down', (req, res) => res.download('./text.txt', 'user-facing-filename.txt'))

app.use(cookieParser());

app.get("/about", (req, res) => {
  res.render("about")
})

app.get(/drip/, (req, res) => res.send("it works bitch!!! :p"))




app.listen(3000, (() => console.log("Server ready")));