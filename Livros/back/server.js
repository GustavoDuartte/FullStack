const express = require("express");
const cors = require("cors");

const app = express();

const livroRoute = require("./src/routes/livroRoute");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/livro", livroRoute);

app.listen(3000);