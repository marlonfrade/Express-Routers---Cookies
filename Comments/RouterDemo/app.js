const express = require("express");
const app = express();
// We can import all the routes we created on the file shelter.js
const shelterRoutes = require("./routes/shelters");
// Now we import the other route we crated on the dogs.js file
const dogsRouter = require("./routes/dogs");

const port = 3000;

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

app.listen(`${port}`, () => {
  console.log(`Serving on port:${port}`);
});
