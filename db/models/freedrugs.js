'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FreeDrugs extends Model {
    static associate({ Drug }) {
      this.hasOne(Drug, { foreignKey: 'drugId'})
    }
    static associate(models) {
      // define association here
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
