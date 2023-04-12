const express = require("express");
const router = express.Router();

const avaliacaoController = require("../controllers/avaliacao.controller");

router.post("/avaliacao/add", avaliacaoController.addavaliacao);

router.get("/avaliacao/read", avaliacaoController.readavaliacao);

router.put("/avaliacao/update/:id", avaliacaoController.updateavaliacao);

router.delete("/avaliacao/delete/:id", avaliacaoController.deleteavaliacao);

module.exports = router;
