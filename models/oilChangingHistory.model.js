const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

//Here we are defining a function that take two params (sequelize instance and the Datatype)
//This function will use the given sequelize instance to define the model then return it
const initOilChangingHistory = (sequelize,DataTypes)=>{
        const OilChangingHistory = sequelize.define("oil_changing_histories", {
            
            is_filter_changed: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            kilometrage:{
                type:DataTypes.DOUBLE,
                defaultValue: 0
            },
            //Forign Keys
            user_id:  {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            vehicle_id:  {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_id:  {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            modelName: "OilChangingHistory",
            tableName: "oil_changing_histories"
        });


        return OilChangingHistory;
}



//1first the function will be called and it will return the defined brand model as a constant 
//and this const will be exported
module.exports =  initOilChangingHistory(sequelize,DataTypes)