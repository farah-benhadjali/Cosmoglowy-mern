
const Client = require("../models/client");
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');
const crypto = require("crypto");
const { check, validationResult } = require("express-validator");

var transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "parfemeriebeaute@gmail.com",
    pass: "fm.mohamed",
  },
});

exports.verifyEmail = async (req, res) => {
  try {
    const token = req.query.token;
    const client = await Client.findOne({ emailToken: token });
    if (client) {
      client.emailToken = null;
      client.isVerified = true;
      await client.save();
      return res.status(200).send('Your account has been successfully verified');
      console.log("email verified");
    } else {
      console.log("email is not verified");
    }
  } catch (err) {
    console.log(err);
  }
};

//create ou ajout
  exports.saveClient = async (req, res) =>
    {
      try {

        const
          { userName,tel,adress,email,password,}= req.body;
        // Vérifier si l'utilisateur existe déjà
        let existingclient = await Client.findOne({ email });
        if (existingclient) {
          return res.status(400).json({ message: 'Cet e-mail est déjà utilisé.' });
        }
    
        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 6);
    
        // Génération d'un jeton d'e-mail unique
        const emailToken = crypto.randomBytes(64).toString('hex');
    
        // Création de l'utilisateur
        const newClient = new Client({
          userName,
          email,
          tel,
          adress,
          password: hashedPassword,
          emailToken
        });
    
        // Sauvegarde de l'utilisateur dans la base de données
        await newClient.save();
    
        // Envoi de l'e-mail de vérification
        const mailOptions = {
          from: 'parfemeriebeaute@gmail.com',
          to: email,
          subject: "Notre Perfemerie",
          html: `<h2>${newClient.userName}! Merci pour votre inscri sur notre site</h2>
        <h4>Verifier votre email pour doit etre accepter ...</h4>
        <a href="http://${req.headers.host}/api/client/verify-email?token=${newClient.emailToken}"> Verifier email</a>`
        };
        await transporter.sendMail(mailOptions);
    
        res.status(201).json({ message: 'Inscription réussie. Veuillez vérifier votre adresse e-mail pour activer votre compte.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription.' });
      }
    };


//select all
  exports.listClient =(req, res) => {
    Client.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   };

//select par id
  exports.clientByid= (req, res) => {
    Client.findOne({ _id: req.params.id })
      .then(client => res.status(200).json(client))
      .catch(error => res.status(404).json({ error }));
  };


//Update client
 exports.updateClient= async(req, res) => {
  const clientId = req.params.id;
  const updatedData = req.body;
  try {
      const client = await Client.findByIdAndUpdate(clientId, updatedData, { new: true });
      if (!client) {
          return res.status(404).json({ msg: 'Client non trouvé' });
      }
      res.json(client);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur serveur');
  }
};
//Delete client
 exports.deleteClient=async (req, res) => {
  const clientId = req.params.id;
    try {
        const client = await Client.findById(clientId);
        if (!client) {
            return res.status(404).json({ msg: 'Client non trouvé' });
        }
        await Client.findByIdAndDelete(clientId);
        res.json({ msg: 'Client supprimé avec succès' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
};

//accepter/refuser demande d'inscription user
exports.refuser=(req, res) =>{
  Client.findById({ _id: req.params.id }, function (err, client) {
    console.log(client.isVerified);
    if (client.isVerified == false) {
      client
        .remove()
        .then((res) => {
           res.status(200).send("bravo");
          console.log("deleted user");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
     
      console.log("erreur");
    }
  })
    .then(res => res.status(200).send("bravo"))
    .catch((err) => {
      console.log(err);
    });
};

exports.accept=(req, res) =>{
  Client.findById({ _id: req.params.id }, function (err, client) {
    console.log(client.isVerified);
    if (client.isVerified == true) {
      client.save()
        .then((res) => {
           res.status(200).send("bravo");
          console.log("user ajouter");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
     
      console.log("erreur");
    }
  })
    .then(res => res.status(200).send("bravo"))
    .catch((err) => {
      console.log(err);
    });
};
