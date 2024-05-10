const mongoose = require('mongoose');
const crypto = require("crypto");
//table user lil database
const CategorySchema = new mongoose.Schema({
    souscategory: [{
        type: mongoose.Schema.Types.ObjectId,
		ref: 'SousCategory',
        required: true,
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
module.exports=mongoose.model("Category",CategorySchema);