const express = require("express");
const router = express.Router();

const categoriaController = require("../controllers/categoria.controller");

router.post("/add", categoriaController.addcategoria);

router.get("/read", categoriaController.readcategoria);

router.delete("/delete/:id", categoriaController.deletecategoria);

module.exports = router;
