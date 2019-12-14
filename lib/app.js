const express = require('express');
const app = express();
const Router = require('./routes/recipes');


app.use(express.static('public'));

// const cors = require('cors');
app.use(express.json());
app.use('/api/v1/recipes', require('./routes/recipes'));
app.use('/api/v1/events', require('./routes/events'));

Router.use(function(req, res, next) {
  console.log('Time:', Date.now());
  next();
});
//handlebars
const expbs = require('express-handlebars');
app.use(express.static(__dirname + '../public'));
app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');


//routing
app.get('/', (req, res) => {
  res.render('index', { layout:null });
});




// app.use(cors());

module.exports = app;

