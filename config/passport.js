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
  var dd2 = parseInt(dd+2);
  if (dd2 >= 28) {
      dd2 = 29;
  }
  if (dd == "29") {
    dd2 = 30; 
  }
  var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
  var MM2;
  if (MM == "01") {
    MM = "January";
    MM2 = "February"
  }
  if (MM == "02") {
    MM = "February";
    MM2 = "March"
  }
  if (MM == "03") {
    MM = "March";
    MM2 = "April"
  }
  if (MM == "04") {
    MM = "April";
    MM2 = "May"
  }
  if (MM == "05") {
    MM = "May";
    MM2 = "June"
  }
  if (MM == "06") {
    MM = "June";
    MM2 = "July"
  }
  if (MM == "07") {
    MM = "July";
    MM2 = "August"
  }
  if (MM == "08") {
    MM = "August";
    MM2 = "September"
  }
  if (MM == "09") {
    MM = "September";
    MM2 = "October"
  }
  if (MM == "10") {
    MM = "October";
    MM2 = "November"
  }
  if (MM == "11") {
    MM = "November";
    MM2 = "December"
  }
  if (MM == "12") {
    MM = "December";
    MM2 = "January"
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
        db.user.findOne({where: {username: username}})
        .then((user) => {
            if (user) {
                return done(null, false, {message:'Username already exists.'});
            }
            if (username.length < 8) {
                console.log("username rejection");
                return done(null, false, {message:'Username must be at least 8 characters in length.'});
            } 
            if (password.length < 8) {
                console.log("password rejection");
                return done(null, false, {message:'Password must be at least 8 characters in length.'});
            } 
            else {
                db.dateInfo.create({
                    user: username,
                    month: MM,
                    day: dd,
                    text: "The day you signed up for IntroSpectiv! Hooray!",
                    anger_score: .18,
                    disgust_score: .22,
                    fear_score: .30,
                    joy_score: .95,
                    sadness_score: .12,        
                    date: Date.now(),
                    image: "savedimages/signup.jpeg"}).
                    then(
                        db.dateInfo.create({
                            user: username,
                            month: MM,
                            day: dd2,
                            text: "This date is filled mostly for demo purposes so you can see how the Trends page works, the emotional scores are just for show. This is what a submitted entry looks like!",
                            anger_score: .30,
                            disgust_score: .29,
                            fear_score: .10,
                            joy_score: .75,
                            sadness_score: .40,        
                            date: Date.now(),
                            image: "savedimages/oneweek.gif"})
                    ).
                    then(
                        db.dateInfo.create({
                            user: username,
                            month: MM2,
                            day: dd,
                            text: "The one month anniversary of the day you signed up for IntroSpectiv! Hooray! These dates are filled mostly for demo purposes so you can see how the Trends page works, the emotional scores are just for show",
                            anger_score: .20,
                            disgust_score: .18,
                            fear_score: .19,
                            joy_score: .82,
                            sadness_score: .20,        
                            date: Date.now(),
                            image: "savedimages/oneweek.gif"})).
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
