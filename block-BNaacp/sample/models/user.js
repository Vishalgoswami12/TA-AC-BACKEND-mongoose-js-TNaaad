var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema  = new Schema({
    name:String,
    emails : {type: String, lowercase: true},
    sports:String
},{ timestamps : true })

// var User = mongoose.model('User',userSchema);

module.exports = mongoose.model("User" ,userSchema)