const URL = 'https://rates-perf-006.cloudant.com';

let portNumber = process.env.PORT_NUMBER;
const express = require("express");

const http = require("request");
const app = express();

const handleWelcomeRequest = async (req, res, next) => {
  console.log (Date.now() + " Sending welcome request...");
  http (URL, (err, response, body) => {
    if (err) {
      console.log (Date.now() + err);
      res.status(500).send(err);
    }
    console.log(Date.now() + body);
    res.status(200).send(body);
    return;
  })
}

app.get("/mini/api/welcome", handleWelcomeRequest);

console.log ("Port: " + portNumber)

app.listen(portNumber, function() {
  console.log("HRE listening on port " + portNumber);
});

module.exports = {
  app
};
