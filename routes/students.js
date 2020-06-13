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

/**
 * Action GET student by ID
 * ENDPOINT: /api/students/:id
 * Return: Specific student based on id
 */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try{
    const student = await Student.findByPk(id);
    res.status(200).json(student);
  } catch(err) {
    next(err);
  }
})

module.exports = router;
