var express = require("express");
var router = express.Router();
const { Player } = require("../database/models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Player.findAll()
    .then((players) => res.json(players))
    .catch((err) => console.log(err));
});

module.exports = router;
