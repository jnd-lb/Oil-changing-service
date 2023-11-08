const {User} = require('../models/relations')

exports.authenticate = (username,password)=>{
    
}


exports.getUserByUsername = async (username)=>{
    const user = await User.findOne({username: username})
    return user;
}


exports.getUserById = async (id,includeArray=null)=>{

    const config = {id:id}

    if(includeArray){
        config.include = includeArray
    }

    const user = await User.findOne(config)
    return user;
}



exports.formatUser = (user)=>{
    const formatedUser = {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        id: user.id
    }

    //this attribute will be used in authorization
    if(user.is_admin){
        formatedUser.is_admin = true
    }
    return formatedUser
    
}