const router = require("express").Router();
const categoryController = require('../controllers/categoryController');
const authorize = require("../helpers/authorize");
const Role = require("../helpers/role")

router.post("/savecategory", categoryController.saveCategory);
router.get("/listcategory", categoryController.getcategorylists);
router.get("/CatById/:id", categoryController.getCatById);
//router.get("/get/:id", categoryController.getidupdate);
router.put("/upcat/:id", categoryController.updatecategory);
router.delete("/Catdel/:id", categoryController.deleteCategory);




//exportation d tous les routes bech najmou n3aytoulhom f indes.js
module.exports = router;