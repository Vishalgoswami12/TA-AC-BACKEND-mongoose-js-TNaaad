const express=require("express");
const moongose=require("moongose")

//connect to database
moongose.connect("nongodb://localhost/connect-mongose",
{ useNewUrlparser: true , useUnifiedTopology: true },
(err)=>{
    console.log("Database connected")
}
)

const app=express();
app.get("/",(req,res)=>{
    res.send("welcome to mongose")
})

app.listen(3000,()=>{
    console.log('Server is listen on port 3000');
})