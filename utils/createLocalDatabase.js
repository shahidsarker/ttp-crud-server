const pgtools = require("pgtools");

// An object with user, host, port, and password properties;
const config = process.env.DATABASE_URL || {
  user: "postgres",
  host: "localhost",
  port: 5432,
  password: process.env.LOCAL_DATABASE_PASSWORD,
};
// const config = process.env.DATABASE_URL;

// The name of the database to create;
const databaseName = require("./databaseName");

// A callback that takes an error argument;
// If cb is omitted the function will return a Promise;
const cb = (err, res) => {
  console.log(`Attempting to create the database: ${databaseName}!`);

  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log(res);
  console.log(`Successfully created the database: ${databaseName}!`);
};

const createLocalDatabase = () => pgtools.createdb(config, databaseName, cb);

module.exports = createLocalDatabase;
