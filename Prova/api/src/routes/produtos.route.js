const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produtos.controller");

router.post("/create", produtoController.createproduto);

router.get("/read", produtoController.readproduto);

router.get("/valortotal", produtoController.valortotal);

router.put("/update/:id", produtoController.updateproduto);

router.delete("/delete/:id", produtoController.deleteproduto);

module.exports = router;
