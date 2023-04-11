const conn = require("../dao/connect");
const Categoria = require("../models/categoria.model");

const addcategoria = (req, res) => {
  let categoria = new Categoria(req.body);

  conn.query(categoria.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readcategoria = (req, res) => {
  let categoria = new Categoria(req.body);

  conn.query(categoria.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const deletecategoria = (req, res) => {
  let categoria = new Categoria(req.params);

  conn.query(categoria.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

module.exports = {
  addcategoria,
  readcategoria,
  deletecategoria,
};