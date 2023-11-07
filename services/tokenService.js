const jwt  = require("jsonwebtoken");

// Generate token
exports.generateToken = (user) => {
    console.log("🧑 ",user);
    return jwt.sign(
        {
            id:user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username
        },
        process.env.JWT_ACCESS_SECRET_KEY,
        {expiresIn: "60m"}
    );
}
