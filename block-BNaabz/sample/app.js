var express = require('express');
var mongoose = require('mongoose')
//require the model
var User = require('./models/user');

// connect to mongoDb 
mongoose.connect(" mongodb://127.0.0.1:27017/sample",
{
useNewUrlParser: true, useUnifiedTopology: true} ,
(err) => {
    console.log(err ? err : "connected true");
});

var app = express();

//middlewares to capture the json data
app.use(express.json())


app.get('/',( req,res ) => {
    res.send('Welcome');
})

//insert some document  into db to Users
app.post('/users',(req,res) => {
 console.log( req.body);
 User.create(req.body, (err,user ) =>{
  console.log(err,user);
 }) 
 //   res.json(user)
})

//find all documents
app.get('/users',(req,res) =>{
    user.find({},(err , users) =>{
    console.log(err);
    res.json({users : users})
    })
})
//
app.get('/users/:id',(req,res) => {
    //grap the id
    var id = req.params.id;
    user.findById(id, (err, user) =>{
      console.log(err);
      res.json(user);
  })
})

//update  document
app.put('/users/:id',(req,res) => {
    //grap the id
    var id = req.params.id;
     user.findByIdAndUpdate(id, req.body,{new:true} ,(err, updateUser) => {
      console.log(err);
      res.json(updateUser);
  })
})

app.delete('/users/:id',(req,res) => {
    //grap the id
    var id = req.params.id;
    User.findByIdAndDelete(id, req.body,{ new :true } ,(err, deleteUser) =>{
      console.log(err);
      res.send(`${deleteUser.name} was deleted`);
  })
})



app.listen(3000,() =>{
    console.log('server is listing on port 3000');
});