var express=require("express");
var mongoose=require("mongoose");
var app=rxpress();

mongoose.connect("mongodb://localhost/sample",
(err)=>{
    console.log( err ? err : "Connected to database" )
});

app.listen( 3000, () =>{
    console.log("server listening on port 3000");
} );