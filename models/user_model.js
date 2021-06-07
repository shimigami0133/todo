const mongoose=require('mongoose')
const user_schema=mongoose.Schema({
    username:String,
    password:String,
    todo_list:[{type:mongoose.Schema.Types.ObjectId,ref:'todo'}]
})

const user_model=mongoose.model('user',user_schema);
module.exports=user_model;