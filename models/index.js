var mysql = require("mysql2");
// create the connection to the data base
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",               // you can change this
  password: "root",           // you can change this
  database: "MyDB",           // Database name related to the db in the schema
});

module.exports = connection;
