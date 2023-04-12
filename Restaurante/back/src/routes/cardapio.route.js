const express = require("express");
const router = express.Router();

const cardapioController = require("../controllers/cardapio.controller");

router.post("/cardapio/add", cardapioController.addcardapio);

router.get("/cardapio/read", cardapioController.readcardapio);

router.put("/cardapio/update/:id", cardapioController.updatecardapio);

router.delete("/cardapio/delete/:id", cardapioController.deletecardapio);

module.exports = router;
