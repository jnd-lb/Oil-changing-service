const { check } = require('express-validator');


exports.createUpdateBrandValidation = [
  check('name').notEmpty().withMessage('Name is required'),
]


exports.createUpdateProductValidation = [
    check('name').notEmpty().withMessage('Name is required'),
    //check('image').notEmpty().withMessage('Image is required'),
    check('viscosity_grade').notEmpty().withMessage('Viscosity grade is required'),
    check('price').notEmpty().withMessage('Price is required'),
    check('volume').notEmpty().withMessage('Volume is required'),
    check('brand_id').notEmpty().withMessage('Brand should be selected'),
    check('vehicle_type_id').notEmpty().withMessage('Vehicle should be selected'),
    check('climate_id').notEmpty().withMessage('Climate condition should be selected'),
    
    
]
  