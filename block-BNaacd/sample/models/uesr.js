var mongoose=require("mongoose");
var Schema=mongoose.Schema


var userSchema= new Schema({
    name:String,
    age:{type:Number,default:0},
    email:{type:String,loweCase:true}
});