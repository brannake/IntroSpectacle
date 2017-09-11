// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");
const fs = require("fs");
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the images on load
  app.get("/api/load", function(req, res) {
    console.log(req.body);
    let userName = req.body.user;
    db.dateInfo.findAll({where: {user: 'default' }}).then(function(db) {
      // We have access to the todos as an argument inside of the callback function
      res.send(db);
    });
  });

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
