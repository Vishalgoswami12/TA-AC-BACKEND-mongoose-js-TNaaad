var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema=new Schema({
    fav:String,
    marks:[Number]
})

var otherSchema=new Schema({
    village:String,
    state:String,
    pin:Number,
    user:Schema.Types.ObjectId
})