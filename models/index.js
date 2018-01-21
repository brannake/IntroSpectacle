'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
//var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var env = process.env.JAWSDB_URL
var db = {}

//Creates mySQL connection using Sequelize
var sequelize = new Sequelize("tm7hodyik26q7v83", "dy388znrr3l2meea", "d6io3wu5dq7wkptn", {
  host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
  max: 5,
  min: 0,
  idle: 10000
 },
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
