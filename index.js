const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const expressHbs = require("express-handlebars");

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
app.use("/", (req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "Ot haleppa!!", content: "Загубилось ((" });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});

// docker start -p 3000:3000 -v "${PWD}:/app" -v "/app/node_modules" my-nodejs-app
