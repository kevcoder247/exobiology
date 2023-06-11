//======================================
//          DEPENDENCIES
//======================================
const express = require('express');
const app = express();
const PORT = 3000;

//======================================
//          ROUTES
//======================================
app.get('/', (req, res) => {
  res.send(`<h1>Hello</h1>`)
})


//======================================
//          LISTENERS
//======================================
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})