var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const errorHendlerMiddleware = require('./app/middlewares/error-handler')
const notFoundMiddleware = require('./app/middlewares/not-found')

const todosRouter = require('./app/api/v1/todos/routers')
const userRouter = require('./app/api/v1/users/routers')
const notfound = require('./app/middlewares/not-found')



var app = express();
const v1 = '/api/v1'

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.status(200).json({ status: 'sucses', message: "Welcome to my todo API"}))

app.use(v1, todosRouter)
app.use(v1, userRouter)

app.use(errorHendlerMiddleware)
app.use(notFoundMiddleware)

module.exports = app;

