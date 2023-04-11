const mysql = require("mysql");

const con = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "restaurante",
});

module.exports = con;
