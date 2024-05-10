const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/client');
const passwordResetToken = require('../models/resetpass');

module.exports = {
    //
async ResetPassword(req, res) {
    if (!req.body.email) {
    return res
    .status(500)
    .json({ message: 'Email is required' });
    }
    const user = await User.findOne({
    email:req.body.email
    });
    if (!user) {
    return res
    .status(409)
    .json({ message: 'Email does not exist' });
    }
    var resettoken = new passwordResetToken({ userId: user._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
    passwordResetToken.find({ userId: user._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
    res.status(200).json({ message: 'Reset Password successfully.' });
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      auth: {
        user: 'parfemeriebeaute@gmail.com',
        pass: 'fm.mohamed'
      }
    });
    var mailOptions = {
    to: user.email,
    from: 'parfemeriebeaute@gmail.com',
    subject: 'DécoDar Password Reset',
    text: 'Vous recevez cela parce que vous (ou quelqu’un d’autre) avez demandé la réinitialisation du mot de passe de votre compte.\n\n' +
    'cliquer sur le lien ou copier le lien dans votre navigateur pour continuer:\n\n' +
    'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
    'Si vous ne l’avez pas demandé, veuillez ignorer cet e-mail et votre mot de passe restera inchangé.\n'
    }
    transporter.sendMail(mailOptions, (err, info) => {
    })
    })
    },

    //
    async ValidPasswordToken(req, res) {
        if (!req.body.resettoken) {
        return res
        .status(500)
        .json({ message: 'Token is required' });
        }
        const user = await passwordResetToken.findOne({
        resettoken: req.body.resettoken
        });
        if (!user) {
        return res
        .status(409)
        .json({ message: 'Invalid URL' });
        }
        User.findByIdAndUpdate({ _id: user.userId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
        }).catch((err) => {
        return res.status(500).send({ msg: err.message });
        });
    },
    //////////////////////
        async NewPassword(req, res) {
            passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, userToken, next) {
              if (!userToken) {
                return res
                  .status(409)
                  .json({ message: 'Token has expired' });
              }
        
              User.findOne({
                _id: userToken.userId
              }, function (err, userEmail, next) {
                if (!userEmail) {
                  return res
                    .status(409)
                    .json({ message: 'User does not exist' });
                }
                return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                  if (err) {
                    return res
                      .status(400)
                      .json({ message: 'Error hashing password' });
                  }
                  userEmail.password = hash;
                  userEmail.save(function (err) {
                    if (err) {
                      return res
                        .status(400)
                        .json({ message: 'Password can not reset.' });
                    } else {
                      userToken.remove();
                      return res
                        .status(201)
                        .json({ message: 'Password reset successfully' });
                    }
        
                  });
                });
              });
        
            })
        }
    }
// Route pour demander une réinitialisation de mot de passe
/*exports.ResetPassword= async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
      return res.status(404).send('Utilisateur non trouvé');
  }

  const resetToken = generateResetToken(); // Générer un jeton de réinitialisation unique
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000; // Lien de réinitialisation expirera après 1 heure
  await user.save();

  // Envoyer un e-mail avec le lien de réinitialisation de mot de passe
  const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
  await sendResetPasswordEmail(user.email, resetLink);

  res.send('Un e-mail de réinitialisation de mot de passe a été envoyé');
};

// Route pour réinitialiser le mot de passe
exports.ValidPasswordToken= async (req, res) => {
  const { token } = req.params;
  const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
  if (!user) {
      return res.status(400).send('Lien de réinitialisation de mot de passe non valide ou expiré');
  }

  res.render('reset-password-form');
};

// Route pour soumettre le nouveau mot de passe
exports.NewPassword= async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;
  const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
  if (!user) {
      return res.status(400).send('Lien de réinitialisation de mot de passe non valide ou expiré');
  }

  // Mettre à jour le mot de passe de l'utilisateur
  user.password = newPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  res.send('Mot de passe réinitialisé avec succès');
};*/