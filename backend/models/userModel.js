     
const mongoose = require('mongoose');
  
const useSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
 
module.exports = mongoose.model("users",useSchema)