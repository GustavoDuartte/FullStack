const mysql = require("mysql");

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "biblioteca",
});

module.exports = con;