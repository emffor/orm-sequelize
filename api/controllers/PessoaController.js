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

  // Método que retorna uma pessoa específica
  static async pegaUmaPessoa(req, res) {
    const { id } = req.params; // Pega o id da pessoa que está sendo buscada
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      }); // Faz a busca no banco de dados
      return res.status(200).json(umaPessoa); // Retorna o resultado da busca
    } catch (error) {
      return res.status(500).json(error.message); // Retorna o erro
    }
  }
}

module.exports = PessoaController;
