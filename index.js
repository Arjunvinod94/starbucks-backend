const express = require("express")
const app = express()
const path = require("path")
const port = 3010

app.use(express.static('public'))

app.use('/', require(path.join(__dirname, "routes/login.js")))
app.use('/home', require(path.join(__dirname, "routes/home.js")))
app.use(express.static(path.join(__dirname, "static")))


app.listen(port, console.log("Server started at port : 3010"))

//To Run : nodemon index.js