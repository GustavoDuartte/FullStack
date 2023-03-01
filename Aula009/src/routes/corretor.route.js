const express = require("express");

const router = express.Router();

const Corretor = require("../controllers/corretor");

router.post("/corretor", Corretor.adicionar);

module.exports = router;