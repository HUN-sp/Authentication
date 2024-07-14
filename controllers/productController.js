const productModel = require('../models/productModel');


exports.createAllProducts = async (req, res) => {
    const product = await productModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInstock: req.body.isInstock,
        category: req.body.category
    });

    console.log(product);

    return res.status(201).json({ message: 'Product Created' });
}



exports.getAllProducts = async(req, res) =>{
    const allProducts = await productModel.find({isInstock : true})

    return res.json(allProducts);
}


exports.getProductById = async(req, res) =>{
    const id = req.params;
    const product = await productModel.findById(req.params.id);

    return res.json(product);
}



exports.updateProduct = async(req, res) =>{
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);

    return res.json(updatedProduct);
}



exports.deleteProduct = async(req,res) =>{
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);

    return res.json(deletedProduct);
}