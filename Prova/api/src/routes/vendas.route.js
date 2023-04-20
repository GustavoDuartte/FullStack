const express = require("express");
const router = express.Router();

const vendasController = require("../controllers/vendas.controller");

router.post("/create", vendasController.createvenda);

router.get("/read", vendasController.readvenda);

router.get("/readVenda", vendasController.readvendafeita);

router.put("/update/:idvenda", vendasController.updatevenda);

router.delete("/delete/:idvenda", vendasController.deletevenda);

module.exports = router;
