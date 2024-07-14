const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
////can change view name
const templatePath = path.join(__dirname, "../templates/views");
app.set("views", templatePath);
const partialPath = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index", {
    name: "Maha Nazz",
  });
});

app.listen(8000, () => {
  console.log(`listening on 8000`);
});
