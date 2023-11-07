const sequelize = require("./sequelize");

const dbSync = ()=>{
    //Database: Connect to the database once the application run
    sequelize.authenticate().then(() => {
        
        //if the sequelize could reach the database then sync the models with tables
        sequelize.sync({alter: true}) // force: true to drop tables and recreate | alter: true to change the database schema if similar tables are found but they are different to the models
            .then(()=>console.log('db synced'))
            .catch(err=>
                {   
                    console.log(`Error db sync: ${err.message}`)
                    exit(1)
                }
            );
        console.log('Connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
        exit(1)
    });
}
 
 module.exports = dbSync