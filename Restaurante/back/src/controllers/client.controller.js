const conn = require("../dao/connect");
const Client = require("../models/cliente");

const addclient = (req, res) => {
  let client = new Client(req.body);

  conn.query(client.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readclient = (req, res) => {
  let client = new Client(req.body);

  conn.query(client.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const updateclient = (req, res) => {
  const { id } = req.params;

  const { nome, email, senha, telefone1, telefone2 } = req.body;

  const query = `UPDATE cliente SET nome = '${nome}', email = '${email}', senha = '${senha}', telefone1 = '${telefone1}', telefone2 = '${telefone2}' WHERE id=${id}`;

  conn.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const authclient = (req, res) => {
  let client = new Client(req.body);

  conn.query(client.auth(), function (err, resp) {
    if (err) {
      res.status(401).json(err).end();
    }
    if (resp.length == 0) {
      res.status(401).json({ msg: "Matricula ou Senha Inválidos" }).end();
    }

    let clientPass = resp[0];

    delete clientPass.senha;

    res.status(200).json(clientPass).end();
  });
};

const deleteclient = (req, res) => {
  let client = new Client(req.params);

  conn.query(client.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

module.exports = {
  addclient,
  readclient,
  updateclient,
  authclient,
  deleteclient,
};
