'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FreeDrugs extends Model {
    static associate({ Drug }) {
      this.belongsTo(Drug, { foreignKey: 'drugsId'})
    }
  }
  FreeDrugs.init({
    drugsId: DataTypes.INTEGER,
    week: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FreeDrugs',
  });
  return FreeDrugs;
};
