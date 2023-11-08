const { check } = require('express-validator');

exports.saveProductValidation = [
  check('product_id').notEmpty().withMessage('Last Name is required'),
];


exports.insertUpdateOilChanging = [
  check('is_filter_changed').notEmpty().withMessage('Do you change the filter'),
  check('kilometrage').notEmpty().withMessage('Kilometrage is required'),
  check('vehicle_id').notEmpty().withMessage('Vehicule is required'),
  check('product_id').notEmpty().withMessage('Product is required'),
]
