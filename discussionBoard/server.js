var express = require ('express');
var path = require ('path');
var http = require ('http');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.get('*', (req, res)=>{
  res.redirect('/')
});

app.listen(8000, ()=>console.log("listening on local host 8000"))
