//PRODUCT API
const express = require('express');
const productApp = express.Router();
const expressAsyncHandler = require('express-async-handler');
productApp.use(express.json());


productApp.get('/getproducts', expressAsyncHandler(async (req, res) => {
    let productCollectionObject = req.app.get('productCollectionObj');
    let products = await productCollectionObject.find().toArray();

    res.send({ message: 'All products', payload: products });
}))

productApp.post('/createproducts', expressAsyncHandler(async (req, res) => {
    let newProduct = req.body;
    let productCollectionObj = req.app.get('productCollectionObj');
    await productCollectionObj.insertOne(newProduct);
    res.send({ message: 'New user created' });
})
);

productApp.delete('/deleteproducts/:id', expressAsyncHandler(async(req, res) => {
    let productCollectionObject = req.app.get('productCollectionObj');
    let id = +req.params.id;

    await productCollectionObject.deleteOne({ "id": id });

    res.send({ message: 'Deleted Successfully'});
    
}));

module.exports = productApp;