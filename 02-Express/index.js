const express = require("express");
const app = express(); // we written due to bcsit is not in excecutable state
app.get("", (req, res) => {
  // it is for home page
  res.send("Hello this is Home Page");
});
app.get("/about", (req, res) => {
  res.send("Hello this is About Page");
});

app.listen(5000)