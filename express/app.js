//////////routing in express

const express = require("express");
const app = express();
// console.log(app);
///////app.get(route,callback)

app.get("/", function (req, res) {
  res.send("Hello World to express");
});
app.listen(3000, () => {
  "Listening to port 3000";
});
