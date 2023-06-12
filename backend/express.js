const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./route')
const queries = require('./queries')
const cors = require('cors')

//connection to mongodb

mongoose.connect('mongodb+srv://jarvis:1234@cluster0.qhqbvdx.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', router)

app.use('/query', queries)

app.listen(3001, () => {
  console.log('Listening on port 3001')
})
