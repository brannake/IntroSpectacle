// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var db = require("../models");

// expose this function to our app using module.exports
module.exports = function(passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and deserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log("serialized");
        done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function(username, done) {
        console.log("deserialized");
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
                db.user.create({username: username, password: password});
                return done(null, user);
            }
        });
})}))

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
})}))


};
