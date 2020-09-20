const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
// database setup
const db = require("./database");
db.setupDB();

// cors eneable
app.use(cors())

// Product Routes
app.use("/products", require("./routes/product"));

app.listen(port, () => console.log(`listening on http://localhost:${port}/products`));
