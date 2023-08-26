const express = require('express');
const cartApp = express.Router();
const expressAsyncHandler = require('express-async-handler');

cartApp.use(express.json());
 
//Add item in cart
cartApp.post('/products/addtocart', expressAsyncHandler(async (req, res) => {
    let cartCollectionObj = req.app.get('cartCollectionObj');
    let newItem = JSON.parse(req.body);
    console.log(newItem);

    // await cartCollectionObj.insertOne(newItem);

    res.send({ message: 'Item added to cart successfully' });
}
))

cartApp.get('/getcartitems', expressAsyncHandler(async (req, res) => {
    let cartCollectionObj = req.app.get('cartCollectionObj');

    let cartItems = await cartCollectionObj.find().toArray();

    res.send({ message: 'Items in cart', payload: cartItems });
})
)

module.exports = cartApp;