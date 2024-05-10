const mongoose = require('mongoose');
const crypto = require("crypto");

const Schema = mongoose.Schema;
let ItemSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: 'Client'},
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
       
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    Price: {
        type: Number,
        required: true
    },
    img:{
        type:String
    },
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})
const CartSchema = new Schema({
    items: [ItemSchema],
    subTotal: {
        default: 0,
        type: Number
    }
   },
   {
    timestamps: true
})
module.exports = mongoose.model('Cart', CartSchema);