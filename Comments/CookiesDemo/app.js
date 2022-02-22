const express = require("express");
const app = express();
const port = 3000;

// npm i cookie-parser
const cookieParser = require("cookie-parser");
//Execute it
app.use(cookieParser());

// We configure the route and the information we want to store

// Route to test
app.get("/", (req, res) => {
  res.send("Hello World");
});

// We're creating this third router to show how to use cookie-parser that we install
app.get("/greet", (req, res) => {
  // After we install cookie-parser, we'll be able to use req.cookies to get the cookies stored in the browser
  //   We can see it using a console.log
  //   console.log(req.cookies);
  // Use this console.log above to test if the cookie is available

  // Now we destructuring the cookie
  //   And in case there's no name, we can set a pattern value for it using the = signal
  const { name = anonymous } = req.cookies;

  res.send(`Hey There, ${name}`);
});
// To test this third route above, go to /setName, verify if the cookie has been sent to the application devtool
// Then go back to /greet and verify on the console if there's a response Object with the cookie we'd stored

// If you can't store the cookie using the application, open the cookies on devtool and add a new cookie by your own,
// Then go back to /greet and the cookie you added must be available on the console

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
