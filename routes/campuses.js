var express = require("express");
var router = express.Router();
const { Campus } = require("../database/models");

const campuses = [
  {
    firstName: "Kyrie",
    lastName: "Irving",
    jerseyNumber: 11,
  },
  {
    firstName: "LeBron",
    lastName: "James",
    jerseyNumber: 23,
  },
  {
    firstName: "Luka",
    lastName: "Doncic",
    jerseyNumber: 77,
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
