var express = require('express');
var methodOveride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

//express
var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//css
app.use(express.static(__dirname + "/public"));


//listen for webserver
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});