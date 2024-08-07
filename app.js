const express = require("express");
const app = express();
const path = require("path");
app.set("view-engine", "views");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res, next) => {
  res.render("user/index.ejs");
});
app.listen(3000, () => {
  console.log("connected on 3000");
});
