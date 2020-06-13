var express = require("express");
var router = express.Router();
const { Student, Campus } = require("../database/models");

/**
 * Action: GET All students
 * Endpoint: /api/students
 * Return: Array of students
 */
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({ include: Campus });
    res.status(200).json(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
