'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({Drug}) {
      this.hasMany(Drug, {foreignKey:"categoryId"})
    }
  }
  Category.init({
    title: DataTypes.STRING,
    discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
