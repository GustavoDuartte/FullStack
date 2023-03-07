const express = require("express");

const Imoveis = require("../controllers/imovel.controller");

const router = express.Router();

router.get("/imoveis", Imoveis.listar);
router.get("/imoveis/:info", Imoveis.buscar);
router.post("/imovel", Imoveis.adicionar);
router.put("/alterar/:codigo/:status", Imoveis.alterarStatus);
router.put("/atualizar", Imoveis.atualizar);
router.delete("/deletar/:id", Imoveis.excluir);

module.exports = router;
