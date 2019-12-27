const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const rootDir = require('./utils/path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) =>{
  res.status(404).render('404', { pageTitle: 'Page Not Found', layout: false });
});


app.listen(3000);




