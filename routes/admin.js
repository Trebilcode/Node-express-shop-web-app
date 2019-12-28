const path = require('path');


const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');
const productsController = require('../controllers/products');

const { getAddProductPageController, postProduct } = productsController;


router.get('/add-product', getAddProductPageController );

router.post('/add-product', postProduct);
exports.routes = router;