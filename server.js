const express =require("express");
const serverCongig= require('./configs/server.config')
const app=express();

app.listen(serverCongig.PORT,()=>{
    console.log(`SERVER STARTED ON PORT NUMBER ${serverCongig.PORT}`);

    //checking purpose
})