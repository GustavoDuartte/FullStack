const express = require("express");
const cors = require("cors");

const vendedoresRouter = require("./src/routes/vendedores");
const produtosRouter = require("./src/routes/produtos.route");
const vendasRouter = require("./src/routes/vendas.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/vendedor", vendedoresRouter);
app.use("/produto",produtosRouter);
app.use("/venda",vendasRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
