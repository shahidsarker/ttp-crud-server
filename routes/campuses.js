var express = require("express");
var router = express.Router();
const { Campus } = require("../database/models");

let mockCampusesArray = [
  {
    id: "3434454",
    name: "Brooklyn College",
    address: "Brooklyn",
    imageUrl: "",
    description: "A college in Brooklyn",
  },
  {
    id: "3434455",
    name: "CSI",
    address: "Staten Island",
    imageUrl: "",
    description: "A college in Staten Island",
  },
  {
    id: "3434457",
    name: "John Jay",
    address: "New York",
    imageUrl: "",
    description: "A college in Manhattan",
  },
];

/* GET all campuses. */
// /api/campuses
router.get("/", async (req, res, next) => {
  // try to get campuses object from database
  try {
    // campuses will be the result of the Campus.findAll promise
    const campuses = await Campus.findAll();
    // if campuses is valid, it will be sent as a json response
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
    const campus = await Campus.findByPk(id);
    // send back the campus as a response
    res.status(200).json(campus);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
  // const campus = mockCampusesArray.find((campus) => campus.id === id);
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
    description: description,
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
router.put("/:id", (req, res, next) => {
  // get the id from request params
  const { id } = req.params;
  // get form data from the request body
  const { description } = req.body;
  console.log(id, description);

  const campusIndex = mockCampusesArray.findIndex((c) => c.id === id);
  const newCampus = { ...mockCampusesArray[campusIndex], description };
  mockCampusesArray[campusIndex] = newCampus;

  // Find a campus with a matching id from the database
  // database would return a valid campus object or an error
  // if successfull:
  // modify the campus object with new form data
  // save the new campus object to the data
  // database would return a new campus object
  // send the newCampus as a response from the API
  // if error:
  // handle the error

  res.status(201).send(newCampus);
});

// Route to handle removing a campus
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  mockCampusesArray = mockCampusesArray.filter((campus) => campus.id !== id);
  // get an id for a campus to delete
  // pass the id to the database to delete a campus
  // database would either respond succcess or fail
  // send a success or fail response to the client
  res.status(204);
});

module.exports = router;
