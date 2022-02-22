const express = require("express");
const app = express();
// We can import all the routes we created on the file shelter.js
const shelterRoutes = require("./routes/shelters");
// Now we import the other route we crated on the dogs.js file
const dogsRouter = require("./routes/dogs");

const port = 3000;

// To understand this require, please go to line 9 on admin.js file
const adminRoutes = require("./routes/admin");

// The middleware to protect the admin.js file routes
// app.use((req, res, next) => {
//   // First we validate the route
//   if (req.query.isAdmin) {
//     //Then we call next()
//     next();
//   }
//   //   Otherwise
//   res.send("Sorry, Not an Admin");
//   // Then we need to require the Admin Route
// });
// By Using this middleware above, we're set all the routes bellow to be protected, and this is a problem
// We can replace the app to router.use on the admin.js file to protect only the route we want

// Just import the routes it's not enough, so we need to use this, as the documentation of express routes says.
// To use the express routes we need to code like below
// app.use("/", shelterRoutes);
// So we pass as params for the use, the path to use the router, and then the route itself.
// To test the function above, type npm start to initiate the application and go to localhost on the port set above, and go to /shelters
// Then we can view all the paths that we passed into the shelters.js file

// But the better form to use that is:
app.use("/shelters", shelterRoutes);
// Then we go back to shelters file, and set all the paths to just /
// ---------------------------------------------------------------------------------------------
// After we do that, we can improve our code cause, if we need to change the path to shelters
// We just need to change it in one place, above.

// For the other route to dogs, we use the same logic
app.use("/dogs", dogsRouter);

// The middleware we create, the route below is protected by it, so to test it, just comment all the middleware and access it on localhost/admin/topSecret
app.use("/admin", adminRoutes);
// With the middleware not comment, we can't access the route above
// By the conditionals we create on the admin file, if we set on localhost/admin/TopSecret?isAdmin=true we can access all the content we protected

app.listen(`${port}`, () => {
  console.log(`Serving on port:${port}`);
});
