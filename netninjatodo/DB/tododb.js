const mongoose=require("mongoose")

const todoschema=new mongoose.Schema({
    item:String
    
})
module.exports=todo=mongoose.model('todomodelinput',todoschema);