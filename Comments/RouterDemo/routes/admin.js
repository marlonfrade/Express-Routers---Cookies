// In this file, we will use a middleware route to implement as an admin to validate some other routes

// First we need to require Express
const express = require("express");
const { append } = require("express/lib/response");
// Then we can use express routers to set up a router using the express features that we can find on the docs of express
const router = express.Router();

// The middleware to protect the admin.js file routes
// To understand why this middleware is here, go to line 24 on app.js
router.use((req, res, next) => {
  // First we validate the route
  if (req.query.isAdmin) {
    //Then we call next()
    next();
  }
  //   Otherwise
  res.send("Sorry, Not an Admin");
  // Then we need to require the Admin Route
});
// To test this middleware, go to line 47 on app.js to understand the conditionals

// The two routes below we will protect by the middleware in app.js
router.get("/topSecret", (req, res) => {
  res.send("TOP SECRET");
});

router.get("/deleteAll", (req, res) => {
  res.send("DELETED IT ALL");
});

module.exports = router;
