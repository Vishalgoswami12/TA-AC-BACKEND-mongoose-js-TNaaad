var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect( "mongodb://localhost/sample1", (err)=>{
    console.log( err ? err : "connect to database" );
} );

app.listen( 3000, ()=>{
    console.log("server listening on port 3000");
} );