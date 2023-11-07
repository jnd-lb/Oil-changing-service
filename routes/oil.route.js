const express = require("express");
const { verifyToken } = require("../middlewares/authJWT");
const { getBrandForUservehicle, getAllBrandsWithAllPorducts } = require("../controllers/OilController");
const router = express.Router();


//Gett all Brands with all products
router.get('/brands',getAllBrandsWithAllPorducts);



module.exports = router;