const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");



passport.use(new LocalStrategy(
function(username, password, done) {
  Usesr.findOne({ user: user }, function(err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}
));

passport.authenticate('local', { successRedirect: '/',
failureRedirect: 'api/login',
failureFlash: true })


// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
