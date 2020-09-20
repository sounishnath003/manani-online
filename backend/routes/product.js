const express = require("express");
const router = express.Router();
const db = require("../database");
const Product = require("../models/Product");

// getting all products
router.get("/", (req, res) => {
  Product.findAll()
    .then((products) => {
      console.log(products);
      res.send({
        products: products.sort((a, b) => b.createdAt - a.createdAt)
      });
    })
    .catch((err) => console.log(err));
});

// post a new product
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
      console.log(product);
      res.redirect("/products");
    })
    .catch((err) => console.error("Product not inserted: " + err));
});

// get the specific product
router.get("/find/:id", (req, res) => {
  Product.findByPk(req.params.id)
    .then((product) => {
      console.log(product);
      res.send({
        requestedId: req.params.id,
        product: product,
        status: 200,
      });
    })
    .catch((err) => {
      console.log("product not found in db: " + err);
      req.sendStatus(500);
    });
});

// delete product
router.get("/delete/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((status) => {
      console.log("succesfully deleted from db: " + status);
      res.redirect("/products");
    })
    .catch((err) => {
      res.send({
        err: err,
      });
      console.error(err);
    });
});

module.exports = router;
