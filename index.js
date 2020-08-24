const express = require("express");
const request = require("request");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");

app.get("/search", (req, res, next) => {
  const query = req.query.search;
  const url = `http://www.omdbapi.com/?s=${query}&apikey=${process.env.API_KEY}`;
  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      return res.render("results", { data: JSON.parse(body) });
    }
  });
});

app.listen(3000);
