//////////routing in express
const path = require("path");
const express = require("express");
const app = express();
///////app.get(route,callback)
console.log("hello");

//////         way to serve static website
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));
app.get("/", function (req, res) {
  res.status(200).sendFile(path.join(publicPath, "index.html"));
});
//////           Way to serve HTML

app.get("/about", function (req, res) {
  res.status(200).send("<h1>Hello World to express from about page</h1>");
});
//////          1st Way to serve json
app.get("/contact", function (req, res) {
  res.json([
    {
      name: "Ammara Ilyas",
      age: 22,
      school: "PIAIC",
    },
    {
      name: "Ammara Ilyas",
      age: 22,
      school: "PIAIC",
    },
    {
      name: "Ammara Ilyas",
      age: 22,
      school: "PIAIC",
    },
  ]);
});
//////          2nd Way to serve json

app.get("/error", function (req, res) {
  res.status(404).send([
    {
      name: "Ammara Ilyas",
      age: 22,
      school: "PIAIC",
    },
    {
      name: "Ammara Ilyas",
      age: 22,
      school: "PIAIC",
    },
    {
      name: "Ammara Ilyas",
      age: 22,
      school: "PIAIC",
    },
  ]);
});
app.listen(8000, () => {
  console.log("Listening to port 3000");
});
