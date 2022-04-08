const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('account');
  })

router.route('/signup')
  .get((req, res) => {
    res.render('signUp');
  })
  .post(async (req, res) => {
    const {
      name,
      password,
      email,
    } = req.body;
    if (name && password && email) {
      const secretPass = await bcrypt.hash(password, Number(process.env.ROUNDS));
      try {
        const newUser = await User.create({
          ...req.body,
          password: secretPass,
        });
        req.session.user = {
          id: newUser.id,
          name: newUser.name,
        };
        return res.redirect('/');
      } catch (err) {
        console.log(err);
        res.redirect('/account/signup');
      }
    } else {
      return res.redirect('/account/signup');
    }
  });

router.route('/signin')
  .get((req, res) => {
    res.render('signIn');
  })
  .post(async (req, res) => {
    const {
      email,
      password,
    } = req.body;
    console.log(req.body);
    if (email && password) {
      const currentUser = await User.findOne({ where: { email } });
      console.log('currentUser', currentUser);
      if (currentUser && await bcrypt.compare(password, currentUser.password)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
          isManager: (currentUser.isManager)
        };
        return res.redirect('/');
      }
      console.log('wrong password');
      res.redirect('/signin');
    } else {
      console.log('no such user');
      res.redirect('/signin');
    }
  });

router.route('/logOut')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid')
      .redirect('/');
  });



module.exports = router;
