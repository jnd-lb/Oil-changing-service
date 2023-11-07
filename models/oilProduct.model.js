const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

//Here we are defining a function that take two params (sequelize instance and the Datatype)
//This function will use the given sequelize instance to define the model then return it
const initOilProduct = (sequelize,DataTypes)=>{
        const OilProduct = sequelize.define("oil_products", {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            },
            viscosity_grade: {
                type: DataTypes.STRING,
                allowNull: true
            },
            price: {
                type:DataTypes.DOUBLE
            },
            volume: {
                type:DataTypes.DOUBLE
            },
            Additives:{
                type: DataTypes.STRING,
                allowNull: true
            },
            description:{
                type: DataTypes.STRING,
                allowNull: true
            },


            //Forign Keys
            climate_id:  {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            
            vehicle_type_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },


            brand_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },


            
        },
        {
            tableName: "oil_products",
            modelName: 'OilProduct',

            createdAt: false,
            updatedAt: false,
        });


        return OilProduct;
}



//1first the function will be called and it will return the defined brand model as a constant 
//and this const will be exported
module.exports =  initOilProduct(sequelize,DataTypes)