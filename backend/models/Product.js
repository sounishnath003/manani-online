const Sequelize = require("sequelize");
const db = require("../database");

const Product = db.sequelize.define("product", {
  name: {
    type: Sequelize.STRING,
  },
  photo: {
    type: Sequelize.BLOB,
  },
  custName: {
    type: Sequelize.STRING,
  },
  wholesaler: {
    type: Sequelize.STRING,
  },
  costprice: {
    type: Sequelize.INTEGER,
  },
  contact: {
    type: Sequelize.STRING,
  },
  sellingPrice: {
    type: Sequelize.INTEGER,
  },
  address: {
    type: Sequelize.STRING,
  },
}, {
  freezeTableName: true 
});

module.exports = Product;
