const router = require("express").Router();
const contactController = require('../controllers/contactController');
const Role = require("../helpers/role");
const authorize = require("../helpers/authorize");

router.post("/saveContact", contactController.saveContact);
router.get("/listcontact",contactController.listCont);
router.delete("/deletecontact/:id",contactController.deleteCont);


//exportation d tous les routes bech najmou n3aytoulhom f indes.js
module.exports = router;