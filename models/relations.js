//This file will hold all the relations between models

//Here all the model will be imported
const OilChangingHistory = require("./oilChangingHistory.model")
const User = require("./user.model")
const UserBandPreference = require("./userBrandPreference.model")
const UserVehicle = require("./userVehicle.model")
const OilProduct = require("./oilProduct.model")
const vehicleType = require("./vehicleType.model")
const Climate = require("./climate.model")
const Brand = require("./brand.model")



const UserBrandPreferenceModel = require("./userBrandPreference.model")


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


UserVehicle.vehicleType =  UserVehicle.belongsTo(vehicleType,{   
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


vehicleType.OilProducts = vehicleType.hasMany(OilProduct,{
    foreignKey: 'vehicle_type_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})




   /* User.hasMany(Pillar,{   
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    
    Pillar.User = Pillar.belongsTo(User,{   
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    
    Pillar.Goals = Pillar.hasMany(Goal,{
        foreignKey: 'pillar_id',
    });
    
    Goal.Pillar = Goal.belongsTo(Pillar,{
        foreignKey: 'pillar_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    
    
    // Mission
    Mission.Goals = Mission.belongsTo(Goal,{
          foreignKey: 'goal_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
    
    
    Goal.Missions = Goal.hasMany(Mission,{
        foreignKey: 'goal_id'
    })
    
    
    Mission.Days =     Mission.belongsToMany(Day,{
          foreignKey: 'mission_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          through: 'day_mission' // active days
    });
        
    
    Day.Mission = Day.belongsToMany(Mission,{
        foreignKey: 'day_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        through: 'day_mission' //active days
    });
    
    
    Mission.DailyLogs = Mission.hasMany(DailyLog,{
        foreignKey: 'mission_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    
    
    DailyLog.Mission = DailyLog.belongsTo(Mission,{
        foreignKey: 'mission_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })*/
    

//here we will export them using js es6 syntaxt
module.exports ={
    OilChangingHistory,
    User,
    UserBandPreference,
    UserVehicle,
    OilProduct,
    vehicleType,
    Climate,
    Brand
}