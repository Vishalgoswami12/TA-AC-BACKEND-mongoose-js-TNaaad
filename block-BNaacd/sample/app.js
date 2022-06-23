const  express=require("express");
const app = express();
console.log(" i am running this for test purpose");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test" , (err)=>{
    console.log(err ? err : "Connection is made sucessfully");
})
app.listen( 3000, () =>{
    console.log("server listening on port 3000");
} );