const express = require("express");
const app = express();
const port = 3000;

// We configure the route and the information we want to store

// Route to test
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Using the express documentation about cookies, we can store information using the logic below
app.get("/setName", (req, res) => {
  // res.cookie is not the response, it's just a piece of information we send to the server
  res.cookie("name", "Marlon Frade");

  // Now we can send a response back to the client side
  res.send("Sent You a Cookie");
});
// To test in the client side, go to localhost, then open the dev tools and go to application tab,
// Then you go to /setName and see on the cookies your new information tab
// And if you want to update the information, just change it on the code params, and refresh the page

// After you start de application, you can use Postman to see how it looks when you set a GET request to the path above, in the cookies tab

app.listen(port, () => {
  console.log(`Serving on port: ${port}`);
});
