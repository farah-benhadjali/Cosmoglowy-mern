const mongoose = require('mongoose');
const crypto = require("crypto");



//table user lil database
const ProductSchema = new mongoose.Schema({
    //cle etranger bech chnajoutiw produit selon categorie 
    category: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
        default: crypto.randomBytes(12).toString('hex'),
        required: true,
        strictPopulate: false
    },
    souscategory: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'SousCategory',
        default: crypto.randomBytes(12).toString('hex'),
        required: true,
        strictPopulate: false
    },
    Pname:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    Price:{
        type:Number,
        required:true,
    },
    Desc:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    reference:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    img:{
        type:String,
        required:true,
    },
    qte:{
        type:Number,
    }
});

//bech ynajem ya9ra l produit
//exportation du modele pour les controlleurs
module.exports=mongoose.model("Product",ProductSchema);