const Product = require('../models/product');


exports.getAddProductPageController = (req, res, next) => {
   res.render('add-product',
    {
      path: '/admin/add-product',
      pageTitle: 'Add Product',
      activeProduct: true,
      productCSS: true,
      formsCSS: true
    });
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
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
  
};