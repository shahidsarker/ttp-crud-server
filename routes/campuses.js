var express = require("express");
var router = express.Router();
const { Campus, Student } = require("../database/models");

/* GET all campuses. */
// /api/campuses
router.get("/", async (req, res, next) => {
  // try to get campuses object from database
  try {
    // campuses will be the result of the Campus.findAll promise
    const campuses = await Campus.findAll({ include: Student });
    // if campuses is valid, it will be sent as a json response
    console.log(campuses);
    res.status(200).json(campuses);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});

// Route to serve single campus based on its id
// /api/campuses/:id
// /api/campuses/456 would respond with a campus with id 456
router.get("/:id", async (req, res, next) => {
  // take the id from params
  const { id } = req.params;
  // query the database for a campus with matching id
  try {
    // if successful:
    const campus = await Campus.findByPk(id, { include: Student });
    // send back the campus as a response
    res.status(200).json(campus);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});

// Route to get students associated with a campus
// /api/campuses/:id/students
// /api/campuses/456/students
router.get("/:id/students", async (req, res, next) => {
  const { id } = req.params;
  // find the campus associated with the id
  let foundCampus;
  try {
    foundCampus = await Campus.findByPk(id);
  } catch (err) {
    next(err);
  }

  try {
    const studentsOfCampus = await foundCampus.getStudents();
    res.status(200).json(studentsOfCampus);
  } catch (err) {
    next(err);
  }

  // find the students associated with the campus
  // send back an array of students
});

// Route to handle adding a campus
// /api/campuses/
router.post("/", async (req, res, next) => {
  // Take the form data from the request body
  const { name, address, description, imageUrl } = req.body;
  // Create a campus object
  const campusObj = {
    name: name,
    address: address,
    imageUrl: imageUrl,
    description: description
  };
  try {
    // Create a new campus on the database
    const newCampus = await Campus.create(campusObj);
    // The database would return a campus
    // send that campus as a json to the client
    res.status(201).send(newCampus);
  } catch (err) {
    next(err);
  }
});

// Route to handle editing a campus
// /api/campuses/:id
// /api/campuses/456 would modify a campus with id 456
router.put("/:id", async (req, res, next) => {
  // get the id from request params
  const { id } = req.params;
  // get form data from the request body
  const { name, address, description, imageUrl } = req.body;
  const updatedObj = {
    name: name,
    address: address,
    description: description,
    imageUrl: imageUrl
  };
  try {
    // if successfull:
    // Find a campus with a matching id from the database
    const campus = await Campus.findByPk(id);
    // database would return a valid campus object or an error
    console.log(updatedObj);
    // modify the campus object with new form data
    await campus.set(updatedObj);
    // save the new campus object to the data
    // database would return a new campus object
    const updatedCampus = await campus.save();
    console.log(updatedCampus);
    // send the newCampus as a response from the API
    res.status(201).send(updatedCampus);
  } catch (err) {
    // if error:
    // handle the error
    next(err);
  }
});

// Route to handle removing a campus
// /api/campuses/:id
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  // get an id for a campus to delete
  try {
    // pass the id to the database to find campus to be deleted
    // database would either respond succcess or fail
    const campus = await Campus.findByPk(id);
    // invoke the .destroy() method on the returned campus
    await campus.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
