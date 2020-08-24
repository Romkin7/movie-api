const express = require("express");
const request = require("request");
const app = express();

app.get("/search", (req, res, next) => {
  const query = req.query.search;
  const url = `http://www.omdbapi.com/?s=${query}&apikey=${process.env.API_KEY}`;
  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      return res.send(JSON.parse(body).Search);
    }
  });
});

app.listen(3000);
