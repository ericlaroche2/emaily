//prod.js
module.exports = { // add in settings config vars on heroku app
  GoogleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.envCOOKIE_KEY,
};