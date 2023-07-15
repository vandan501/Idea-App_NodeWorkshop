const express =require("express");
const serverCongig= require('./configs/server.config');
const mongoose=require('mongoose');
const dbConfig=require('./configs/db.config');
const userModel=require('./models/user.model')
const app=express();

/**Logic to connect to mongoDB and create an ADMIN user */
//need to have the mongoDB up and running in your local machine
mongoose.connect(dbConfig.DB_URL);

const db= mongoose.connection;
db.on("err",()=>{
console.log("Error while connection database");
});

db.once("open",()=>{
    console.log("Database connected successfully");

    init();
});

async function init()
{
    /*Initialize the mongo db
    need to create THE ADMIN user
     */
      let admin=await userModel.findOne({
        userId:"admin"
    });
    if(admin)
    {
        console.log("Admin user already present");
        return;
    }
  admin = await userModel.create({
        name: "Maulik raval",
        userId:"admin1",
        email:"maulikraval6688@gmail.com",
        userType:"ADMIN",
        password:"welcome2"
    });
    console.log(admin);
}

app.listen(serverCongig.PORT,()=>{
    console.log(`SERVER STARTED ON PORT NUMBER ${serverCongig.PORT}`);

    //checking purpose
})