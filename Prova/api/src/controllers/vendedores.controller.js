const conn = require("../dao/connect");
const Vendedor = require("../models/vendedores.model");

const createvendedor = (req, res) => {
  let vendedor = new Vendedor(req.body);

  conn.query(vendedor.create(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readvendedor = (req, res) => {
  let vendedor = new Vendedor(req.body);

  conn.query(vendedor.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updatevendedor = (req, res) => {
  const { id } = req.params;

  const { nome, matricula } = req.body;

  const query = `UPDATE vendedores SET nome = '${nome}', matricula = '${matricula}' WHERE id=${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const deletevendedor = (req, res) => {
  let vendedor = new Vendedor(req.params);

  conn.query(vendedor.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

const valorPorVendedor = (req, res) => {
  const q = `SELECT e.nome_vendedor, e.matricula, SUM(p.valor*v.quantidade) AS total_vendido, SUM((p.valor*quantidade) * 0.05) AS comissao
FROM vendas v
INNER JOIN vendedores e ON e.id = v.vendedorid
INNER JOIN produtos p ON p.id = v.produtoid
GROUP BY e.id;
`;

  conn.query(q, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

module.exports = {
  createvendedor,
  readvendedor,
  updatevendedor,
  deletevendedor,
  valorPorVendedor,
};
