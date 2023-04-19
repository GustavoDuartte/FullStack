class Restaurant {
  constructor(i) {
    this.id = i.id;
    this.data_venda = i.data_venda;
    this.quantidade = i.quantidade;
    this.produtoid = i.produtoid;
    this.vendedorid = i.vendedorid;
  }

  create() {
    return `INSERT INTO vendas VALUE (DEFAULT, '${this.data_venda}', '${this.quantidade}', '${this.produtoid}', '${this.vendedorid}')`;
  }
  read() {
    return `SELECT * FROM vendas`;
  }

  delete() {
    return `DELETE FROM vendas WHERE id = ${this.id}`;
  }
}
module.exports = Restaurant;
