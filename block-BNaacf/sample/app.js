var express = require("express");
var app = express();
var mongoose = require("mongoose");


mongoose.connect(" mongodb://127.0.0.1:27017/sample",(err)=>{
console.log(err?err:"connect to database")
})

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(3000,()=>{
    console.log("listen on port 3000")
})