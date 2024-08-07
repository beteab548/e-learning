const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
app.set("view-engine", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(authRoutes);
app.use(userRoutes);
app.listen(3000, () => {
  console.log("connected on 3000");
});
