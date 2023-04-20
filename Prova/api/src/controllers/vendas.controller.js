const conn = require("../dao/connect");
const Vendas = require("../models/vendas.model");

const createvenda = (req, res) => {
  let venda = new Vendas(req.body);

  conn.query(venda.create(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readvenda = (req, res) => {
  let venda = new Vendas(req.body);

  conn.query(venda.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updatevenda = (req, res) => {
  const { idvenda } = req.params;

  const { data_venda, quantidade, produtoid, vendedorid } = req.body;

  const query = `UPDATE vendas SET data_venda = '${data_venda}', quantidade = ${quantidade}, produtoid = '${produtoid}', vendedorid = ${vendedorid} WHERE idvenda = ${idvenda}`;

  conn.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const deletevenda = (req, res) => {
  let venda = new Vendas(req.params);

  conn.query(venda.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

const readvendafeita = (req, res) => {
  const q = `SELECT v.idvenda, v.data_venda, v.quantidade, p.nome_produto, e.nome_vendedor, p.idproduto, e.idvendedor FROM vendas v INNER JOIN produtos p ON p.idproduto = v.produtoid INNER JOIN vendedores e ON e.idvendedor = v.vendedorid`;

  conn.query(q, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

module.exports = {
  createvenda,
  readvenda,
  updatevenda,
  deletevenda,
  readvendafeita,
};
