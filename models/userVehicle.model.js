const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

//Here we are defining a function that take two params (sequelize instance and the Datatype)
//This function will use the given sequelize instance to define the model then return it
const initUserVehicle = (sequelize,DataTypes)=>{
        const UserVehicle = sequelize.define("user_vehicles", {
            
            name:  {
                type: DataTypes.STRING,
                allowNull: false
            },

            number_of_cylinders :{
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0
            },

            oil_changing_interval_in_km:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 4000
            },
         
            //Forign Keys
            vehicle_type_id:  {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            //Forign Keys
            user_id:  {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            modelName: "UserVehicle",
            tableName: "user_vehicles"
        });


        return UserVehicle;
}



//1first the function will be called and it will return the defined brand model as a constant 
//and this const will be exported
module.exports =  initUserVehicle(sequelize,DataTypes)