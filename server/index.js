// server.js
// init project
var express = require("express");
var axios = require("axios");
var app = express();
const PORT = process.env.PORT || 3001;

const dotenv = require('dotenv');
dotenv.config();

app.get("/prices", function(req, res) {
  axios
    .get("https://api.nomics.com/v1/currencies/ticker?key=" + process.env.NOMICS_API_KEY + "&ids=BTC")
    .then(resp => {
      res.send(resp.data);
    })
    .catch(err => {
      console.log("Error fetching data from nomics", err);
    });
});

// listen for requests :)
var listener = app.listen(PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});