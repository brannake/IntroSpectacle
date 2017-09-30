const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  {
    usernameField: "user",
    // passReqToCallback: true 
  },
  function(user, password, done) {
       db.Users.findOne({
      where: {
        user: user
      }
    }).then(function(dbUsers) {
       if (!dbUsers) {
        return done(null, false, {
          message: "Incorrect user name."
        });
      }
       else if (!dbUsers.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
        return done(null, dbUsers);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
