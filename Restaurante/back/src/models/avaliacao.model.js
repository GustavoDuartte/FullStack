class Avaliacao {
  constructor(i) {
    this.id = i.id;
    this.restauranteid = i.restauranteid;
    this.clienteid = i.clienteid;
    this.dataava = i.dataava;
    this.nota = i.nota;
    this.descricaoava = i.descricaoava;
  }

  add() {
    return `INSERT INTO avaliacao VALUES (DEFAULT, ${this.restauranteid}, ${this.clienteid}, '${this.dataava}', ${this.nota}, '${this.descricaoava}' )`;
  }
  read() {
    return `SELECT * FROM avaliacao`;
  }

  delete() {
    return `DELETE FROM avaliacao WHERE id = ${this.id}`;
  }
}
module.exports = Avaliacao;
