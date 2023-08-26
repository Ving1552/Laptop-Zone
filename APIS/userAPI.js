const express = require('express');
const userApp = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const expressAsyncHandler = require('express-async-handler');

var cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require("dotenv").config();
const verifyToken = require('./middlewares/verifyToken');

//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});

//configure cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: "LaptopZone",
            public_id: file.fieldname + "-" + Date.now(),
        };
    },
});

//configure multer
var upload = multer({ storage: cloudinaryStorage })

userApp.use(express.json());

//Route for user registration

userApp.post('/createusers', upload.single("photo"),  expressAsyncHandler(async (req, res) => {
    //get user object
    let userCollectionObj = req.app.get('userCollectionObj');

    //get user object as string from client and co
    let newUser = JSON.parse(req.body.userObj);

    let userofDB = await userCollectionObj.findOne({ username: newUser.username });

    if (userofDB != null) {
        res.send({ message: 'User already exists,please choose a new username' });
    }
    else {
        let hashedPassword = await bcryptjs.hash(newUser.password, 5);
        newUser.password = hashedPassword;
        //add profile image to new user object
        newUser.profileImg = req.file.path;

        await userCollectionObj.insertOne(newUser);

        res.send({ message: 'User Created' });
    }
})
);

//Route for user login

userApp.post('/login', expressAsyncHandler(async (req, res) => {
    let userCollectionObj = req.app.get('userCollectionObj');

    //get user credentials
    let userCredObj = req.body;

    //verify user credentials
    let userofDB = await userCollectionObj.findOne({ username: userCredObj.username });

    if (userofDB == null) {
        res.send({ message: 'User not found' });
    }
    else {
        let status = await bcryptjs.compare(userCredObj.password, userofDB.password);
        if (status == false) {
            res.send({ message: 'User password incorrect' });
        }
        else {
            //we have to create json web token for valid user
            let token = jwt.sign({ username: userofDB.username }, process.env.SECRET_KEY, { expiresIn: 1000 });

            res.send({ message: 'success', payload: token, userObj: userofDB });
        }
    }

}));

userApp.get('/getusers', verifyToken, expressAsyncHandler(async (req, res) => {
    let userCollectionObject = req.app.get('userCollectionObj');
    let users = await userCollectionObject.find().toArray();

    res.send({ message: 'All users', payload: users }); 
})
)


userApp.put('/putusers/:username', expressAsyncHandler(async (req, res) => {
    let userCollectionObject = req.app.get('userCollectionObj');
    let username = req.params.username;
    let updatedUser = req.body;
    let userofDB = await userCollectionObject.findOne({ username: username });
    if (userofDB == null) {
        res.send({ message: 'User not found' });
    }
    else {
        await userCollectionObject.updateOne(
            { "username": username },
            { $set: { "address": updatedUser.address } }
        );
        res.send({ message: 'Updated Successfully' });
    }
}));


userApp.delete('/deleteusers/:username', expressAsyncHandler(async (req, res) => {
    let userCollectionObject = req.app.get('userCollectionObj');
    let username = req.params.username;
    let userofDB = await userCollectionObject.findOne({ username: username });
    if (userofDB == null) {
        res.send({ message: 'User not found' });
    }
    else {
        await userCollectionObject.deleteOne({ "username": username });
        res.send({ message: 'Deleted Successfully' });
    }
}));

module.exports = userApp;