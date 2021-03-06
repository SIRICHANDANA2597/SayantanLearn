'use strict';

var properties = require('../package.json');
var products = require('../service/Product');
var hotels = require('../service/Hotels');
var visiting = require('../service/visiting');
console.log(4);
var controllers = {
   getProducts: function(req, res) {
    products.find(req, res, function(err, productlist) {
               if (err)
                   res.send(err);
               res.json(productlist);
           });
       },
   gethotels: function(req, res) {
        var new_var = req.params.slno;
        //console.log(new_var);
        hotels.find(req, res, new_var, function(err, hotellist) {
                    if (err)
                        res.send(err);
                    res.json(hotellist);
                });
            },
   getvisiting: function(req, res) {
    visiting.find(req, res, function(err, visitinglist) {
               if (err)
                   res.send(err);
               res.json(visitinglist);
           });
       },
};

module.exports = controllers;
