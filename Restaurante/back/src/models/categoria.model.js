class Categoria {
  constructor(i) {
    this.id = i.id;
    this.nomecat = i.nomecat;
  }

  add() {
    return `INSERT INTO categoria VALUE (DEFAULT, '${this.nomecat}')`;
  }
  read() {
    return `SELECT * FROM categoria`;
  }

  delete() {
    return `DELETE FROM categoria WHERE id = ${this.id}`;
  }
}
module.exports = Categoria;
