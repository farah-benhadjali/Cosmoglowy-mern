const router = require("express").Router();

const Contact = require("../models/contact");

//create ou ajout
exports.saveContact = async (req, res) => {
  const { nom,pren,tel,address,email,sujet,msg} = req.body;
  try {
    const contact = new Contact({
      nom,pren,tel,address,email,sujet,msg
    });
    await contact.save();
    contact
      ? res.status(200).json(contact)
      : res.status(401).json({ msg: "create reclamation error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//select all
exports.listCont = async(req, res) => {
    Contact.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
};


//Delete rec
exports.deleteCont = async (req, res) => {
  const contactId = req.params.id;
    try {
        const contact = await Contact.findById(contactId);
        if (!contact) {
            return res.status(404).json({ msg: 'Réclamation non trouvée' });
        }
        await Contact.findByIdAndDelete(contactId);
        res.json({ msg: 'Réclamation supprimée avec succès' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
};