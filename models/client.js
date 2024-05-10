const mongoose = require('mongoose');
const Role = require("../helpers/role")
//table user lil database
const ClientSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:8
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:8
    },
    tel:{
        type:String,
        
    },
    adress:{
        type:String,
        
    },
    /*img:{
        type:String,
    },*/
    role: {
        type: String, default: Role.Client
    },
    emailToken: String,
    isVerified: {type:Boolean, default: false}
});
//bech ynajem ya9ra l user
//exportation du modele pour les controlleurs
module.exports=mongoose.model("Client",ClientSchema);