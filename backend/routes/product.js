const express = require("express");
const router = express.Router();
const db = require("../database");
const Product = require("../models/Product");

router.get("/", (req, res) => {
  Product.findAll()
    .then((products) => {
      console.log(products);
    })
    .catch((err) => console.log(err));
  res.send("all products");
});

router.get("/add-product", (req, res) => {
  const data = {
    name: "Leelen Saree",
    custName: "Kalpana Mallick",
    wholesaler: "Saptaparnee",
    costprice: 2310,
    contact: "+91-9475192332",
    sellingPrice: 6200,
    address: "Dumdum, Kolkata",
  };
  let {
    name,
    custName,
    wholesaler,
    costprice,
    contact,
    sellingPrice,
    address,
  } = data;
  //   insert into db
  Product.create({
    name,
    custName,
    wholesaler,
    costprice,
    contact,
    sellingPrice,
    address,
  })
    .then((product) => {
      console.log("product succesfully inserted into db");
      console.log(data);
      res.redirect('/products') ;
    })
    .catch((err) => console.error("Product not inserted: " + err));
});

module.exports = router;
