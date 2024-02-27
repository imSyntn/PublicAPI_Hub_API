const express = require("express")
const cors = require('cors')
const catagory = require('./data/categories.json')
const resource = require('./data/resources.json')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: true,
    credentials: true,
}))

const getSpecificCataoryResult = (array, name) => {
    const data = array.filter((set)=> set.Category.toLowerCase().includes(name))
    return data;
}

app.get('/', (req, res)=> {
    res.send("ok")
})

app.get('/catagories', (req,res)=> {
    res.json(catagory)
})

app.get('/catagories/:name', (req,res)=> {
    const searchedFor = req.params.name.toLowerCase()
    const data = getSpecificCataoryResult(resource.entries, searchedFor)
    res.send(data)
})

app.get('/search/:name', (req,res)=> {
    const searchedFor = req.params.name.toLowerCase();
    const result1 = resource.entries.filter((item) => item.API.toLowerCase().includes(searchedFor))
    const result2 = getSpecificCataoryResult(resource.entries, searchedFor)
    const result3 = resource.entries.filter((item) => item.Description.toLowerCase().includes(searchedFor))
    const results = [...result1, ...result2, ...result3]
    // let set = new Set()
    // let uniqueRes = []
    // for(let item of results) {
    //     if(!set.has(item.api)){
    //         set.add(item.name)
    //         uniqueRes.push(item.name)
    //     }
    // }
    // res.send(uniqueRes)
    res.send(results)
})

app.get('/random', (req, res)=> {
    const randomAPIs = catagory.entries.map(item => item.name.toLowerCase()).map(itemName => {
        const sameCatagory = getSpecificCataoryResult(resource.entries, itemName)
        return sameCatagory[Math.floor(Math.random() * sameCatagory.length)]
    })
    res.send(randomAPIs.reverse())
})

app.listen(PORT, ()=> {
    console.log("Server Started...")
})