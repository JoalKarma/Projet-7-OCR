const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = (req, res, next) => {
      bcrypt.hash(req.body.password, 10)
      .then(hash => {
            const user = new User({
                  email: req.body.email, 
                  password: hash
            });
            user.save()
            .then((user) => res.status(201).json({
                  isAdmin: user.isAdmin,
                  userId: user.id,
                  token: jwt.sign(
                        {userId: user.id, isAdmin: user.isAdmin},
                        `${process.env.JWT_KEY_TOKEN}`,
                        {expiresIn: '24h'}
                  )     
            }))
            .catch(error => res.status(400).json({error}));
      })
      .catch(error => res.status(500).json({error: "fetch du signup non réussi erreur 500"}));
};

exports.login = (req, res, next) => {
      User.findOne({email: req.body.email})
      .then(user => {

            if(!user){
                  return res.status(401).json({error: 'Utilisateur introuvable'});
            }
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {console.log('utilisateur trouver');
                  if(!valid){
                        return res.status(401).json({error: 'Mot de passe incorect'});
                  }
                  token = jwt.sign(
                        {userId: user.id, isAdmin: user.isAdmin},
                        `${process.env.JWT_KEY_TOKEN}`,
                        {expiresIn: '24h'}
                        
                  );
                  res.status(200).json({
                        isAdmin: user.isAdmin,
                        userId: user.id,
                        token: token,     
                  });
            })
            .catch(error => res.status(500).json({error: 'ok2'}));   
      })
      .catch(error => res.status(500).json({error: 'ok3'}));
};