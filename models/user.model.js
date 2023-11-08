const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

//Here we are defining a function that take two params (sequelize instance and the Datatype)
//This function will use the given sequelize instance to define the model then return it
const initUser = (sequelize,DataTypes)=>{
        const User = sequelize.define("users", {
            first_name: {
            type: DataTypes.STRING,
            allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: 'Username already in use!'
                }
            },
            password: {
            type: DataTypes.STRING,
            allowNull: false
            },

            is_admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
                }
        },
        {
            tableName: "users"
        }
        );


        //Format how the user will be returned after creation
        // User.addHook('afterCreate', (user, options) => {
            
        //     return user;
        //   });
        
        return User;
}



//1first the function will be called and it will return the defined user model as a constant 
//and this const will be exported
module.exports =  initUser(sequelize,DataTypes)