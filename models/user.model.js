/**
 * this will hold the schema for the users.
 * 
 * it explains the diffrent field of use and how it will be stored in mongoDB
 */
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:yes,
        unique :true
    },
    email:{
        type:String,
        required:true,
        unique :true,
        minLength:10,
        lowercase : true
    },
    userType:{
        type:String,
        required:true,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    }
},{
    timestamps:true
});

/***Define the collection name where it will be stored */

module.exports=mongoose.model("User",userSchema,"users");