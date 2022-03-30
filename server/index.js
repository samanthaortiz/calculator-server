const express = require('express');
const {getTreasuryRates} = require('./handlers')
const app = express()

app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "https://client-rate-calculator.herokuapp.com/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/get-treasury-rates", (req, res) => {
  return getTreasuryRates(req, res)
});

app.get("/ping", (req, res) => {
  console.log('request is', req)
  console.log('returning ping output')
  return res.json({ping: "ok"})
})

app.listen(8080, () => {
  console.log("server is running on port 8080");
  console.log("Open your browser and hit url 'localhost:8080'");
});
