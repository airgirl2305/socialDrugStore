'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    static associate({Category,FreeDrugs}) {
      this.belongsTo(Category, { foreignKey: 'categoryId'})
      this.hasMany(FreeDrugs, { foreignKey: 'drugsId'})
    }
  }
  Drug.init({
    title: DataTypes.STRING,
    image: DataTypes.TEXT,
    inStock: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};
