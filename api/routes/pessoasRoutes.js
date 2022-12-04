const { Router } = require("express"); // Importa o Router do express
const PessoaController = require("../controllers/PessoaController"); // Importa o arquivo de controllers

const router = Router(); // Inicializa o Router

router.get("/pessoas", PessoaController.pegaTodasAsPessoas); // Define a rota e o método que será chamado

module.exports = router; // Exporta o router
