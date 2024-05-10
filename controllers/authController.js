//appel lil les routes
const router = require("express").Router();

//appel lil methode de cryptage 
const bcrypt = require("bcryptjs");
//chemin user
const User = require("../models/user");
const Client = require("../models/client");
const {secret} = require("../middleware/config");

//validation des données 
const jwt = require("jsonwebtoken");

//Sign UP User
exports.signup=async (req, res) => {
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //const { email, password } = req.body;
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword});
    await newUser.save();
	//const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    //res.status(200).json({token});
    res.status(200).json("Admin succeffuly added");
};

//Sign UP Client
/*exports.signupclient=async (req, res) => {
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //const { email, password } = req.body;
    const newClient = new Client({
        userName: req.body.userName,
        pren: req.body.pren,
        tel: req.body.tel,
        adress: req.body.adress,
        email: req.body.email,
        //img:req.file.path,
        password: hashedPassword});
    await newClient.save();

    res.status(200).json("Client succeffuly added");
};*/

//select all
exports.userlists=(req, res) => {
    User.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
   };

//Delete user
  exports.deleteUser= (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).send('Admin supprimé !'))
      .catch(error => res.status(400).json({ error }));
  };


  /*exports.signin = async (req, res, next ) => {
    const { email, password } = req.body;
    // Validate email and password
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    User.findOne({
        email: req.body.email,
        password : req.body.password
    }, function(err, user) {
        if (err) throw err;

        if (!user) {

            Client.findOne({
                email: req.body.email
            }, function(err, user) {
                if (err) throw err;

                if (!user) {
                    res.send({
                        success: false,
                        msg: 'Authentication failed. User not found.',
                    });
                    //  console.log(msg);

                } else {
                    // check if password matches
                     bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
                        if (isMatch && !err) {
                            // if user is found and password is right create a token
                            var token = jwt.sign({_id: user._id, role: user.role}, secret,
                            {   expiresIn: '1h',
                            });
                            // return the information including token as JSON
                            res.json({
                                success: true,
                                token: token,
                                role: 'client',
                                user:user
                            });
                        } else {
                            res.send({
                                success: false,
                                msg: 'Authentication failed. Wrong password.'
                            });
                        }
                    });
                }
            })
         } else {
            // check if password matches
            bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign({_id: user._id, role: user.role}, secret,  { expiresIn: '1h' });
                    // return the information including token as JSON
                    res.json({
                        success: true,
                        token: token,
                        role: "admin",
                        user:user
                    });
                } else {
                    res.send({
                        success: false,
                        msg: 'Authentication failed. Wrong password.'
                    });
                }
            });
        }
    });
}*/
exports.signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Chercher un utilisateur dans la collection Admin
        let user = await User.findOne({ email });

        // Si l'utilisateur n'est pas trouvé dans Admin, chercher dans la collection Client
        if (!user) {
            user = await Client.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: 'user not found' });
            }
        }

        // Comparer le mot de passe avec celui stocké dans la base de données
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            // Créer le token JWT
            const token = jwt.sign({ _id: user._id, role: user.role }, secret, { expiresIn: '1h' });

            // Retourner les informations, y compris le token, en JSON
            res.json({
                success: true,
                token: token,
                role: user.role,
                user: user
            });
        } else {
            res.status(401).json({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
