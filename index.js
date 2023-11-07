const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const dbSync = require("./database/sequelize-sync");

//Import Routers
const userRoute = require("./routes/user.route");
const oilRoute = require("./routes/oil.route");



const port = process.env.PORT || 4000;

//connect to the database and sync
dbSync()

//Creating the instance from express
const app = express();


//Setting the body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setting cross origin to accept all the domains 
app.use(cors({origin: '*'}));


//SETTING THE ROUTES
app.use('/api/users', userRoute);
app.use('/api/oils', oilRoute);

app.use('/api/admins', userRoute);


//Default route
app.get("/api/", (req, res)=>{
    res.status(200).json({message: "Welcome to the Oil Changing System"})
});


app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);
})