// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Campus = require("./campus");
const Student = require("./student");

Campus.hasMany(Student, {
  foreignKey: 'campusId_FK',
});

Student.belongsTo(Campus, {
    foreignKey: 'campusId_FK',
    allowNull: true,
    targetKey: 'id',
    onDelete: 'SET NULL',
  });

module.exports = {
  Campus,
  Student,
};
