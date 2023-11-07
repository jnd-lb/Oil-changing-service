// Include Sequelize module 
const Sequelize = require('sequelize') 
require('dotenv').config();
const config = require('./sequelize-config')

// Creating new Object of Sequelize 
module.exports = new Sequelize( 
    config.dbName,
    config.dbUser,
    config.dbPassword,
    config.dbDetails,
);