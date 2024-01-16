const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.get("/api/data", (req, res) => {
  const jsonData = require("./data.json");

  res.json(jsonData);
});

app.get("*", (req, res) => {
  res.status(404).send("404 - Not Found");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
