"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      // define association here
      Matriculas.belongsTo(models.Pessoas, {
        foreignKey: "estudante_id",
      }); // Adiciona a associação de 1:1 - pertence a uma pessoa
      Matriculas.belongsTo(models.Turmas, {
        foreignKey: "turma_id",
      }); // Adiciona a associação de 1:1 - pertence a uma turma
    }
  }
  Matriculas.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Matriculas",
    }
  );
  return Matriculas;
};
