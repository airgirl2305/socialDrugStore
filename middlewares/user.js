module.exports = (req, res, next) => {
  res.locals.username = req.session.user?.username;
  next();
};
