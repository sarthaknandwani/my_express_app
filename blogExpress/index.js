var express = require('express')
const path = require('path')
var exphbs = require('express-handlebars');
 
var app = express()
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))
 

app.listen(PORT, () => {
  console.log(`Blog app listening at http://localhost:${PORT}`)
})