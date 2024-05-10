const router = require("express").Router();

const Category = require("../models/category");


//create ou ajout
exports.saveCategory = async (req, res) => {
  const { Cname, Desc,souscategory } = req.body;
  try {
    const categorie = new Category({
      souscategory,
      Cname, 
      Desc
    });
    await categorie.save();
    categorie
      ? res.status(200).json(categorie)
      : res.status(401).json({ msg: "create categorie error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
 //select all
 exports.getcategorylists=async (req, res) => {
    Category.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   };

//select par id
   exports.getCatById = async (req, res) => {
    Category.findOne({ _id: req.params.id })
      .then(categorie => res.status(200).json(categorie))
      .catch(error => res.status(404).json({ error }));
  };


//Update category
  exports.updatecategory= async(req, res) => {
    const { id } = req.params;
  const updateData = req.body || req.file.path;

  try {
    const categorie = await Category.findById(id);
    if (!categorie) {
      return res.status(404).json({ error: 'categorie non trouvée.' });
    }
    Object.assign(categorie, updateData);
    await categorie.save();
    res.status(200).json(categorie);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du categorie :', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du categorie.' });
  }};

//Delete category
  exports.deleteCategory=async (req, res) => {
    const categorieId = req.params.id;
    try {
        const categorie = await Category.findById(categorieId);
        if (!categorie) {
            return res.status(404).json({ msg: 'categorie non trouvée' });
        }
        await Category.findByIdAndDelete(categorieId);
        res.json({ msg: 'categorie supprimée avec succès' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
};
