const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

router.post("/restaurante/add", restaurantController.addrestaurant);

router.get("/restaurante/read", restaurantController.readrestaurant);

router.get("/selectrestaurante", restaurantController.selectRestaurante);

router.get("/selectallrestaurante", restaurantController.selectAllRestaurante);

router.get("/informacoesrest", restaurantController.informacoesRest);

router.get("/informacoesaval", restaurantController.informacoesAval);

router.put("/restaurante/update/:id", restaurantController.updaterestaurant);

router.delete("/restaurante/delete/:id", restaurantController.deleterestaurant);

module.exports = router;
