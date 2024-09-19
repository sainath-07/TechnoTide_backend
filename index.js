const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/addtodoroute')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(cors('*'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', router)



mongoose.connect(process.env.mongodburl)
    .then(x => console.log('database connected'))
    .catch(x => console.log(x))

app.get('/', (req, res) => {
    res.status(200).json({
        message: "root page"
    })
})

const Port = process.env.port

app.listen(Port, () => {
    console.log(`port is running fine at ${Port}`)
})