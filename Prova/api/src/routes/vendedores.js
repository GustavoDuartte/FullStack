const express = require("express");
const router = express.Router();

const vendedorController = require("../controllers/vendedores.controller");

router.post("/create", vendedorController.createvendedor);

router.get("/read", vendedorController.readvendedor);

router.get("/valorPorVendedor", vendedorController.valorPorVendedor);

router.put("/update/:id", vendedorController.updatevendedor);

router.delete("/delete/:id", vendedorController.deletevendedor);

module.exports = router;
