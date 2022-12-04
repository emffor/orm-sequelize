"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      }); // Adiciona a associação de 1:N
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
      }); // Adiciona a associação de 1:N // foreignKey: "estudante_id" é opcional, pois o sequelize já entende que é uma associação de 1:N, mas para passar o nome certo é sempre bom passar.
    }
  }
  Pessoas.init(
    {
      nome: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoas",
    }
  );
  return Pessoas;
};
