const mongoose=require('mongoose')
const todo_schema=mongoose.Schema({
    name:String,
    amount:String
})
const tour_model=mongoose.model('todo',todo_schema)
module.exports=tour_model;