"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    static associate(models) {
      // define association here
      Niveis.hasMany(models.Turmas, { foreignKey: "nivel_id" }); // Adiciona a associação de 1:N
    }
  }
  Niveis.init(
    {
      descr_nivel: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Niveis",
    }
  );
  return Niveis;
};
