const express = require("express");
const router = express.Router();
const {findAll} = require("../controllers/userController");
const {signUp, logIn} = require("../controllers/authenticationController");
const {verifyToken, hashPassword} = require("../middlewares/authJWT");
const { loginUserValidation,insertUserValidation } = require("../validations/userValidation");
const { handelValidationResult } = require("../middlewares/validationMiddle");
const { getAllUserSuitableProducts,saveUserProduct } = require("../controllers/OilController");
const { saveProductValidation } = require("../validations/userOilValidation");

router.post('/',[...insertUserValidation, handelValidationResult,hashPassword],signUp);
router.post('/login',[...loginUserValidation,handelValidationResult],logIn);
router.get('/',[verifyToken],findAll);
router.get('/products',[verifyToken],getAllUserSuitableProducts)
router.get('/products/save',[verifyToken,...saveProductValidation,handelValidationResult],saveUserProduct)

//(req, res)=>{
    // try{

        
    //     res.status(200).json({
    //         message : "users are found",
    //         data: {
    //             users : users
    //         }
    //     })
    // }catch(e){
    //     res.status(404).json({
    //         message : "There is no users found",
    //     })
    // }

//});

// router.post('/authenticate', authenticateController);
// router.get('/users', authenticateToken, getAllUsersController);
// router.get('/user', getUserById);
// router.post('/user', insertUserValidation, insertUserController);
// router.put('/user', updateUserValidation, updateUserController);
// router.delete('/user', deleteUser);

module.exports = router;