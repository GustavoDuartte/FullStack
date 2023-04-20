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
  const { matricula } = req.params;

  const { nome_vendedor } = req.body;

  const query = `UPDATE vendedores SET nome_vendedor = '${nome_vendedor}' WHERE matricula=${matricula}`;

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
INNER JOIN vendedores e ON e.idvendedor = v.vendedorid
INNER JOIN produtos p ON p.idproduto = v.produtoid
GROUP BY e.idvendedor;
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
