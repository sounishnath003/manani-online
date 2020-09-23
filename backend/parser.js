const bodyParser = require("body-parser");

const parser = {
  parsee: () => bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  }),
  jsonParse: () => bodyParser.json({
    limit: '50mb',
    extended: true
  })
};

module.exports = parser;