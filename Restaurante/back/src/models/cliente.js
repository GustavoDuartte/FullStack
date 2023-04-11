class Cliente {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.email = i.email;
    this.senha = i.senha;
  }

  add() {
    return `INSERT INTO cliente VALUE (DEFAULT, '${this.nome}', '${this.email}', '${this.senha}')`;
  }
  read() {
    return `SELECT * FROM cliente`;
  }

  auth() {
    return `SELECT * FROM cliente WHERE email = '${this.email}' AND senha = '${this.senha}'`;
  }

  delete() {
    return `DELETE FROM cliente WHERE id = ${this.id}`;
  }
}
module.exports = Cliente;
