const express = require("express");
const cors = require("cors");

const clientRouter = require("./src/routes/client.route");
const categoriaRouter = require("./src/routes/categoria.route");
const restaurantRouter = require("./src/routes/restaurant.route");
const cardapioRouter = require("./src/routes/cardapio.route");
const avaliacaoRouter = require("./src/routes/avaliacao.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use(clientRouter);
app.use(categoriaRouter);
app.use(restaurantRouter);
app.use(cardapioRouter);
app.use(avaliacaoRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
