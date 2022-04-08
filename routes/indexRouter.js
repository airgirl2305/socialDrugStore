const router = require('express')
  .Router();
const {
  Drug,
  FreeDrugs,
  Category
} = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    //вывести все лекарства подтянув Категорию для вывода бесплатных в будущем
    const drugs = await Drug.findAll({ include: [{ model: Category}, {model: FreeDrugs}]});//{include:  всё}, raw:true}
    //вытянуть запросом по объединённой таблице в будущем
    let freeDrugs1week = [drugs[7], drugs[3], drugs[2]];
    let freeDrugs2week = [drugs[4], drugs[9], drugs[1]];
    // Цена, если в таблице есть указание на бесплатность по неделе во Freedrugs - 0,
    // указываем цену со скидкой, если указан процент в таблице Categories
    let drugsWithActualPrices = JSON.parse(JSON.stringify(drugs)).map((el) => {
      return{...el, price:el.price = (el.week) ? 0 : ((el.discount) ? el.price - (el.price * el.discount) : el.price)};
    });// пока undefined
    
    //дата на лэйаут
    let today = new Date();
    
    function getWeekDay() {
      let daysOfWeek = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
      return daysOfWeek[today.getDay()];
    }
    
    let date = today.toLocaleDateString('en-GB');
    let dateInFull = getWeekDay() + ', ' + date;
    
/* res.render('index', 'calend', { */
    res.render('index', {
      drugsWithActualPrices,
      drugs,
      freeDrugs1week,
      freeDrugs2week,
      dateInFull
    });
  })
    /*   //по кнопке удаления на главной
    .delete('/:id', async (req, res) => {
        const { id } = req.params;
        await Drug.destroy({ where: { id } });
        res.sendStatus(200);
      }) */
    ;
    
    router.route('/admin')
      .get((req, res) => {
        res.render('admin');
      });
    
    module.exports = router;;
