const express=require('express')
const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
var idx=3;
var data=[{name:"python",amount:10,id:0},{name:"c",amount:0,id:2}]
app.use(express.static('C:/Users/abhiram reddy/Desktop/bz/static'))
app.get('/todo',(req,res)=>{
    res.sendFile(__dirname+"/static/todo.html")
})
app.post('https://shimigami-todo.herokuapp.com//programs',(req,res)=>{
    var x=req.body;
    x.id=idx;
    idx+=1;
    data.push(x);
    res.send("done");
})
app.delete('https://shimigami-todo.herokuapp.com//programs/:id',(req,res)=>{
    console.log(req.params.id);
    data=data.filter((x)=>{return (x.id!=req.params.id)})
    res.send("done");
})
app.get("https://shimigami-todo.herokuapp.com//programs",(req,res)=>{
    res.json(data);
})
app.put("https://shimigami-todo.herokuapp.com//programs/:id",(req,res)=>{
    for(x of data)
    {
        if(x.id==req.params.id)
        {
            x.amount=req.body.amount;
        }
    }
    res.send("done");
})
var port=process.env.PORT||8000
app.listen(port,8000,()=>{
    console.log("server is listening");
})