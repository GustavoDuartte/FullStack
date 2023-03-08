const con = require("../dao/connect");

const listar = (req, res) => {
  let query = `SELECT * FROM imoveis`;

  con.query(query, (err, response) => {
    if (err == undefined) {
      res.status(200).json(response).end();
    } else {
      res.status(400).json(err).end();
    }
  });
};

const buscar = (req, res) => {
  const { info } = req.params;

  let where = "";

  if (info.includes("KSA") || info.includes("AP")) {
    where = `WHERE codigo = '${info}'`;
  } else {
    where = `WHERE endereco LIKE '%${info}%'`;
  }

  let query = `SELECT * FROM imoveis ${where}`;

  con.query(query, (err, response) => {
    if (err == undefined) {
      res.status(200).json(response).end();
    } else {
      res.status(400).json(err).end();
    }
  });
};

const adicionar = (req, res) => {
  let { corretor_id, codigo, endereco, valor_venda, valor_aluguel } = req.body;

  valor_venda = valor_venda != undefined ? valor_venda : 0;
  valor_aluguel = valor_aluguel != undefined ? valor_aluguel : 0;

  if (valor_venda == 0 && valor_aluguel == 0) {
    res
      .status(400)
      .json({ msg: "Necesario inserir um valor de venda ou aluguel" });
  } else {
    let query = `INSERT INTO imoveis VALUE (DEFAULT, ${corretor_id}, '${codigo}', '${endereco}', ${valor_venda}, ${valor_aluguel}, 1)`;

    con.query(query, (err, response) => {
      if (err == undefined) {
        res.status(201).json(response).end();
      } else {
        res.status(400).json(err).end();
      }
    });
  }
};

const alterarStatus = (req, res) => {
  const { codigo, status } = req.params;

  let query = `UPDATE imoveis SET status_id = ${status} WHERE codigo = '${codigo}'`;

  con.query(query, function (err, resp) {
    if (err) {
      res.status(404).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const atualizar = (req, res) => {
  const {
    id,
    corretor_id,
    codigo,
    endereco,
    valor_venda,
    valor_aluguel,
    status_id,
  } = req.body;

  let query = `UPDATE imoveis SET corretor_id = ${corretor_id}, codigo = '${codigo}', endereco = '${endereco}', valor_venda = ${valor_venda}, valor_aluguel = ${valor_aluguel}, status_id = ${status_id} WHERE id = ${id}`;

  con.query(query, function (err, resp) {
    if (err) {
      res.status(404).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const excluir = (req, res) => {
  const { id } = req.params;

  let query = `DELETE FROM imoveis WHERE id = ${id}`;

  con.query(query, function (err, resp) {
    if (err) {
      res.status(404).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const imoveisPorCorretor = (req, res) => {
  const { id } = req.params;

  let query = `SELECT
    i.codigo,
    i.endereco,
    i.valor_venda as venda,
    i.valor_aluguel as aluguel,
    s.nome
  FROM
    imoveis i
    INNER JOIN status s ON i.status_id = s.id
  WHERE
    i.corretor_id = ${id}`;

  con.query(query, function (err, resp) {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

module.exports = {
  listar,
  buscar,
  adicionar,
  alterarStatus,
  atualizar,
  excluir,
  imoveisPorCorretor,
};
