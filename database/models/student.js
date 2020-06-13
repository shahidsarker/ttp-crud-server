const Sequelize = require("sequelize");
const { Campus } = require("./campus");
const db = require("../db");

const Student = db.define("student", {
  firstName: { type: Sequelize.STRING, allowNull: false },
});

module.exports = Student;
