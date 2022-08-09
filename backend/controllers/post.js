const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
      const postObject = (req.body);
      const attachment = req.file 
      ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      : "NULL";

      delete postObject._id;
      const post = new Post({
            ...postObject,
            imageUrl : attachment,
      });
      post.save()
      .then(() => res.status(201).json({
            message: 'Post enregistré comme prévue'
      }))
      .catch(error => res.status(400).json({
            message: "Il y a eu un probleme lors de l'enregistrement"
      }));
};

exports.getAllPost = (req, res, next) => {
      console.log(req.body);
      Post.find()
      .then(posts => 
            res.status(200).json(posts))
      .catch(error => 
            res.status(400).json({
                  message:'requête impossible'
            })
      );
};

exports.getOnePost = (req, res, next) => {
      console.log(req.params.id);
      Post.findOne({_id: req.params.id})
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({
        message: 'requête pas possible'
    })
    );
}

exports.modifyPost = (req, res, next) => {
      const postObject = req.file ?
      {
      ...(req.body),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : {...req.body};
      Post.updateOne({_id: req.params.id}, {...postObject, _id: req.params.id})
      .then(() => res.status(200).json({message: 'objet modifier'}))    
      .catch(error => res.status(400).json({error}));

};

exports.deletePost = (req, res, next) => {
      Post.findOne({_id: req.params.id})
      .then(post => {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                  Post.deleteOne({_id: req.params.id})
                  .then(() => res.status(200).json({message: "post supprimé"}))
                  .catch(error => res.status(400).json({message: "problème a la suppression"}));           
            });
      })
      .catch(error => res.status(500).json({message: 'problème serveur'}));      
};