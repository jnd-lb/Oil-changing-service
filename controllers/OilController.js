const {Brand, OilProduct, UserVehicle} = require("../models/relations")
const { getUserById } = require("../services/userService")

exports.getBrandForUservehicle = async (req,res) =>{
    const user = getUserById(req.user.id)

    res.status(200).json(user)
}

exports.getAllBrandsWithAllPorducts = async (req, res) =>{

  const brandsWithProducts =  await Brand.findAll({
        include:[
            {model:OilProduct}
        ]
    })

  res.status(200).json(brandsWithProducts)
}


exports.getAllUserSuitableProducts = async (req,res)=>{

//  const user = await getUserById(req.user.id)

  const userVehicle = await UserVehicle.findOne({
    where: {
      user_id: req.user.id
    }
  })

  
  const productsSuitable = await OilProduct.findAll({
    where: {
      vehicle_type_id: userVehicle.vehicle_type_id
    },
    include:[ {model:Brand}]
  })

  res.status(200).json(productsSuitable)

}


exports.saveUserProduct = (req, res) => {
    
}