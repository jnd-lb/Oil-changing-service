const { check } = require('express-validator');

exports.insertUserValidation = [
  check('last_name').notEmpty().withMessage('Last Name is required'),
  check('username').notEmpty().withMessage('Username is required'),
  check('password').notEmpty().withMessage('Password is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  //check('userEmail').isEmail().withMessage('Invalid Email Format'),
  check('password').isStrongPassword().withMessage("Please provide a strong password containing digits, capital and small letters, and at least one special character."),
];

exports.loginUserValidation = [
  check('username').notEmpty().withMessage('Username is required'),
  check('password').notEmpty().withMessage('Password is required'),
];

