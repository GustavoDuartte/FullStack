const express = require("express");
const cors = require("cors");

const clientRouter = require("./src/routes/client.route");
const categoriaRouter = require("./src/routes/categoria.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use(clientRouter);
app.use(categoriaRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
