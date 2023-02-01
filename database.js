var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12594938", 
  password: "E3nnhWZ9HC", 
  database: "sql12594938",
  port: 3306,
});
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connected");
});
module.exports = connection;
