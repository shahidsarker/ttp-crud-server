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
  res.send("Route to handle adding a campus");
});

// Route to handle editing a campus
router.put("/:id", (req, res, next) => {
  res.send("Route to handle editing a campus");
});

// Route to handle removing a campus
router.delete("/:id", (req, res, next) => {
  res.send("Route to handle removing a campus");
});

module.exports = router;
