const bodyParser = require("body-parser"); // Importa o body-parser

//body-parser é um middleware que lê um formulário HTML e armazena os dados em um objeto JavaScript. Ele também pode ler dados JSON e armazená-los em um objeto JavaScript.

module.exports = (app) => {
  app.use(bodyParser.json());
  app.get("/", (req, res) => res.status(200).send("API funcionando!"));
};
