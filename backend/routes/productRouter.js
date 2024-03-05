import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import Product from '../model/productModel.js';

//@desc  fetch all product
//@route GET/api/products
//@Access Public
router.get('/', asyncHandler(async (req, res) => {

    const products = await Product.find({})
    res.json(products)

}))

//@desc  fetch single product
//@route GET/api/products/:id
//@Access fetch all product Public 
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ Message: 'Product Not found' })
    }

}))


export default router