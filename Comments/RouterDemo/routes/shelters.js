// First we need to require Express
const express = require("express");
// Then we can use express routers to set up a router using the express features that we can find on the docs of express
const router = express.Router();

// First STEP

// Now we add all the routers we want to implement on this router, using the following logic
// router.get("/shelters", (req, res) => {
//   // We are sending something simple to view how it works
//   res.send("All Shelters Routes");
// });

// router.get("/shelters/:id", (req, res) => {
//   // Creating a second route to receive a id information
//   res.send("Viewing one shelter ID");
// });

// router.get("/shelters/:id/edit", (req, res) => {
//   // Creating a third route to receive a id information and edit it for example
//   res.send("Viewing one shelter ID EDIT");
// });

// router.post("/shelters", (req, res) => {
//   // Creating another route to post or create a new Shelter
//   res.send("Creating one Shelter ");
// });

// Now we add all the routers we want to implement on this router, using the following logic
router.get("/", (req, res) => {
  // We are sending something simple to view how it works
  res.send("All Shelters Routes");
});

router.get("/:id", (req, res) => {
  // Creating a second route to receive a id information
  res.send("Viewing one shelter ID");
});

router.get("/:id/edit", (req, res) => {
  // Creating a third route to receive a id information and edit it for example
  res.send("Viewing one shelter ID EDIT");
});

router.post("/", (req, res) => {
  // Creating another route to post or create a new Shelter
  res.send("Creating one Shelter ");
});

module.exports = router;
// So in this file, we require express, then we use the express router and save it to a variable called router, then we use it to create our first routes using the shelter route
// Finally, we can export that to use in our app.js
