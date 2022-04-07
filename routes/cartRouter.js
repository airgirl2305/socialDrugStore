const router = require('express').Router();


//нужны пользователи и выбранные ими лекарство
router.route('/')
  .get((req, res) => {
    res.render('cart');
  })

module.exports = router;
