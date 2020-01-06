const Product = require('../models/product');


exports.getAddProductPageController = (req, res, next) => {
  res.render('admin/add-product',
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
      'admin/products',
      {
        prods: products,
        path: '/admin/products',
        pageTitle: 'Admin Products'
      });
  });
};