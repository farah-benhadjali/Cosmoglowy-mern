const router = require("express").Router();
const authController = require('../controllers/authController');
const Role = require("../helpers/role");
const authorize = require("../helpers/authorize");

router.post("/signup", authController.signup);
//router.post("/signupc", authController.signupclient);
router.post("/signin", authController.signin);
router.get("/listusers",authController.userlists);
router.delete("/delete/:id",/*authorize(Role.Admin),*/ authController.deleteUser);


 
//exportation d tous les routes bech najmou n3aytoulhom f index.js
module.exports = router;