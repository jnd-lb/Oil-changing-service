const {User} = require('../models/relations')

exports.authenticate = (username,password)=>{
    
}


exports.getUserByUsername = async (username)=>{
    const user = await User.findOne({username: username})
    return user;
}


exports.getUserById = async (id)=>{
    const user = await User.findOne({id:id})
    return user;
}


exports.formatUser = (user)=>{
    return {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        id: user.id
    }
}