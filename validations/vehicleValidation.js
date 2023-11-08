const { check } = require('express-validator');

exports.createOrUpdateVehicleValidation = [
  check('name').notEmpty().withMessage('Vehicle Name is required'),
  check('number_of_cylinders').notEmpty().withMessage('Number of cylinders is required'),
  check('number_of_cylinders').isInt().withMessage('Please provide a valid value'),
  
  check('oil_changing_interval_in_km').notEmpty().withMessage('Password is required'),
  check('oil_changing_interval_in_km').isInt().withMessage('Please provide a valid value'),

  check('vehicle_type_id').notEmpty().withMessage('Please select a vehicle type'),
 ];


