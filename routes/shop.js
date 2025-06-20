const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");
const adminData = require("./admin");

// Home route
// router.get("/", (req, res) => {
//   res.setHeader("Custom-Header", "my-header");
//   res.send("Hello from Node.js Docker container! Try changing HO-HO-ho!! ))");
// });

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

// Synchronous message route
router.get("/mess", (req, res) => {
  fs.writeFileSync("message.txt", "Try changing it, HO-HO ))).");
  res.redirect("/");
});

// Asynchronous message route
router.get("/messAsync", (req, res) => {
  fs.writeFile("messageAsync.txt", "HO-HO ))).", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error writing to file");
      return;
    }
  });
  res.redirect("/");
});

module.exports = router;
