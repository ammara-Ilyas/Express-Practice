//////////routing in express

const express = require("express");
const app = express();
// console.log(app);
///////app.get(route,callback)

app.get("/", function (req, res) {
  res.status(200).send("<h1>Hello World to express</h1>");
});
app.get("/about", function (req, res) {
  res.status(200).send("<h1>Hello World to express from about page</h1>");
});
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
