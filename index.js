const express = require("express")
const cors = require('cors')
const catagory = require('./data/categories.json')
const resource = require('./data/resources.json')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors())

app.get('/', (req, res)=> {
    res.send("ok")
})

app.get('/catagories', (req,res)=> {
    res.json(catagory)
})

app.get('/catagories/:id', (req,res)=> {
    const specificCatagory = req.params.id.toLowerCase()
    const data = resource.entries.filter((set)=> set.Category.toLowerCase() === specificCatagory)
    res.send(data)
})

app.listen(PORT, ()=> {
    console.log("Server Started...")
})