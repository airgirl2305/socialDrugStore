'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'manager',
      email: 'manager@ya.ru',
      password: 123,
      isManager: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
  
  async down(queryInterface, Sequelize) {
  }
};
