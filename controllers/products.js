const products = [];

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
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProduct = (req, res, next) => {
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
};