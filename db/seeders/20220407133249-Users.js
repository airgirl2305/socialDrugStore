'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [{
      name: 'Дарина',
      email: 'manager@ya.ru',
      password: "$2b$06$hjuEugGsmcG/9p2DkXHECuxo.YE3cx0bdhxHd8eMAwyuFA2XYiBqq", //123
      isManager: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
  
  async down(queryInterface, Sequelize) {
  }
};
