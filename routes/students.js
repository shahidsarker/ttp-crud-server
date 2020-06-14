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
  try {
    const student = await Student.findByPk(id, { include: Campus });
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
});

/**
 * Action: POST new student
 * ENDPOINT: /api/students/
 * Return: Newly created student
 */
router.post("/", async (req, res, next) => {
  const receivedStudent = req.body;
  try {
    const newStudent = await Student.create(receivedStudent);
    res.status(201).json(newStudent);
  } catch (err) {
    next(err);
  }
});

/**
 * Action: Update student
 * ENDPOINT: /api/students/:id
 * Return: Updated student
 */
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, gpa, campusId_FK, imageUrl } = req.body;
  const updatedObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    gpa: gpa,
    campusId_FK: campusId_FK,
    imageUrl: imageUrl,
  };
  try {
    const student = await Student.findByPk(id);
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    res.status(201).send(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id);
    student.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
