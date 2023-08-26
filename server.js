//creating express app
const express = require('express');
const app = express();
app.use(express.json());
const mclient = require('mongodb').MongoClient;

//connect frontend to backend

//import path module
const path = require('path');

//DOTENV
require('dotenv').config();

//connect build of react app with nodejs
app.use(express.static(path.join(__dirname, './build')))

const userApp = require('./APIS/userAPI');
const productApp = require('./APIS/productAPI');

app.use('/product', productApp);
app.use('/user', userApp);

//dealing with page refresh
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

const DBurl = process.env.DATABASE_CONNECTION_URL

mclient.connect(DBurl)
    .then((client) => {
        //db object
        let dbObj = client.db('laptopZone');

        //collection object
        let userCollectionObj = dbObj.collection('usercollection');
        let productCollectionObj = dbObj.collection('productcollection');

        //sharing collection object to APIs
        app.set('productCollectionObj', productCollectionObj);
        app.set('userCollectionObj', userCollectionObj);


        console.log("DB Connection successful");
    })
    .catch(error => console.log('Error connecting to database', error));

//Path error handling middleware
app.use((req, res, next) => {
    res.send({ message: `Invalid path: ${req.url}` });
})

//Error handling middleware
app.use((error, req, res, next) => {
    res.send({ message: `${error.message}` })
})

//Port listening
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

