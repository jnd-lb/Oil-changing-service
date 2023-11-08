const { Brand, OilProduct, UserVehicle, UserBandPreference } = require("../models/relations")
const { getUserById } = require("../services/userService")
const { Op } = require('sequelize');
const { formatUser } = require("../services/userService");
const { getAllUserPreferrences, getUserOilChangingHistory } = require("../services/oilService");



exports.getBrandForUservehicle = async (req, res) => {
  const user = getUserById(req.user.id)
  res.status(200).json(user)
}


exports.getAllBrandsWithAllPorducts = async (req, res) => {
  const brandsWithProducts = await Brand.findAll({
    include: [
      { model: OilProduct }
    ]
  })

  res.status(200).json(brandsWithProducts)
}



//Get all product that are suitablr for the user vehicle type
exports.getAllUserSuitableProducts = async (req, res) => {
  const userVehicle = await UserVehicle.findOne({
    where: {
      user_id: req.user.id
    }
  })
  const productsSuitable = await OilProduct.findAll({
    where: {
      vehicle_type_id: userVehicle.vehicle_type_id
    },
    include: [{ model: Brand }]
  })
  res.status(200).json(productsSuitable)
}




//Create Product preferrences 
exports.saveUserProduct = async (req, res) => {
  await UserBandPreference.findOrCreate({
    where: {
      [Op.and]: [
        { user_id: req.user.id }, // First condition
        { product_id: req.body.product_id }, // Second condition
      ]
    },
    defaults: {
      user_id: req.user.id,
      product_id: req.body.product_id
    },
  })
  const preferrences = await getAllUserPreferrences(req.user.id)

  res.status(200).json(preferrences)
}





//Read all product preferrences
exports.getAllUserProducts = async (req, res) => {
  const preferrences = await getAllUserPreferrences(req.user.id)
  res.status(200).json(preferrences)
}




//Delete Product preferrences 
exports.deleteUserProduct = async (req, res) => {
  await UserBandPreference.destroy({
    where: {
      [Op.and]: [
        { user_id: req.user.id },
        { product_id: req.params.productid },
      ]
    }
  })
  const preferrences = await getAllUserPreferrences(req.user.id)
  res.status(200).json(preferrences)
}




exports.getUserOilChangingHistory = async (req, res) => {
  const history = await getUserOilChangingHistory(req.user.id)
  res.status(200).json(history)
}


