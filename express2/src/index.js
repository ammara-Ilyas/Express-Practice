const express = require("express");
const path = require("path");
const app = express();

///////  path
console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
const portNo = 8000;
///////create server
app.get("/", (req, res) => {
  res.status(200).sendFile(staticPath, "index.html");
});
app.listen(portNo, () => {
  console.log(`listening on ${portNo}`);
});
