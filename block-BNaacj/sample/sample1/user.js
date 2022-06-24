
const mongoose=require("mongoose");
const Schema=mongoose.Schema;


var userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,lowercase:true,trim:true,match:/@/},
    age:{type:Number,default:0};
    favroute:{type:String},
    marks:Number,
    creditAt:{type:Date,default:newDate()},
    password:{type:String,minlength:5,maxlength:10,required:true},
},{timestamps:true})

var user=mongoose.sample1(user,userSchema);
module.exports(user);