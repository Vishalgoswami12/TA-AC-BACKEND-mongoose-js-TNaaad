var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect( "mongodb//localhost/sample", 
(err)=>{
    console.log( err ? err : "connected to databse" );
    
} )

app.listen( 3000, ()=>{
    console.log("server listening on port 3k");
} );