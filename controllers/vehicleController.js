const { UserVehicle } = require("../models/relations");


exports.getUserVehicle = async (req, res) => {
    const vehicle = await UserVehicle.findOne({
      where: {
        user_id: req.user.id
      }
    })
    res.status(200).json(vehicle)
  }
  
  
  
  
  
  exports.updateUserVehicle = async (req, res) => {
    await UserVehicle.update({
      name: req.body.name,
      number_of_cylinders: req.body.number_of_cylinders,
      oil_changing_interval_in_km: req.body.oil_changing_interval_in_km,
      vehicle_type_id: req.body.vehicle_type_id
    }, {
      where: {
        user_id: req.user.id,
      },
    });
  
    //Call the get UserVehicle to handel the response
    this.getUserVehicle(req, res);
  }
  
  
  
  exports.addUserVehicle = async (req, res) => {
    let vehicle = await UserVehicle.findOne({ 
      where:{
        user_id : req.user.id
      }
    })
    
    if(vehicle){
      return res.status(300).json({
        message:"Only one vehicle allowed"
      })
    }
    vehicle = await UserVehicle.create({
      user_id: req.user.id,
      name: req.body.name,
      number_of_cylinders: req.body.number_of_cylinders,
      oil_changing_interval_in_km: req.body.oil_changing_interval_in_km,
      vehicle_type_id: req.body.vehicle_type_id
    })
    
    //Call the get UserVehicle to handel the response
    res.status(200).json(vehicle)
  }