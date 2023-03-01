const con = require("../dao/connect");

const adicionar = (req, res) => {
  const { nome, matricula, senha, salario } = req.body;

  let query = `INSERT INTO corretores VALUES (null,'${nome}', '${matricula}', '${senha}', '${salario}')`;

  con.query(query, (err, response) => {
    if (err == undefined) {
      return res.status(201).json(response).end();
    } else {
      res.status(400).json(err).end();
    }
  });
};

module.exports = {
  adicionar,
};
