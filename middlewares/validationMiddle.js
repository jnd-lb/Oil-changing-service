const { validationResult } = require("express-validator");
const { formatExpressValidatorErrors } = require("../services/errorService");

exports.handelValidationResult = (req,res,next)=>{
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            message: "There's invalid or missing data",
            errors: formatExpressValidatorErrors(errors)
        });
    }

    next()
}