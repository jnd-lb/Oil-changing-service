
exports.isAdmin = (req,res,next)=>{
    if(!req.user.is_admin){
        return res.status(401).json({
            message:"Access Forbiden. You are not authorized"
        })
    }
    next()
}