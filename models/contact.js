const mongoose = require('mongoose');
//table user lil database
const ContactSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true,

    },
    pren:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    tel:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    sujet:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:true,
    }
});
//bech ynajem ya9ra l user
//exportation du modele pour les controlleurs
module.exports=mongoose.model("Contact",ContactSchema);