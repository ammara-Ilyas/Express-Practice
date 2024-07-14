const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Maha Nazz",
  });
});

app.listen(8000, () => {
  console.log(`listening on 8000`);
});
