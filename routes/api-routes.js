// Requiring our models
const db = require("../models");
const fs = require("fs");
const path = require("path");
const passport = require("../config/passport")

var isAuthenticated = require("../config/middleware/isAuthenticated");



// Routes
// =============================================================
module.exports = function(app) {

 // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  app.post("/api/login", passport.authenticate("local",
  { 
    successRedirect: "/?/calendar",
    failureRedirect: "/",
    failureFlash: true}
  ),
  function(req, res) {
    res.redirect("/calendar");
  });

  app.get('/calendar', isAuthenticated, function (req, res) {
    res.send('calendar', {
        user: req.user
    });
});

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email    
    let user = req.body.user;
    let password = req.body.password;
 console.log(req.body);     
     db.Users.create({
       first_name: first_name,
       last_name: last_name,
       email: email,
       user: user,    //req.body.email,
       password: password
    }).then(function(users) {
        res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

    // Route for logging user out
    app.get("/logout", function(req, res) {
      req.logout();
      res.redirect("/");
    });


  // GET route for getting all of the images on load
  app.get("/api/load", function(req, res) {
    let userName = req.body.user;
    db.dateInfo.findAll({where: {user:'default'}, order: [['day', 'DESC']] }).then(function(db) {
      // We have access to the todos as an argument inside of the callback function
      res.send(db);
    });
  });


//   Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
     
  //     res.json({});
  //   }
  //   else {     
  //     res.json({
  //       user: req.users.user,
  //     });
  //   }
  // });



  // POST route for saving a new image/caption entry
  app.post("/api/images", function(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
   
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let userName = "default";
    let newImage = req.files.file.data;
    let selectedDate = parseInt(req.body.date);
    let selectedMonth = req.body.month;
    let text = req.body.text;

    fs.writeFile((path.join("public/savedimages"+"/"+userName+"."+selectedDate+"."+selectedMonth+".jpeg")), newImage);

    let filepath = path.join("savedimages"+"/"+userName+"."+selectedDate+"."+selectedMonth+".jpeg");

    let params = {
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
    console.log(req.body);
    console.log("FAT ROOOMMATE IS FAT");
    let userName = req.body.user;
    let month = req.body.month;
    db.dateInfo.findAll({
      where: {user: userName, month: month},
    }).then(function(db) {
      console.log(db);
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