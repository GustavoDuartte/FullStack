const conn = require("../dao/connect");
const Produto = require("../models/produtos.model");

const createproduto = (req, res) => {
  let produto = new Produto(req.body);

  conn.query(produto.create(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readproduto = (req, res) => {
  let produto = new Produto(req.body);

  conn.query(produto.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updateproduto = (req, res) => {
  const { idproduto } = req.params;

  const { nome, valor } = req.body;

  const query = `UPDATE produtos SET nome = '${nome}', valor = ${valor} WHERE idproduto=${idproduto}`;

  conn.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const deleteproduto = (req, res) => {
  let produto = new Produto(req.params);

  conn.query(produto.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

const valortotal = (req, res) => {
  const q = `SELECT SUM(valor*v.quantidade) AS valor_total FROM produtos p JOIN vendas v ON p.idproduto = v.produtoid`;

  conn.query(q, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

module.exports = {
  createproduto,
  readproduto,
  updateproduto,
  deleteproduto,
  valortotal,
};
