const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.status(200);
});

app.listen(port, () => console.log(`servidor está rodando na porta ${port}!`));

module.exports = app;
