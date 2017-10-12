// *** Dependencies
// =============================================================
const express = require("express");
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();


// Sets up the Express App
// =============================================================
const PORT = process.env.PORT || 8094;

// Requiring our models for syncing
const db = require("./models");

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
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
