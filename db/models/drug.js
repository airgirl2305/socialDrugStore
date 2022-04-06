'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Category, { foreignKey: 'drugId'})
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
