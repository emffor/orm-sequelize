const database = require("../models"); // Importa o arquivos de conexão com o banco de dados

class PessoaController {
  // Método que retorna todas as pessoas cadastradas no banco de dados
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll(); // Faz a busca no banco de dados //serviço de banco de dados
      return res.status(200).json(todasAsPessoas); // Retorna o resultado da busca
    } catch (error) {
      return res.status(500).json(error.message); // Retorna o erro
    }
  }
}

module.exports = PessoaController;
