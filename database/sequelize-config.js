module.exports = {
    dbName:process.env.DATABASE_NAME,
    dbUser:process.env.DATABASE_USER_NAME, 
    dbPassword:process.env.DATABASE_PASSWORD,  
    dbDetails:{   
        dialect: 'mysql', 
        host: 'localhost'
    }
}