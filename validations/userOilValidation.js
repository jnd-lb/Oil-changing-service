const { check } = require('express-validator');

exports.saveProductValidation = [
  check('product_id').notEmpty().withMessage('Last Name is required'),
];
