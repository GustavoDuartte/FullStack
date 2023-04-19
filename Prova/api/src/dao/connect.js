const mysql = require("mysql");

const con = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "loja",
});

module.exports = con;
