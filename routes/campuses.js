var express = require("express");
var router = express.Router();
const { Campus } = require("../database/models");

const campuses = [
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

/* GET users listing. */
router.get("/", function (req, res, next) {
  // Campus.findAll()
  //   .then((campuses) => res.json(campuses))
  //   .catch((err) => console.log(err));

  res.json(campuses);
});

module.exports = router;
