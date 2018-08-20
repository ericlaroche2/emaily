const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys.js");

const User = mongoose.model('users'); // 1 arg=fetch, 2 args= put

passport.serializeUser((user, done) => { //stuff cookie, mongo user
  done(null, user.id);
});

passport.deserializeUser((id, done) => { //return user
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //
      proxy: true //trust heroku to manage the callback url
    },
    (accessToken, refreshToken, profile, done) => {
      //console.log("accesstoken: " + accessToken);
      //console.log("refreshToken:", refreshToken);
      //console.log("profile:", profile);
      User.findOne({ googleId: profile.id }).then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({ googleId: profile.id }).save()
              .then(user => done(null, user));
          }
        })

    }
  )
);