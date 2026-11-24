const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()
const getData = require('./router/router')
const dataPost = require('./router/post.router')
const postImage = require('./router/imageRouter')
const avis_post = require('./router/demand.router')
const cors = require('cors')
const port = process.env.PORT || 8000

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/user', getData)
app.use('/photo', dataPost)


////////////////upload_image///////////////*
app.use('/image', postImage)

//////////////post Demand request ///////////
app.use('/avis', avis_post)

app.listen(port, ()=>{
    console.log(`serveur lancer au port ${port}`);
    
})
