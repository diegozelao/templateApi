require('dotenv/config')
const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./src/routers/index');
const personRoute = require('./src/routers/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;