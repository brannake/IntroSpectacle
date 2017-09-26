// var User = require("../models/user");

module.exports = {
  // This method handles retrieving Users from the db
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    User.find(query)
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles creating new Users
  create: function(req, res) {
    User.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
  // This method handles updating Users

  // This method handles deleting Users

}

