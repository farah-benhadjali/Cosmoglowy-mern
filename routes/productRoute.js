const router = require("express").Router();
const productController = require('../controllers/productController');
const multer = require ("../middleware/multer");
const Role = require("../helpers/role");
const authorize = require("../helpers/authorize");

router.post("/saveproduct",multer.upload.single('img'), productController.saveProduit);
router.get("/listproduct", authorize(Role.Admin),productController.getproduitlists);
router.get("/nbproduct", productController.getNbrProduct);
router.get("/ProById/:id", productController.getByid);
router.get('/products/souscategory/:scategoryId', productController.getProductsBysousCategory);
router.put("/uppro/:id",authorize(Role.Admin),multer.upload.single('img'),productController.updateProduct);
router.delete("/Prodel/:id",authorize(Role.Admin), productController.deleteProduct);

//FindProductByCategory
/*router.get("/:category", function (req,res) {
  var categoryName = req.params.category;
  Category.findOne({_id: categoryName}, function(err, c) {
    Product.find({category: categoryName}, function(err, products) {
      if(err)
        console.log(err);
        res.status(200).send({
          name: c.Cname,
          data: products
        })
    })
  })
});*/

//exportation d tous les routes bech najmou n3aytoulhom f indes.js
module.exports = router;