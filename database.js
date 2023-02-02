var mysql = require("mysql");
require("dotenv").config();
var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
});
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
});
module.exports = connection;
