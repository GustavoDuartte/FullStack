const express = require("express");
const router = express.Router();

const categoriaController = require("../controllers/categoria.controller");

router.post("/categoria/add", categoriaController.addcategoria);

router.get("/categoria/read", categoriaController.readcategoria);

router.put("/categoria/update/:id", categoriaController.updatecategoria);

router.delete("/categoria/delete/:id", categoriaController.deletecategoria);

module.exports = router;
