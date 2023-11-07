require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.hashPassword =  (req,res, next)=>{
    try{
        let hash =  bcrypt.hashSync(req.body.password, 4);
        
        req.body.password = hash;
 
    }catch(err) {
        res.status(400).json({
            message: "internal error",
            errors: [{password:err.message}]
        })
    }

    next();
}


// Verify token
exports.verifyToken = async (req, res, next) => {

    //Extract the authorization field from the headers
    const authorization = req.headers.authorization;
    
    //Checking if the token does exist
    if(!authorization) return res.status(401).send({message: "You are not authenticated."});

    //Here we should get rid of the bearer by spliting the authorization string and take the second segment 
    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY, async (err, payload) => {
        if(err) return res.status(403).send({
            message: "You are not authorized."
        });
        
        //Attaching the user to request 
        //The payload is encoded user object
        req.user = payload
        
        next();
    });
}