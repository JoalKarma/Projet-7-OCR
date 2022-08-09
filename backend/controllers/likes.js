const Post = require('../models/Post'); 

exports.like = (req, res, next) => {
    switch (req.body.likes){
        case 0:
            console.log('case 0');  
            console.log('body', req.body);
            Post.findOne({_id: req.params.id})
            .then((post) => {
                if(post.usersLiked.find(user => user === req.body.actualUserId)){
                    Post.updateOne({_id: req.params.id}, 
                        {
                            $inc:{likes: -1},
                            $pull:{usersLiked: req.body.actualUserId},
                        })
                    .then(() => res.status(200).json({message:"Votre like à bien était enlever."}))
                    .catch(error => res.status(400).json({error}));
                }
            })
        break;
        case 1:
            console.log('case 1');
            Post.updateOne({_id: req.params.id},
                {
                    $inc:{likes: 1},
                    $push:{usersLiked: req.body.actualUserId}
                })
                .then(() => res.status(200).json({message: "like ajouter"}))
                .catch(error => res.status(400).json({error}));
        break;
    }    
};