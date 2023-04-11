class Categoria {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
  }

  add() {
    return `INSERT INTO categoria VALUE (DEFAULT, '${this.nome}')`;
  }
  read() {
    return `SELECT * FROM categoria`;
  }

  delete() {
    return `DELETE FROM categoria WHERE id = ${this.id}`;
  }
}
module.exports = Categoria;
