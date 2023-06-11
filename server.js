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
app.get('/', (req, res) => {
  res.render('index.ejs')
})

//NEW


//======================================
//          LISTENERS
//======================================
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})