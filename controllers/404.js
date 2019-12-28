exports.getErrorPage = (req, res, next) => {
  res.status(404).render('404', { 
    pageTitle: 'Page Not Found', 
    layout: false,
    path: req.url   
  });
};