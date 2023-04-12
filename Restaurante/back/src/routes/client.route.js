const express = require("express");
const router = express.Router();

const clientController = require("../controllers/client.controller");

router.post("/add", clientController.addclient);

router.get("/read", clientController.readclient);

router.put("/update/:id", clientController.updateclient);

router.post("/login", clientController.authclient);

router.delete("/delete/:id", clientController.deleteclient);

module.exports = router;
