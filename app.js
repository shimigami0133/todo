const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abhiram0133:abhiram1234@cluster0.avpng.mongodb.net/database1?retryWrites=true&w=majority', () => {
    console.log("db connected")
})
const router = require('./route/todo_route')
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/programs', router)
app.get('/todo', (req, res) => {
    res.sendFile(__dirname + "/static/todo.html")
})

var port = process.env.PORT || 8000
app.listen(port, 8000, () => {
    console.log("server is listening");
})