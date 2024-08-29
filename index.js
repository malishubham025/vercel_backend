const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
})

app.get("/home",(req,res)=>{
    res.json({
        message:"hello is there "
    })
})

app.listen(3000,()=>{
    console.log("running ...");
})