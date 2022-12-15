const express = require("express");
var writeGood = require("write-good");

const app = express();

app.use(express.json());

app.listen(4000);

app.get("/", (req, res) => {
  res.json({ test: "hello world, test", idk: "okay" });
});

app.get("/test", (req, res) => {
  var suggestions = writeGood('You must not name Him-Who-Must-Not-Be-Named');
  console.log(suggestions)
  res.json(suggestions);
});
