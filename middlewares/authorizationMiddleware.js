
exports.isAdmin = (req,res,next)=>{
    if(!req.user.is_admin){
        console.log(req.user)
        return res.status(401).json({
            message:"Access Forbiden. You are not authorized"
        })
    }
    next()
}