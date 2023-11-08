const express = require("express");
const router = express.Router();

const {signUp, logIn} = require("../controllers/authenticationController");
const {verifyToken, hashPassword} = require("../middlewares/authJWT");
const { loginUserValidation,insertUserValidation } = require("../validations/userValidation");
const { handelValidationResult } = require("../middlewares/validationMiddle");
const { getAllUserSuitableProducts,saveUserProduct, getUserOilChangingHistory, deleteUserProduct, getAllUserProducts } = require("../controllers/OilController");
const { saveProductValidation } = require("../validations/userOilValidation");
const { createOrUpdateVehicleValidation } = require("../validations/vehicleValidation");
const { getUserVehicle, updateUserVehicle, addUserVehicle } = require("../controllers/vehicleController");

//Authentication ROUTES
router.post('/',[...insertUserValidation, handelValidationResult,hashPassword],signUp);
router.post('/login',[...loginUserValidation,handelValidationResult],logIn);



//PRODUCT ROUTES
router.get('/products',[verifyToken],getAllUserSuitableProducts)
router.get('/products/saved',[verifyToken],getAllUserProducts)
router.post('/products/save',[verifyToken,...saveProductValidation,handelValidationResult],saveUserProduct)
router.delete('/products/:productid',[verifyToken],deleteUserProduct)



//PROFILE ROUTES
router.get('/vehicle',[verifyToken], getUserVehicle)
router.put('/vehicle',[...createOrUpdateVehicleValidation,handelValidationResult, verifyToken], updateUserVehicle)
router.post('/vehicle',[...createOrUpdateVehicleValidation,handelValidationResult, verifyToken], addUserVehicle)



//Oil Changing History
router.get('/oilchanging',[...createOrUpdateVehicleValidation,handelValidationResult, verifyToken],getUserOilChangingHistory)
//router.get('/oilchanging/nextchange',[verifyToken],)


module.exports = router;