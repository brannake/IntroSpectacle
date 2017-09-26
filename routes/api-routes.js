// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");
const fs = require("fs");
const path = require("path");
const passport = require("../config/passport")

// Routes
// =============================================================
module.exports = function(app) {

 // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {

    let user = req.body.user;
    let password = req.body.password;
    console.log(req.body);     
     db.users.create({
      user: user,    //req.body.email,
      password: password
    }).then(function(users) {
        res.send(users);
        // res.redirect(307, "/api/login");
      }).catch(function(err) {
        console.log(err);
        res.send(err);
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
    console.log(req.body);
    let userName = req.body.user;
    db.dateInfo.findAll({where: {user: 'default' }}).then(function(db) {
      // We have access to the todos as an argument inside of the callback function
      res.send(db);
    });
  });


  // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   }
  //   else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
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
    let selectedDate = req.body.date;
    let selectedMonth = req.body.month;

    fs.writeFile((path.join("public/savedimages"+"/"+userName+"."+selectedDate+"."+selectedMonth+".jpeg")), newImage);

    console.log(path.join("savedimages"+"/"+userName+"."+selectedDate+"."+selectedMonth+".jpeg"));

    let filepath = path.join("savedimages"+"/"+userName+"."+selectedDate+"."+selectedMonth+".jpeg");

      db.dateInfo.create({user: "default",
                          month: selectedMonth,
                          day: selectedDate,
                          text: req.body.text, 
                          date: Date.now(),
                          image: filepath})
      .then(function(dbdateInfo) { 
        res.send(dbdateInfo);
    });
  });

  app.post("/api/text", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    console.log(req.body.text);
      db.dateInfo.create({user: "Kevin",
                          text: req.body.text, 
                          date: Date.now(),
                          image: "image"})
      .then(function(dbdateInfo) { 
        res.send(dbdateInfo);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/dates/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.dateInfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(db) {
      res.json(db);
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