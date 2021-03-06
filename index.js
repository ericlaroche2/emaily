const express = require("express"); //import express from "express"; //es 2015 syntax
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); //require file, pass app to exported function

const PORT = process.env.PORT || 5001;
app.listen(PORT);

/**
HEROKU DEPLOYMENT
1. dynamic port binding
const PORT = process.env.PORT || 5001; //prod or dev
2. specifify node env
 specify engine in package.json
3. specify start script
package.json script, modify to node index.js
4. create ignore file
*/
