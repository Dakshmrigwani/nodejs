// always use the site with index thats why i changed index to index-1

const express = require("express");
const path = require("path");

const app = express(); // we written due to bcsit is not in excecutable state
app.get("", (req, res) => {
  // it is for home page
  // res.send("Hello this is Home Page"); // the res send one at a time
  res.send("<h2>Hello</h2>");
  console.log("data sent by", req.query.name); // this is ho we get the data from the browser
});
app.get("/about", (req, res) => {
  res.send("Hello this is About Page");
});
const publicPath = path.join(__dirname, "Html-page"); // now you don't have to add extension

app.use(express.static(publicPath)); // it helps to load static page

app.listen(5000);
