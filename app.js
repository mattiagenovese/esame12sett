const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function string_square(s) {
   if(s!== null && !== undefined) {
      return s.length * s.length;
   } else {
      return -1; }
   }

app.get('/', function(req, res){
         res.send("hello world");
});

module.exports.string_square = string_square;
