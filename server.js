//======================================
//          DEPENDENCIES
//======================================
const express = require('express');
const app = express();
const PORT = 3000;

//======================================
//          MiddleWare
//======================================
app.use(express.urlencoded({ extended: false }))

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

//CREATE 
app.post('/exobiology/', (req, res) => {
  console.log('New Scientist:', req.body);
  res.redirect('/exobiology/');
})


//======================================
//          LISTENERS
//======================================
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})