class Cliente {
  constructor(i) {
    this.idvendedor = i.idvendedor;
    this.nome = i.nome;
    this.matricula = i.matricula;
  }

  create() {
    return `INSERT INTO vendedores VALUE (DEFAULT, '${this.nome}', '${this.matricula}')`;
  }
  read() {
    return `SELECT * FROM vendedores`;
  }

  delete() {
    return `DELETE FROM vendedores WHERE idvendedor = ${this.idvendedor}`;
  }
}
module.exports = Cliente;
