const router = require("express").Router();
const sCategory = require("../models/souscategory");
exports.savesCategory = async (req, res) => {
  const { category,produit,scname,scDesc } = req.body;
  try {
    const scategorie = new sCategory({ ...req.body });
    
    await scategorie.save();
    res.json(scategorie);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
};


 //select all
 exports.getscategorylists=async (req, res) => {
    sCategory.find({}).populate("category")
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   };

//select par id
   exports.getsCatById = async (req, res) => {
    sCategory.findOne({ _id: req.params.id })
      .then(scategorie => res.status(200).json(scategorie))
      .catch(error => res.status(404).json({ error }));
  };


//Update category
  exports.updatescategory= async (req, res) => {
    const { id } = req.params;
  const updateData = req.body;

  try {
    const scategory = await sCategory.findById(id);
    if (!scategory) {
      return res.status(404).json({ error: 'sous category non trouvé.' });
    }
    Object.assign(scategory, updateData);
    await scategory.save();
    res.status(200).json(scategory);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du sous category :', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du sous category.' });
  }
};

//Delete sous category
  exports.deletesCategory=async (req, res) => {
    const { id } = req.params;

  try {
    const scategory = await sCategory.findById(id);
    if (!scategory) {
      return res.status(404).json({ error: 'sous category non trouvé.' });
    }
   
    await scategory.deleteOne();
    res.status(200).json({ message: 'sous category supprimé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la suppression du sous category :', error);
    res.status(500).json({ error: 'Erreur lors de la suppression du sous category.' });
  }
};


  exports.getSousCategoryByCategory = async (req, res) => {
    const { categoryId } = req.params;
  
    try {
      const scategory = await sCategory.find({ category: categoryId });
      res.status(200).json(scategory);
    } catch (error) {
      console.error('Erreur lors de la récupération des sous catégorie par catégorie :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des sous catégorie par catégorie.' });
    }
  };