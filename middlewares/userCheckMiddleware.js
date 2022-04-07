const checkUser = (req, res, next) => { // если залогиненный юзер у сессии
  if (req.session.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};
module.exports = { checkUser };
