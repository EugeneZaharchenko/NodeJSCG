const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");
const products = [];

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/shop");
});

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.send(
  //   '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // );
});

exports.routes = router;
exports.products = products;
