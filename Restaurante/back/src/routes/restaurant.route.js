const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant.controller");

router.post("/restaurante/add", restaurantController.addrestaurant);

router.get("/restaurante/read", restaurantController.readrestaurant);

router.put("/restaurante/update/:id", restaurantController.updaterestaurant);

router.delete("/restaurante/delete/:id", restaurantController.deleterestaurant);

module.exports = router;
