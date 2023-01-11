const express = require('express');
const route = express.Router();
const principal = require('./src/controllers/home');

route.get('/home', principal.hm);

module.exports = route;