const mongoose = require('mongoose');
const crypto = require("crypto");
//table user lil database
const commandeSchema = new mongoose.Schema({
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        strictPopulate: false
    }],
    souscategory: [{
        type: mongoose.Schema.Types.ObjectId,
		ref: 'SousCategory',
        strictPopulate: false
    }],
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        strictPopulate: false
    }],
    Cname:{
        type:String,
        required:true,
        min:3,
        max:5
    },
    Desc:{
        type:String,
        required:true,
        min:3,
        max:5
    }
});
//bech ynajem ya9ra l user
//exportation du modele pour les controlleurs
module.exports=mongoose.model("Commande",commandeSchema);