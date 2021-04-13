import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


const router = express.Router()

//@description : Fetch all products
//@route: GET /api/products
//@acess: Public route

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    //throw new Error('some error')
    res.json(products)
}))


//@description : Fetch single products according to id
//@route: GET /api/products/:id
//@acess: Public route

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')

    }
}))

export default router
