var request = require('request');
var mysql = require('mysql');

var connection = mysql.createConnection({
         host: 'custom-mysql.gamification.svc.cluster.local',
         port     : '3306',
         user     : 'xxuser',
         password : 'welcome1',
         database : 'sampledb'
       });

var Products = {
   find: function(req, res, next) {
       connection.query('Select c.ITEM_NUMBER,c.DESCRIPTION,c.LONG_DESCRIPTION,c.LIST_PRICE,c.DISCOUNT,c.SKU_UNIT_OF_MEASURE,d.BRAND,c.SKU_ATTRIBUTE_VALUE1,c.SKU_ATTRIBUTE_VALUE2,c.IN_STOCK from(select A.ITEM_NUMBER,B.DESCRIPTION,B.LONG_DESCRIPTION,A.LIST_PRICE,A.IN_STOCK,A.DISCOUNT,B.SKU_UNIT_OF_MEASURE,B.SKU_ATTRIBUTE_VALUE1,B.SKU_ATTRIBUTE_VALUE2 from XXIBM_PRODUCT_PRICING A JOIN XXIBM_PRODUCT_SKU B ON A.ITEM_NUMBER = B.ITEM_NUMBER) c JOIN  XXIBM_PRODUCT_STYLE d ON c.DESCRIPTION = d.DESCRIPTION', function(err,rows,fields){;
        if (err) throw err;
        var rows = JSON.stringify(rows);
         rows = '{"data":' + rows + '}';
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.send(rows);             
      });
   }
};

module.exports = Products;
