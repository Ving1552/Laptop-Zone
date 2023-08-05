const jwt = require('jsonwebtoken');
require("dotenv").config();

//write a middleware to verify token
const verifyToken = (req, res, next) => {

    //get bearer token
    let bearerToken = req.headers.authorization;
    //check if token exists
    if (bearerToken == undefined) {
        return res.send({ message: 'Unauthorized request' });
    }

    let token = bearerToken.split(" ")[1];

    if (token === null) {
        return response.send({ message: "Unauthorized request" });
    }
    //verify token

    try {
        jwt.verify(token, process.env.SECRET_KEY);
        //forward request to private route
        next();
    }
    catch (err) {
        return res.send({ message: "Session expired.Please login again." });
    }
}

//export middleware
module.exports = verifyToken;