const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Apply routes
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
