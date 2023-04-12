class Cardapio {
  constructor(i) {
    this.id = i.id;
    this.restauranteid = i.restauranteid;
    this.descricao = i.descricao;
    this.valor = i.valor;
  }

  add() {
    return `INSERT INTO cardapio VALUE (DEFAULT, '${this.restauranteid}', '${this.descricao}', '${this.valor}')`;
  }
  read() {
    return `SELECT * FROM cardapio`;
  }

  delete() {
    return `DELETE FROM cardapio WHERE id = ${this.id}`;
  }
}
module.exports = Cardapio;
