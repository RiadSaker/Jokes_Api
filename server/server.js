const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 8000;

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended:true}))

const appRoutes = require('./routes/joke.routes')
appRoutes(app)

app.listen(8000, () => console.log("....Server Up"))