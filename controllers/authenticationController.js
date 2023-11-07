const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { User } = require("../models/relations");
const { formatSequelize } = require("../services/errorService");
const { Sequelize } = require("sequelize");
const { generateToken } = require("../services/tokenService");
const { formatUser } = require("../services/userService");
const bcrypt = require("bcrypt")


exports.authenticate = async (request, response)=>{
    //extract the username and password from the body
    const {username, password} = request.body;

 
    //Check if there is a missing required feild
    if(!username || !password){
        response.status(401).json({message:"There's a missing data"});
    }   
}


exports.signUp = async(req, res)=>{

    try{
        let user =  await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
        })

        
        user = formatUser(user.dataValues)

        //Create token from the the user object
        let token = generateToken(user)

        //Attach the token to the user obj
        user.token = token

        res.status(201).json(user)

    }catch(err){

        console.error(err)

        let message = "internal error"
        let errors = undefined

        if(err instanceof Sequelize.ValidationError)
            errors = formatSequelize(err)

        return res.status(400).json({
            message:message,
            errors:errors
        })
    }
}




exports.logIn = async(req, res)=>{

    //fetch the user by the given name
    let user = await User.findOne({
        where:{
            username: req.body.username,
        }
    })

    //if no user found return error
    if(!user) return res.status(301).json({
        message:"Please provide the right credentials"
    })

    //compare the given pass with the hashed one stored in the db (pass have been already hashed)
    let result = bcrypt.compare(req.body.password, user.password)

    //in case the password provided does not match the one stored return error
    if(!result) return res.status(301).json({
        message:"Please provide the right credentials"
    })

    user = formatUser(user)

    //Create token from the the user object
    let token = generateToken(user)

    //Attach the token to the user obj
    user.token = token

    //Everything is ok then retun the user with the token
    res.status(201).json(user)
}