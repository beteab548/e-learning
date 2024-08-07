const express = require("express");
const router = express.Router();
router.get("/student-page", (req, res, next) => {
  res.render("user/student-page.ejs");
});
router.use("/", (req, res, next) => {
  res.render("user/index.ejs");
});
module.exports = router;
