const mongoose = require('mongoose');
const crypto = require("crypto");
//table user lil database
const SousCategorySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: crypto.randomBytes(12).toString('hex'),
        required: true,
        strictPopulate: false
    },
    produit:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        strictPopulate: false
    }],
    scname:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    scDesc:{
        type:String,
    }
});
//bech ynajem ya9ra l user
//exportation du modele pour les controlleurs
module.exports=mongoose.model("SousCategory",SousCategorySchema);