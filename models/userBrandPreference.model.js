const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

//Here we are defining a function that take two params (sequelize instance and the Datatype)
//This function will use the given sequelize instance to define the model then return it
const initUserBrandPreference = (sequelize,DataTypes)=>{
        const UserBrandPreference = sequelize.define("user_brand_preferences_model", {
            //Forign Keys
            user_id:  {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_id:  {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            modelName: "BrandPreference",
            tableName: "user_brand_preferences"
        });

        return UserBrandPreference;
}



//1first the function will be called and it will return the defined brand model as a constant 
//and this const will be exported
module.exports =  initUserBrandPreference(sequelize,DataTypes)