const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const parser = require('./parser') ;
// database setup
const db = require("./database");
db.setupDB();

// cors eneable
app.use(cors());
app.use(parser.parsee());
app.use(parser.jsonParse());
app.use(bodyParser.raw());

// Product Routes
app.use("/api/v1/products", require("./routes/product"));

app.listen(port, () => console.log(`listening on ${port}/products`));
