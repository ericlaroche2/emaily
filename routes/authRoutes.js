const passport = require('passport');

module.exports = app => {

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // app.get("/", (req, res) => {
  //   res.send({ hi: "there" });
  // });

  app.get("/auth/google/callback", passport.authenticate("google")); // passport sees code
  app.get('/api/logout', (req, res) => {
    req.logout(); //attached to req of passport, kills cookie id
    res.send(req.user); //req.user sould be gone
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user); //show wether user exist in cookie session
    console.log(req.session);
  });

};

