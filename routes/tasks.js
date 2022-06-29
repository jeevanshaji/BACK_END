const express = require("express");
const app =express();

app.get("/api/tasks",(req,res)=>{
    console.log("ok");
});

module.exports=app;