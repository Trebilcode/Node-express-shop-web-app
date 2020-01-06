

const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

const { getAddProductPageController, postProduct, getProducts } = adminController;


router.get('/add-product', getAddProductPageController );

router.get('/products', getProducts);

router.post('/add-product', postProduct);

exports.routes = router;