var mongoose = require("mongoose");
var express = require("express");
var app = express();

mongoose.connect(  "mongodb://127.0.0.1:27017/sample", (err)=>{
    console.log("connected to database");
} );

app.listen( 3000, ()=>{
    console.log("server listening on port 3k");
} );