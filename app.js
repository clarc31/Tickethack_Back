var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require ('./models/connection');

// Créa route trips
var tripsRouter = require('./routes/trips');

var usersRouter = require('./routes/users');

var app = express();

// Ajout cors
const cors = require ('cors');
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/trips', tripsRouter);

app.use('/users', usersRouter);

module.exports = app;
