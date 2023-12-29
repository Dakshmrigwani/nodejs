const express = require("express");
const path = require("path");

const app = express(); // we written due to bcsit is not in excecutable state

const publicPath = path.join(__dirname, "Html-page"); // now you don't have to add extension

app.set(`view engine`, `ejs`);

// app.get("/profile",(_,resp) => {
// resp.render("profile")
// })

// it helps to render plain html page

app.get("/profile",(_,resp) => {
    const user = {
        name:`daksh`,
    }
    resp.render("profile" , {user})
    })
app.use(express.static(publicPath)); // it helps to load static page

app.listen(5000);
