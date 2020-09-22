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
router.post("/add-product", (req, res, next) => {
  const data = {
    name: req.params.name,
    custName: req.params.custName,
    wholesaler: req.params.wholesaler,
    costprice: parseInt(req.params.costprice, 10),
    contact: req.params.contact,
    sellingPrice: req.params.sellingPrice,
    address: req.params.address,
    photo: req.params.photo
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
  } = data ;
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
      next();
    })
    .catch((err) => console.error("Product not inserted: " + err));
});

// get the specific product
router.get("/find/:id", (req, res, next) => {
  Product.findByPk(req.params.id)
    .then((product) => {
      console.log(product);
      res.send({
        requestedId: req.params.id,
        product: product,
        status: 200,
      });
      next();
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
