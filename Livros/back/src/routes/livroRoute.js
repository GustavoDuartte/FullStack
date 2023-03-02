const express = require("express");
const router = express.Router();

const livroController = require("../controllers/livroController");

router.get("/test", (req, res) => {
  res.send("Respondendo");
});

router.post("/create", livroController.create);
router.get("/read", livroController.read);
router.get("/read/:id", livroController.read);
router.put("/update", livroController.update);
router.delete("/delete/:id", livroController.deleteLivro);

module.exports = router;