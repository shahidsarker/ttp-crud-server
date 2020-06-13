const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      imageUrl: "https://via.placeholder.com/150",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Brooklyn",
      description: "a college somewhere",
    }),
    Campus.create({
      name: "John Jay",
      address: "New York",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }),
    Campus.create({
      name: "College1",
      address: "Lorensum",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }),
    Campus.create({
      name: "College2",
      address: "Lorensum",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }),
    Campus.create({
      name: "College3",
      address: "Lorensum",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }),
    Campus.create({
      name: "College4",
      address: "Lorensum",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }),
    Campus.create({
      name: "College5",
      address: "Lorensum",
      imageUrl: "https://via.placeholder.com/150",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }),
    Student.create({
      firstName: "Daniel",
      lastName: "Angello",
      email: "daniel@example.com",
      gpa: "4.0",
      campusId_FK: 1,
    }),
    Student.create({
      firstName: "Sally",
      lastName: "Bubbles",
      email: "sally@example.com",
      gpa: "0.1",
      campusId_FK: 1,
    }),
    Student.create({
      firstName: "George",
      lastName: "Masterson",
      email: "george@example.com",
      campusId_FK: 1,
    }),
    Student.create({
      firstName: "Robin",
      lastName: "Sparkles",
      email: "robin@example.com",
      gpa: "3.5",
      campusId_FK: 2,
    }),
    Student.create({
      firstName: "Winnie",
      lastName: "Dapoo",
      email: "winnie@example.com",
      gpa: "2.3",
      campusId_FK: 2,
    }),
    Student.create({
      firstName: "Tiger",
      lastName: "Jump",
      email: "tiger@example.com",
      gpa: "3.0",
      campusId_FK: 3,
    }),
  ]);
};

module.exports = seedDatabase;
