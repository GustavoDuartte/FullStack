const conn = require("../dao/connect");
const Restaurant = require("../models/restaurant.model");

const addrestaurant = (req, res) => {
  let restaurant = new Restaurant(req.body);

  conn.query(restaurant.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readrestaurant = (req, res) => {
  let restaurant = new Restaurant(req.body);

  conn.query(restaurant.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updaterestaurant = (req, res) => {
  const { id } = req.params;

  const { nome, categoriaid, rua, numero, bairro, estado, complemento } =
    req.body;

  const query = `UPDATE restaurante SET nome = '${nome}', categoriaid = ${categoriaid}, rua = '${rua}', numero = ${numero}, bairro = '${bairro}', estado = '${estado}', complemento = '${complemento}' WHERE id = ${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const deleterestaurant = (req, res) => {
  let restaurant = new Restaurant(req.params);

  conn.query(restaurant.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

const selectRestaurante = (req, res) => {
  const query =
    "SELECT r.nome, c.nome, a.nota FROM restaurante r INNER JOIN categoria c ON c.id = r.categoriaid INNER JOIN avaliacao a ON r.id = a.restauranteid";

  conn.query(query, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

module.exports = {
  addrestaurant,
  readrestaurant,
  updaterestaurant,
  deleterestaurant,
  selectRestaurante,
};
