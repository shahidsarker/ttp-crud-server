const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  jerseyNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Campus;
