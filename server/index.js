const express = require("express");

const app = express();

app.use(express.json());

app.listen(4000);

app.get("/", (req, res) => {
  res.json({ test: "hello world, test",idk:"okay" });
});

app.get("/test", (req, res) => {
  res.send("test endpoint");
});
