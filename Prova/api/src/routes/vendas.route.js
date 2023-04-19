const express = require("express");
const router = express.Router();

const vendasController = require("../controllers/vendas.controller");

router.post("/create", vendasController.createvenda);

router.get("/read", vendasController.readvenda);

router.get("/readVenda", vendasController.readvendafeita);

router.put("/update/:id", vendasController.updatevenda);

router.delete("/delete/:id", vendasController.deletevenda);

module.exports = router;
