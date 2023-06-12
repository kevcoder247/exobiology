//======================================
//          DEPENDENCIES
//======================================
const express = require('express');
const app = express();
const scientist = require('./models/scientist');
const methodOverride = require("method-override");
const PORT = 3000;

//======================================
//          MiddleWare
//======================================
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));


//======================================
//          ROUTES
//======================================
//INDEX
app.get('/exobiology', (req, res) => {
  res.render('index.ejs', {scientist});
})

//NEW
app.get('/exobiology/new', (req, res) => {
  res.render('new.ejs');
})

//CREATE 
app.post('/exobiology/', (req, res) => {
  console.log('New Scientist:', req.body);
  scientist.push(req.body);
  res.redirect('/exobiology');
})

//DELETE
app.delete("/exobiology/:id", (req, res) => {
  scientist.splice(req.params.id, 1);
  res.redirect('/exobiology');
})

//======================================
//          LISTENERS
//======================================
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})


