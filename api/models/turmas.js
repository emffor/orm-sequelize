"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    static associate(models) {
      // define association here
      Turmas.hasMany(models.Matriculas, { foreignKey: "turma_id" }); // Adiciona a associação de 1:N
      Turmas.belongsTo(models.Pessoas); // Adiciona a associação de 1:1 - pertence a uma pessoa
      Turmas.belongsTo(models.Niveis); // Adiciona a associação de 1:1 - pertence a um nível
    }
  }
  Turmas.init(
    {
      data_inicio: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Turmas",
    }
  );
  return Turmas;
};
