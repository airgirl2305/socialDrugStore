'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
    }
  }
  
  Cart.init({
    userId: DataTypes.INTEGER,
    drugsId: DataTypes.INTEGER,
    orderStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
