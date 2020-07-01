var request = require('request');
var express       = require('express');
const { Pool, Client } = require('pg');

const client = new Client({
  user: 'admin',
  database: 'sampledb',
  host: '172.21.72.161',
  password: 'admin123',
  port: 5432
})
client.connect()

var Visiting = {
    find: function(req, res, next) {
    client.query('Select slno, name, places, description, rating from Visiting_Places', function(err,results){;
     if (err) throw err;
        
         var rows = JSON.stringify(results.rows);
         rows = '{"data":' + rows + '}';
       res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(rows);             
       });
    }
  };
  module.exports = Visiting;
