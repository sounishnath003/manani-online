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
router.post("/add-product", (req, res) => {
  const data = {
    name: "Silk Saree Handoom Craft",
    custName: "Annesha Harh",
    wholesaler: "Rangoli",
    costprice: 4599,
    contact: "+91-8640750159",
    sellingPrice: 6200,
    address: "Mumbai, Maharastra",
  };
  let {
    name,
    custName,
    wholesaler,
    costprice,
    contact,
    sellingPrice,
    address,
    photo
  } = req.body;
  //   insert into db
  Product.create({
    name,
    custName,
    wholesaler,
    costprice,
    contact,
    sellingPrice,
    address,
    photo
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
