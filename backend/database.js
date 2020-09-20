// database setup
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../backend/migration/database.sqlite",
});

let db = {
  sequelize: sequelize,
  setupDB: () => {
    try {
      sequelize.authenticate();
      // sequelize.sync({ force: true });  // for destroy and revert back [special method]
      console.log("Database connection authenticate...");
    } catch (err) {
      console.log("database connection error: " + err);
    }
  },
};

module.exports = db;
