// server.js
// init project
var express = require("express");
var axios = require("axios");
var app = express();
const PORT = process.env.PORT || 8080;

const dotenv = require('dotenv');
dotenv.config();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// // http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function(request, response) {
//   response.sendFile(__dirname + "/app/index.html");
// });

app.get("/prices", function(request, response) {
  axios
    .get("https://api.nomics.com/v1/prices?key=" + process.env.NOMICS_API_KEY)
    .then(resp => {
      response.send(resp.data);
    })
    .catch(err => {
      console.log("Error fetching data from nomics", err);
    });
});

// listen for requests :)
var listener = app.listen(PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});