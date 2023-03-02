const pool = require("../dao/connect");
const Livro = require("../models/livro");

const create = (req, res) => {
  let livro = new Livro(req.body);

  pool.query(livro.create(), function (err) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(201).end();
  });
};

const read = (req, res) => {
  let livro = new Livro(req.params);

  pool.query(livro.read(), function (err, result) {
    if (err) {
      res.status(404).end();
    }

    res.json(result).end();
  });
};

const update = (req, res) => {
  let livro = new Livro(req.body);

  pool.query(livro.update(), function (err, result) {
    if (err) res.status(404).end();

    if (result.affectedRows > 0) res.status(204).end();
  });
};

const deleteLivro = (req, res) => {
  let livro = new Livro(req.params);

  pool.query(book.delete(), function (err, result) {
    if (err) res.status(404).end();

    if (result.affectedRows > 0) res.status(204).end();
  });
};

module.exports = {
  create,
  read,
  update,
  deleteLivro,
};