const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn"
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island"
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan"
    }),
    Student.create({
      firstName: "Daniel",
      lastName: "Wright",
      email: "dannywright@gmail.com",
      gpa: "3.57"
    }),
    Student.create({
      firstName: "Johnny",
      lastName: "Smith",
      email: "jsmith@gmail.com",
      gpa: "2.56"
    })
  ]);
};

module.exports = seedDatabase;
