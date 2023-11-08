//This file will hold all the relations between models

//Here all the model will be imported
const OilChangingHistory = require("./oilChangingHistory.model")
const User = require("./user.model")
const UserBandPreference = require("./userBrandPreference.model")
const UserVehicle = require("./userVehicle.model")
const OilProduct = require("./oilProduct.model")
const VehicleType = require("./vehicleType.model")
const Climate = require("./climate.model")
const Brand = require("./brand.model")



//here all the relation will be established

User.OilChangingHistories = User.hasMany(OilChangingHistory,{   
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'

})

User.UserBandPreferences = User.hasMany(UserBandPreference,{   
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

User.UserVehicles = User.hasMany(UserVehicle,{   
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})


User.OilProducts = User.belongsToMany(OilProduct,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    through: 'user_brand_preferences_model' 
});


UserVehicle.VehicleType =  UserVehicle.belongsTo(VehicleType,{   
    foreignKey: 'vehicle_type_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


Brand.OilProducts = Brand.hasMany(OilProduct,{
    foreignKey: 'brand_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

OilProduct.Brand = OilProduct.belongsTo(Brand,{
    foreignKey: 'brand_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})


VehicleType.OilProducts = VehicleType.hasMany(OilProduct,{
    foreignKey: 'vehicle_type_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})


UserBandPreference.OilProduct = UserBandPreference.belongsTo(OilProduct,{
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})



//here we will export them using js es6 syntaxt
module.exports ={
    OilChangingHistory,
    User,
    UserBandPreference,
    UserVehicle,
    OilProduct,
    VehicleType,
    Climate,
    Brand
}