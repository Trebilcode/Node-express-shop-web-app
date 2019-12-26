const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');
const adminData = require('./admin');

const products = adminData.products;

router.get('/', (req, res, next) => {
  res.render('shop', { prods: products, path: '/', pageTitle: 'Shop'}); 
});

module.exports = router;
