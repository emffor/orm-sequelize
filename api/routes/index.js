const bodyParser = require("body-parser"); // Importa o body-parser
const pessoas = require("./pessoasRoutes"); // Importa o arquivo de rotas

//body-parser é um middleware que lê um formulário HTML e armazena os dados em um objeto JavaScript. Ele também pode ler dados JSON e armazená-los em um objeto JavaScript.

module.exports = (app) => {
  app.use(bodyParser.json()); // Define que o express irá usar o body-parser como middleware
  app.use(pessoas); // Chamando a rota de pessoas
};
