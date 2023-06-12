//======================================
//          DEPENDENCIES
//======================================
const express = require('express');
const app = express();
const PORT = 3000;

//======================================
//          ROUTES
//======================================
//INDEX
app.get('/exobiology', (req, res) => {
  res.render('index.ejs')
})

//NEW
app.get('/exobiology/new', (req, res) => {
  res.render('new.ejs')
})


//======================================
//          LISTENERS
//======================================
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})