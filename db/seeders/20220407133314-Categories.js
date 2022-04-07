'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      title: 'Анальгетик',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Дерматология',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Витамины',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Гигиена',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      title: 'Аллергия',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Антибиотики',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Гемморой',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ухо, горло, нос',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Сердечно-сосудистые',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Разное',
      discount: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
