const { Campus } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      imageUrl: "",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
    }),
  ]);
};

module.exports = seedDatabase;
