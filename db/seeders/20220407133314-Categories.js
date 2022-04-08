'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      title: 'Анальгетик',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Дерматология',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Витамины',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Гигиена',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Аллергия',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Антибиотики',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Гемморой',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ухо, горло, нос',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Сердечно-сосудистые',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Разное',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
