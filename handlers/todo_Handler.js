const todo=require('../models/todo.js')
exports.add_todo=async(req,res)=>{
   
 const t= await todo.create(req.body);
    res.json(t)
}

exports.get_todo=async(req,res)=>{
    try{    const t=await todo.find();
    res.json(t);
    }
    catch(err)
    {
        console.log(err)
    }
}

exports.update=async(req,res)=>{
    const t =await todo.updateOne({_id:req.params.id},{$set:{amount:req.body.amount}});
    res.json(t);
}
exports.del=async(req,res)=>{
    try{
    const t=await todo.deleteOne({_id:req.params.id});
    res.json(t);
    }
    catch(err)
    {
        console.log(err);
    }
}