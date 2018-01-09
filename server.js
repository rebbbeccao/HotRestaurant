// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

var reservations = [];
var waitlist = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/viewtables", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation-view.html"));
});

app.get("/makereservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation-form.html"));
});

app.post("/new", function(req, res) {
  var newreservation = req.body;
  console.log(newreservation);
  reservations.push(newreservation);
  res.json(newreservation);
});



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  