const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
require('dotenv').config();

let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

exports.signup = (req, res, next) => {
  if ( req.body.password.match(passwordRegExp)){
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: cryptojs.HmacSHA256(req.body.email, process.env.EMAIL_KEY).toString(),
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(401).json({ error }));
  }
  else return res.status(402).json({ error: 'Mot de pass invalide !' });
};

exports.login = (req, res, next) => {
  const cryptedResearchedEmail = cryptojs.HmacSHA256(req.body.email, process.env.EMAIL_KEY).toString();
  User.findOne({ email: cryptedResearchedEmail })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              process.env.TOKEN,
              { expiresIn: '6h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};