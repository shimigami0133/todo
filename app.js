const express = require('express')
const app = express()
const user_model=require('./models/user_model.js')
const cors = require('cors')
const session=require('express-session')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abhiram0133:abhiram1234@cluster0.avpng.mongodb.net/database1?retryWrites=true&w=majority', () => {
    console.log("db connected")
})
const router = require('./route/todo_route')
app.use(session({
    name:"session1",
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge:1000*60*60*24 }
  }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.get('/',(req,res)=>{
    if(req.session.userID)
    {   
        console.log("already exists");
        res.redirect('/todo');
    }

    res.sendFile(__dirname+"/static/login.html")
})

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+"/static/register.html")
})
app.post('/authen',async(req,res)=>
    {
        var p=await user_model.findOne({username:req.body.username});
        if(p)
        {
            if(p.password===req.body.p)
            {
                req.session.userID=p._id;
                res.redirect('/todo');
            }
        }
        
        res.redirect('/register');
        
    })
app.post('/add_user',async (req,res)=>{
    console.log(req.body)
    const u=await user_model.create(req.body);
    res.send("user added done")
})
app.use('/programs', router)
app.get('/todo', (req, res) => {
    res.sendFile(__dirname + "/static/todo.html")
})

var port = process.env.PORT || 8000
app.listen(port, 8000, () => {
    console.log("server is listening");
})
app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err)
        {
            res.redirect('/home');
        }
        else
        {
            res.clearCookie("session1");
            res.redirect('/');
        }
    })
})