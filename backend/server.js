import express from 'express'
import dotenv from 'dotenv'
import product from './data/products.js'


dotenv.config()
const app = express()


app.get('/', (req, res) => {
    res.send('Api is running')
})

//Create a route for all the product json data
app.get('/api/products', (req, res) => {
    res.json(products)
})

//Create a route for individual data with id
app.get('/api/products/:id', (req,res)=>{
    const product = products.find(p=> p._id === req.params.id )
    res.json(product)
})


const PORT = process.env.port || 5000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))