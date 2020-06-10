var express = require("express");
var router = express.Router();
const { Campus } = require("../database/models");

const mockCampusesArray = [
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
router.get("/", (req, res, next) => {
  // Campus.findAll()
  //   .then((campuses) => res.json(campuses))
  //   .catch((err) => console.log(err));
  res.json(mockCampusesArray);
});

// Route to serve single campus based on its id
router.get("/:id", (req, res, next) => {
  const campus = mockCampusesArray.find(
    (campus) => campus.id === req.params.id
  );

  res.json(campus);
});

// Route to handle adding a campus
router.post("/", (req, res, next) => {
  // Take the form data from the request body
  console.log(req.body);
  // Create a new campus on the database
  // The database would return a campus
  // send that campus as a json to the client

  const newCampus = {
    id: Math.floor(500 * Math.random()).toString(),
    name: req.body.name,
    address: "",
    imageUrl: "",
    description: "",
  };

  mockCampusesArray.push(newCampus);
  res.send(newCampus);

  console.log(newCampus);
});

// Route to handle editing a campus
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

  res.send(newCampus);
});

// Route to handle removing a campus
router.delete("/:id", (req, res, next) => {
  res.send("Route to handle removing a campus");
});

module.exports = router;
