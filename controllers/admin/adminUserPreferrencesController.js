const { UserBandPreference, OilProduct } = require("../../models/relations")
const { getAllUserPreferrences } = require("../../services/oilService")
const { Op } = require('sequelize');

exports.getAllUserPreferences = async (req, res) => {
   const preferences = await getAllUserPreferrences(req.params.userid) 
   return res.status(200).json(preferences)
}




exports.getAddUserPreferences = async (req, res) => {
    await UserBandPreference.findOrCreate({
        product_id: req.body.product_id,
        user_id: req.params.userid
    })

    const preferences = await getAllUserPreferrences(req.params.userid) 
    return res.status(200).json(preferences)
}




exports.deleteUserPreferences = async (req, res) => {
    await UserBandPreference.destroy({
        where: {
            [Op.and]: [
                { user_id: req.params.userid },
                { product_id: req.params.id },
            ]
        }
    })
    return res.status(200).json({
        message: 'product deleted'
    })
}




exports.getProductById = async (req, res)=>{
    const product = await OilProduct.findOne({
        where:{
            id: req.params.id
        }
    })
    return res.status(200).json(product)
}




exports.deleteProductById = async (req, res) => {
    await OilProduct.destroy({
        where:{
            id: req.params.id
        }
    })
    return res.status(200).json({
        message: 'Delete successfully'
    })
}



exports.createProduct = async (req, res) => {

    const product = await OilProduct.create({
        name : req.body.name,
        image : req.body.image,
        viscosity_grade : req.body.viscosity_grade,
        price : req.body.price,
        volume : req.body.volume,
        additives : req.body.additives,
        description : req.body.description,
    })

    return res.status(200).json(product)
}