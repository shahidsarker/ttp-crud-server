const { Campus } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      firstName: "Kyrie",
      lastName: "Irving",
      jerseyNumber: 11,
    }),
    Campus.create({
      firstName: "LeBron",
      lastName: "James",
      jerseyNumber: 23,
    }),
    Campus.create({
      firstName: "Luka",
      lastName: "Doncic",
      jerseyNumber: 77,
    }),
  ]);
};

module.exports = seedDatabase;
