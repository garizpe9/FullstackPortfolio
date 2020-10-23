var path = require("path");
require('dotenv').config();
const express = require("express");
const session = require("express-session");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );
require("./routes/html-routes.js")(app);


app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });