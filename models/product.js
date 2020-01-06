const path =  require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = callback => {  

  fs.readFile(p, (err, data) => {
    err && callback([]);

    callback(JSON.parse(data));

  });
};


module.exports = class Product {
  constructor(title) {
    this.title = title;
  };

  save() {
    getProductsFromFile(products => {
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });    
  };

  static fetchAll(callback) {    
    getProductsFromFile(callback);    
    };    
  };
