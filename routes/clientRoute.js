const router = require("express").Router();
const clientController = require('../controllers/clientController');
const resetPassController = require('../controllers/resetPassController');
const multer = require ("../middleware/multer");
const authorize = require("../helpers/authorize");
const Role = require("../helpers/role");

router.post("/saveclient", /*multer.upload.single('img'),*/ clientController.saveClient);
router.get("/listclient", /*authorize(Role.Admin),*/clientController.listClient);
router.get("/clientById/:id",/*authorize(Role.Admin),*/ clientController.clientByid);
//router.get("/client/:id",authorize(Role.Client), clientController.clientupdateid);
router.put("/updateClient/:id",/*authorize(Role.Client),*/ clientController.updateClient);
router.delete("/clientdel/:id", clientController.deleteClient);

//reset password

router.post("/reset_pass" ,resetPassController.ResetPassword);
router.post("/validpass" ,resetPassController.ValidPasswordToken);
router.post("/newpass" ,resetPassController.NewPassword);


//accept et reffuser user
router.get("/verify-email" ,clientController.verifyEmail);
router.get("/refuser/:id" ,/*authorize(Role.Admin),*/clientController.refuser);
router.get("/accept/:id" ,/*authorize(Role.Admin),*/clientController.accept);
//exportation d tous les routes bech najmou n3aytoulhom f indes.js
module.exports = router;