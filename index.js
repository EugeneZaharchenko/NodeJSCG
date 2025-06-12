const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const expressHbs = require("express-handlebars");

const errorController = require("./controllers/error");

const app = express();
const port = 3000;

app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: ".hbs",
  })
);
// app.set("view engine", "pug");
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Apply routes
app.use("/admin", adminRoutes);
app.use("/", shopRoutes);
app.use(errorController.get404);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
