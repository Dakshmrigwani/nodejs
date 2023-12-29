const express = require("express");

const app = express(); // we written due to bcsit is not in excecutable state

const Route = express.Router()

const reqfilter = require("./middleware")

Route.use(reqfilter)

// define to access the middleware

// const reqfilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Give me your fucking age");
//   } else if (req.query.age < 18) {
//     resp.send("you cannot access this page");
//   } else {
//     next();
//   }
// };

// app.use(reqfilter);

// it applies in all the page
app.get("", (req, resp) => {
  resp.send("welcome to the home");
});
app.get("/login", reqfilter, (req, resp) => {
  resp.send("welcome to the login");
});

// you can do this but it is not a good practice
Route.get("/user", reqfilter, (req, resp) => {
    resp.send("welcome to the user");
  });

  // it is a gppd practice

  // and add this as well when you use route

  app.use("/", Route)
app.listen(5000);
