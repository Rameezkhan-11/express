const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Welcome to my home page")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
})


app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page")
})

app.get("/temp",(req,res)=>{
    res.send("Welcome to temp page")
})

app.listen(8000);