const express = require('express')
const app = express()

const api = require('./routes/api')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', api)

app.listen('1212',()=>{
    console.log("Server started on http://localhost:1212")
})