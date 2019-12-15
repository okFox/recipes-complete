const express = require('express');
const app = express();
const fetch = require('node-fetch');
// const router = express.Router();



app.use(express.static('public'));

// const cors = require('cors');
app.use(express.json());
app.use('/api/v1/recipes', require('./routes/recipes'));
app.use('/api/v1/events', require('./routes/events'));


//handlebars
const expbs = require('express-handlebars');
app.use(express.static(__dirname + '../public'));
app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');


// routing
app.get('/', async(req, res) => {

  const response = await fetch('https://recipes-acl.herokuapp.com/api/v1/recipes');
  let recipes = await response.json();
  res.render('index', { recipes: recipes });
});





// app.use(cors());

module.exports = app;

