'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Drugs', [{
      title: 'Аспирин-С',
      image: 'https://cdn.eapteka.ru/upload/offer_photo/226/87/2_97432ba6f3042f4d2008eb522ce9afbc.png?t=1642680613&_cvc=1649148707',
      inStock: '19',
      price: '388',
      categoryId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        title: 'Сотрет',
        image: 'https://zdravcity.ru/upload/iblock/bfe/57b/photo_es.jpg',
        inStock: '4',
        price: '1678',
        categoryId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Эстер-С',
        image: 'https://cdn.rigla.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/3/4/34216-6-3-2-f-632fd9c0ae145d903e64eef1a76961077db32205_34216.jpg',
        inStock: '29',
        price: '2478',
        categoryId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Пенталгин',
        image: 'https://evropharm.ru/Storage/pentalgin-n12-tab-bez-kodeina.jpg',
        inStock: '40',
        price: '183',
        categoryId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Зубная паста Oral-B',
        image: 'https://irecommend.ru/sites/default/files/product-images/1057743/dK2tKBkCXTTa9tJBRKSg.jpg',
        inStock: '10',
        price: '332',
        categoryId: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Супрастин',
        image: 'https://avatars.mds.yandex.net/get-mpic/3911679/img_id7355131029854985135.jpeg/14hq',
        inStock: '46',
        price: '152',
        categoryId: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Завицефта',
        image: 'https://wer.ru/upload/iblock/0f8/0f8c213268f44174ca1c60159f7ad30c.jpg',
        inStock: '1',
        price: '93845',
        categoryId: '6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Крем-карандаш Г',
        image: 'https://irecommend.ru/sites/default/files/product-images/1516452/gIRcTdsQ6d0HvLIE7U64w.png',
        inStock: '871',
        price: '15',
        categoryId: '7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Нафтизин',
        image: 'https://static2.asna.ru/VLFLe0bp5Rcae1Yvv8MMlFxZjpIJbUmzMNHdwpEdHzk/fit/800/800/no/1/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrLzU0MC81NDAwMTc0ZGViNzk0N2QzYWM4ZGRlY2UzYTM3ZTA1Zi80NjU3OGI3ZmM0YTQxNWE5Y2RjNjIxZTVmZTQzNjk0NS5qcGc.jpg',
        inStock: '61',
        price: '41',
        categoryId: '8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Эквапрес',
        image: 'https://www.vidal.ru/upload/products/ekvapress.jpg',
        inStock: '12',
        price: '660',
        categoryId: '9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Випросал',
        image: 'https://d-apteka.ru/upload/iblock/ebc/gbsee7qqpfyt5fseg5kn87rthrezva23.jpg',
        inStock: '2',
        price: '396',
        categoryId: '10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])},
    
  async down(queryInterface, Sequelize) {
  },
};
