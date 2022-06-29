
const express = require("express");
const app = express();
const port = 5000;

const TaskRouter=require("./routes/tasks.js");
app.use(TaskRouter);  
const mongoose= require("mongoose");

app.get("/", (req, res) => {
   // message=req.query.message;
  res.send("I am the react app ....");
});

app.get("/haha", (req, res) => {
    // message=req.query.message;
   res.send("hahahahah hahaha....!");
 });

 mongoose.connect('mongodb+srv://Jeevan:Jeevan@cluster0.rwt5yd1.mongodb.net/?retryWrites=true&w=majority',
 {
   useNewUrlParser: true,
   
   useUnifiedTopology: true
 }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
 console.log("Connected successfully");
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});



