const database = require("../models"); // Importa o arquivos de conexão com o banco de dados

class PessoaController {
  // Método que retorna todas as pessoas cadastradas no banco de dados
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll(); // Faz a busca no banco de dados (serviço de banco de dados)
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

  // Método que cria uma nova pessoa
  static async criaPessoa(req, res) {
    const novaPessoa = req.body; // Pega o corpo da requisição e armazena na variável novaPessoa { nome: "João", ativo: true, email: "teste@teste.com", etc... }
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa); // Faz a criação no banco de dados
      return res.status(200).json(novaPessoaCriada); // Retorna o resultado da criação
    } catch (error) {
      return res.status(500).json(error.message); // Retorna o erro
    }
  }

  // Método que atualiza uma pessoa pode ser atualizado todos os itens e apenas um item
  static async atualizaPessoa(req, res) {
    const { id } = req.params; // Pega o id da pessoa que está sendo atualizada
    const novasInfos = req.body; // Pega o corpo da requisição e armazena na variável novasInfos { nome: "João", ativo: true, email: "
    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) } }); // Faz a atualização no banco de dados, passando as novas informações e o id da pessoa que será atualizada
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      }); // Faz a busca no banco de dados para retornar a pessoa atualizada
      return res.status(200).json(pessoaAtualizada); // Retorna o resultado da atualização
    } catch (error) {
      return res.status(500).json(error.message); // Retorna o erro
    }
  }

  // Método que deleta uma pessoa
  static async apagaPessoa(req, res) {
    const { id } = req.params; // Pega o id da pessoa que será deletada
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } }); // Faz a deleção no banco de dados
      return res.status(200).json({ mensagem: `id ${id} deletado` }); // Retorna o resultado da deleção
    } catch (error) {
      return res.status(500).json(error.message); // Retorna o erro
    }
  }
}

module.exports = PessoaController;
