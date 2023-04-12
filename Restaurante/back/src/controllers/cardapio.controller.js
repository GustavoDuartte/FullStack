const conn = require("../dao/connect");
const Cardapio = require("../models/cardapio.model");

const addcardapio = (req, res) => {
  let cardapio = new Cardapio(req.body);

  conn.query(cardapio.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readcardapio = (req, res) => {
  let cardapio = new Cardapio(req.body);

  conn.query(cardapio.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updatecardapio = (req, res) => {
  const { id } = req.params;

  const { restauranteid, descricao, valor } = req.body;

  const query = `UPDATE cardapio SET restauranteid = ${restauranteid}, descricao = '${descricao}', valor = ${valor} WHERE id = ${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const deletecardapio = (req, res) => {
  let cardapio = new Cardapio(req.params);

  conn.query(cardapio.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

module.exports = {
  addcardapio,
  readcardapio,
  updatecardapio,
  deletecardapio,
};
