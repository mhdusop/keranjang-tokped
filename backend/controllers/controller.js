import Product from '../models/model.js'

export const getProduct = async ( req, res ) => {
    try {
        const products =  await Product.find();
        res.json(products)
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

export const getProductById = async ( req, res ) => {
    try {
        const products =  await Product.findById(req.params.id);
        res.json(products)
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const saveProduct = async ( req, res ) => {
const products = new Product(req.body)
    try {
        const insertProduct =  await products.save();
        res.status(201).json(insertProduct)
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export const updateProduct = async ( req, res ) => {
    try {
        const updateProduct =  await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export const deleteProduct = async ( req, res ) => {
    try {
        const deleteProduct =  await Product.deleteOne({_id:req.params.id});
        res.status(200).json(deleteProduct)
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}