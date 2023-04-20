class Categoria {
  constructor(i) {
    this.idproduto = i.idproduto;
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
    return `DELETE FROM produtos WHERE idproduto = ${this.idproduto}`;
  }
}
module.exports = Categoria;
