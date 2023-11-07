

exports.formatSequelize = (error)=>{

    let errors = error.errors.map((err)=>{
        let error = {}
        error[err.path] = err.message;

        return error;
    })

    return errors
}


exports.formatExpressValidatorErrors = (error)=>{
    
    return error.errors.map((err)=>{
        return {[err.path]:err.msg}
    })
}