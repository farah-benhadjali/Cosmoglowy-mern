const Cart = require("../models/cart");    
exports.cart = async () => {
    const carts = await Cart.find().populate({
        path: "items.productId",
        select: "Pname Price total img"
    });;
    return carts[0];
};
exports.addItem = async payload => {
    const newItem = await Cart.create(payload);
    return newItem;
}