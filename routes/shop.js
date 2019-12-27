const path = require('path');

const express = require('express');

const router = express.Router();


const rootDir = require('../utils/path');
const adminData = require('./admin');

const products = adminData.products;

router.get('/', (req, res, next) => {
  res.render(
    'shop',
     { 
       prods: products, 
       path: '/', 
       pageTitle: 'Shop',
       hasProducts: products.length > 0,
       activeShop: true,
       productCSS: true,
       formsCSS: true
      }); 
});

module.exports = router;
