const jwt  = require("jsonwebtoken");

// Generate token
exports.generateToken = (user) => {

    let jwtUser = {
        id:user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
    }

    //Only attach the is admin if it is true 
    if(user.is_admin) jwtUser.is_admin = true
    
    console.log("🧑 ",user);

    return jwt.sign(jwtUser,
        process.env.JWT_ACCESS_SECRET_KEY,
        {expiresIn: "60m"}
    );
}
