const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const cors = require('cors');
const path = require('path');

const postRoute = require('./routes/post');
const userRoute = require('./routes/User');

mongoose.connect("mongodb+srv://Jordan:Mpassdejo12@cluster0.xrimu.mongodb.net/?retryWrites=true&w=majority",
  {   
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion MongoDB réussie.'))
  .catch(() =>console.log('Echec connexion MongoDB.'));

app.use(bodyparser.json());
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/', function(req, res) {
  res.end(JSON.stringify(req.body))
});



app.use('/api/auth', userRoute);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/post', postRoute);



module.exports = app;