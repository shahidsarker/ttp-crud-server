const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  name: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: true },
  imageUrl: { type: Sequelize.STRING, allowNull: true },
  description: { type: Sequelize.STRING, allowNull: true },
});

module.exports = Campus;
