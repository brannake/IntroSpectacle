// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var fs = require("fs");
var path = require("path");
var passport = require("passport");
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
 tone_analyzer = new ToneAnalyzerV3({
  username: "f2974f88-c1cc-49d8-a758-b2fd093e519a",
  password: "vIMDxNMDQMVD",
  version_date: '2016-05-19'
});
// Routes
// =============================================================
module.exports = function(app) {

app.post('/api/login',
  passport.authenticate('local'),
  function(req, res) {
    console.log(req);
    console.log("SUCCESS");
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

app.post('/api/signup',
  passport.authenticate('local-signup'),
  function(req, res) {
    console.log(req);
    console.log("SIGNUP");
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

  // GET route for getting all of the images on load
  app.get("/api/load", function(req, res) {
    var userName = req.body.user;
    db.dateInfo.findAll({where: {user:'default'}, order: [['day', 'DESC']] }).then(function(db) {
      // We have access to the todos as an argument inside of the callback function
      res.send(db);
    });
  });

  // POST route for saving a new image/caption entry
  app.post("/api/images", function(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
   
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var userName = "default";
    var newImage = req.files.file.data;
    var selectedDate = parseInt(req.body.date);
    var selectedMonth = req.body.month;
    var text = req.body.text;

    fs.writeFile((path.join("public/savedimages"+"/"+userName+"."+selectedDate+"."+selectedMonth+".jpeg")), newImage);

    var filepath = path.join("savedimages"+"/"+userName+"."+selectedDate+"."+selectedMonth+".jpeg");

    var params = {
      // Get the text from the JSON file.
      text: req.body.text,
      tones: 'emotion'
    };

    tone_analyzer.tone(params, function(error, response) {
      if (error) {
        console.log('error:', error);
      }
      else {
        db.dateInfo.create({
          user: "default",
          month: selectedMonth,
          day: selectedDate,
          text: text,
          anger_score: response.document_tone.tone_categories[0].tones[0].score,
          disgust_score: response.document_tone.tone_categories[0].tones[1].score,
          fear_score: response.document_tone.tone_categories[0].tones[2].score,
          joy_score: response.document_tone.tone_categories[0].tones[3].score,
          sadness_score: response.document_tone.tone_categories[0].tones[4].score,        
          date: Date.now(),
          image: filepath})
        .then(function(dbdateInfo) { 
          res.send(dbdateInfo);
          });
        }
      }
    );
  });


  app.post("/api/graphs", function(req, res) {
    var userName = req.body.user;
    var month = req.body.month;
    db.dateInfo.findAll({
      where: {user: userName, month: month}
    }).then(function(db) {
      res.send(db);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/dates", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.dateInfo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(db) {
      res.json(db);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });
  };
