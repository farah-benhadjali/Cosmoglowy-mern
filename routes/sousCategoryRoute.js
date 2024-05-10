const router = require("express").Router();
const scategoryController = require('../controllers/sousCategoryController');


router.post("/savescategory", scategoryController.savesCategory);
router.get("/listscategory", scategoryController.getscategorylists);
router.get("/CatsById/:id", scategoryController.getsCatById);
router.put("/upscat/:id", scategoryController.updatescategory);
router.delete("/sCatdel/:id", scategoryController.deletesCategory);
router.get('/scat/:categoryId', scategoryController.getSousCategoryByCategory);



//exportation d tous les routes bech najmou n3aytoulhom f indes.js
module.exports = router;