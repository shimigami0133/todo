const express=require('express')
const router=express.Router();
const todo1=require('../handlers/todo_Handler')
router.route('/').post(todo1.add_todo).get(todo1.get_todo)
router.route('/:id').delete(todo1.del).put(todo1.update)
module.exports=router;