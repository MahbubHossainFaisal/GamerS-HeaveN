import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


//@description : Fetch all products
//@route: GET /api/products
//@acess: Public route

const getProducts = asyncHandler(async(req,res) =>{
    const products = await Product.find({})
    //throw new Error('some error')
    res.json(products)
})

//@description : Fetch single products according to id
//@route: GET /api/products/:id
//@acess: Public route

const getProductById = asyncHandler(async(req,res) =>{
    
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')

    }
})

export {getProducts, getProductById}
