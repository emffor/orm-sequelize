const express = require("express"); // Importa o express
const routes = require("./routes"); // Importa o arquivo de rotas

const app = express(); // Inicializa o express

const port = 3001;

routes(app); // Inicializa as rotas

app.listen(port, () => console.log(`servidor está rodando na porta ${port}!`));

module.exports = app;
