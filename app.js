const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1> welcomet to nodejs</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1> this is about page </h1>`);
});

const port = 8000;

app.listen(port, () => {
  console.log(`app runingg at ${port}`);
});
