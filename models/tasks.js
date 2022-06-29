const mangoose = require("mongoose");

const Taskschema = new mongoose.Schema({
     test:{
        type:String,
    required:true,
     },
    day:{
        type:String,
    },
    remainder:{
        type:Boolean,
        default:false,
    },
 } );


const Tank = mongoose.model("Tank", schema);
