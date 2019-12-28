const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const getErrorPageController = require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const { getErrorPage } = getErrorPageController;

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(getErrorPage);


app.listen(3000);




