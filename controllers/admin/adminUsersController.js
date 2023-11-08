const { User } = require("../../models/relations");
const { getUserById } = require("../../services/userService");



exports.findAll = async (req,res)=>{
    const users = await userid   
    res.status(200).json(users);
}



exports.findById = async (req,res)=>{
    let user = getUserById(req.params.userid);
    //formate
    res.status(200).json(user);
}




//Give or Take off admin previlidge from a user
exports.toggleAdmin = async (req, res)=>{

    let user = getUserById(req.params.userid);
    
    user.is_admin = !user.is_admin;

    user.save();
    
    // User.update({
    //     is_admin : true,
    // },{where:{
    //     id: req.params.id
    // }})

    res.status(200).json(user)
}

