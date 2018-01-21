// *** Dependencies
// =============================================================
var express = require("express");
var fileUpload = require('express-fileupload');
var bodyParser = require("body-parser");
var passport = require("passport");
var session = require('express-session');

var app = express();

app.use(session({secret: 'keyboard cat'}))

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8086;

// Requiring our models for syncing
var db = require("./models");

require('./config/passport')(passport)

// Sets up the Express app to handle data parsing
// Static directory
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
