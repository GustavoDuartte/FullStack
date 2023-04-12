const conn = require("../dao/connect");
const Avaliacao = require("../models/avaliacao.model");

const addavaliacao = (req, res) => {
  let avaliacao = new Avaliacao(req.body);

  conn.query(avaliacao.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readavaliacao = (req, res) => {
  let avaliacao = new Avaliacao(req.body);

  conn.query(avaliacao.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updateavaliacao = (req, res) => {
  const { id } = req.params;

  const { restauranteid, clienteid, dataava, nota, descricao } = req.body;

  const query = `UPDATE avaliacao SET restauranteid = ${restauranteid}, clienteid = ${clienteid}, dataava = '${dataava}',nota = ${nota},descricao = '${descricao}' WHERE id = ${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const deleteavaliacao = (req, res) => {
  let avaliacao = new Avaliacao(req.params);

  conn.query(avaliacao.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

module.exports = {
  addavaliacao,
  readavaliacao,
  updateavaliacao,
  deleteavaliacao,
};
