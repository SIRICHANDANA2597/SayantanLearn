'use strict';

const controller = require('./controller');
console.log(3);
module.exports = function(app) {
   app.route('/products')
       .get(controller.getProducts);
   app.route('/hotels/:slno?')
       .get(controller.gethotels);
};
