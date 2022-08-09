const multer = require('multer');

const MIME_TYPES = {
    'image/jpeg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

const isImage = (req, file, callback) => {
    if(file.mimetype.startWith('image')){
        callback(null, true);
    }else{
        callback(new Error('Seul les images sont autorisé'));
    }
}

module.exports = multer({storage: storage, filefilter : isImage}).single('image'); 