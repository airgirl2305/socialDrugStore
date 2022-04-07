'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({Drug}) {
      this.belongsToMany(Drug, {through:"drugId"})
    }
  }
  Category.init({
    title: DataTypes.STRING,
    drugId: DataTypes.INTEGER,
    discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
