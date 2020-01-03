const path =  require('path');
const fs = require('fs');


const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {

    const p = path.join(path.dirname(process.mainModule.filename),
     'data',
     'products.json' 
     );
    
    fs.readFile(p, ( err, fileContent ) => {
      let products = [];
      !err ? products = JSON.parse(fileContent) : null;
      products.push(this);

    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
      });
    });
  }

  static async fetchAll(callback) {
    const p = path.join(path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    
    fs.readFile( p, (err, data ) => {
      if(err) {
        callback([]);
      }

      callback(JSON.parse(data));

      
    });
    

    
    }    
  }
