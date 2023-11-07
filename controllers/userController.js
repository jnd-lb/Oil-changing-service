const {User} = require('../models/relations');
const { getUserById } = require('../services/userService');


const findAll = async (req,res)=>{
    const users = await User.findAll();
    if(users.length == 0)
        res.status(404).json({
            message: 'No users found'
        })
    
    res.status(200).send(users);
}


const findById = async (req,res)=>{

    let user = getUserById(id)

    //formate
    
    res.status(200).send(users);
}



module.exports = {
    findAll
}