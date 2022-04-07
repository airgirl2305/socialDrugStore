const router = require('express').Router();
const { Drug } = require('../db/models');

//передать массив лекарства и пересчитанные цены
router.route('/')
  .get(async (req, res) => {
    const drugs = await Drug.findAll();
    console.log(drugs);
    //собрать новый объект с исправленной ценой drug_id:price
      //или массив лекарство - картинка - цена
/*     const drugsForPrices = await Drug.findAll({include: {
      model:Category,
      include: discount,
      }});
    const prices =  drugs.map((el) => ({ ...el, price:(el.percent) ? el.price - (el.percent * el.percent)  : el.price})); //  проитерироваться
     */
    const freeDrugs1week = [drugs[7] + drugs[3] + drugs[2]];
    const freeDrugs2week = [drugs[4] + drugs[9] + drugs[12]];

    
    res.render('index', { drugs }); //    res.render('index', { drugs, prices  });
  });
 
 module.exports = router;
