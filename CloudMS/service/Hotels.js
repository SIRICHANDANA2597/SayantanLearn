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



var Hotels = {
    find: function(req, res, new_var, next) {
     // console.log(new_var);
      if (new_var != null)
        var sqlstmnt= 'Select a.slno,a.Hotel,b.Places,b.Description,b.VisitingPlaces,a.PPN,a.room_available,a.rating from Hotel a join Travel_Places b ON a.Place = b.slno where a.place IN(select place from hotel where slno =' + new_var + ') AND a.slno <> ' + new_var + ' order by a.slno';   
      else   
     var sqlstmnt= 'Select a.slno,a.Hotel,b.Places,b.Description,b.VisitingPlaces,a.PPN,a.room_available,a.rating from Hotel a join Travel_Places b ON a.Place = b.slno'; 
      client.query(sqlstmnt, function(err,results){
         if (err) throw err;
         var rows = JSON.stringify(results.rows);
          rows = '{"data":' + rows + '}';
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.send(rows);             
       });
    }
  };
  module.exports = Hotels;
