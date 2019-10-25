let portNumber = process.env.PORT_NUMBER;
const express = require("express");

const http = require("request");
const app = express();


const handleWelcomeRequest = async (req, res, next) => {
  console.log ("Sending welcome request...");
  http.get({
    url: 'https://rates-perf-006.cloudant.com',
    agent: false  // Create a new agent just for this one request
  }, function(res) {
    console.log ("Result: " + res)
  });
  res.status(200).send("success");
  return;
}

app.get("/mini/api/welcome", handleWelcomeRequest);

console.log ("Port: " + portNumber)

app.listen(portNumber, function() {
  console.log("HRE listening on port " + portNumber);
});

module.exports = {
  app
};
