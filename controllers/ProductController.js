import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'

const productRouter=express.Router()

// Fetch all products
productRouter.get('/', (req, res) => {
    try {
        products.fetchProducts(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        });
    }
});
// Fetch product by ID
productRouter.get('/:id', (req, res) => {
    try {
        products.fetchProduct(req.params.id, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve the product'
        });
    }
});
// Add a new product
productRouter.post('/', (req, res) => {
    try {
        products.addProduct(req.body, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add the product'
        });
    }
});
// Delete product by ID
productRouter.delete('/:id', (req, res) => {
    try {
        products.deleteProduct(req.params.id, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete the product'
        });
    }
});
// Update product by ID
productRouter.patch('/:id', (req, res) => {
    try {
        products.updateProduct(req.params.id, req.body, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update the product'
        });
    }
});

productRouter.delete('/delete/:id',(req,res)=>{
    try{
        products.deleteProduct(req,res)

    }catch(e){

        res.json({
            status:res.statusCode,
            msg:'failed to delete a product',
            // results:products.fetchProducts(req,res)
        })
    }
})

productRouter.patch('/update/:id',(req,res)=>{
    try{
        products.updateProduct(req,res)

    }catch(e){

        res.json({
            status:res.statusCode,
            msg:'failed to update a product',
            // results:products.fetchProducts(req,res)
        })
    }
})

export{
    productRouter
}


