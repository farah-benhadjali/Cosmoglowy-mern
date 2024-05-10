const Category = require("../models/category");
const SousCategory = require("../models/souscategory");
const Product = require("../models/product");


exports.saveProduit = async (req, res) => {
  const {category,souscategory,Pname,Price,reference,Desc,qte,img}=req.body;

  try {
    const product = new Product({
      category: req.body.category,
      souscategory:req.body.souscategory,
      Pname: req.body.Pname,
      Price: req.body.Price,
      reference : req.body.reference,
      Desc: req.body.Desc,
      qte: req.body.qte,
      img: req.file.path
    });
    await product.save();
    product
      ? res.status(200).json(product)
      : res.status(401).json({ msg: "create product error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//select all
  exports.getproduitlists =async (req, res) => {
    Product.find({}).populate("souscategory").populate("category")
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   };

//select par id
  exports.getByid= (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then(product => res.status(200).json(product))
      .catch(error => res.status(404).json({ error }));
  };

//Update produit
 exports.updateProduct= async(req, res) => {
  const { id } = req.params;
  const updateData = req.body || req.file.path;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Produit non trouvé.' });
    }
    Object.assign(product, updateData);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du produit :', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du produit.' });
  }
};
//Delete category
 exports.deleteProduct=async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Produit non trouvé.' });
    }
   
    await product.deleteOne();
    res.status(200).json({ message: 'Produit supprimé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la suppression du produit :', error);
    res.status(500).json({ error: 'Erreur lors de la suppression du produit.' });
  }
};

  exports.getNbrProduct=async (req,res,next) => {
    try {
      const count = await Product.countDocuments();
      res.status(200).json({ count });
    } catch (error) {
      console.error('Erreur :', error);
      res.status(500).json({ error: 'Erreur' });
    }
  };

  exports.getProductsBysousCategory = async (req, res) => {
    const { scategoryId } = req.params; // Récupérez la catégorie spécifiée dans les paramètres de la requête
  
    try {
      // Interrogez la base de données pour récupérer les produits de la catégorie spécifiée
      const product = await Product.find({ souscategory: scategoryId });
  
      // Répondez avec la liste des produits de la catégorie
      res.status(200).json(product);
    } catch (error) {
      console.error('Erreur lors de la récupération des produits par sous catégorie :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des produits par sous catégorie.' });
    }
  };


 