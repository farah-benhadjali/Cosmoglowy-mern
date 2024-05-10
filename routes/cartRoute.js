const router = require("express").Router();
const cartController = require("../controllers/cartController");


router.post("/additem", cartController.addItemToCart);
router.get("/getcart", cartController.getCart);
router.delete("/empty-cart", cartController.emptyCart);
module.exports = router;