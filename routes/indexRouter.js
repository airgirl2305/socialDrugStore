const router = require('express').Router();
const { Drug } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const drugs = await Drug.findAll();
    res.render('index', { drugs });
  });

module.exports = router;

// вывод на главную все лекарства из Таблицы Drugs модель Drug
