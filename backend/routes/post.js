const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');
const likeCtrl = require('../controllers/likes');

router.post('/',auth, multer, postCtrl.createPost);

router.get('/',auth, postCtrl.getAllPost);

router.get('/:id',auth, postCtrl.getOnePost);
router.put('/:id',auth, multer, postCtrl.modifyPost);
router.delete('/:id',auth, postCtrl.deletePost);

router.post('/:id/like',auth, likeCtrl.like);
// router.patch('/:id/like', likeCtrl.modifyLike);

module.exports = router;