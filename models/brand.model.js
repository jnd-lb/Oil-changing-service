const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

//Here we are defining a function that take two params (sequelize instance and the Datatype)
//This function will use the given sequelize instance to define the model then return it
const initBrand = (sequelize,DataTypes)=>{
        const Brand = sequelize.define("brands", {
            name: {
            type: DataTypes.STRING,
            allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            tableName: "brands",
            createdAt: false,
            updatedAt: false,
        });


        return Brand;
}



//1first the function will be called and it will return the defined brand model as a constant 
//and this const will be exported
module.exports =  initBrand(sequelize,DataTypes)