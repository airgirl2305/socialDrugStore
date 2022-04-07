require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const hbs = require('hbs');
const path = require('path');

const createError = require('http-errors');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/indexRouter'); // done
const accountRouter = require('./routes/accountRouter');
const cartRouter = require('./routes/cartRouter');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));
hbs.registerPartials(path.join(process.env.PWD, 'views/partials'));

app.use(logger('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
// app.use('/account', accountRouter);
// app.use('/cart', cartRouter);

app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

app.use((err, req, res, next) => {
  const appMode = req.app.get('env');
  let error;
  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  res.locals.message = err.message;
  res.locals.error = error;

  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`The server started PORT: ${PORT}`);
});
