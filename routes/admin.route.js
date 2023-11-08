const express = require("express");
const { findAll, findById, toggleAdmin } = require("../controllers/admin/adminUsersController");
const { addOilChangingRecord, getUserOilChangingHistory, deleteChangingRecord, updateOilChangingRecord } = require("../controllers/admin/adminOilController");
const { insertUpdateOilChanging } = require("../validations/userOilValidation");
const { getAllUserPreferences, deleteUserPreferences, getProductById, createProduct, deleteProductById, updateProductById } = require("../controllers/admin/adminUserPreferrencesController");
const { getBrandById, createBrand, updateBrand, deleteBrand, getAllBrands } = require("../controllers/admin/adminProductsController");
const { handelValidationResult } = require("../middlewares/validationMiddle");
const { createUpdateBrandValidation, createUpdateProductValidation } = require("../validations/adminProductsValidation");

const router = express.Router();


//User routers
 router.get('/users', findAll);
 router.get('/users/:userid', findById);
 router.post('/users/:userid/toggleAdmin', toggleAdmin);
 
 //User Products Preferrences
 router.get('/users/:userid/preferences', getAllUserPreferences);
 router.delete('/users/:userid/preferences/:id', deleteUserPreferences);
 
 
 //Oil Routers
 router.get('/users/:userid/oilchanging', getUserOilChangingHistory);
 router.post('/users/:userid/oilchanging', [...insertUpdateOilChanging,handelValidationResult],addOilChangingRecord);
 router.put('/users/:userid/oilchanging/:id', [...insertUpdateOilChanging,handelValidationResult],updateOilChangingRecord);
 router.delete('/users/:userid/oilchanging/:id',deleteChangingRecord);
 


 //Oil Routers
router.get('/brands', getAllBrands)
router.get('/brands/:id', getBrandById)
router.post('/brands', [...createUpdateBrandValidation,handelValidationResult],createBrand)
router.put('/brands/:id', [...createUpdateBrandValidation,handelValidationResult],updateBrand)
router.delete('/brands/:id',deleteBrand)



//Products Router
router.get('/products/:id', getProductById)
router.delete('/products/:id', deleteProductById)
router.put('/products/:id',[...createUpdateProductValidation,handelValidationResult], updateProductById)
router.post('/products', [...createUpdateProductValidation,handelValidationResult],createProduct)




module.exports = router;