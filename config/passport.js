// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var db = require("../models");

// expose this function to our app using module.exports
module.exports = function(passport) {

    //Sets today's date in db-friendly format
  var date = new Date();
  var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
  var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
  if (MM == "01") {
    MM = "January";
  }
  if (MM == "02") {
    MM = "February";
  }
  if (MM == "03") {
    MM = "March";
  }
  if (MM == "04") {
    MM = "April";
  }
  if (MM == "05") {
    MM = "May";
  }
  if (MM == "06") {
    MM = "June"
  }
  if (MM == "07") {
    MM = "July";
  }
  if (MM == "08") {
    MM = "August";
  }
  if (MM == "09") {
    MM = "September";
  }
  if (MM == "10") {
    MM = "October";
  }
  if (MM == "11") {
    MM = "November";
  }
  if (MM == "12") {
    MM = "December";
  }
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and deserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function(username, done) {
        db.user.findOne({where: {username: username}}).then((user)=> {
            done(null, user);
            });
        });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        username: 'username',
        password: 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
        process.nextTick(function() {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        db.user.findOne({where: {username: username, password: password}})
        .then((user) => {
            if (user) {
                return done(null, false, {message:'Username/Password combination already exists.'});
            } else {
                db.dateInfo.create({
                    user: username,
                    month: MM,
                    day: dd,
                    text: "The day you signed up for IntroSpectiv! Hooray!",
                    anger_score: 0,
                    disgust_score: 0,
                    fear_score: 0,
                    joy_score: .95,
                    sadness_score: 0,        
                    date: Date.now(),
                    image: "savedimages/signup.jpeg"}).
                    then(
                        db.user.create({username: username, password: password}).then((user) => {
                        return done(null, user);}))
                }});
            })
        })
    )

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        username: 'username',
        password: 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
        process.nextTick(function() {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        db.user.findOne({where: {username: username, password: password}})
        .then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false, {message:'Username/Password combination not found.'});
            }
        });
    })}));
};
