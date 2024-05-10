const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Role = require("../helpers/role")
//table user lil database
const UserSchema = new mongoose.Schema({
    username:{
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
    role: {
        type: String,
        default: Role.Admin
    }
});
//bech ynajem ya9ra l user
//exportation du modele pour les controlleurs
module.exports=mongoose.model("User",UserSchema);