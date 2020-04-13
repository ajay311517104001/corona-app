const express = require('express')
const  app=express()
const bodyParser = require('body-parser')
const url=require('url')
var path =require('path')

var router=require('./routers/routers.js')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','hbs')

  
app.get('/',router)
app.get('/india',router)
app.get('/district',router)
app.get('/graph',router)

const port=process.env.PORT ||3000;
app.listen(port,()=>{
    console.log('server starts')
})