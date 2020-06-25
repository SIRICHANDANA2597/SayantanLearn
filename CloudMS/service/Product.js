var request = require('request');
var express       = require('express');
const { Pool, Client } = require('pg');


const pool = new Pool({
  user: 'admin',
  database: 'sampledb',
  host: '172.21.72.161',
  password: 'admin123',
  port: 5432
})

//pool.query('SELECT NOW()', (err, res) => {
 // console.log(err, res)
 // pool.end()
//})

const client = new Client({
  user: 'admin',
  database: 'sampledb',
  host: '172.21.72.161',
  password: 'admin123',
  port: 5432
})
client.connect()

//client.query('SELECT NOW()', (err, res) => {
 // console.log(err, res)
 // client.end()
//})

var Products = {
  find: function(req, res, next) {
      client.query('Select a.Hotel,b.Places,b.Description,b.VisitingPlaces,a.PPN from Hotel a join Travel_Places b ON a.Place = b.slno', 
      function(err,results){
       if (err) throw err;
       var rows = JSON.stringify(results.rows);
        rows = '{"data":' + rows + '}';
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(rows);             
     });
  }
};

module.exports = Products;
