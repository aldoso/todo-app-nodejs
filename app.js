const express = require('express')
const todoController = require('./controllers/todoController')
const mongoose = require('mongoose');

const app = express()

app.listen(process.env.PORT || 4000)
console.log('This app runs on http://localhost:4000')

app.set('view engine', 'ejs') //set template engine
app.use(express.static('./public/')) //static files

// // Connect to the database (mlab.com)
// mongoose.connect('mongodb://test:test@ds159024.mlab.com:59024/aldoso-todo')
//
// // Create a schema - this is like a blueprint
// const todoSchema = new mongoose.Schema({
//   item: String
// })

//fire controllers !!!!
todoController(app)
