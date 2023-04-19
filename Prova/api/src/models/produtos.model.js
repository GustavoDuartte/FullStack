class Categoria {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.valor = i.valor;
  }

  create() {
    return `INSERT INTO produtos VALUE (DEFAULT, '${this.nome}', ${this.valor})`;
  }
  read() {
    return `SELECT * FROM produtos`;
  }

  delete() {
    return `DELETE FROM produtos WHERE id = ${this.id}`;
  }
}
module.exports = Categoria;
